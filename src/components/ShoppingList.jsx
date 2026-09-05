import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Icon } from './Icon.jsx'
import { CATEGORY_META } from '../data/protocols.js'
import { downloadShoppingListPDF } from '../lib/pdf.js'
import { buildWhatsAppMessage } from '../lib/waMessage.js'

const URGENCY_LABEL = { wajib: 'Wajib', disarankan: 'Disarankan', opsional: 'Opsional' }
const URGENCY_STYLE = {
  wajib: 'bg-rose-100 text-rose-700',
  disarankan: 'bg-amber-100 text-amber-700',
  opsional: 'bg-slate-100 text-slate-600',
}

export default function ShoppingList({ categoryId, protocol }) {
  const meta = CATEGORY_META[categoryId]
  const [checked, setChecked] = useState({})

  const groups = useMemo(() => {
    const g = {}
    for (const it of protocol.shopping) {
      g[it.group] = g[it.group] ?? []
      g[it.group].push(it)
    }
    return g
  }, [protocol])

  const items = protocol.shopping
  const checkedCount = items.filter((it) => checked[it.item]).length
  const totalCount = items.length
  const pct = Math.round((checkedCount / totalCount) * 100)

  const toggle = (item) => setChecked((c) => ({ ...c, [item]: !c[item] }))
  const toggleGroup = (group) => {
    const list = groups[group]
    const allOn = list.every((it) => checked[it.item])
    const next = { ...checked }
    for (const it of list) next[it.item] = !allOn
    setChecked(next)
  }

  const waText = buildWhatsAppMessage(categoryId, items)
  const waLink = `https://wa.me/?text=${encodeURIComponent(waText)}`

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-xl font-extrabold text-slate-900 sm:text-2xl">Daftar Belanja Cerdas</h2>
            <p className="mt-1.5 max-w-xl text-slate-600">
              Stok awal ±2 minggu sesuai logistik perawatan <b>{meta.short}</b>. Centang sambil dibeli,
              lalu cetak PDF atau kirim ke apotek via WhatsApp.
            </p>
          </div>
          <div className="flex gap-2.5">
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-emerald-500 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-500/25 transition hover:bg-emerald-600"
            >
              <Icon name="whatsapp" className="h-5 w-5" /> WhatsApp
            </a>
            <button
              onClick={() => downloadShoppingListPDF(categoryId, items, checked)}
              className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-slate-900/20 transition hover:bg-slate-700"
            >
              <Icon name="printer" className="h-5 w-5" /> Cetak PDF
            </button>
          </div>
        </div>

        <div className="mt-6 rounded-2xl bg-slate-50 px-5 py-4">
          <div className="flex items-center justify-between text-sm font-bold">
            <span className="text-slate-700">
              Progres belanja: <span style={{ color: meta.accent }}>{checkedCount}/{totalCount}</span> item
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

      {Object.entries(groups).map(([group, list]) => {
        const on = list.every((it) => checked[it.item])
        return (
          <div key={group} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50 px-5 py-3.5">
              <p className="font-extrabold text-slate-900">{group}</p>
              <button
                onClick={() => toggleGroup(group)}
                className={`rounded-lg px-3 py-1.5 text-xs font-bold transition ${
                  on ? 'bg-teal-600 text-white' : 'bg-white text-slate-600 border border-slate-200 hover:border-teal-300'
                }`}
              >
                {on ? '✓ Semua dibeli' : 'Tandai semua'}
              </button>
            </div>
            <ul className="divide-y divide-slate-100">
              {list.map((it) => {
                const isChecked = !!checked[it.item]
                return (
                  <li key={it.item}>
                    <button onClick={() => toggle(it.item)} className="flex w-full items-center gap-4 px-5 py-4 text-left transition hover:bg-teal-50/50">
                      <span
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border-2 transition ${
                          isChecked ? 'border-teal-600 bg-teal-600 text-white' : 'border-slate-300 bg-white text-transparent'
                        }`}
                      >
                        <Icon name="check" className="h-4 w-4" />
                      </span>
                      <span className="flex-1">
                        <span className={`block text-base font-bold ${isChecked ? 'text-slate-400 line-through' : 'text-slate-900'}`}>
                          {it.item}
                        </span>
                        <span className="mt-0.5 block text-sm text-slate-500">{it.purpose}</span>
                      </span>
                      <span className="hidden shrink-0 items-center gap-1.5 text-sm font-extrabold text-slate-700 sm:flex">
                        <Icon name="cart" className="h-4 w-4 text-slate-400" />
                        {it.qty} {it.unit}
                      </span>
                      <span className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-bold ${URGENCY_STYLE[it.urgency]}`}>
                        {URGENCY_LABEL[it.urgency]}
                      </span>
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>
        )
      })}

      <div className="rounded-3xl border border-teal-200 bg-teal-50 p-6">
        <div className="flex items-start gap-3">
          <Icon name="shield" className="mt-0.5 h-5 w-5 shrink-0 text-teal-700" />
          <p className="max-w-3xl text-sm leading-relaxed text-teal-800">
            <b>Catatan pembelian:</b> Jumlah di atas adalah estimasi stok awal dan tidak terkait dosis obat.
            Tunjukkan daftar ini ke apotek untuk memastikan kesetaraan produk. Jangan pernah mengubah dosis obat
            tanpa instruksi dokter.
          </p>
        </div>
      </div>
    </div>
  )
}