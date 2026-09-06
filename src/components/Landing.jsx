import { motion } from 'framer-motion'
import { Icon } from './Icon.jsx'

const FEATURES = [
  { icon: 'message', title: 'Live Chat Konsultan AI', desc: 'Konsultasi tanya-jawab langsung seputar keluhan pasien, berlandaskan 18 pedoman medis resmi.' },
  { icon: 'cart', title: 'Saran Perlengkapan & Logistik', desc: 'Rekomendasi kebutuhan apotek dan alat keselamatan yang siap dibagikan ke WhatsApp atau disimpan PDF.' },
  { icon: 'shield', title: 'Panduan Perawatan Terarah', desc: 'Langkah praktis perawatan mandiri di rumah yang aman, higienis, dan mudah dipraktikkan keluarga awam.' },
]

const STEPS = [
  { n: '1', t: 'Live Chat dengan AI Konsultan', d: 'Ketik keluhan atau pertanyaan Anda secara bebas, atau pilih topik yang tersedia.' },
  { n: '2', t: 'AI Menganalisis Berbasis Pedoman Medis', d: 'Menjawab langsung inti permasalahan pasien sesuai standar keselamatan Kemenkes & CDC.' },
  { n: '3', t: 'Terima Saran & Panduan Lengkap', d: 'Saran perlengkapan logistik dan langkah perawatan harian langsung siap diterapkan di rumah.' },
]

