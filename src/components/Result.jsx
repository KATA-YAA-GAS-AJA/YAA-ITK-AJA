import { useState } from 'react'
import { motion } from 'framer-motion'
import { classify } from '../lib/classifier.js'
import { CATEGORY_META, PROTOCOLS, SHARED_DISCLAIMER } from '../data/protocols.js'
import { VERIFIED_CLINICAL_GUIDELINES } from '../lib/aiConsultant.js'
import { Icon } from './Icon.jsx'
import VisualGuide from './VisualGuide.jsx'
import ShoppingList from './ShoppingList.jsx'

const TABS = [
  { id: 'supplies', label: 'Saran Perlengkapan & Logistik', icon: 'cart' },
  { id: 'steps', label: 'Panduan Perawatan Harian', icon: 'clipboard' },
]

function EvidenceSection({ categoryId, meta }) {
  const [expanded, setExpanded] = useState(false)

  // Ambil pedoman resmi yang relevan dengan fokus pasien saat ini
  const relevantGuidelines = VERIFIED_CLINICAL_GUIDELINES.filter(
    (g) => g.category === categoryId
  ).concat(
    VERIFIED_CLINICAL_GUIDELINES.filter((g) => g.category !== categoryId && (g.id === 1 || g.id === 18))
  ).slice(0, 4)

  return (
    <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50/70 p-4 sm:p-5 transition">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-100 text-teal-800 shadow-xs">
            <Icon name="book" className="h-4 w-4" />
          </span>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-extrabold text-slate-800">Dasar Pedoman Klinis Resmi</h3>
              <span className="rounded-md bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-800">
                18 Pedoman Terverifikasi
              </span>
            </div>
            <p className="text-[11px] text-slate-500 line-clamp-1">
              Disusun mengacu pada standar keselamatan pasien Kemenkes RI, WHO, CDC, dan asosiasi dokter spesialis.
            </p>
          </div>
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-bold text-slate-700 shadow-xs transition hover:border-teal-300 hover:text-teal-700"
        >
          <Icon name="book" className="h-3.5 w-3.5 text-teal-600" />
          {expanded ? 'Tutup Rujukan Medis' : 'Buka Rujukan Medis'}
        </button>
      </div>

      {expanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="mt-4 space-y-3"
        >
          <div className="rounded-xl border border-teal-200/80 bg-teal-50/60 p-3.5 text-xs leading-relaxed text-teal-950">
            <span className="font-bold text-teal-900">Komitmen Keselamatan Medis: </span>
            Semua panduan perawatan dan saran logistik di bawah disusun berbasis literatur klinis terbuka yang sah, bertujuan mempermudah keluarga non-medis merawat pasien dengan aman tanpa mengumpulkan data rekam medis sensitif.
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {relevantGuidelines.map((item) => (
              <div
                key={item.id}
                className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-3.5 shadow-xs transition hover:border-teal-200 hover:shadow-sm"
              >
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-xs font-bold leading-snug text-slate-800">
                      {item.title}
                    </h4>
                    <span className="shrink-0 rounded-md bg-slate-100 px-1.5 py-0.5 text-[10px] font-bold text-slate-600">
                      {item.year}
                    </span>
                  </div>
                  <p className="mt-1 text-[11px] text-slate-500">
                    {item.authors} • <span className="font-semibold text-slate-600">{item.journal}</span>
                  </p>
                  <p className="mt-2.5 rounded-lg bg-slate-50 p-2.5 text-[11px] leading-relaxed text-slate-600">
                    💡 <span className="font-medium text-slate-700">{item.takeaway}</span>
                  </p>
                </div>

                <div className="mt-3.5 flex items-center justify-between border-t border-slate-100 pt-2.5">
                  <span className="text-[10px] font-bold text-teal-700">{item.shortRef}</span>
                  {item.doiUrl && item.doiUrl !== '#' && (
                    <a
                      href={item.doiUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-teal-600 transition hover:text-teal-800"
                    >
                      Buka Dokumen <Icon name="externalLink" className="h-3 w-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default function Result({ answers, chatResult, onRestart, onRedo }) {
  const result = chatResult || (answers?.categoryId ? answers : classify(answers || {}))
  const meta = result.meta || CATEGORY_META[result.categoryId] || CATEGORY_META.joint
  const proto = PROTOCOLS[result.categoryId] || PROTOCOLS.joint
  const [tab, setTab] = useState('supplies')

  return (
    <div className="mx-auto max-w-5xl px-5 py-8 sm:py-12">
      {/* Top Action Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <button
          onClick={onRestart}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 transition hover:text-slate-800"
        >
          <Icon name="arrowLeft" className="h-4 w-4" /> Beranda
        </button>
        <button
          onClick={onRedo}
          className="inline-flex items-center gap-1.5 rounded-xl border border-teal-200 bg-teal-50 px-4 py-2.5 text-sm font-bold text-teal-800 transition hover:bg-teal-100"
        >
          <Icon name="message" className="h-4 w-4" /> Tanya Hal Lain
        </button>
      </div>

      {/* Main Care Plan Profile Card */}
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
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Rencana Kesiapan Perawatan di Rumah
              </p>
              <h1 className="mt-0.5 text-2xl font-extrabold leading-tight text-slate-900 sm:text-3xl">
                {meta.name}
              </h1>
              <p className="mt-1 text-sm text-slate-600">{meta.tagline}</p>

              {result.patientProfile && (
                <div className="mt-2.5 inline-flex items-center gap-2 rounded-xl border border-teal-200/80 bg-teal-50/70 px-3 py-1.5 text-xs text-teal-900">
                  <Icon name="user" className="h-3.5 w-3.5 text-teal-600" />
                  <span>
                    Disusun untuk Pasien: <strong>{result.patientProfile.name}</strong> ({result.patientProfile.relation}, {result.patientProfile.age} th)
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="shrink-0 rounded-2xl border border-slate-100 bg-slate-50 px-5 py-3.5 text-center sm:text-right">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Dasar Ilmiah</p>
            <p className="text-xl font-extrabold text-slate-900">18 Pedoman Medis</p>
            <p className="text-xs font-semibold text-teal-700">Kemenkes RI, WHO, CDC & Spesialis</p>
          </div>
        </div>

        {/* Evidence Section (Sederhana & Rapi, tanpa skor kaku) */}
        <EvidenceSection categoryId={result.categoryId} meta={meta} />

        {/* Disclaimer Medis Ramah */}
        <div className="mt-4 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-3.5">
          <Icon name="shield" className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
          <p className="text-xs leading-relaxed text-amber-900 sm:text-sm">{SHARED_DISCLAIMER}</p>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="sticky top-3 z-10 mt-8">
        <div className="grid grid-cols-2 gap-2 rounded-2xl border border-slate-200 bg-white/90 p-2 shadow-lg backdrop-blur">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`flex items-center justify-center gap-2 rounded-xl px-4 py-3.5 text-sm font-bold transition sm:text-base ${
                tab === t.id ? 'text-white shadow' : 'text-slate-600 hover:bg-slate-50'
              }`}
              style={tab === t.id ? { backgroundColor: meta.accent } : undefined}
            >
              <Icon name={t.icon} className="h-4 w-4 sm:h-5 sm:w-5" />
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Contents */}
      <div className="mt-6">
        {tab === 'supplies' && <ShoppingList categoryId={result.categoryId} protocol={proto} />}
        {tab === 'steps' && <VisualGuide categoryId={result.categoryId} protocol={proto} />}
      </div>
    </div>
  )
}