import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Landing from './components/Landing.jsx'
import LiveChat from './components/LiveChat.jsx'
import Result from './components/Result.jsx'
import AuthModal from './components/AuthModal.jsx'
export default function App() {
  const [step, setStep] = useState('landing')
  const [chatResult, setChatResult] = useState(null)
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [authModalMode, setAuthModalMode] = useState('login')

  // Sesi Autentikasi Pengguna & Profil Pasien (Pure LocalStorage)
  const [authUser, setAuthUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('rumahsiap_active_user') || 'null')
    } catch {
      return null
    }
  })

  const [activePatient, setActivePatient] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('rumahsiap_active_patient') || 'null')
    } catch {
      return null
    }
  })

  // Memulai alur konsultasi: wajibkan login/profil jika belum ada
  const start = () => {
    if (!authUser || !activePatient) {
      setAuthModalMode('login')
      setShowAuthModal(true)
    } else {
      setStep('chat')
    }
  }

  const handleOpenAuth = (mode = 'login') => {
    setAuthModalMode(mode)
    setShowAuthModal(true)
  }

  const handleLoginSuccess = (user, patient) => {
    setAuthUser(user)
    setActivePatient(patient)
    setStep('chat')
  }

  const handleSelectPatient = (patient) => {
    setActivePatient(patient)
  }

  const handleLogout = () => {
    localStorage.removeItem('rumahsiap_active_user')
    localStorage.removeItem('rumahsiap_active_patient')
    setAuthUser(null)
    setActivePatient(null)
    setStep('landing')
  }

  const finish = (res) => {
    setChatResult(res)
    setStep('result')
  }

  const restart = () => {
    setChatResult(null)
    setStep('landing')
  }

  const redo = () => {
    setChatResult(null)
    setStep('chat')
  }

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
          {step === 'landing' && (
            <Landing
              onStart={start}
              authUser={authUser}
              activePatient={activePatient}
              onOpenAuth={() => handleOpenAuth('login')}
              onLogout={handleLogout}
            />
          )}

          {step === 'chat' && (
            <LiveChat
              onFinish={finish}
              onBack={restart}
              patientProfile={activePatient}
              caregiverUser={authUser}
            />
          )}

          {step === 'result' && (
            <Result
              chatResult={chatResult}
              onRestart={restart}
              onRedo={redo}
            />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Modal Autentikasi Pengguna & Profil Pasien */}
      <AuthModal
        isOpen={showAuthModal}
        initialMode={authModalMode}
        onClose={() => setShowAuthModal(false)}
        onLoginSuccess={handleLoginSuccess}
        currentPatient={activePatient}
        onSelectPatient={handleSelectPatient}
      />
    </div>
  )
}