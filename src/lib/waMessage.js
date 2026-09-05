import { CATEGORY_META } from '../data/protocols.js'

export function buildWhatsAppMessage(categoryId, items) {
  const meta = CATEGORY_META[categoryId]
  const lines = [
    `Halo, saya mencari barang berikut untuk kebutuhan perawatan pasien di rumah (${meta.short}):`,
    '',
  ]
  const groupOrder = []
  const groups = {}
  for (const it of items) {
    if (!groups[it.group]) { groups[it.group] = []; groupOrder.push(it.group) }
    groups[it.group].push(it)
  }
  for (const g of groupOrder) {
    lines.push(`*${g}*`)
    for (const it of groups[g]) {
      lines.push(`• ${it.item} — ${it.qty} ${it.unit}`)
    }
    lines.push('')
  }
  lines.push('Terima kasih!')
  return lines.join('\n')
}