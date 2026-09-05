import { useState } from 'react'
import { motion } from 'framer-motion'
import { Icon } from './Icon.jsx'

export default function AuthModal({ isOpen, onClose, onLoginSuccess, currentPatient, onSelectPatient }) {
  const [mode, setMode] = useState('login') // 'login' | 'register' | 'add_patient'
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [pin, setPin] = useState('')
  
  // Patient form fields
  const [patientName, setPatientName] = useState('')
  const [patientAge, setPatientAge] = useState('')
  const [patientRelation, setPatientRelation] = useState('Orang Tua (Ibu/Ayah)')
  const [patientCondition, setPatientCondition] = useState('Penyakit Kronis (Hipertensi/Jantung)')
  
  const [error, setError] = useState('')

  if (!isOpen) return null

  // Ambil data tersimpan dari localStorage
  const getStoredUsers = () => {
    try {
      return JSON.parse(localStorage.getItem('rumahsiap_auth_users') || '[]')
    } catch {
      return []
    }
  }

  const handleRegister = (e) => {
    e.preventDefault()
    setError('')

    if (!name.trim() || !contact.trim() || pin.length < 4) {
      setError('Mohon lengkapi Nama, WhatsApp/Email, dan PIN minimal 4 angka.')
      return
    }

    if (!patientName.trim() || !patientAge.trim()) {
      setError('Mohon lengkapi data pasien yang didampingi.')
      return
    }

    const users = getStoredUsers()
    const existing = users.find((u) => u.contact === contact.trim())
    if (existing) {
      setError('Nomor/Email ini sudah terdaftar. Silakan gunakan menu Masuk.')
      return
    }

    const initialPatient = {
      id: `pat-${Date.now()}`,
      name: patientName.trim(),
      age: patientAge.trim(),
      relation: patientRelation,
      condition: patientCondition,
      createdAt: new Date().toISOString(),
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

    onLoginSuccess(newUser, initialPatient)
    onClose()
  }

  const handleLogin = (e) => {
    e.preventDefault()
    setError('')

    const users = getStoredUsers()
    const user = users.find((u) => u.contact === contact.trim() && u.pin === pin.trim())

    if (!user) {
      setError('Kontak atau PIN salah. Pastikan data sudah terdaftar.')
      return
    }

    const defaultPatient = user.patients?.[0] || null
    localStorage.setItem('rumahsiap_active_user', JSON.stringify(user))
    if (defaultPatient) {
      localStorage.setItem('rumahsiap_active_patient', JSON.stringify(defaultPatient))
    }

    onLoginSuccess(user, defaultPatient)
    onClose()
  }

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

    const updatedUser = updatedUsers.find((u) => u.id === activeUser.id)
    localStorage.setItem('rumahsiap_auth_users', JSON.stringify(updatedUsers))
    localStorage.setItem('rumahsiap_active_user', JSON.stringify(updatedUser))
    localStorage.setItem('rumahsiap_active_patient', JSON.stringify(newPatient))

    onSelectPatient(newPatient)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-xs">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        className="w-full max-w-lg overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl"
      >
        {/* Header Modal */}
        <div className="border-b border-slate-100 bg-slate-50/75 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-teal-600 text-white shadow-md shadow-teal-600/20">
              <Icon name="shield" className="h-5 w-5" />
            </span>
            <div>
              <h2 className="text-base font-extrabold text-slate-900">
                {mode === 'login' && 'Masuk Akun Pendamping'}
                {mode === 'register' && 'Daftar Pendamping Keluarga'}
                {mode === 'add_patient' && 'Tambah Pasien yang Didampingi'}
              </h2>
              <p className="text-xs text-slate-500">
                Penyimpanan Data Terproteksi & Bebas Rekam Medis Eksternal
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

        {/* Tab Pemilihan Mode */}
        {mode !== 'add_patient' && (
          <div className="flex border-b border-slate-100 px-6 pt-3">
            <button
              onClick={() => { setMode('login'); setError('') }}
              className={`pb-3 text-xs font-extrabold border-b-2 transition ${
                mode === 'login'
                  ? 'border-teal-600 text-teal-700'
                  : 'border-transparent text-slate-400 hover:text-slate-600'
              } mr-6`}
            >
              Masuk Akun
            </button>
            <button
              onClick={() => { setMode('register'); setError('') }}
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
          {error && (
            <div className="mb-4 rounded-xl border border-rose-200 bg-rose-50 p-3 text-xs text-rose-700">
              {error}
            </div>
          )}

          {/* Form Login */}
          {mode === 'login' && (
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700">
                  Nomor WhatsApp atau Email
                </label>
                <input
                  type="text"
                  required
                  placeholder="08123456789 atau nama@email.com"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700">
                  PIN Keamanan (4 Digit)
                </label>
                <input
                  type="password"
                  required
                  maxLength={6}
                  placeholder="Contoh: 1234"
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none tracking-widest"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full rounded-2xl bg-teal-600 py-3 text-sm font-extrabold text-white shadow-lg shadow-teal-600/25 transition hover:bg-teal-700"
                >
                  Masuk & Lanjutkan Perawatan
                </button>
              </div>

              <div className="text-center pt-1">
                <button
                  type="button"
                  onClick={() => { setMode('register'); setError('') }}
                  className="text-xs font-bold text-teal-700 hover:underline"
                >
                  Belum punya akun? Daftar sebagai keluarga baru
                </button>
              </div>
            </form>
          )}

          {/* Form Register Baru */}
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
                    <label className="block text-[11px] font-bold text-slate-700">WhatsApp / Email</label>
                    <input
                      type="text"
                      required
                      placeholder="08123456789"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none"
                    />
                  </div>
                </div>
                <div className="mt-2.5">
                  <label className="block text-[11px] font-bold text-slate-700">PIN Keamanan (4 Digit)</label>
                  <input
                    type="password"
                    required
                    maxLength={6}
                    placeholder="Contoh: 1234"
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                    className="mt-1 w-full max-w-[200px] rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none tracking-widest"
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
                  className="w-full rounded-2xl bg-teal-600 py-3 text-sm font-extrabold text-white shadow-lg shadow-teal-600/25 transition hover:bg-teal-700"
                >
                  Simpan Data & Mulai Konsultasi
                </button>
              </div>
            </form>
          )}

          {/* Form Tambah Pasien Baru untuk Pengguna Aktif */}
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
              Data disimpan terproteksi di perangkat Anda (klien) untuk memudahkan pemantauan tanpa perantara pihak ketiga.
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

