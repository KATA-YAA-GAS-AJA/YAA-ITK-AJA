import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { classify } from '../lib/classifier.js'
import { CATEGORY_META, PROTOCOLS, SHARED_DISCLAIMER } from '../data/protocols.js'
import { Icon } from './Icon.jsx'
import VisualGuide from './VisualGuide.jsx'
import ShoppingList from './ShoppingList.jsx'
import RoomChecklist from './RoomChecklist.jsx'

const TABS = [
  { id: 'visual', label: 'Panduan Visual', icon: 'eye' },
  { id: 'shopping', label: 'Daftar Belanja', icon: 'cart' },
  { id: 'rooms', label: 'Checklist Ruangan', icon: 'clipboard' },
]

function ScoreBars({ result }) {
  const maxScore = Math.max(...Object.values(result.scores), 1)
  return (
    <div className="grid gap-2.5 sm:grid-cols-5">
      {Object.entries(result.scores).map(([id, score]) => {
        const meta = CATEGORY_META[id]
        const w = Math.max((score / maxScore) * 100, score > 0 ? 8 : 0)
        const isTop = id === result.categoryId
        return (
          <div key={id} className="rounded-2xl border border-slate-100 bg-white p-3">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-500">{meta.short}</span>
              <span className={`text-xs font-extrabold ${isTop ? '' : 'text-slate-400'}`} style={isTop ? { color: meta.accent } : undefined}>
                {score > 0 ? `+${score}` : score}
              </span>
            </div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
              <motion.div
                className="h-full rounded-full"
                style={{ background: meta.accent }}
                initial={{ width: 0 }}
                animate={{ width: `${w}%` }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default function Result({ answers, onRestart, onRedo }) {
  const result = useMemo(() => classify(answers), [answers])
  const meta = result.meta
  const proto = PROTOCOLS[result.categoryId]
  const [tab, setTab] = useState('visual')

  return (
    <div className="mx-auto max-w-5xl px-5 py-8 sm:py-12">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <button onClick={onRestart} className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 transition hover:text-slate-800">
          <Icon name="arrowLeft" className="h-4 w-4" /> Beranda
        </button>
        <div className="flex items-center gap-2">
          <button
            onClick={onRedo}
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-600 transition hover:border-teal-300 hover:text-teal-700"
          >
            <Icon name="restart" className="h-4 w-4" /> Jawab Ulang
          </button>
        </div>
      </div>

      <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-start gap-4">
            <span
              className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-white shadow-lg"
              style={{ backgroundColor: meta.accent }}
            >
              <Icon name={meta.icon} className="h-8 w-8" />
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Kategori pemulihan terpilih</p>
              <h1 className="mt-0.5 text-2xl font-extrabold leading-tight text-slate-900 sm:text-3xl">{meta.name}</h1>
              <p className="mt-1 text-sm text-slate-500">{meta.tagline}</p>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <span className={`rounded-full px-3 py-1 text-xs font-bold ${meta.chip}`}>{meta.short}</span>
                {result.isMixed ? (
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                    Profil mirip kategori lain — panduan tetap valid
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">
                    <Icon name="check" className="h-3.5 w-3.5" /> Klasifikasi jelas
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="shrink-0 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-center">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Siap dalam</p>
            <p className="text-2xl font-extrabold text-slate-900">3 Dasbor</p>
            <p className="text-xs font-bold" style={{ color: meta.accent }}>rendered &lt; 1 detik</p>
          </div>
        </div>

        <div className="mt-6">
          <p className="mb-3 text-sm font-bold uppercase tracking-wider text-slate-400">Skor kesesuaian</p>
          <ScoreBars result={result} />
        </div>

        <div className="mt-6 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4">
          <Icon name="shield" className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
          <p className="text-sm leading-relaxed text-amber-800">{SHARED_DISCLAIMER}</p>
        </div>
      </div>

      <div className="sticky top-3 z-10 mt-8">
        <div className="grid grid-cols-3 gap-2 rounded-2xl border border-slate-200 bg-white/90 p-2 shadow-lg backdrop-blur">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`flex items-center justify-center gap-2 rounded-xl px-3 py-3.5 text-sm font-bold transition sm:text-base ${
                tab === t.id ? 'text-white shadow' : 'text-slate-600 hover:bg-slate-50'
              }`}
              style={tab === t.id ? { backgroundColor: meta.accent } : undefined}
            >
              <Icon name={t.icon} className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="hidden sm:inline">{t.label}</span>
              <span className="sm:hidden">{t.label.split(' ')[0]}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8">
        {tab === 'visual' && <VisualGuide categoryId={result.categoryId} protocol={proto} />}
        {tab === 'shopping' && <ShoppingList categoryId={result.categoryId} protocol={proto} />}
        {tab === 'rooms' && <RoomChecklist categoryId={result.categoryId} protocol={proto} />}
      </div>

      <footer className="mt-12 border-t border-slate-200 pt-6 text-center text-xs text-slate-400">
        RumahSiap memuat panduan statis yang tervalidasi — bukan diagnosis medis. Konsultasikan perubahan kondisi
        pasien dengan perawat/dokter rumah sakit Anda.
      </footer>
    </div>
  )
}