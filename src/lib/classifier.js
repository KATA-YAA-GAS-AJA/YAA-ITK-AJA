import { QUESTIONS } from '../data/questions.js'
import { CATEGORY_META } from '../data/protocols.js'

const CATEGORY_IDS = Object.keys(CATEGORY_META)

// Urutan tie-break berdasar tingkat urgensi keselamatan di rumah.
const TIEBREAK_ORDER = ['wound', 'stroke', 'heart', 'joint', 'elderly']

/**
 * Klasifikasi rule-based (retrieval-only):
 * 1) jumlahkan skor tiap opsi ke 5 kategori,
 * 2) ambil skor tertinggi,
 * 3) pecah seri dengan prioritas keselamatan.
 * Tidak menghasilkan teks baru — hanya memilih template statis.
 */
export function classify(answers) {
  const scores = { wound: 0, stroke: 0, joint: 0, heart: 0, elderly: 0 }

  for (const q of QUESTIONS) {
    const pick = answers[q.id]
    if (pick === undefined || pick === null) continue
    const option = q.options[pick]
    if (!option) continue
    for (const key of CATEGORY_IDS) {
      scores[key] += option.scores[key] ?? 0
    }
  }

  const ranked = CATEGORY_IDS.slice().sort((a, b) => {
    const d = scores[b] - scores[a]
    if (d !== 0) return d
    return TIEBREAK_ORDER.indexOf(a) - TIEBREAK_ORDER.indexOf(b)
  })

  const top = ranked[0]
  const second = ranked[1]
  const margin = scores[top] - scores[second]

  return {
    categoryId: top,
    scores,
    ranking: ranked,
    margin,
    isMixed: margin <= 1,
    meta: CATEGORY_META[top],
  }
}

export function summaryLine(result) {
  const total = CATEGORY_IDS.reduce((s, k) => s + result.scores[k], 0)
  return CATEGORY_IDS.map((k) => result.scores[k] / Math.max(total, 1))
}