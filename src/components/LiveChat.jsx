import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Icon } from './Icon.jsx'
import {
  CLINICAL_BRANCHING_TREE,
  VERIFIED_CLINICAL_GUIDELINES,
  buildResultFromChat,
  createInitialChatState,
  sendConsultationMessage,
} from '../lib/aiConsultant.js'

export default function LiveChat({ onFinish, onBack, patientProfile = null, caregiverUser = null }) {
  const [chatState, setChatState] = useState(() => createInitialChatState(patientProfile, caregiverUser))
  const [inputValue, setInputValue] = useState('')
  const [loading, setLoading] = useState(false)
  const [showJournalsModal, setShowJournalsModal] = useState(false)

  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [chatState.messages, loading])

  // Kirim pesan (bisa dari klik opsi atau ketik prompt teks)
  const handleSend = async (messageText) => {
    const text = (messageText || inputValue).trim()
    if (!text || loading) return

    setInputValue('')
    setLoading(true)

    try {
      const nextState = await sendConsultationMessage(chatState, text)
      setChatState(nextState)
    } catch (err) {
      console.error('[LiveChat] Gagal memproses pesan:', err)
    } finally {
      setLoading(false)
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const handleFinishConsultation = () => {
    const resultData = buildResultFromChat(chatState)
    onFinish(resultData)
  }

  const lastMessage = chatState.messages[chatState.messages.length - 1]
  const currentOptions = lastMessage?.role === 'assistant' ? lastMessage.options : []

  return (
    <div className="mx-auto flex h-[calc(100vh-2rem)] max-w-4xl flex-col px-3 py-4 sm:px-6 sm:py-6">
      {/* Top Navigation & Status Bar */}
      <header className="flex shrink-0 items-center justify-between rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 shadow-xs backdrop-blur">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-600 transition hover:bg-slate-100"
            title="Kembali ke Beranda"
          >
            <Icon name="arrowLeft" className="h-4 w-4" />
          </button>
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
            </span>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-sm font-extrabold text-slate-900 sm:text-base">Konsultan AI RumahSiap</h1>
                <span className="rounded-md bg-teal-50 px-2 py-0.5 text-[10px] font-bold text-teal-700 border border-teal-200/60">
                  Live Chat
                </span>
              </div>
              <p className="text-[11px] text-slate-500">
                Didukung <b className="text-teal-700">18 Pedoman Medis Terverifikasi</b> • Bebas Rekam Medis
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowJournalsModal(true)}
            className="inline-flex items-center gap-1.5 rounded-xl border border-teal-200 bg-teal-50 px-3 py-1.5 text-xs font-bold text-teal-800 transition hover:bg-teal-100"
          >
            <Icon name="book" className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">18 Pedoman Medis</span>
            <span className="sm:hidden">18 Pedoman</span>
          </button>
        </div>
      </header>

      {/* Patient & Caregiver Context Banner */}
      {patientProfile && (
        <div className="mt-2.5 flex shrink-0 items-center justify-between gap-2 rounded-2xl border border-teal-100 bg-white/90 px-4 py-2.5 shadow-xs backdrop-blur">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-teal-600 text-xs font-bold text-white shadow-xs">
              {patientProfile.name.charAt(0).toUpperCase()}
            </span>
            <div className="truncate text-xs text-slate-600">
              Mendampingi: <strong className="text-slate-900">{patientProfile.name}</strong> ({patientProfile.relation}, {patientProfile.age} th)
            </div>
          </div>
          {patientProfile.condition ? (
            <span className="shrink-0 rounded-xl bg-teal-50 px-3 py-1 text-[11px] font-extrabold text-teal-800 border border-teal-200">
              {patientProfile.condition}
            </span>
          ) : chatState.activeBranchDomain && CLINICAL_BRANCHING_TREE[chatState.activeBranchDomain] ? (
            <span className="shrink-0 rounded-xl bg-teal-50 px-3 py-1 text-[11px] font-extrabold text-teal-800 border border-teal-200">
              {CLINICAL_BRANCHING_TREE[chatState.activeBranchDomain].name}
            </span>
          ) : (
            <span className="shrink-0 rounded-xl bg-slate-100 px-3 py-1 text-[11px] font-bold text-slate-500">
              Konsultasi Aktif
            </span>
          )}
        </div>
      )}

      {/* Main Chat Stream */}
      <div className="mt-3 flex-1 overflow-y-auto rounded-3xl border border-slate-200 bg-white/70 p-4 shadow-sm backdrop-blur sm:p-6">
        <div className="space-y-4">
          {chatState.messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className={`flex items-start gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.role === 'assistant' && (
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-teal-600 text-white shadow-md shadow-teal-600/20">
                  <Icon name="shield" className="h-5 w-5" />
                </span>
              )}

              <div
                className={`max-w-[85%] rounded-3xl px-5 py-4 sm:max-w-[75%] ${
                  msg.role === 'user'
                    ? 'rounded-tr-xs bg-teal-600 text-white shadow-md shadow-teal-600/20'
                    : 'rounded-tl-xs border border-slate-200 bg-white text-slate-800 shadow-xs'
                }`}
              >
                <div className="whitespace-pre-line text-[15px] leading-relaxed">
                  {msg.content.split('**').map((part, i) =>
                    i % 2 === 1 ? (
                      <strong key={i} className={msg.role === 'user' ? 'text-teal-100 font-extrabold' : 'text-slate-900 font-extrabold'}>
                        {part}
                      </strong>
                    ) : (
                      part
                    )
                  )}
                </div>

                {/* Rujukan Tersembunyi (Discreet / Collapsible) */}
                {msg.citation && (
                  <details className="group mt-2 border-t border-slate-100 pt-1.5">
                    <summary className="inline-flex cursor-pointer items-center gap-1 text-[11px] font-medium text-slate-400 hover:text-teal-700 focus:outline-none select-none transition">
                      <Icon name="book" className="h-3 w-3" />
                      <span>Rujukan Medis Terverifikasi</span>
                      <span className="text-[9px] group-open:rotate-180 transition-transform">▾</span>
                    </summary>
                    <div className="mt-1.5 rounded-xl border border-teal-100 bg-teal-50/60 p-2 text-[11px] text-teal-950">
                      <span className="font-bold text-teal-900">{msg.citation.shortRef}</span>
                      <p className="mt-0.5 text-[10px] leading-relaxed text-teal-800">{msg.citation.note}</p>
                    </div>
                  </details>
                )}
              </div>

              {msg.role === 'user' && (
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-slate-800 text-white shadow-sm">
                  <Icon name="user" className="h-4 w-4" />
                </span>
              )}
            </motion.div>
          ))}

          {/* Typing Indicator */}
          {loading && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-start gap-3"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-teal-600 text-white shadow-md shadow-teal-600/20">
                <Icon name="shield" className="h-5 w-5" />
              </span>
              <div className="flex items-center gap-1.5 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-xs">
                <span className="h-2 w-2 rounded-full bg-teal-500 animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="h-2 w-2 rounded-full bg-teal-500 animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="h-2 w-2 rounded-full bg-teal-500 animate-bounce" style={{ animationDelay: '300ms' }} />
                <span className="ml-2 text-xs text-slate-400">Menyusun respon berbasis pedoman klinis...</span>
              </div>
            </motion.div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Suggested Quick Options Bar */}
      {currentOptions && currentOptions.length > 0 && !loading && (
        <div className="mt-2.5 flex shrink-0 items-center gap-2 overflow-x-auto pb-1">
          <span className="shrink-0 rounded-xl border border-teal-200 bg-teal-100/70 px-2.5 py-1.5 text-xs font-extrabold text-teal-900">
            Pilihan Cepat:
          </span>
          {currentOptions.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(typeof opt === 'string' ? opt : opt.label)}
              className="shrink-0 rounded-xl border border-teal-200 bg-teal-50/90 px-3.5 py-2 text-xs font-bold text-teal-800 transition hover:bg-teal-600 hover:text-white hover:shadow-md active:scale-95"
            >
              {typeof opt === 'string' ? opt : opt.label}
            </button>
          ))}
        </div>
      )}

      {/* Banner Selesai / Siap Buat Rencana */}
      {(chatState.isReadyForPlan || chatState.turnCount >= 1) && (
        <div className="mt-2.5 flex shrink-0 items-center justify-between gap-3 rounded-2xl border border-emerald-200 bg-emerald-50/90 px-4 py-2.5 backdrop-blur-xs">
          <div className="flex items-center gap-2 min-w-0">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-emerald-500 text-white">
              <Icon name="check" className="h-4 w-4" />
            </span>
            <p className="truncate text-xs font-semibold text-emerald-900 sm:text-sm">
              Anda bisa terus bertanya sepuasnya, atau klik kapan saja jika siap melihat rangkuman:
            </p>
          </div>
          <button
            onClick={handleFinishConsultation}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white shadow-md shadow-emerald-600/25 transition hover:bg-emerald-700 active:scale-95"
          >
            <Icon name="sparkle" className="h-4 w-4" />
            Lihat Kebutuhan Rumah →
          </button>
        </div>
      )}

      {/* Bottom Text Prompt Input */}
      <footer className="mt-2.5 shrink-0">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleSend()
          }}
          className="flex items-center gap-2 rounded-2xl border border-slate-300 bg-white p-2 shadow-sm focus-within:border-teal-500 focus-within:ring-2 focus-within:ring-teal-100"
        >
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={loading}
            placeholder="Ketik kondisi pasien, keluhan, atau pertanyaan Anda..."
            className="flex-1 bg-transparent px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={!inputValue.trim() || loading}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-teal-600 text-white shadow-md shadow-teal-600/25 transition hover:bg-teal-700 disabled:opacity-40 disabled:hover:bg-teal-600"
            title="Kirim Pesan"
          >
            <Icon name="send" className="h-4 w-4" />
          </button>
        </form>
        <div className="mt-1.5 flex items-center justify-between px-2 text-[11px] text-slate-400">
          <span>Tekan <b>Enter</b> untuk kirim • Anda bisa mengetik bebas atau memilih opsi di atas</span>
          <span>Bebas Rekam Medis</span>
        </div>
      </footer>

      {/* Modal 10 Jurnal Rujukan */}
      <AnimatePresence>
        {showJournalsModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex max-h-[85vh] w-full max-w-2xl flex-col rounded-3xl border border-slate-200 bg-white shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-100 text-teal-800">
                    <Icon name="book" className="h-5 w-5" />
                  </span>
                  <div>
                    <h2 className="text-base font-extrabold text-slate-900">18 Pedoman Medis Resmi &amp; Terverifikasi</h2>
                    <p className="text-xs text-slate-500">Dasar ilmiah standar keselamatan pasien pasca-rawat inap</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowJournalsModal(false)}
                  className="rounded-xl p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                >
                  <Icon name="close" className="h-5 w-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-3.5">
                {VERIFIED_CLINICAL_GUIDELINES.map((j) => (
                  <div
                    key={j.id}
                    className="rounded-2xl border border-slate-200 bg-slate-50/50 p-4 transition hover:border-teal-300 hover:bg-teal-50/20"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="rounded-md bg-teal-600 px-1.5 py-0.5 text-[10px] font-bold text-white">
                            #{j.id}
                          </span>
                          <h3 className="text-xs font-bold text-slate-900">{j.shortRef}</h3>
                        </div>
                        <p className="mt-1 text-xs font-semibold leading-snug text-slate-700">{j.title}</p>
                      </div>
                      <span className="shrink-0 rounded-md bg-slate-200 px-2 py-0.5 text-[10px] font-bold text-slate-600">
                        {j.year}
                      </span>
                    </div>

                    <p className="mt-1.5 text-[11px] text-slate-500">
                      {j.authors} • <i>{j.journal}</i>
                    </p>

                    <div className="mt-2.5 rounded-xl border border-teal-200/60 bg-white p-2.5 text-[11px] text-slate-600">
                      <b className="text-teal-900 font-semibold">Temuan Klinis:</b> {j.takeaway}
                    </div>

                    <div className="mt-2.5 flex items-center justify-between pt-2 border-t border-slate-200/60">
                      <span className="text-[10px] text-slate-400">{j.roleInPlan}</span>
                      {j.doiUrl && j.doiUrl !== '#' && (
                        <a
                          href={j.doiUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[11px] font-bold text-teal-600 hover:text-teal-800"
                        >
                          Buka Sumber <Icon name="externalLink" className="h-3 w-3" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-slate-100 bg-slate-50 px-6 py-3.5 text-right">
                <button
                  onClick={() => setShowJournalsModal(false)}
                  className="rounded-xl bg-teal-600 px-5 py-2 text-xs font-bold text-white shadow-sm hover:bg-teal-700"
                >
                  Tutup
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  )
}

