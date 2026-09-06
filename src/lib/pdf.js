import { CATEGORY_META, SHARED_DISCLAIMER } from '../data/protocols.js'

const TEAL = [15, 118, 110]
const SLATE = [71, 85, 105]
const DARK = [15, 23, 42]
const LIGHT = [241, 245, 249]

function wrap(doc, text, maxWidth) {
  const lines = []
  const words = String(text).split(/\s+/)
  let line = ''
  for (const w of words) {
    const test = line ? line + ' ' + w : w
    if (doc.getTextWidth(test) > maxWidth && line) {
      lines.push(line)
      line = w
    } else {
      line = test
    }
  }
  if (line) lines.push(line)
  return lines
}

// Write a bullet + text that wraps, advancing the y cursor manually.
function bullet(doc, text, x, y, maxWidth, lineHeight) {
  doc.setFillColor(...TEAL)
  doc.circle(x - 2.6, y - 1.4, 0.9, 'F')
  const lines = wrap(doc, text, maxWidth)
  if (lines.length === 0) lines.push('')
  lines.forEach((l, i) => {
    doc.text(l, x, y + i * lineHeight)
  })
  return y + lines.length * lineHeight
}

export async function downloadShoppingListPDF(categoryId, items, checkedMap) {
  const { jsPDF } = await import('jspdf')
  const doc = new jsPDF({ unit: 'mm', format: 'a4' })
  const meta = CATEGORY_META[categoryId]
  const W = doc.internal.pageSize.getWidth()
  const H = doc.internal.pageSize.getHeight()
  const M = 16
  const maxW = W - M * 2
  const LH = 6.2
  let y = 0

  const newPageIfNeeded = (futureY) => {
    if (futureY > H - 22) {
      doc.addPage()
      return 22
    }
    return futureY
  }

  // Header band
  doc.setFillColor(...TEAL)
  doc.rect(0, 0, W, 34, 'F')
  doc.setTextColor(255, 255, 255)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(20)
  doc.text('RumahSiap — Daftar Belanja Cerdas', M, 16)
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(11)
  doc.setTextColor(204, 251, 241)
  doc.text(`${meta.name}  •  Smart Shopping List`, M, 24)
  doc.setFontSize(9)
  doc.text(`${meta.refSource}`, M, 30)

  // Grouped items
  const groups = {}
  for (const it of items) {
    groups[it.group] = groups[it.group] ?? []
    groups[it.group].push(it)
  }

  let first = true
  for (const [g, list] of Object.entries(groups)) {
    y = first ? 44 : y + 7
    y = newPageIfNeeded(y + 12)
    doc.setFillColor(...LIGHT)
    doc.roundedRect(M, y - 5, maxW, 7.5, 1.5, 1.5, 'F')
    doc.setTextColor(...TEAL)
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(11)
    doc.text(g.toUpperCase(), M + 2, y)
    doc.setTextColor(...DARK)
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(10)
    for (const it of list) {
      const checked = checkedMap?.[it.item] ?? false
      const qty = it.qty ? `${it.qty} ${it.unit}` : ''
      const text = `${checked ? '[x]' : '[ ] '} ${it.item}${qty ? '  —  ' + qty : ''}`
      y = newPageIfNeeded(y + LH)
      y = bullet(doc, text, M, y, maxW - 12, LH) + 1
    }
    first = false
  }

  // Purchase notes
  y = y + 6
  y = newPageIfNeeded(y + 20)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(11)
  doc.setTextColor(...SLATE)
  doc.text('Catatan pembelian', M, y)
  y += 3
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(9.5)
  const notes = [
    'Tunjukkan daftar ini ke apotek/supermarket — staf dapat membantu mencari pengganti merek yang setara.',
    'Jumlah di atas adalah estimasi stok awal (1–2 minggu). Sesuaikan dengan saran staf apotek/Rumah Sakit.',
  ]
  for (const n of notes) {
    y = bullet(doc, n, M, y, maxW - 12, LH)
    y += 1
  }

  // Evidence / Journal citations
  if (meta.curatedEvidence && meta.curatedEvidence.length > 0) {
    y = y + 5
    y = newPageIfNeeded(y + 22)
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(10)
    doc.setTextColor(...TEAL)
    doc.text('Dasar Ilmiah & Rujukan Terbuka (Open Access Evidence)', M, y)
    y += 4
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(8)
    doc.setTextColor(...SLATE)
    for (const ev of meta.curatedEvidence) {
      const citeText = `${ev.title} — ${ev.journal} (${ev.year}) [${ev.doiUrl}]`
      y = bullet(doc, citeText, M, y, maxW - 12, 4.5)
      y += 0.8
    }
  }

  // Disclaimer box
  y = y + 6
  const discLines = wrap(doc, SHARED_DISCLAIMER, maxW - 10)
  const boxH = discLines.length * 4.6 + 14
  y = newPageIfNeeded(y + boxH + 4)
  doc.setDrawColor(...TEAL)
  doc.setFillColor(240, 253, 250)
  doc.setLineWidth(0.6)
  doc.roundedRect(M, y, maxW, boxH, 2, 2, 'FD')
  doc.setTextColor(...TEAL)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(8.5)
  doc.text('PENTING — BATAS KESELAMATAN', M + 5, y + 6)
  doc.setTextColor(...SLATE)
  doc.setFont('helvetica', 'normal')
  let ly = y + 10
  for (const l of discLines) {
    doc.text(l, M + 5, ly)
    ly += 4.6
  }

  doc.save(`RumahSiap-Daftar-Belanja-${meta.short.replace(/\s+/g, '-')}.pdf`)
}