import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Landing from './components/Landing.jsx'
import Questionnaire from './components/Questionnaire.jsx'
import Result from './components/Result.jsx'

export default function App() {
  const [step, setStep] = useState('landing')
  const [answers, setAnswers] = useState({})

  const start = () => setStep('questionnaire')
  const finish = (ans) => { setAnswers(ans); setStep('result') }
  const restart = () => { setAnswers({}); setStep('landing') }
  const redo = () => { setAnswers({}); setStep('questionnaire') }

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 via-white to-emerald-50">
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          {step === 'landing' && <Landing onStart={start} />}
          {step === 'questionnaire' && <Questionnaire onDone={finish} onBack={restart} />}
          {step === 'result' && <Result answers={answers} onRestart={restart} onRedo={redo} />}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}