import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Icon } from './Icon.jsx'
import { CATEGORY_META } from '../data/protocols.js'

export default function RoomChecklist({ categoryId, protocol }) {
  const meta = CATEGORY_META[categoryId]
  const [checked, setChecked] = useState({})
  const [roomDone, setRoomDone] = useState({})

  const totalItems = useMemo(() => protocol.rooms.reduce((s, r) => s + r.items.length, 0), [protocol])
  const checkedCount = Object.keys(checked).filter((k) => checked[k]).length
  const pct = Math.round((checkedCount / totalItems) * 100)

  const itemKey = (room, item) => `${room}::${item.text}`

  const toggle = (room, item) => {
    const k = itemKey(room, item)
    const next = { ...checked, [k]: !checked[k] }
    setChecked(next)
    const allDone = protocol.rooms.find((r) => r.room === room).items.every((it) => next[itemKey(room, it)])
    setRoomDone((rd) => ({ ...rd, [room]: !!allDone }))
  }

  const toggleRoom = (room) => {
    const r = protocol.rooms.find((x) => x.room === room)
    const allOn = r.items.every((it) => checked[itemKey(room, it)])
    const next = { ...checked }
    for (const it of r.items) next[itemKey(room, it)] = !allOn
    setChecked(next)
    setRoomDone((rd) => ({ ...rd, [room]: !allOn }))
  }

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-xl font-extrabold text-slate-900 sm:text-2xl">Checklist Ruangan</h2>
        <p className="mt-1.5 max-w-2xl text-slate-600">
          Periksa tiap titik rumah sebelum pasien tiba. Centang satu per satu — detail kecil yang sering terlewat
          justru paling sering menyebabkan kecelakaan.
        </p>
        <div className="mt-5 rounded-2xl bg-slate-50 px-5 py-4">
          <div className="flex items-center justify-between text-sm font-bold">
            <span className="text-slate-700">
              Keseluruhan rumah: <span style={{ color: meta.accent }}>{checkedCount}/{totalItems}</span> poin
            </span>
            <span className="text-slate-500">{pct}%</span>
          </div>
          <div className="mt-2 h-3 overflow-hidden rounded-full bg-slate-200">
            <motion.div
              className="h-full rounded-full"
              style={{ background: meta.accent }}
              animate={{ width: `${pct}%` }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            />
          </div>
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {protocol.rooms.map((room) => {
          const allOn = roomDone[room]
          return (
            <div key={room.room} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className={`flex items-center justify-between px-5 py-4 ${allOn ? 'bg-teal-50' : 'bg-slate-50'}`}>
                <div className="flex items-center gap-3">
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{ backgroundColor: `${meta.accent}1a`, color: meta.accent }}
                  >
                    <Icon name={room.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-extrabold text-slate-900">{room.room}</p>
                    <p className="text-xs font-bold" style={{ color: meta.accent }}>
                      {allOn ? '✓ Selesai diperiksa' : `${room.items.filter((it) => checked[itemKey(room.room, it)]).length}/${room.items.length} poin`}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => toggleRoom(room)}
                  className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-600 transition hover:border-teal-300 hover:text-teal-700"
                >
                  {allOn ? 'Batal' : 'Tandai semua'}
                </button>
              </div>
              <ul className="divide-y divide-slate-100">
                {room.items.map((item) => {
                  const k = itemKey(room.room, item)
                  const isChecked = !!checked[k]
                  return (
                    <li key={k}>
                      <button onClick={() => toggle(room.room, item)} className="flex w-full items-start gap-3.5 px-5 py-4 text-left transition hover:bg-teal-50/50">
                        <span
                          className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-2 transition ${
                            isChecked ? 'border-teal-600 bg-teal-600 text-white' : 'border-slate-300 bg-white text-transparent'
                          }`}
                        >
                          <Icon name="check" className="h-3.5 w-3.5" />
                        </span>
                        <span className="flex-1">
                          <span className={`block text-[15px] font-semibold leading-snug ${isChecked ? 'text-slate-400 line-through' : 'text-slate-800'}`}>
                            {item.text}
                          </span>
                          {item.note && (
                            <span className="mt-0.5 block text-xs text-slate-500">💡 {item.note}</span>
                          )}
                        </span>
                      </button>
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>

      {checkedCount === totalItems && (
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex items-center gap-4 rounded-3xl border border-emerald-200 bg-emerald-50 p-6"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500 text-white">
            <Icon name="home" className="h-6 w-6" />
          </span>
          <div>
            <p className="text-lg font-extrabold text-emerald-800">Rumah sudah siap terima pasien!</p>
            <p className="text-sm text-emerald-700">Semua poin selesai. Tetap ikuti jadwal kontrol dokter di rumah sakit.</p>
          </div>
        </motion.div>
      )}
    </div>
  )
}