export default function Landing({ onStart, authUser, activePatient, onOpenAuth, onLogout }) {
  return (
    <div className="mx-auto max-w-5xl px-5 py-10 sm:py-16">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-teal-600 text-white shadow-lg shadow-teal-600/25">
            <Icon name="home" className="h-5 w-5" />
          </span>
          <span className="text-lg font-extrabold tracking-tight text-slate-900">Rumah<span className="text-teal-600">Siap</span></span>
        </div>

        <div className="flex items-center gap-3">
          {authUser ? (
            <div className="flex items-center gap-2">
              <div className="hidden sm:flex flex-col text-right">
                <span className="text-xs font-bold text-slate-900">{authUser.name}</span>
                <span className="text-[11px] font-semibold text-teal-700">
                  Pasien: {activePatient?.name || 'Pilih Pasien'} ({activePatient?.relation || ''})
                </span>
              </div>
              <button
                onClick={onOpenAuth}
                className="rounded-xl border border-teal-200 bg-teal-50 px-3 py-1.5 text-xs font-bold text-teal-800 transition hover:bg-teal-100"
              >
                Ganti Pasien
              </button>
              <button
                onClick={onLogout}
                className="rounded-xl border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-semibold text-slate-500 transition hover:bg-slate-100"
                title="Keluar dari akun pendamping"
              >
                Keluar
              </button>
            </div>
          ) : (
            <button
              onClick={onOpenAuth}
              className="inline-flex items-center gap-1.5 rounded-xl border border-teal-200 bg-teal-50 px-3.5 py-1.5 text-xs font-bold text-teal-800 transition hover:bg-teal-100"
            >
              <Icon name="user" className="h-3.5 w-3.5" />
              Masuk / Daftar Akun
            </button>
          )}
        </div>
      </header>

      <main className="mt-12 sm:mt-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-100 px-3.5 py-1.5 text-xs font-bold text-amber-800"
            >
              <Icon name="alert" className="h-4 w-4" />
              Panduan Praktis Persiapan Rumah & Logistik Pasca-Rawat Inap
            </motion.div>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              Rumah <span className="text-teal-600">Siap</span> Terima Pasien Pulang
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
              Konsultasikan keluhan pasien pasca-rawat inap dengan <b>AI Pendamping</b>, lalu dapatkan{' '}
              <b>saran perlengkapan apotek</b> dan <b>panduan perawatan praktis</b> di rumah
              berbasis 18 pedoman medis resmi — tanpa panik, tanpa ragu.
            </p>

            {activePatient && (
              <div className="mt-4 inline-flex items-center gap-2 rounded-2xl border border-teal-200 bg-teal-50/90 px-4 py-2 text-xs font-semibold text-teal-900">
                <span className="flex h-5 w-5 items-center justify-center rounded-md bg-teal-600 text-white text-[10px] font-bold">
                  {activePatient.name.charAt(0).toUpperCase()}
                </span>
                <span>
                  Pasien Aktif: <b>{activePatient.name}</b> ({activePatient.relation}, {activePatient.age} th)
                </span>
              </div>
            )}

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={authUser ? onStart : onOpenAuth}
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-teal-600 px-7 py-4 text-lg font-bold text-white shadow-xl shadow-teal-600/30 transition hover:bg-teal-700 focus:outline-none focus-visible:ring-4 focus-visible:ring-teal-300"
              >
                {activePatient ? `Konsultasi untuk ${activePatient.name}` : 'Mulai Konsultasi — Gratis'}
                <Icon name="arrowRight" className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
              <a
                href="#cara-kerja"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-slate-200 bg-white px-6 py-4 text-lg font-semibold text-slate-700 transition hover:border-teal-300 hover:text-teal-700"
              >
                Lihat Cara Kerja
              </a>
            </div>

            <p className="mt-4 text-sm text-slate-500">
              ⏱ Respon Langsung Real-Time • 100% Bebas Biaya & Ramah Keluarga
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-3xl border border-white bg-slate-900 p-2 shadow-2xl shadow-slate-400/30">
              <div className="flex items-center gap-1.5 px-3 py-2.5">
                <span className="h-3 w-3 rounded-full bg-rose-400" />
                <span className="h-3 w-3 rounded-full bg-amber-400" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
                <span className="ml-3 text-xs text-slate-400">rumahsiap.app — asisten pemulihan rumah</span>
              </div>
              <div className="rounded-2xl bg-white p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-teal-600">Konsultasi Terpandu</p>
                    <p className="text-xl font-extrabold text-slate-900">Pemulihan Pasca-Rawat Inap</p>
                  </div>
                  <span className="rounded-xl bg-teal-100 p-2.5 text-teal-700"><Icon name="message" className="h-6 w-6" /></span>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {[
                    { icon: 'message', label: 'Tanya AI', n: 'Interaktif' },
                    { icon: 'cart', label: 'Saran Logistik', n: 'Terkurasi' },
                    { icon: 'book', label: 'Dasar Ilmiah', n: '18 Pedoman' },
                  ].map((c) => (
                    <div key={c.label} className="rounded-xl bg-slate-50 p-3 text-center">
                      <span className="mx-auto mb-1 flex h-8 w-8 items-center justify-center rounded-lg bg-teal-100 text-teal-700">
                        <Icon name={c.icon} className="h-4 w-4" />
                      </span>
                      <p className="text-[10px] font-bold uppercase text-slate-500">{c.label}</p>
                      <p className="text-sm font-extrabold text-slate-900">{c.n}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2.5 text-xs font-semibold text-emerald-700">
                  <Icon name="check" className="h-4 w-4" />
                  Rekomendasi perlengkapan & panduan siap diterapkan di rumah
                </div>
              </div>
            </div>
            <div className="absolute -right-4 -top-4 hidden rounded-2xl bg-amber-100 px-4 py-2 text-sm font-bold text-amber-800 shadow-lg sm:block">
              💬 Tanya jawab langsung
            </div>
          </motion.div>
        </div>

        <section id="cara-kerja" className="mt-20 scroll-mt-8">
          <h2 className="text-center text-2xl font-extrabold text-slate-900 sm:text-3xl">Ringkas, 3 Langkah</h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-slate-600">
            Fokus pada rasa panik keluarga yang nyata, bukan dokumen medis yang rumit.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {STEPS.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-600 text-lg font-extrabold text-white">
                  {s.n}
                </span>
                <h3 className="mt-4 text-lg font-bold text-slate-900">{s.t}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{s.d}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-center text-2xl font-extrabold text-slate-900 sm:text-3xl">Kenapa Keluarga Kini Bisa Tenang</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
                  <Icon name={f.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-slate-900">{f.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-3xl bg-slate-900 p-8 text-center sm:p-12">
          <Icon name="shield" className="mx-auto h-10 w-10 text-teal-400" />
          <h2 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl">Standar Perawatan Terpercaya untuk Keluarga</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-300">
            Setiap rekomendasi tata ruang, daftar logistik apotek, dan langkah perawatan dirancang berdasarkan
            pedoman resmi keselamatan pasien (<b className="text-white">Kemenkes RI, CDC, dan WHO</b>).
            Semua instruksi tersusun jelas, terstruktur, dan siap dipraktikkan langsung di rumah keluarga.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-400">
            RumahSiap berfungsi sebagai pendamping logistik dan lingkungan pemulihan, bukan pengganti pemeriksaan medis dokter.
          </p>
          <button
            onClick={onStart}
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-2xl bg-teal-500 px-8 py-4 text-lg font-bold text-white shadow-xl shadow-teal-500/30 transition hover:bg-teal-400"
          >
            Siapkan Rumah Sekarang
            <Icon name="arrowRight" className="h-5 w-5" />
          </button>
        </section>
      </main>

      <footer className="mt-16 border-t border-slate-200 pt-6 text-center text-xs text-slate-400">
        RumahSiap — Layanan Panduan Persiapan Rumah Pasca-Rawat Inap untuk Masyarakat Indonesia.
        Disusun mengacu pada standar keselamatan Kemenkes RI, CDC, dan WHO. Selalu utamakan instruksi dokter dan tim medis Anda.
      </footer>
    </div>
  )
}