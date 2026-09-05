/**
 * Service untuk mengakses literatur ilmiah & jurnal kesehatan publik (Open Access).
 * 1. Privasi Terjaga: 100% data literatur publik dari OpenAlex / Crossref — tanpa data pribadi pasien atau rekam medis.
 * 2. Pencegahan: Fokus pada mitigasi risiko pasca-rawat inap dan persiapan lingkungan rumah.
 * 3. Keandalan: Memiliki cadangan literatur terverifikasi jika koneksi internet pengguna terbatas.
 */

import { CATEGORY_META } from '../data/protocols.js'

// Query pencarian ilmiah per kategori (berbasis pencegahan & keselamatan rumah)
const SEARCH_QUERIES = {
  wound: 'surgical site infection prevention post discharge home wound care',
  stroke: 'stroke rehabilitation home environment fall prevention',
  joint: 'postoperative orthopedic fall risk home hazards arthroplasty',
  heart: 'heart failure post discharge medication adherence transition home',
  elderly: 'accidental falls elderly home modification prevention STEADI',
}

// Memory cache untuk menghindari fetch berulang
const evidenceCache = {}

/**
 * Mengambil jurnal pendukung dari OpenAlex API dengan fallback ke curated data
 * @param {string} categoryId
 * @returns {Promise<{ papers: Array, source: 'live' | 'curated', query: string }>}
 */
export async function getCategoryEvidence(categoryId) {
  if (evidenceCache[categoryId]) {
    return evidenceCache[categoryId]
  }

  const query = SEARCH_QUERIES[categoryId] || 'home healthcare patient safety'
  const fallbackPapers = CATEGORY_META[categoryId]?.curatedEvidence || []

  try {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 2500)

    const url = `https://api.openalex.org/works?search=${encodeURIComponent(query)}&per_page=2&sort=relevance_score:desc`
    const response = await fetch(url, {
      signal: controller.signal,
      headers: { Accept: 'application/json' },
    })
    clearTimeout(timeoutId)

    if (!response.ok) {
      throw new Error(`OpenAlex API HTTP ${response.status}`)
    }

    const data = await response.json()
    const results = data.results || []

    if (results.length > 0) {
      const parsedPapers = results.map((item) => {
        const authors = (item.authorships || [])
          .slice(0, 2)
          .map((a) => a.author?.display_name)
          .filter(Boolean)
          .join(', ') + (item.authorships?.length > 2 ? ' et al.' : '')

        const host = item.primary_location?.source?.display_name || 'Open Access Medical Journal'
        const doiUrl = item.doi || (item.ids?.openalex ? item.ids.openalex : '#')

        return {
          title: item.title || 'Panduan Keselamatan Pasien Berbasis Bukti Ilmiah',
          authors: authors || 'Tim Peneliti Kesehatan',
          journal: host,
          year: item.publication_year || 'Terbaru',
          doiUrl,
          takeaway: getTakeawaySummary(categoryId),
          sourceType: 'live',
        }
      })

      const finalData = {
        papers: parsedPapers,
        source: 'live',
        query,
      }
      evidenceCache[categoryId] = finalData
      return finalData
    }
  } catch (err) {
    // Fallback otomatis ke data literatur terkurasi jika koneksi lambat atau offline
    console.info(`[EvidenceService] Menggunakan literatur terkurasi untuk ${categoryId}:`, err.message)
  }

  const finalFallback = {
    papers: fallbackPapers.map((p) => ({ ...p, sourceType: 'curated' })),
    source: 'curated',
    query,
  }
  evidenceCache[categoryId] = finalFallback
  return finalFallback
}

/**
 * Ringkasan relevansi preventif sesuai kategori
 */
function getTakeawaySummary(categoryId) {
  switch (categoryId) {
    case 'wound':
      return 'Mendukung pentingnya teknik ganti perban aseptik dan sterilisasi permukaan untuk menurunkan risiko Infeksi Daerah Operasi (IDO).'
    case 'stroke':
      return 'Menjustifikasi pembukaan jalur bebas hambatan dan pemasangan handrail untuk mengurangi insiden jatuh pasca-stroke.'
    case 'joint':
      return 'Mendasari penyediaan alat bantu tumpuan dan lantai anti-slip bagi pasien pasca-tindakan ortopedi/tulang.'
    case 'heart':
      return 'Menegaskan pentingnya kotak obat harian dan pemantauan mandiri untuk mencegah komplikasi re-hospitalisasi jantung.'
    case 'elderly':
      return 'Mengacu pada algoritma pencegahan jatuh lansia (STEADI) melalui pencahayaan koridor dan penataan ergonomis rumah.'
    default:
      return 'Panduan keselamatan transisi rumah sakit ke rumah berbasis bukti ilmiah.'
  }
}

/**
 * Menghasilkan narasi alasan klinis (Explainable Rationale)
 * @param {string} categoryId
 * @param {object} scores
 * @returns {string}
 */
export function getClinicalRationale(categoryId, scores) {
  const topScore = scores[categoryId] ?? 0
  switch (categoryId) {
    case 'wound':
      return `Skor kesesuaian luka (+${topScore}) menunjukkan adanya luka aktif atau bekas operasi yang membutuhkan penggantian perban berkala. Prioritas utama dialihkan ke pencegahan kontaminasi dan kepatuhan teknik aseptik rumah.`
    case 'stroke':
      return `Skor kesesuaian stroke (+${topScore}) terindikasi dari keterbatasan mobilitas dan riwayat gangguan neurologis. Fokus ditujukan pada eliminasi rintangan koridor dan titik tumpu aman untuk mencegah cedera sekunder.`
    case 'joint':
      return `Skor ortopedi (+${topScore}) terpicu oleh kondisi patah tulang atau pasca-tindakan sendi. Rekomendasi diprioritaskan pada penyesuaian tinggi kursi, ramp, dan alat bantu jalan untuk membatasi beban sendi.`
    case 'heart':
      return `Skor pemulihan jantung (+${topScore}) teridentifikasi dari riwayat kardiovaskular dan rutinitas obat khusus. Kebutuhan kritis berpusat pada penataan jadwal obat 7 hari dan lingkungan istirahat bebas stres.`
    case 'elderly':
      return `Skor lansia (+${topScore}) mencerminkan usia lanjut dengan ketergantungan aktivitas harian. Intervensi berfokus pada mitigasi risiko jatuh melalui pencahayaan lorong otomatis dan kamar mandi anti-slip.`
    default:
      return `Skor dihitung berdasarkan akumulasi kuesioner transisi pulang untuk memastikan rumah siap sebelum pasien tiba.`
  }
}
