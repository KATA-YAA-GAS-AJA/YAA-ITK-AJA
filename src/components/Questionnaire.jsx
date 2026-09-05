import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { QUESTIONS } from '../data/questions.js'
import { Icon } from './Icon.jsx'

export default function Questionnaire({ onDone, onBack }) {
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState({})
  const [picked, setPicked] = useState(null)

  const q = QUESTIONS[index]
  const progress = ((index + (picked !== null ? 1 : 0)) / QUESTIONS.length) * 100
  const isLast = index === QUESTIONS.length - 1

  const choose = (i) => {
    setPicked(i)
    const next = { ...answers, [q.id]: i }
    setAnswers(next)
    if (isLast) {
      const t = setTimeout(() => onDone(next), 450)
      return () => clearTimeout(t)
    }
  }

  const next = () => {
    if (picked === null) return
    setPicked(null)
    setIndex((i) => i + 1)
  }

  const prev = () => {
    setIndex((i) => Math.max(0, i - 1))
    setPicked(answers[QUESTIONS[Math.max(0, index - 1)].id] ?? null)
  }

  const answerFor = (i) => answers[QUESTIONS[i].id]

  return (
    <div className="mx-auto max-w-3xl px-5 py-8 sm:py-12">
      <div className="flex items-center justify-between">
        <button onClick={onBack} className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 transition hover:text-slate-800">
          <Icon name="arrowLeft" className="h-4 w-4" /> Beranda
        </button>
        <div className="flex items-center gap-2 text-sm font-bold text-slate-600">
          <Icon name="home" className="h-4 w-4 text-teal-600" />
          Persiapkan Rumah
        </div>
      </div>

      <div className="mt-8">
        <div className="flex items-center justify-between text-sm">
          <span className="font-bold text-teal-700">Pertanyaan {index + 1} dari {QUESTIONS.length}</span>
          <span className="text-slate-400">±3 menit • huruf besar ramah lansia</span>
        </div>
        <div className="mt-2 h-3 w-full overflow-hidden rounded-full bg-slate-200">
          <motion.div
            className="h-full rounded-full bg-teal-500"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <h2 className="mt-10 text-2xl font-extrabold leading-snug text-slate-900 sm:text-4xl">{q.question}</h2>
          <p className="mt-2 text-base text-slate-500 sm:text-lg">{q.helper}</p>

          <div className="mt-8 grid gap-3.5">
            {q.options.map((opt, i) => {
              const active = picked === i
              return (
                <button
                  key={i}
                  onClick={() => choose(i)}
                  className={`group flex w-full items-center gap-4 rounded-2xl border-2 p-5 text-left transition-all duration-200 ${
                    active
                      ? 'border-teal-600 bg-teal-50 shadow-lg shadow-teal-600/10'
                      : 'border-slate-200 bg-white hover:border-teal-300 hover:bg-teal-50/50'
                  }`}
                >
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 transition ${
                      active ? 'border-teal-600 bg-teal-600 text-white' : 'border-slate-300 bg-white text-transparent'
                    }`}
                  >
                    <Icon name="check" className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-lg font-bold text-slate-900 sm:text-xl">{opt.label}</span>
                    {opt.sub && <span className="mt-0.5 block text-sm text-slate-500">{opt.sub}</span>}
                  </span>
                </button>
              )
            })}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="mt-8 flex items-center justify-between">
        <button
          onClick={prev}
          disabled={index === 0}
          className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-base font-semibold text-slate-500 transition enabled:hover:text-slate-800 disabled:opacity-30"
        >
          <Icon name="arrowLeft" className="h-4 w-4" /> Sebelumnya
        </button>

        {!isLast && (
          <button
            onClick={next}
            disabled={picked === null && answerFor(index) === undefined}
            className="inline-flex items-center gap-2 rounded-2xl bg-teal-600 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-teal-600/25 transition enabled:hover:bg-teal-700 disabled:cursor-not-allowed disabled:opacity-30"
          >
            Lanjut <Icon name="arrowRight" className="h-5 w-5" />
          </button>
        )}

        {isLast && (
          <button
            onClick={() => onDone(answers)}
            disabled={picked === null && answerFor(index) === undefined}
            className="inline-flex items-center gap-2 rounded-2xl bg-teal-600 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-teal-600/25 transition enabled:hover:bg-teal-700 disabled:cursor-not-allowed disabled:opacity-30"
          >
            <Icon name="sparkle" className="h-5 w-5" /> Lihat Rencana Rumah
          </button>
        )}
      </div>
    </div>
  )
}