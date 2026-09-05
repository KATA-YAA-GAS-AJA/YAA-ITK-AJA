import { useState } from 'react'
import { motion } from 'framer-motion'
import { Icon } from './Icon.jsx'

const SHOW = { opacity: 1, scale: 1 }
const HIDE = { opacity: 0, scale: 0.85 }
const EMPTY = { opacity: 0 }

function Chip({ x, y, text, color = '#0f172a', show }) {
  return (
    <motion.g
      initial={false}
      animate={show ? SHOW : HIDE}
      transition={{ duration: 0.3 }}
      style={{ pointerEvents: 'none' }}
    >
      <rect x={x - 34} y={y - 12} width={68} height={22} rx={11} fill={color} />
      <text x={x} y={y + 4} textAnchor="middle" fontSize="11" fontWeight="700" fill="#fff">
        {text}
      </text>
    </motion.g>
  )
}

export default function CareCanvas({ accent = '#10b981', roomName = 'Ruang Pemulihan' }) {
  const [safe, setSafe] = useState(false)

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 bg-slate-50 px-5 py-3.5">
        <div className="flex items-center gap-2.5">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl" style={{ backgroundColor: `${accent}1a`, color: accent }}>
            <Icon name="eye" className="h-5 w-5" />
          </span>
          <div>
            <p className="text-sm font-extrabold text-slate-900">Kanvas Interaktif — {roomName}</p>
            <p className="text-xs text-slate-500">Tekan "Rapikan" untuk melihat perbaikannya bergerak.</p>
          </div>
        </div>
        <div className="flex rounded-xl border border-slate-200 bg-white p-1 text-sm font-bold">
          <button
            onClick={() => setSafe(false)}
            className={`rounded-lg px-3.5 py-2 transition ${!safe ? 'bg-rose-500 text-white shadow' : 'text-slate-500 hover:text-slate-800'}`}
          >
            ⚠️ Kondisi Awal
          </button>
          <button
            onClick={() => setSafe(true)}
            className={`rounded-lg px-3.5 py-2 transition ${safe ? 'bg-teal-600 text-white shadow' : 'text-slate-500 hover:text-slate-800'}`}
            style={safe ? { background: accent } : undefined}
          >
            ✓ Sudah Dirapikan
          </button>
        </div>
      </div>

      <div className="px-4 pb-4 pt-2">
        <svg viewBox="0 0 420 360" className="h-auto w-full select-none">
          {/* ruangan */}
          <rect x="24" y="24" width="372" height="312" rx="14" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="6" />
          {/* jalur lantai menuju kamar mandi */}
          <path d="M 180 108 L 180 258 L 40 258 L 40 292 L 396 292 L 396 108 Z" fill="#fef9ec" opacity="0.85" />
          <motion.g initial={false} animate={safe ? EMPTY : { opacity: 0.55 }} transition={{ duration: 0.4 }}>
            <path d="M 180 120 L 180 258 L 40 258" stroke="#f59e0b" strokeDasharray="7 7" strokeWidth="2" fill="none" />
          </motion.g>

          {/* tempat tidur */}
          <g>
            <rect x="45" y="45" width="150" height="52" rx="10" fill="#dbe3ea" stroke="#94a3b8" strokeWidth="2" />
            <rect x="52" y="52" width="40" height="34" rx="6" fill="#f1f5f9" />
            <rect x="150" y="52" width="38" height="34" rx="6" fill="#a5b4c2" />
            <rect x="45" y="97" width="34" height="10" rx="4" fill="#64748b" />
            <text x="120" y="74" textAnchor="middle" fontSize="10" fontWeight="700" fill="#475569">TEMPAT TIDUR</text>
          </g>

          {/* meja perawatan */}
          <g>
            <rect x="230" y="45" width="120" height="52" rx="10" fill="#fde9cf" stroke="#f6b96a" strokeWidth="2" />
            <rect x="246" y="58" width="34" height="26" rx="5" fill="#fff" stroke="#e2e8f0" />
            <path d="M 258 70 l 10 8 l 16 -14" stroke="#14b8a6" strokeWidth="3" fill="none" />
            <text x="290" y="74" textAnchor="middle" fontSize="10" fontWeight="700" fill="#b45309">MEJA PERAWATAN</text>
          </g>

          {/* kamar mandi */}
          <g>
            <rect x="292" y="160" width="100" height="146" rx="10" fill="#e0f2fe" stroke="#7dd3fc" strokeWidth="3" />
            <path d="M 302 170 h 80 M 302 180 h 80 M 302 190 h 80 M 302 200 h 80" stroke="#bae6fd" strokeWidth="1.5" />
            <path d="M 312 228 c 0 -14 24 -8 24 -20 c 0 12 24 6 24 20 c 0 16 -48 16 -48 0 Z" fill="#7dd3fc" />
            <text x="342" y="286" textAnchor="middle" fontSize="10" fontWeight="700" fill="#0369a1">KAMAR MANDI</text>
          </g>

          {/* pintu kamar */}
          <rect x="24" y="378" width="0" height="0" />
          <path d="M 20 130 L 20 180 L 30 180 L 30 130 Z" fill="#94a3b8" />
          <text x="14" y="208" textAnchor="middle" fontSize="10" fontWeight="700" fill="#64748b" transform="rotate(-90 14 208)">KELUAR</text>

          {/* bohlam */}
          <g>
            <line x1="210" y1="24" x2="210" y2="40" stroke="#94a3b8" strokeWidth="3" />
            <circle cx="210" cy="47" r="6" fill={safe ? accent : '#cbd5e1'} />
            <motion.circle
              cx="210" cy="47" r="26"
              fill={accent}
              initial={false}
              animate={safe ? { opacity: 0.16, r: 26 } : { opacity: 0, r: 6 }}
              transition={{ duration: 0.5 }}
            />
          </g>

          {/* handrail AMAN */}
          <motion.g
            initial={false}
            animate={safe ? SHOW : EMPTY}
            transition={{ duration: 0.45, delay: 0.15 }}
          >
            <rect x="36" y="214" width="144" height="8" rx="4" fill={accent} />
            <rect x="36" y="214" width="16" height="34" rx="5" fill={accent} opacity="0.6" />
            <rect x="164" y="214" width="16" height="34" rx="5" fill={accent} opacity="0.6" />
          </motion.g>

          {/* ===== HAZARDS (kondisi awal) ===== */}
          {/* keset menggulung */}
          <motion.g initial={false} animate={safe ? EMPTY : SHOW} transition={{ duration: 0.3 }}>
            <rect x="128" y="236" width="40" height="12" rx="3" fill="#f43f5e" opacity="0.85" />
            <path d="M 136 236 l 0 12 M 144 236 l 0 12 M 152 236 l 0 12" stroke="#fff" strokeWidth="1.2" fill="none" />
          </motion.g>
          <Chip x={148} y={266} text="Keset terlipat" color="#e11d48" show={!safe} />

          {/* kabel melintang */}
          <motion.path
            d="M 180 140 C 250 145, 300 230, 342 230"
            stroke="#e11d48" strokeWidth="5" fill="none"
            initial={false}
            animate={safe ? EMPTY : SHOW}
            transition={{ duration: 0.3 }}
            strokeLinecap="round" strokeDasharray="2 9"
          />
          <Chip x={258} y={196} text="Kabel" color="#e11d48" show={!safe} />

          {/* kardus di jalan */}
          <motion.g initial={false} animate={safe ? EMPTY : SHOW} transition={{ duration: 0.3 }}>
            <rect x="318" y="246" width="30" height="24" rx="3" fill="#f59e0b" />
            <path d="M 327 270 l 6 -8 l 6 8 Z" fill="#d97706" />
          </motion.g>
          <Chip x={333} y={232} text="Barang" color="#d97706" show={!safe} />

          {/* jiwa jalur aman */}
          <motion.path
            d="M 180 128 C 300 128, 300 200, 340 200 C 380 200, 380 120, 398 120"
            stroke={accent} strokeWidth="3" strokeDasharray="2 8"
            fill="none" strokeLinecap="round"
            initial={false}
            animate={safe ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.4, delay: safe ? 0.2 : 0 }}
          />
          <motion.g
            initial={false}
            animate={safe ? SHOW : EMPTY}
            transition={{ duration: 0.4, delay: safe ? 0.3 : 0 }}
          >
            <text x="210" y="126" textAnchor="middle" fontSize="12" fontWeight="800" fill={accent}>
              ✓ JALUR BEBAS HAMBATAN
            </text>
          </motion.g>

          {/* lampu terang saat aman */}
          <motion.rect
            x="190" y="24" width="40" height="14" rx="7" fill={accent}
            initial={false}
            animate={safe ? SHOW : EMPTY}
            transition={{ duration: 0.4, delay: 0.1 }}
          />
        </svg>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 bg-slate-50 px-5 py-4">
        <p className="max-w-md text-sm text-slate-600">
          {safe
            ? 'Jalur menuju kamar mandi kini aman: keset disingkirkan, kabel direkatkan ke dinding, handrail terpasang, dan lampu lorong menyala otomatis.'
            : 'Sorotan merah = bahaya yang paling sering membuat pasien jatuh di rumah. Mulai rapikan satu per satu.'}
        </p>
        <button
          onClick={() => setSafe((s) => !s)}
          className="inline-flex items-center gap-2 rounded-2xl px-6 py-3 text-base font-bold text-white shadow-lg transition"
          style={{ background: accent }}
        >
          <Icon name={safe ? 'restart' : 'sparkle'} className="h-5 w-5" />
          {safe ? 'Tampilkan Kondisi Awal' : 'Rapikan Ruangan Sekarang'}
        </button>
      </div>
    </div>
  )
}