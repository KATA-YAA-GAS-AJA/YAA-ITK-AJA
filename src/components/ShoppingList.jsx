import { useMemo } from 'react'
import { Icon } from './Icon.jsx'
import { CATEGORY_META } from '../data/protocols.js'
import { downloadShoppingListPDF } from '../lib/pdf.js'
import { buildWhatsAppMessage } from '../lib/waMessage.js'

const URGENCY_LABEL = { wajib: 'Prioritas Utama', disarankan: 'Disarankan', opsional: 'Pendukung' }
const URGENCY_STYLE = {
  wajib: 'bg-rose-100 text-rose-800 border-rose-200',
  disarankan: 'bg-amber-100 text-amber-800 border-amber-200',
  opsional: 'bg-slate-100 text-slate-700 border-slate-200',
}

export default function ShoppingList({ categoryId, protocol }) {
  const meta = CATEGORY_META[categoryId]

  const groups = useMemo(() => {
    const g = {}
    for (const it of protocol.shopping) {
      g[it.group] = g[it.group] ?? []
      g[it.group].push(it)
    }
    return g
  }, [protocol])

  const items = protocol.shopping
  const waText = buildWhatsAppMessage(categoryId, items)
  const waLink = `https://wa.me/?text=${encodeURIComponent(waText)}`

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-teal-100 text-teal-800">
                <Icon name="cart" className="h-4 w-4" />
              </span>
              <h2 className="text-xl font-extrabold text-slate-900 sm:text-2xl">Saran Perlengkapan &amp; Logistik</h2>
            </div>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-600">
              Rekomendasi perlengkapan esensial untuk kebutuhan perawatan di rumah ({meta.short}).
              Disusun sebagai bahan bacaan dan panduan bagi keluarga saat mempersiapkan kebutuhan pasien.
            </p>
          </div>
          <div className="flex flex-wrap gap-2.5">
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white shadow-md shadow-emerald-600/20 transition hover:bg-emerald-700"
            >
              <Icon name="whatsapp" className="h-4 w-4" /> Bagikan ke WhatsApp
            </a>
            <button
              onClick={() => downloadShoppingListPDF(categoryId, items, {})}
              className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 shadow-xs transition hover:border-teal-300 hover:text-teal-700"
            >
              <Icon name="printer" className="h-4 w-4" /> Simpan PDF
            </button>
          </div>
        </div>
      </div>

      <div className="grid gap-5">
        {Object.entries(groups).map(([group, list]) => (
          <div key={group} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-100 bg-slate-50/80 px-6 py-4">
              <p className="font-extrabold text-slate-900 text-sm sm:text-base">{group}</p>
            </div>
            <div className="divide-y divide-slate-100 p-2 sm:p-4">
              {list.map((it) => (
                <div key={it.item} className="flex flex-col gap-2 p-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-base font-bold text-slate-900">{it.item}</h3>
                      <span className={`rounded-full border px-2.5 py-0.5 text-[11px] font-bold ${URGENCY_STYLE[it.urgency]}`}>
                        {URGENCY_LABEL[it.urgency]}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                      💡 <span className="font-medium text-slate-700">Tujuan penggunaan:</span> {it.purpose}
                    </p>
                  </div>
                  <div className="shrink-0 mt-2 sm:mt-0">
                    <span className="inline-flex items-center gap-1.5 rounded-xl bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-700">
                      Estimasi: {it.qty} {it.unit}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-3xl border border-teal-200 bg-teal-50/80 p-5">
        <div className="flex items-start gap-3">
          <Icon name="shield" className="mt-0.5 h-5 w-5 shrink-0 text-teal-700" />
          <p className="text-xs leading-relaxed text-teal-900">
            <b>Catatan Keluarga:</b> Jumlah di atas adalah rekomendasi stok awal untuk 1–2 minggu. Anda tidak wajib membeli semuanya sekaligus, sesuaikan dengan barang yang sudah Anda miliki di rumah atau instruksi dari dokter/perawat rumah sakit.
          </p>
        </div>
      </div>
    </div>
  )
}