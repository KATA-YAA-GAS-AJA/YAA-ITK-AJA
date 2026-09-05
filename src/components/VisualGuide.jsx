import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Icon } from './Icon.jsx'
import { CATEGORY_META } from '../data/protocols.js'

function StepCard({ step, n, count, accent }) {
  const [open, setOpen] = useState(n === 0)
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
      <button onClick={() => setOpen((o) => !o)} className="flex w-full items-center gap-4 p-4 text-left sm:p-5">
        <span
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-base font-extrabold text-white"
          style={{ background: accent }}
        >
          {n + 1}
        </span>
        <span className="flex-1">
          <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">
            Panduan Langkah {n + 1} dari {count} • {step.step}
          </span>
          <span className="mt-0.5 block text-lg font-extrabold text-slate-900">{step.title}</span>
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="space-y-3 px-5 pb-5 sm:px-6 sm:pb-6">
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">{step.desc}</p>
              {step.tip && (
                <div className="flex items-start gap-2.5 rounded-xl bg-amber-50 border border-amber-200 px-4 py-3">
                  <Icon name="sparkle" className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                  <p className="text-sm text-amber-800">
                    <b className="font-bold">Tips keluarga:</b> {step.tip}
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function VisualGuide({ categoryId, protocol }) {
  const meta = CATEGORY_META[categoryId]

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-start gap-4">
          <span className="mt-1 hidden sm:block">
            <Icon name="sparkle" className="h-7 w-7 text-teal-600" />
          </span>
          <div>
            <h2 className="text-xl font-extrabold text-slate-900 sm:text-2xl">Sasaran Pemulihan Minggu Pertama</h2>
            <p className="mt-2 max-w-2xl text-sm sm:text-base leading-relaxed text-slate-600">{protocol.goal}</p>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="rounded-full px-3.5 py-1 text-xs font-bold" style={{ backgroundColor: `${meta.accent}1a`, color: meta.accent }}>
            {protocol.visual.length} langkah perawatan
          </span>
          <span className="rounded-full bg-slate-100 px-3.5 py-1 text-xs font-bold text-slate-600">
            Pedoman Resmi: {meta.refSource.split('&')[0].trim()}
          </span>
        </div>
      </div>

      <div className="space-y-3">
        {protocol.visual.map((step, i) => (
          <StepCard key={i} step={step} n={i} count={protocol.visual.length} accent={meta.accent} />
        ))}
      </div>
    </div>
  )
}