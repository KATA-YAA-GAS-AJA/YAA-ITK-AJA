import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Icon } from './Icon.jsx'

export default function AuthModal({
  isOpen,
  onClose,
  onLoginSuccess,
  currentPatient,
  onSelectPatient,
  initialMode = 'login',
}) {
  const [mode, setMode] = useState(initialMode) // 'login' | 'register' | 'forgot_password' | 'reset_password' | 'add_patient'
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [pin, setPin] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  // Patient form fields
  const [patientName, setPatientName] = useState('')
  const [patientAge, setPatientAge] = useState('')
  const [patientRelation, setPatientRelation] = useState('Orang Tua (Ibu/Ayah)')
  const [patientCondition, setPatientCondition] = useState('Penyakit Kronis (Hipertensi/Jantung)')

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  useEffect(() => {
    if (isOpen) {
      setMode(initialMode)
      setError('')
      setSuccessMessage('')
    }
  }, [isOpen, initialMode])

  if (!isOpen) return null

  // Helper local storage
  const getStoredUsers = () => {
    try {
      return JSON.parse(localStorage.getItem('rumahsiap_auth_users') || '[]')
    } catch {
      return []
    }
  }

  // 1. REGISTER
  const handleRegister = (e) => {
    e.preventDefault()
    setError('')
    setSuccessMessage('')

    if (!name.trim() || !contact.trim() || pin.length < 6) {
      setError('Mohon lengkapi Nama, Email aktif, dan Password minimal 6 karakter.')
      return
    }

    if (!patientName.trim() || !patientAge.trim()) {
      setError('Mohon lengkapi data profil pasien yang didampingi.')
      return
    }

    setLoading(true)

    const initialPatient = {
      id: `pat-${Date.now()}`,
      name: patientName.trim(),
      age: patientAge.trim(),
      relation: patientRelation,
      condition: patientCondition,
      createdAt: new Date().toISOString(),
    }

    try {
      const users = getStoredUsers()
      const existing = users.find((u) => u.contact?.toLowerCase() === contact.trim().toLowerCase())
      if (existing) {
        setError('Email / Kontak ini sudah terdaftar. Silakan gunakan menu Masuk.')
        setLoading(false)
        return
      }

      const newUser = {
        id: `usr-${Date.now()}`,
        name: name.trim(),
        contact: contact.trim(),
        pin: pin.trim(),
        patients: [initialPatient],
      }

      users.push(newUser)
      localStorage.setItem('rumahsiap_auth_users', JSON.stringify(users))
      localStorage.setItem('rumahsiap_active_user', JSON.stringify(newUser))
      localStorage.setItem('rumahsiap_active_patient', JSON.stringify(initialPatient))

      setSuccessMessage('Pendaftaran berhasil! Memulai konsultasi...')
      setTimeout(() => {
        onLoginSuccess(newUser, initialPatient)
        onClose()
      }, 500)
    } catch (err) {
      setError(err.message || 'Gagal mendaftar. Silakan periksa kembali data Anda.')
    } finally {
      setLoading(false)
    }
  }

  // 2. LOGIN
  const handleLogin = (e) => {
    e.preventDefault()
    setError('')
    setSuccessMessage('')
    setLoading(true)

    try {
      const users = getStoredUsers()
      const user = users.find(
        (u) => u.contact?.toLowerCase() === contact.trim().toLowerCase() && u.pin === pin.trim()
      )

      if (!user) {
        setError('Email atau kata sandi salah. Pastikan data sudah pernah didaftarkan.')
        setLoading(false)
        return
      }

      const defaultPatient = user.patients?.[0] || null
      localStorage.setItem('rumahsiap_active_user', JSON.stringify(user))
      if (defaultPatient) {
        localStorage.setItem('rumahsiap_active_patient', JSON.stringify(defaultPatient))
      }

      onLoginSuccess(user, defaultPatient)
      onClose()
    } catch (err) {
      setError(err.message || 'Gagal masuk. Silakan coba lagi.')
    } finally {
      setLoading(false)
    }
  }

  // 3. FORGOT PASSWORD (DIRECT LOCAL RESET)
  const handleForgotPassword = (e) => {
    e.preventDefault()
    setError('')
    setSuccessMessage('')

    if (!contact.trim() || !contact.includes('@')) {
      setError('Masukkan alamat email yang valid untuk melanjutkan reset kata sandi.')
      return
    }

    setLoading(true)
    try {
      const users = getStoredUsers()
      const userFound = users.find((u) => u.contact?.toLowerCase() === contact.trim().toLowerCase())

      if (!userFound) {
        setError('Email tidak ditemukan dalam daftar akun. Pastikan email yang dimasukkan sudah pernah didaftarkan.')
        setLoading(false)
        return
      }

      setSuccessMessage('Akun ditemukan! Silakan masukkan kata sandi baru Anda di bawah ini.')
      setTimeout(() => {
        setMode('reset_password')
        setSuccessMessage('')
      }, 800)
    } catch (err) {
      setError(err.message || 'Gagal memproses reset kata sandi.')
    } finally {
      setLoading(false)
    }
  }

  // 4. RESET PASSWORD (SAVE NEW PASSWORD TO LOCAL STORAGE)
  const handleUpdatePassword = (e) => {
    e.preventDefault()
    setError('')
    setSuccessMessage('')

    if (newPassword.length < 6) {
      setError('Kata sandi baru minimal harus 6 karakter.')
      return
    }

    if (newPassword !== confirmPassword) {
      setError('Konfirmasi kata sandi tidak cocok dengan kata sandi baru.')
      return
    }

    setLoading(true)
    try {
      const users = getStoredUsers()
      const targetIndex = users.findIndex((u) => u.contact?.toLowerCase() === contact.trim().toLowerCase())

      if (targetIndex !== -1) {
        users[targetIndex].pin = newPassword.trim()
        localStorage.setItem('rumahsiap_auth_users', JSON.stringify(users))

        try {
          const activeUser = JSON.parse(localStorage.getItem('rumahsiap_active_user') || '{}')
          if (activeUser?.contact?.toLowerCase() === contact.trim().toLowerCase()) {
            activeUser.pin = newPassword.trim()
            localStorage.setItem('rumahsiap_active_user', JSON.stringify(activeUser))
          }
        } catch {
          // ignore
        }
      }

      setSuccessMessage('Kata sandi Anda berhasil diperbarui! Silakan masuk dengan kata sandi baru.')
      setTimeout(() => {
        setMode('login')
        setPin('')
        setNewPassword('')
        setConfirmPassword('')
        setSuccessMessage('')
      }, 1500)
    } catch (err) {
      setError(err.message || 'Gagal memperbarui kata sandi.')
    } finally {
      setLoading(false)
    }
  }

  // 5. TAMBAH PASIEN
  const handleAddPatient = (e) => {
    e.preventDefault()
    setError('')

    if (!patientName.trim() || !patientAge.trim()) {
      setError('Mohon lengkapi nama dan usia pasien.')
      return
    }

    const activeUser = JSON.parse(localStorage.getItem('rumahsiap_active_user') || '{}')
    if (!activeUser.id) {
      setError('Sesi telah berakhir. Silakan masuk kembali.')
      return
    }

    const newPatient = {
      id: `pat-${Date.now()}`,
      name: patientName.trim(),
      age: patientAge.trim(),
      relation: patientRelation,
      condition: patientCondition,
      createdAt: new Date().toISOString(),
    }

    const users = getStoredUsers()
    const updatedUsers = users.map((u) => {
      if (u.id === activeUser.id) {
        const patients = u.patients || []
        patients.push(newPatient)
        return { ...u, patients }
      }
      return u
    })

    const updatedUser = updatedUsers.find((u) => u.id === activeUser.id) || {
      ...activeUser,
      patients: [...(activeUser.patients || []), newPatient],
    }

    localStorage.setItem('rumahsiap_auth_users', JSON.stringify(updatedUsers))
    localStorage.setItem('rumahsiap_active_user', JSON.stringify(updatedUser))
    localStorage.setItem('rumahsiap_active_patient', JSON.stringify(newPatient))

    onSelectPatient(newPatient)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-xs overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        className="w-full max-w-lg overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl my-6"
      >
        {/* Header Modal */}
        <div className="border-b border-slate-100 bg-slate-50/75 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-teal-600 text-white shadow-md shadow-teal-600/20">
              {mode === 'forgot_password' ? (
                <Icon name="mail" className="h-5 w-5" />
              ) : mode === 'reset_password' ? (
                <Icon name="key" className="h-5 w-5" />
              ) : (
                <Icon name="shield" className="h-5 w-5" />
              )}
            </span>
            <div>
              <h2 className="text-base font-extrabold text-slate-900">
                {mode === 'login' && 'Masuk Akun Pendamping'}
                {mode === 'register' && 'Daftar Pendamping Keluarga'}
                {mode === 'forgot_password' && 'Reset Kata Sandi Akun'}
                {mode === 'reset_password' && 'Buat Kata Sandi Baru'}
                {mode === 'add_patient' && 'Tambah Pasien yang Didampingi'}
              </h2>
              <p className="text-xs text-slate-500">
                {mode === 'forgot_password'
                  ? 'Kirim link pemulihan aman ke email Anda'
                  : mode === 'reset_password'
                  ? 'Gunakan kata sandi baru yang kuat'
                  : 'Penyimpanan Data Terproteksi & Bebas Rekam Medis Eksternal'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-xl p-2 text-slate-400 hover:bg-slate-200/60 hover:text-slate-700"
          >
            <Icon name="close" className="h-5 w-5" />
          </button>
        </div>

        {/* Tab Pemilihan Mode (Hanya ditampilkan saat Login / Register) */}
        {(mode === 'login' || mode === 'register') && (
          <div className="flex border-b border-slate-100 px-6 pt-3">
            <button
              onClick={() => { setMode('login'); setError(''); setSuccessMessage('') }}
              className={`pb-3 text-xs font-extrabold border-b-2 transition ${
                mode === 'login'
                  ? 'border-teal-600 text-teal-700'
                  : 'border-transparent text-slate-400 hover:text-slate-600'
              } mr-6`}
            >
              Masuk Akun
            </button>
            <button
              onClick={() => { setMode('register'); setError(''); setSuccessMessage('') }}
              className={`pb-3 text-xs font-extrabold border-b-2 transition ${
                mode === 'register'
                  ? 'border-teal-600 text-teal-700'
                  : 'border-transparent text-slate-400 hover:text-slate-600'
              }`}
            >
              Daftar Baru (Keluarga)
            </button>
          </div>
        )}

        <div className="p-6">
          {/* Status Alert Error */}
          {error && (
            <div className="mb-4 rounded-xl border border-rose-200 bg-rose-50 p-3 text-xs text-rose-700 flex items-start gap-2">
              <Icon name="alert" className="h-4 w-4 shrink-0 mt-0.5 text-rose-600" />
              <span>{error}</span>
            </div>
          )}

          {/* Status Alert Success */}
          {successMessage && (
            <div className="mb-4 rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-xs text-emerald-800 flex items-start gap-2">
              <Icon name="check" className="h-4 w-4 shrink-0 mt-0.5 text-emerald-600" />
              <span>{successMessage}</span>
            </div>
          )}

          {/* FORM LOGIN */}
          {mode === 'login' && (
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700">
                  Email Akun
                </label>
                <div className="relative mt-1">
                  <input
                    type="email"
                    required
                    placeholder="nama@email.com"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-bold text-slate-700">
                    Kata Sandi / PIN
                  </label>
                  <button
                    type="button"
                    onClick={() => { setMode('forgot_password'); setError(''); setSuccessMessage('') }}
                    className="text-[11px] font-bold text-teal-600 hover:underline"
                  >
                    Lupa Password?
                  </button>
                </div>
                <input
                  type="password"
                  required
                  placeholder="Masukkan kata sandi"
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-2xl bg-teal-600 py-3 text-sm font-extrabold text-white shadow-lg shadow-teal-600/25 transition hover:bg-teal-700 disabled:opacity-50"
                >
                  {loading ? 'Memproses Masuk...' : 'Masuk & Lanjutkan Perawatan'}
                </button>
              </div>

              <div className="text-center pt-1">
                <button
                  type="button"
                  onClick={() => { setMode('register'); setError(''); setSuccessMessage('') }}
                  className="text-xs font-bold text-teal-700 hover:underline"
                >
                  Belum punya akun? Daftar sebagai keluarga baru
                </button>
              </div>
            </form>
          )}

          {/* FORM REGISTER BARU */}
          {mode === 'register' && (
            <form onSubmit={handleRegister} className="space-y-4">
              <div className="rounded-2xl border border-teal-100 bg-teal-50/60 p-3">
                <p className="text-xs font-bold text-teal-900">1. Data Anggota Keluarga (Pendamping)</p>
                <div className="mt-2.5 grid gap-3 sm:grid-cols-2">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700">Nama Lengkap</label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Budi Santoso"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700">Email Aktif</label>
                    <input
                      type="email"
                      required
                      placeholder="nama@email.com"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none"
                    />
                  </div>
                </div>
                <div className="mt-2.5">
                  <label className="block text-[11px] font-bold text-slate-700">Kata Sandi (Minimal 6 Karakter)</label>
                  <input
                    type="password"
                    required
                    minLength={6}
                    placeholder="Buat kata sandi akun"
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-3">
                <p className="text-xs font-bold text-slate-900">2. Profil Pasien yang Didampingi</p>
                <div className="mt-2.5 grid gap-3 sm:grid-cols-2">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700">Nama / Panggilan Pasien</label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Ibu Maryam"
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700">Usia (Tahun)</label>
                    <input
                      type="number"
                      required
                      min={1}
                      max={120}
                      placeholder="Contoh: 68"
                      value={patientAge}
                      onChange={(e) => setPatientAge(e.target.value)}
                      className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="mt-2.5 grid gap-3 sm:grid-cols-2">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700">Hubungan Keluarga</label>
                    <select
                      value={patientRelation}
                      onChange={(e) => setPatientRelation(e.target.value)}
                      className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 focus:border-teal-500 focus:outline-none"
                    >
                      <option value="Orang Tua (Ibu/Ayah)">Orang Tua (Ibu/Ayah)</option>
                      <option value="Pasangan (Suami/Istri)">Pasangan (Suami/Istri)</option>
                      <option value="Anak">Anak</option>
                      <option value="Kakek / Nenek">Kakek / Nenek</option>
                      <option value="Saudara Kandung">Saudara Kandung</option>
                      <option value="Diri Sendiri">Diri Sendiri</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700">Fokus Pemulihan Awal</label>
                    <select
                      value={patientCondition}
                      onChange={(e) => setPatientCondition(e.target.value)}
                      className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 focus:border-teal-500 focus:outline-none"
                    >
                      <option value="Penyakit Kronis (Hipertensi/Jantung)">Penyakit Kronis (Hipertensi/Jantung)</option>
                      <option value="Sistem Tulang & Sendi (Fraktur/Operasi)">Sistem Tulang & Sendi (Fraktur/Operasi)</option>
                      <option value="Luka Operasi & Jahitan">Luka Operasi & Jahitan</option>
                      <option value="Pasca-Stroke & Sisi Lemah">Pasca-Stroke & Sisi Lemah</option>
                      <option value="Lansia Rentan Terpeleset">Lansia Rentan Terpeleset</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-2xl bg-teal-600 py-3 text-sm font-extrabold text-white shadow-lg shadow-teal-600/25 transition hover:bg-teal-700 disabled:opacity-50"
                >
                  {loading ? 'Menyimpan...' : 'Simpan Data & Mulai Konsultasi'}
                </button>
              </div>
            </form>
          )}

          {/* FORM FORGOT PASSWORD (DIRECT LOCAL RESET) */}
          {mode === 'forgot_password' && (
            <form onSubmit={handleForgotPassword} className="space-y-4">
              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <p className="text-xs text-slate-600 leading-relaxed">
                  Masukkan email yang terdaftar di akun Anda untuk melanjutkan pengaturan ulang kata sandi secara instan.
                </p>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700">
                  Alamat Email Terdaftar
                </label>
                <input
                  type="email"
                  required
                  placeholder="nama@email.com"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none"
                />
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-2xl bg-teal-600 py-3 text-sm font-extrabold text-white shadow-lg shadow-teal-600/25 transition hover:bg-teal-700 disabled:opacity-50"
                >
                  {loading ? 'Memverifikasi...' : 'Lanjutkan Reset Kata Sandi'}
                </button>
                <button
                  type="button"
                  onClick={() => { setMode('login'); setError(''); setSuccessMessage('') }}
                  className="w-full rounded-xl py-2 text-xs font-bold text-slate-600 hover:text-teal-700 transition"
                >
                  Kembali ke Menu Masuk
                </button>
              </div>
            </form>
          )}

          {/* FORM RESET PASSWORD (NEW PASSWORD INPUT) */}
          {mode === 'reset_password' && (
            <form onSubmit={handleUpdatePassword} className="space-y-4">
              <div className="rounded-2xl border border-teal-100 bg-teal-50/70 p-3.5">
                <p className="text-xs font-bold text-teal-900">Buat Kata Sandi Baru</p>
                <p className="mt-1 text-[11px] text-teal-700 leading-relaxed">
                  {contact
                    ? `Mengatur ulang kata sandi untuk akun (${contact}). Masukkan kata sandi baru Anda.`
                    : 'Sesi pemulihan aktif. Masukkan kata sandi baru untuk akun Anda.'}
                </p>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700">
                  Kata Sandi Baru (Minimal 6 Karakter)
                </label>
                <input
                  type="password"
                  required
                  minLength={6}
                  placeholder="Masukkan kata sandi baru"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700">
                  Konfirmasi Kata Sandi Baru
                </label>
                <input
                  type="password"
                  required
                  minLength={6}
                  placeholder="Ulangi kata sandi baru"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-2xl bg-teal-600 py-3 text-sm font-extrabold text-white shadow-lg shadow-teal-600/25 transition hover:bg-teal-700 disabled:opacity-50"
                >
                  {loading ? 'Menyimpan Kata Sandi...' : 'Simpan Kata Sandi Baru'}
                </button>
              </div>
            </form>
          )}

          {/* FORM TAMBAH PASIEN */}
          {mode === 'add_patient' && (
            <form onSubmit={handleAddPatient} className="space-y-4">
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold text-slate-700">Nama / Panggilan Pasien</label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Bapak Hendra"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-xs text-slate-900 focus:border-teal-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700">Usia (Tahun)</label>
                  <input
                    type="number"
                    required
                    min={1}
                    max={120}
                    placeholder="54"
                    value={patientAge}
                    onChange={(e) => setPatientAge(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-xs text-slate-900 focus:border-teal-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold text-slate-700">Hubungan Keluarga</label>
                  <select
                    value={patientRelation}
                    onChange={(e) => setPatientRelation(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-xs text-slate-900 focus:border-teal-500 focus:outline-none"
                  >
                    <option value="Orang Tua (Ibu/Ayah)">Orang Tua (Ibu/Ayah)</option>
                    <option value="Pasangan (Suami/Istri)">Pasangan (Suami/Istri)</option>
                    <option value="Anak">Anak</option>
                    <option value="Kakek / Nenek">Kakek / Nenek</option>
                    <option value="Saudara Kandung">Saudara Kandung</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700">Fokus Pemulihan</label>
                  <select
                    value={patientCondition}
                    onChange={(e) => setPatientCondition(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-xs text-slate-900 focus:border-teal-500 focus:outline-none"
                  >
                    <option value="Penyakit Kronis (Hipertensi/Jantung)">Penyakit Kronis (Hipertensi/Jantung)</option>
                    <option value="Sistem Tulang & Sendi (Fraktur/Operasi)">Sistem Tulang & Sendi (Fraktur/Operasi)</option>
                    <option value="Luka Operasi & Jahitan">Luka Operasi & Jahitan</option>
                    <option value="Pasca-Stroke & Sisi Lemah">Pasca-Stroke & Sisi Lemah</option>
                    <option value="Lansia Rentan Terpeleset">Lansia Rentan Terpeleset</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full rounded-2xl bg-teal-600 py-3 text-sm font-extrabold text-white shadow-lg shadow-teal-600/25 transition hover:bg-teal-700"
                >
                  Tambah Profil Pasien
                </button>
              </div>
            </form>
          )}

          {/* Privacy Footnote */}
          <div className="mt-4 flex items-center gap-2 rounded-xl bg-slate-50 p-2.5 text-[11px] text-slate-500">
            <Icon name="shield" className="h-4 w-4 shrink-0 text-teal-600" />
            <span>
              Privasi & Data Keluarga Terlindungi Secara Aman.
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
