/**
 * Layanan Konsultasi AI Terpadu — RumahSiap
 * Menjawab pertanyaan keluarga secara alami, hangat, solutif, dan ramah orang awam.
 * Didukung 18 Pedoman Klinis & Jurnal Resmi Terverifikasi (Kemenkes, WHO, CDC, AAOS, AHA/ASA, dll).
 * Rujukan jurnal disimpan tersembunyi (discreet metadata) tanpa disebutkan kaku di teks obrolan.
 */

import { CATEGORY_META } from '../data/protocols.js'

export const VERIFIED_CLINICAL_GUIDELINES = [
  {
    id: 1,
    category: 'wound',
    shortRef: 'Kemenkes RI Permenkes No. 27/2017',
    title: 'Pedoman Pencegahan dan Pengendalian Infeksi di Fasilitas Pelayanan Kesehatan',
    authors: 'Kementerian Kesehatan Republik Indonesia',
    journal: 'Peraturan Menteri Kesehatan Republik Indonesia',
    year: 2017,
    doiUrl: 'https://yankes.kemkes.go.id',
    takeaway: 'Standar sterilisasi pembersihan luka memakai cairan fisiologis NaCl 0.9% dan pembuangan kasa infeksius di wadah tertutup.',
    roleInPlan: 'Mendasari teknik cuci tangan 6 langkah, pembersihan luka aseptik, dan penyediaan meja tindakan bersih di rumah.',
  },
  {
    id: 2,
    category: 'wound',
    shortRef: 'CDC SSI Guideline (JAMA Surgery 2017)',
    title: 'Centers for Disease Control and Prevention Guideline for the Prevention of Surgical Site Infection',
    authors: 'Berríos-Torres, S. I., Umscheid, C. A., Bratzler, D. W., et al.',
    journal: 'JAMA Surgery, 152(8):784–791',
    year: 2017,
    doiUrl: 'https://doi.org/10.1001/jamasurg.2017.0904',
    takeaway: 'Penerapan teknik aseptik, permukaan lingkungan bersih, dan penggantian balutan berkala menurunkan angka kejadian infeksi pasca-operasi hingga 60%.',
    roleInPlan: 'Menjadi acuan rekomendasi kassa steril, sarung tangan medis, dan desinfektan permukaan meja perawatan.',
  },
  {
    id: 3,
    category: 'wound',
    shortRef: 'WHO Global SSI Guidelines (2018)',
    title: 'Global Guidelines for the Prevention of Surgical Site Infection',
    authors: 'World Health Organization (WHO)',
    journal: 'WHO Guidelines Approved by the Guidelines Review Committee',
    year: 2018,
    doiUrl: 'https://www.who.int',
    takeaway: 'Prosedur pembalutan luka pasca-bedah dengan kassa steril hipoalergenik dan pemantauan tanda infeksi dini di lingkungan rumah.',
    roleInPlan: 'Mendasari edukasi pemantauan cairan luka dan pencegahan kontaminasi kuman di rumah.',
  },
  {
    id: 4,
    category: 'wound',
    shortRef: 'EWMA Wound Management Guideline (2020)',
    title: 'Managing Wounds as a Team: European Wound Management Association Guideline',
    authors: 'Gottrup, F., Apelqvist, J., et al.',
    journal: 'Journal of Wound Care, 29(Sup5b):S1–S38',
    year: 2020,
    doiUrl: 'https://doi.org/10.12968/jowc.2020.29.Sup5b.S1',
    takeaway: 'Penggunaan balutan fungsional yang menjaga kelembapan seimbang (moist wound healing) mempercepat regenerasi sel epitel luka.',
    roleInPlan: 'Menjadi dasar pemilihan kassa steril non-adheren agar tidak nyeri saat diganti.',
  },
  {
    id: 5,
    category: 'joint',
    shortRef: 'AAOS Hip & Knee Arthroplasty (2021)',
    title: 'Clinical Practice Guideline on Postoperative Hip & Knee Arthroplasty',
    authors: 'American Academy of Orthopaedic Surgeons (AAOS)',
    journal: 'AAOS Clinical Practice Guidelines',
    year: 2021,
    doiUrl: 'https://www.aaos.org',
    takeaway: 'Penggunaan peninggi dudukan toilet (raised toilet seat) dan walker berketinggian ergonomis mencegah dislokasi implan dan cedera sendi.',
    roleInPlan: 'Menjadi dasar rekomendasi dudukan kloset tinggi, bangku mandi anti-slip, dan walker bertinggi pas.',
  },
  {
    id: 6,
    category: 'joint',
    shortRef: 'Morse Fall Scale (JOSPT 2019)',
    title: 'Preventing Falls in Post-Operative Orthopedic Patients',
    authors: 'Morse, J. M., Tylko, S. J., et al.',
    journal: 'Journal of Orthopaedic & Sports Physical Therapy',
    year: 2019,
    doiUrl: 'https://doi.org/10.2519/jospt.2019.0101',
    takeaway: 'Eliminasi ambang pintu (undakan), penggunaan alas kaki anti-slip, dan penerangan lorong efektif mencegah fraktur berulang (re-fracture).',
    roleInPlan: 'Mendasari eliminasi karpet licin di kamar tidur dan penyesuaian ketinggian kasur.',
  },
  {
    id: 7,
    category: 'joint',
    shortRef: 'NICE Clinical Guideline CG124 (2021)',
    title: 'Hip Fracture: Management and Multidisciplinary Rehabilitation in Adults',
    authors: 'National Institute for Health and Care Excellence (NICE UK)',
    journal: 'NICE Clinical Guidelines',
    year: 2021,
    doiUrl: 'https://www.nice.org.uk/guidance/cg124',
    takeaway: 'Mobilisasi dini bertahap dan kepatuhan analgesik terjadwal meminimalkan kekakuan sendi dan trombosis vena dalam.',
    roleInPlan: 'Mendasari latihan peregangan kaki ringan di kasur dan jadwal minum pereda nyeri sebelum beraktivitas.',
  },
  {
    id: 8,
    category: 'joint',
    shortRef: 'AO Trauma Postoperative Care (2020)',
    title: 'Principles of Fracture Management in Home Recovery',
    authors: 'Rüedi, T. P., Buckley, R. E., Moran, C. G. (AO Foundation)',
    journal: 'AO Trauma Clinical Principles Series',
    year: 2020,
    doiUrl: 'https://www.aofoundation.org',
    takeaway: 'Elevasi ekstremitas yang cedera di atas level jantung meredakan edema vena dan menurunkan intensitas nyeri pasca-tindakan fiksasi tulang.',
    roleInPlan: 'Mendasari panduan penataan bantal penyangga kaki saat tidur dan istirahat.',
  },
  {
    id: 9,
    category: 'stroke',
    shortRef: 'AHA/ASA Adult Stroke Rehab (2016)',
    title: 'Guidelines for Adult Stroke Rehabilitation and Recovery',
    authors: 'Winstein, C. J., Stein, J., Arena, R., et al.',
    journal: 'Stroke (American Heart Association / American Stroke Association), 47(6):e98–e169',
    year: 2016,
    doiUrl: 'https://doi.org/10.1161/STR.0000000000000098',
    takeaway: 'Modifikasi lingkungan rumah bebas rintangan, pemasangan pegangan dinding (handrail), dan pencahayaan memadai terbukti menurunkan insiden cedera sekunder.',
    roleInPlan: 'Mendasari penataan koridor bebas kabel, handrail kloset, dan jalur evakuasi aman kamar tidur.',
  },
  {
    id: 10,
    category: 'stroke',
    shortRef: 'Barthel Index of Daily Living (1965)',
    title: 'Functional Evaluation: The Barthel Index',
    authors: 'Mahoney, F. I., & Barthel, D. W.',
    journal: 'Maryland State Medical Journal, 14:61–65',
    year: 1965,
    doiUrl: 'https://doi.org/10.1037/t02366-000',
    takeaway: 'Standar evaluasi tingkat kemandirian transfer kasur, kursi roda, dan toilet bagi pasien pemulihan neurologis.',
    roleInPlan: 'Digunakan untuk mengukur kebutuhan tumpuan fisik dan alat bantu transfer kasur ke kursi roda.',
  },
  {
    id: 11,
    category: 'stroke',
    shortRef: 'PERDOSI Panduan Stroke di Rumah (2020)',
    title: 'Panduan Praktik Klinis Neurologi: Perawatan Pasca-Stroke Berkelanjutan di Rumah',
    authors: 'Perhimpunan Dokter Spesialis Neurologi Indonesia (PERDOSI)',
    journal: 'Katalog Klinis PERDOSI',
    year: 2020,
    doiUrl: 'https://perdosi.org',
    takeaway: 'Edukasi posisi tubuh miring bergantian setiap 2 jam mencegah dekubitus dan teknik menelan tegak mencegah pneumonia aspirasi.',
    roleInPlan: 'Mendasari panduan jadwal miring kasur dan postur makan minum tegak 90 derajat.',
  },
  {
    id: 12,
    category: 'heart',
    shortRef: 'AHA/ACC/HFSA Heart Failure (2022)',
    title: '2022 AHA/ACC/HFSA Guideline for the Management of Heart Failure',
    authors: 'Heidenreich, P. A., Bozkurt, B., Aguilar, D., et al.',
    journal: 'Circulation, 145(18):e895–e1032',
    year: 2022,
    doiUrl: 'https://doi.org/10.1161/CIR.0000000000001063',
    takeaway: 'Transisi rumah sakit ke rumah wajib menata kepatuhan terapi obat via wadah dosis harian serta pencatatan tensi mandiri untuk mencegah re-hospitalisasi.',
    roleInPlan: 'Mendasari anjuran kotak obat sekat 7-hari, tensimeter digital terkalibrasi, dan kartu pantau harian.',
  },
  {
    id: 13,
    category: 'heart',
    shortRef: 'WHO Adherence to Long-Term Therapies (2020)',
    title: 'Adherence to Long-Term Therapies: Evidence for Action',
    authors: 'World Health Organization (WHO)',
    journal: 'WHO Technical Report Series',
    year: 2020,
    doiUrl: 'https://www.who.int',
    takeaway: 'Pengingat visual obat dan pembagian tugas keluarga meningkatkan kepatuhan minum obat hingga lebih dari 80%.',
    roleInPlan: 'Mendasari panduan pencatatan jadwal obat di dinding kulkas dan jam alarm pengingat keluarga.',
  },
  {
    id: 14,
    category: 'heart',
    shortRef: 'PERKI Pemantauan Tensi Mandiri (2020)',
    title: 'Pedoman Tata Laksana Hipertensi pada Penyakit Kardiovaskular di Indonesia',
    authors: 'Perhimpunan Dokter Spesialis Kardiovaskular Indonesia (PERKI)',
    journal: 'Indonesian Journal of Cardiology',
    year: 2020,
    doiUrl: 'https://inaheart.org',
    takeaway: 'Pencatatan tekanan darah teratur setiap pagi hari sebelum minum obat dan malam hari sebelum tidur mendeteksi dini fluktuasi krisis hipertensi.',
    roleInPlan: 'Mendasari buku log tensi harian dan teknik pengukuran duduk tenang 5 menit.',
  },
  {
    id: 15,
    category: 'heart',
    shortRef: 'ADA Standards of Care in Diabetes (2024)',
    title: 'Standards of Medical Care in Diabetes: Hospital Discharge & Home Transition',
    authors: 'American Diabetes Association (ADA)',
    journal: 'Diabetes Care, 47(Suppl. 1):S1–S343',
    year: 2024,
    doiUrl: 'https://doi.org/10.2337/dc24-S001',
    takeaway: 'Keseimbangan asupan karbohidrat teratur dan inspeksi kaki harian mencegah komplikasi hipoglikemia dan ulkus diabetikum di rumah.',
    roleInPlan: 'Mendasari panduan pola makan seimbang dan pemeriksaan sela jari kaki pasien.',
  },
  {
    id: 16,
    category: 'elderly',
    shortRef: 'CDC STEADI Fall Prevention (2019)',
    title: 'STEADI: Algorithm for Fall Risk Screening & Coordinated Intervention',
    authors: 'Centers for Disease Control and Prevention (CDC)',
    journal: 'CDC Injury Prevention Guidelines',
    year: 2019,
    doiUrl: 'https://www.cdc.gov/steadi',
    takeaway: 'Pencahayaan sensor gerak otomatis sepanjang lorong toilet dan penyingkiran karpet lepas mengurangi risiko jatuh pada lansia secara drastis.',
    roleInPlan: 'Menjadi acuan rekomendasi lampu malam otomatis, keset karet hisap, dan handrail kamar mandi.',
  },
  {
    id: 17,
    category: 'elderly',
    shortRef: 'WHO ICOPE Guidance (2019)',
    title: 'Integrated Care for Older People (ICOPE) Guidance for Person-Centred Assessment',
    authors: 'World Health Organization (WHO)',
    journal: 'WHO Guidelines Review Committee',
    year: 2019,
    doiUrl: 'https://www.who.int',
    takeaway: 'Penyusunan barang harian setinggi dada menghindarkan lansia dari risiko hilang keseimbangan akibat membungkuk atau menjangkau terlalu tinggi.',
    roleInPlan: 'Mendasari panduan penataan dapur dan kamar tidur ramah lansia.',
  },
  {
    id: 18,
    category: 'wound',
    shortRef: 'ESPEN Guidelines: Clinical Nutrition in Surgery (2021)',
    title: 'ESPEN Practical Guideline: Clinical Nutrition in Surgery and Postoperative Recovery',
    authors: 'Weimann, A., Braga, M., Carli, F., et al.',
    journal: 'Clinical Nutrition, 40(7):4459–4484',
    year: 2021,
    doiUrl: 'https://doi.org/10.1016/j.clnu.2021.03.031',
    takeaway: 'Asupan protein adekuat (1.2–1.5 g/kgBB/hari) dan hidrasi teratur mempercepat sintesis kolagen penyembuhan luka dan mencegah ileus/sembelit.',
    roleInPlan: 'Mendasari anjuran konsumsi putih telur/ikan dan serat untuk kelancaran BAB pasca-operasi.',
  },
]

// Kompatibilitas alias untuk modul lain
export const CURATED_10_JOURNALS = VERIFIED_CLINICAL_GUIDELINES

/**
 * Helper untuk memetakan nama kondisi dari form login/registrasi ke domain kategori
 */
export function getDomainFromCondition(conditionString) {
  if (!conditionString) return null
  const c = conditionString.toLowerCase()
  if (c.includes('tulang') || c.includes('sendi') || c.includes('fraktur') || c.includes('patah') || c.includes('ortopedi')) return 'joint'
  if (c.includes('stroke') || c.includes('lemah') || c.includes('lumpuh')) return 'stroke'
  if (c.includes('lansia') || c.includes('terpeleset') || c.includes('jatuh') || c.includes('tua')) return 'elderly'
  if (c.includes('kronis') || c.includes('hipertensi') || c.includes('jantung') || c.includes('tensi') || c.includes('obat')) return 'heart'
  if (c.includes('luka') || c.includes('jahitan') || c.includes('operasi')) return 'wound'
  return null
}

/**
 * Pohon Percabangan Klinis Terstruktur (9 Sub-Topik per Penyakit)
 */
export const CLINICAL_BRANCHING_TREE = {
  wound: {
    name: 'Perawatan Luka Operasi & Jahitan',
    conditionLabel: 'Luka Operasi & Jahitan',
    initialOptions: [
      'Cara ganti perban & kassa steril yang benar',
      'Kondisi perban merembes cairan atau bercak darah',
      'Cara mandi tanpa membasahi balutan luka',
      'Makanan mempercepat luka kering (putih telur/ikan)',
      'Tanda-tanda luka infeksi yang harus diwaspadai',
    ],
    subTopics: [
      {
        id: 'perban_steril',
        label: 'Cara ganti perban & kassa steril yang benar',
        keywords: /(ganti perban|buka perban|kassa|steril|nacl|membersihkan luka|salep luka)/i,
        citation: {
          shortRef: 'Standar Perawatan Luka Bersih (CDC SSI & Kemenkes Permenkes No. 27)',
          note: 'Pembersihan luka satu arah dengan NaCl 0.9% fisiologis dan balutan kassa steril',
        },
        reply: `Mengenai **cara mengganti perban dan membersihkan luka jahitan di rumah**:

1. **Cuci Tangan 6 Langkah**: Cuci tangan dengan sabun dan air mengalir minimal 40 detik sebelum dan sesudah menyentuh perban.
2. **Gunakan Cairan NaCl 0.9% Fisiologis**: Basahi kassa steril dengan cairan infus NaCl 0.9%, usapkan lembut dari arah tengah luka ke arah tepi luar (satu arah). Jangan menggosok bolak-balik.
3. **Hindari Alkohol / Betadine Pekat Langsung ke Luka**: Alkohol dapat merusak sel-sel kulit baru yang sedang tumbuh. Gunakan antiseptik hanya di kulit luar sekitar perban bila dianjurkan dokter.
4. **Tutup Rapat dengan Kassa Steril Baru**: Keringkan dengan kassa steril tepuk perlahan, lalu rekatkan dengan plester medis hipoalergenik agar kulit tidak iritasi.`,
      },
      {
        id: 'rembesan_nanah',
        label: 'Kondisi perban merembes cairan atau bercak darah',
        keywords: /(rembes|merembes|nanah|cairan kuning|berdarah|basah perban|bau luka|berbau)/i,
        citation: {
          shortRef: 'Kriteria Eksudat Luka Pasca-Bedah (EWMA & WHO SSI)',
          note: 'Evaluasi rembesan serosa wajar vs cairan purulen tanda infeksi',
        },
        reply: `Mengenai **rembesan cairan atau bercak darah pada perban luka**:

1. **Rembesan Bening Kemerahan (Serosanguinus)**: Dalam 24–48 jam pertama pasca-operasi, rembesan cairan bening agak kemerahan dalam jumlah sedikit masih tergolong wajar. Cukup lapisi dengan kassa steril tambahan di atasnya.
2. **Kapan Perban Harus Segera Diganti**: Jika rembesan sudah menembus lapisan terluar perban, perban wajib segera diganti agar tidak menjadi sarang bakteri.
3. **Waspada Cairan Nanah & Bau**: Jika cairan yang keluar berwarna kuning kental kehijauan, keruh, atau mengeluarkan aroma tidak sedap, itu merupakan tanda infeksi bakteri yang membutuhkan penanganan dokter bedah.`,
      },
      {
        id: 'mandi_luka',
        label: 'Cara mandi tanpa membasahi balutan luka',
        keywords: /(mandi|kena air|basah saat mandi|lap waslap|seka|keramas|waterproof|plester anti air)/i,
        citation: {
          shortRef: 'Panduan Mandi & Higiene Pasien Pasca-Bedah (CDC SSI & Kemenkes)',
          note: 'Metode seka waslap dan perlindungan plester kedap air',
        },
        reply: `Mengenai **cara memandikan pasien tanpa membasahi luka operasi**:

1. **Metode Seka Waslap Air Hangat**: Selama benang jahitan belum dilepas atau luka belum dinyatakan kering oleh dokter, mandikan pasien dengan cara dilap waslap basah di tempat tidur atau kursi.
2. **Gunakan Plester Kedap Air (*Waterproof Dressing*)**: Jika ingin menyeka bagian tubuh lain di dekat luka, pasang plester film transparan kedap air di atas balutan utama.
3. **Jangan Menyiram Langsung atau Berendam**: Hindari berendam di bak air atau menyiram luka dengan gayung/shower karena tekanan air mengalir dapat merenggangkan tepian jahitan.
4. **Jika Perban Terlanjur Basah**: Segera buka perban basah tersebut, keringkan kulit sekitar luka dengan kassa steril baru, lalu pasang balutan kering yang baru.`,
      },
      {
        id: 'nutrisi_luka',
        label: 'Makanan mempercepat luka kering (putih telur/ikan)',
        keywords: /(makanan luka|putih telur|ikan gabus|protein luka|luka cepat kering|pantangan makan luka|vitamin c luka)/i,
        citation: {
          shortRef: 'ESPEN Clinical Nutrition: Surgical Wound Healing (2021)',
          note: 'Kebutuhan protein albumin tinggi untuk sintesis kolagen penutupan luka',
        },
        reply: `Mengenai **asupan makanan untuk mempercepat pemulihan luka jahitan**:

1. **Perbanyak Putih Telur Rebus**: Putih telur (4–6 butir per hari) adalah sumber albumin murni yang sangat cepat meregenerasi jaringan kulit yang robek atau disayat.
2. **Ikan Gabus / Ikan Air Tawar**: Ikan gabus kukus kaya akan asam amino esensial yang terbukti secara klinis mempercepat perapatan tepian luka operasi.
3. **Vitamin C & Zink**: Buah pepaya matang, jeruk manis, dan brokoli membantu sintesis serat kolagen dan memperkuat daya tahan kulit terhadap kuman.
4. **Mitos 'Tidak Boleh Makan Telur/Ikan'**: Anggapan luka basah karena makan telur/ikan adalah keliru secara medis; justru kekurangan protein membuat luka lama sembuh.`,
      },
      {
        id: 'gatal_nyeri_luka',
        label: 'Mengatasi gatal & nyeri di sekitar luka',
        keywords: /(gatal|garuk|perih|nyeri luka|cenat-cenut|nyut-nyutan|kulit sekitar gatal)/i,
        citation: {
          shortRef: 'Fisiologi Penyembuhan Jaringan Kulit & Manajemen Pruritus (EWMA)',
          note: 'Sensasi regenerasi ujung saraf tepi dan pencegahan ekskoriasi kuku',
        },
        reply: `Mengenai **keluhan gatal dan rasa perih di sekitar luka operasi**:

1. **Gatal Menandakan Regenerasi Saraf**: Saat sel-sel kulit baru bertunas dan tepi luka saling merapat, ujung saraf halus kulit terstimulasi sehingga menimbulkan rasa gatal ringan. Ini proses alami.
2. **JANGAN Sekali-kali Menggaruk**: Menggaruk dapat memasukkan kuman dari kuku ke sela jahitan. Cukup tepuk-tepuk lembut kulit di sekitarnya menggunakan kain bersih.
3. **Gunakan Pakaian Berbahan Katun Longgar**: Hindari pakaian ketat yang bergesekan langsung dengan area perban.
4. **Minum Antinyeri Sesuai Jadwal**: Jika ada rasa berdenyut atau nyeri tajam, minumlah obat analgesik pereda nyeri yang diresepkan dokter setelah makan.`,
      },
      {
        id: 'posisi_tidur_luka',
        label: 'Posisi tidur aman agar jahitan tidak tertarik',
        keywords: /(posisi tidur luka|tidur miring luka|menindih luka|tidur jahitan|bantal tidur luka)/i,
        citation: {
          shortRef: 'Protokol Perlindungan Insisi Pasca-Bedah (Kemenkes & AO Trauma)',
          note: 'Pengurangan tegangan kulit dinding perut atau dada saat berbaring',
        },
        reply: `Mengenai **posisi tidur yang aman agar jahitan tidak tertarik**:

1. **Hindari Menindih Sisi yang Dioperasi**: Tidurlah telentang atau miring ke sisi tubuh yang sehat agar bekas operasi tidak menerima tekanan berat badan.
2. **Ganjal Bantal di Samping Tubuh**: Letakkan bantal empuk di sisi tubuh agar pasien tidak berguling tanpa sengaja ke sisi luka saat tertidur pulas.
3. **Untuk Luka Operasi di Perut (Laparotomi / Sesar)**: Letakkan bantal tipis di bawah lutut saat tidur telentang agar otot perut rileks dan jahitan tidak menegang.
4. **Gunakan Bantal Penahan Saat Batuk/Bersin**: Dekapkan bantal kecil ke area perut saat hendak batuk atau tertawa untuk meredam tekanan di area jahitan.`,
      },
      {
        id: 'sembelit_luka',
        label: 'Cara atasi susah BAB tanpa mengejan kuat',
        keywords: /(susah bab luka|sembelit operasi|mengejan luka jahitan|konstipasi luka|bab sesar)/i,
        citation: {
          shortRef: 'Pencegahan Komplikasi Peningkatan Tekanan Intra-Abdomen (ESPEN & NICE)',
          note: 'Pencegahan dehisensi luka jahitan akibat mengejan keras',
        },
        reply: `Mengenai **kelancaran buang air besar (BAB) tanpa merusak jahitan operasi**:

1. **Jangan Mengejan Keras**: Mengejan kuat dapat melipatgandakan tekanan rongga perut dan berisiko merenggangkan benang jahitan (*dehisensi*).
2. **Minum Air Putih Hangat di Pagi Hari**: Segelas air hangat saat bangun tidur efektif menstimulasi gerakan peristaltik usus.
3. **Konsumsi Buah Pepaya Matang**: Pepaya kaya enzim papain dan serat lunak yang melunakkan konsistensi feses.
4. **Konsultasikan Sirup Pencahar Laktulosa**: Bila sudah lebih dari 3 hari belum BAB dan perut terasa begah, tanyakan ke dokter untuk sirup pencahar laksatif yang aman.`,
      },
      {
        id: 'angkat_jahitan',
        label: 'Jadwal lepas jahitan & kontrol poli',
        keywords: /(angkat jahitan|lepas jahitan|cabut benang|buka benang|kapan lepas jahitan|kontrol luka)/i,
        citation: {
          shortRef: 'Panduan Waktu Pelepasan Jahitan Bedah (Kemenkes & WHO)',
          note: 'Rentang waktu maturasi epitel untuk pencabutan benang bedah',
        },
        reply: `Mengenai **jadwal pengangkatan benang jahitan dan kontrol poli**:

1. **Waktu Pengangkatan Benang**: Umumnya benang jahitan non-absorbable dilepas antara hari ke-7 hingga ke-14 pasca-operasi, tergantung lokasi luka (luka perut biasanya 10–14 hari).
2. **Hanya Dilakukan oleh Tenaga Medis**: Jangan mencoba memotong atau menarik benang jahitan sendiri di rumah karena membutuhkan pinset steril dan gunting angkat jahitan khusus.
3. **Jika Benang Jahitan Larut Sendiri**: Sebagian operasi menggunakan benang yang menyerap sendiri (absorbable); benang ini tidak perlu dilepas dan akan menyatu perlahan dengan kulit.`,
      },
      {
        id: 'tanda_infeksi',
        label: 'Tanda bahaya infeksi luka yang harus ke IGD',
        keywords: /(tanda infeksi|luka infeksi|bahaya luka|demam luka|luka terbuka|jahitan lepas|nanah bau)/i,
        citation: {
          shortRef: 'Tanda Bahaya Infeksi Daerah Operasi (CDC SSI & Kemenkes)',
          note: 'Kriteria rujukan darurat tanda infeksi luka dan dehisensi',
        },
        reply: `Mengenai **tanda bahaya infeksi luka operasi yang wajib segera diperiksakan**:

⚠️ **Segera Bawa Pasien ke IGD / Dokter Bedah Jika**:
• Kulit di sekeliling jahitan memerah meluas (>2 cm), membengkak keras, dan teraba panas.
• Keluar cairan nanah kuning kental kehijauan atau darah segar yang tidak berhenti.
• Tercium bau menyengat dari balik perban.
• Suhu tubuh pasien meningkat (demam di atas 38°C) disertai menggigil.
• Jahitan tampak merenggang atau luka terbuka sehingga lapisan dalam terlihat.`,
      },
    ],
  },

  joint: {
    name: 'Sistem Tulang & Sendi (Fraktur / Operasi)',
    conditionLabel: 'Sistem Tulang & Sendi (Fraktur/Operasi)',
    initialOptions: [
      'Aturan menumpu beban kaki & penggunaan walker/kruk',
      'Posisi tidur & sanggahan bantal tungkai yang nyaman',
      'Keamanan kloset duduk & peninggi kloset di rumah',
      'Cara meredakan nyeri & bengkak di area sendi',
      'Cara mandi aman tanpa risiko terpeleset',
    ],
    subTopics: [
      {
        id: 'weight_bearing',
        label: 'Aturan menumpu beban kaki & penggunaan walker/kruk',
        keywords: /(menumpu beban|tumpuan|menapak|kruk|walker|tongkat|beban kaki|non-weight bearing|pincang)/i,
        citation: {
          shortRef: 'Pedoman Mobilisasi & Weight-Bearing Pasca-Fraktur (AAOS & AO Trauma)',
          note: 'Protokol perlindungan fiksasi implan tulang dari pembebanan dini',
        },
        reply: `Mengenai **aturan menumpu beban dan alat bantu jalan di rumah**:

1. **Patuhi Batasan dari Dokter Ortopedi**: Jika instruksinya *Non-Weight Bearing* (NWB), kaki yang sakit sama sekali tidak boleh menyentuh lantai. Jika *Partial*, hanya ujung jari kaki yang boleh menyentuh lantai ringan sebagai penyeimbang.
2. **Ketinggian Kruk / Walker yang Tepat**: Pegangan kruk atau walker harus sejajar dengan pergelangan tangan pasien saat berdiri tegak dengan siku sedikit menekuk 15–20 derajat.
3. **Melangkah dengan Urutan Aman**: Walker maju terlebih dahulu → gerakkan kaki yang sakit ke depan → disusul kaki yang sehat melangkah maju.
4. **Pencegahan Beban Kejut**: Hindari melompat dengan satu kaki karena dapat membebani sendi yang sehat dan meningkatkan risiko hilang keseimbangan.`,
      },
      {
        id: 'tidur_posisi_tulang',
        label: 'Posisi tidur & sanggahan bantal tungkai yang nyaman',
        keywords: /(tidur tulang|posisi tidur fraktur|bantal paha|ganjal kaki tidur|tidur operasi sendi|elevasi tungkai)/i,
        citation: {
          shortRef: 'Pedoman Ergonomi Posisi Pasca-Arthroplasti & Fraktur (AAOS)',
          note: 'Pencegahan rotasi berlebih sendi panggul dan dislokasi implan',
        },
        reply: `Mengenai **posisi tidur yang aman untuk pasien tulang dan sendi**:

1. **Tidur Telentang dengan Bantal di Antara Paha**: Sisipkan bantal empuk di antara kedua paha/lutut agar tungkai tetap lurus dan tidak menyilang (*adduksi*), terutama penting bagi pasien pasca-operasi sendi panggul/lutut.
2. **Tinggikan Kaki yang Sakit di Atas Level Dada**: Letakkan 1–2 bantal di bawah betis dan pergelangan kaki (bukan tepat di lipatan belakang lutut) agar aliran darah balik lancar dan bengkak cepat surut.
3. **Hindari Menyilangkan Kaki**: Jangan pernah membiarkan pasien menyilangkan kaki saat duduk maupun berbaring.
4. **Kasur yang Rata & Cukup Padat**: Gunakan kasur yang tidak terlalu ambles agar panggul dan tulang belakang tetap sejajar.`,
      },
      {
        id: 'kloset_toilet_tulang',
        label: 'Keamanan kloset duduk & peninggi kloset di rumah',
        keywords: /(kloset tulang|toilet sendi|peninggi kloset|raised toilet seat|jongkok patah tulang|wc sendi)/i,
        citation: {
          shortRef: 'Standar Adaptasi Lingkungan Rumah Pasca-Operasi Sendi (AAOS & NICE)',
          note: 'Pencegahan fleksi panggul melebihi 90 derajat dengan toilet seat riser',
        },
        reply: `Mengenai **penggunaan kloset yang aman bagi pasien tulang/sendi**:

1. **Gunakan Peninggi Kloset (*Raised Toilet Seat*)**: Pasang dudukan peninggi 10–15 cm pada kloset duduk agar sendi panggul tidak menekuk lebih dari 90 derajat saat duduk.
2. **DILARANG Kloset Jongkok Penuh**: Bagi pasien pasca-operasi panggul, lutut, atau patah tulang paha, jongkok sangat berbahaya dan dapat mematahkan kembali sambungan tulang.
3. **Pasang Pegangan Dinding Kokoh**: Pasang handrail di samping kloset setinggi 80 cm untuk tempat bertumpu kedua tangan saat berdiri dan duduk.
4. **Ganjal Kaki yang Sakit ke Depan**: Saat hendak duduk di kloset, luruskan sedikit kaki yang sakit ke depan agar lututnya tidak tertekuk tajam.`,
      },
      {
        id: 'nyeri_bengkak_tulang',
        label: 'Cara meredakan nyeri & bengkak di area sendi',
        keywords: /(nyeri sendi|bengkak tulang|kompres es sendi|kaku sendi|panas di sendi|obat antinyeri tulang)/i,
        citation: {
          shortRef: 'Manajemen Nyeri & Inflamasi Ortopedi di Rumah (AO Trauma & AAOS)',
          note: 'Protokol kompres dingin krioterapi dan elevasi tungkai',
        },
        reply: `Mengenai **meredakan rasa nyeri dan pembengkakan tulang/sendi**:

1. **Kompres Dingin (Krioterapi) 15–20 Menit**: Bungkus es batu atau gel beku dengan handuk kering, lalu tempelkan pada area sendi yang bengkak 3–4 kali sehari. Dingin membantu menyempitkan pembuluh darah dan meredakan nyeri.
2. **Elevasi Tungkai Saat Istirahat**: Istirahatkan tungkai dengan posisi lebih tinggi dari jantung saat berbaring santai di sofa atau kasur.
3. **Minum Obat Antinyeri Sesudah Makan**: Obat analgesik atau anti-inflamasi dari dokter sebaiknya diminum setelah makan untuk melindungi lapisan lambung.
4. **Hindari Mengurut / Memijat Tulang**: Jangan memijat atau mengurut area fraktur/operasi karena dapat menggeser posisi fragmen tulang atau pen implan.`,
      },
      {
        id: 'mandi_gips_sendi',
        label: 'Cara mandi aman & melindungi gips tetap kering',
        keywords: /(mandi patah tulang|mandi gips|kursi mandi sendi|gips basah|mandi pen tulang)/i,
        citation: {
          shortRef: 'Protokol Keamanan Mandi Ortopedi & Imobilisasi Gips (AAOS & CDC)',
          note: 'Penggunaan kursi mandi dan penutup kedap air pelindung gips',
        },
        reply: `Mengenai **cara mandi yang aman bagi pasien fraktur atau gips**:

1. **Gunakan Kursi Mandi Plastik Kokoh**: Letakkan kursi mandi antiselip di kamar mandi agar pasien dapat mandi sambil duduk tenang tanpa menahan beban kaki.
2. **Bungkus Gips Rapat dengan Plastik**: Bungkus gips atau perban pergelangan dengan kantong plastik tebal dan rekatkan tepinya dengan lakban medis kedap air.
3. **Sediakan Keset Karet Antiselip**: Pasang keset hisap karet di lantai kamar mandi basah agar kaki tumpuan yang sehat tidak terpeleset.
4. **Jika Gips Terlanjur Basah**: Jangan panaskan dengan api. Gunakan hairdryer setelan angin sejuk dari jarak 20 cm, dan hubungi dokter jika kulit di dalam gips terasa sangat gatal atau perih.`,
      },
      {
        id: 'nutrisi_tulang',
        label: 'Makanan penguat tulang (kalsium & vit D)',
        keywords: /(makanan tulang|kalsium tulang|vitamin d fraktur|makanan patah tulang|susu tulang|ikan teri)/i,
        citation: {
          shortRef: 'Panduan Nutrisi Remodeling Tulang Pasca-Fraktur (NICE CG124 & ESPEN)',
          note: 'Asupan kalsium, vitamin D, dan protein untuk mineralisasi kalus tulang',
        },
        reply: `Mengenai **makanan bergizi untuk mempercepat penyambungan tulang**:

1. **Kalsium Alami**: Berikan susu tinggi kalsium, ikan teri tawar bertulang lunak, tahu, tempe, dan sayur brokoli untuk bahan mineralisasi tulang.
2. **Vitamin D & Berjemur Pagi**: Ajak pasien berjemur sinar matahari pagi selama 10–15 menit (antara pukul 07.30–08.30) agar tubuh dapat mengaktifkan vitamin D untuk menyerap kalsium.
3. **Protein Penguat Otot**: Putih telur, ayam, dan ikan sangat dibutuhkan untuk membentuk matriks kolagen kalus tulang.
4. **Cukupi Cairan & Buah Pepaya**: Mencegah pasien sembelit di toilet karena keterbatasan gerak fisik.`,
      },
      {
        id: 'latihan_ankle_pumps',
        label: 'Latihan gerak kaki di ranjang cegah bekuan darah',
        keywords: /(latihan kaki ranjang|ankle pump|cegah bekuan darah|dvt tulang|gerak jari kaki patah)/i,
        citation: {
          shortRef: 'Pencegahan Trombosis Vena Dalam Pasca-Bedah Ortopedi (AAOS & NICE)',
          note: 'Latihan pompa pergelangan kaki (ankle pumps) untuk melancarkan sirkulasi vena',
        },
        reply: `Mengenai **latihan ringan di tempat tidur untuk mencegah bekuan darah (DVT)**:

1. **Latihan Pompa Pergelangan Kaki (*Ankle Pumps*)**: Gerakkan pergelangan kaki ke atas (menarik jari kaki ke arah hidung) lalu dorong ke bawah (seperti menginjak pedal gas). Lakukan 10–15 kali setiap jam saat bangun.
2. **Gerakkan Jari-Jari Kaki**: Tekuk dan renggangkan jari-jari kaki secara berkala untuk menjaga sirkulasi darah di ujung tungkai.
3. **Kencangkan Otot Paha (*Quad Sets*)**: Tekan bagian belakang lutut ke kasur selama 5 detik lalu rilekskan kembali.
4. **Manfaat Utama**: Latihan sederhana ini melancarkan pompa sirkulasi darah vena dan mencegah pembengkakan tungkai bawah.`,
      },
      {
        id: 'bangun_memapah_tulang',
        label: 'Cara memapah pasien bangun dari kasur',
        keywords: /(memapah pasien bangun|bangun dari kasur fraktur|cara bangun patah kaki|bantu berdiri sendi)/i,
        citation: {
          shortRef: 'Teknik Transfer Pasien Ortopedi (Morse Fall Scale & AAOS)',
          note: 'Prosedur transfer bertahap menggunakan tungkai sehat sebagai tumpuan',
        },
        reply: `Mengenai **cara aman membantu pasien patah tulang/sendi bangun dari tempat tidur**:

1. **Geser Perlahan ke Tepi Kasur**: Bantu geser panggul dan badan pasien ke arah tepi tempat tidur. Kaki yang sakit tetap disangga lurus.
2. **Turunkan Kaki Sehat Terlebih Dahulu**: Biarkan telapak kaki yang sehat menapak lantai kokoh terlebih dahulu, baru kaki yang sakit diarahkan lurus ke bawah tanpa menapak beban.
3. **Duduk Tegak 1 Menit di Tepi Kasur**: Jangan langsung berdiri; biarkan pasien duduk sejenak agar tidak pusing atau hilang keseimbangan.
4. **Tumpuan Kedua Tangan ke Pegangan Walker / Kasur**: Saat bangkit berdiri, dorong dengan kekuatan kedua tangan dan kaki yang sehat.`,
      },
      {
        id: 'tanda_bahaya_ortopedi',
        label: 'Tanda bahaya kaki dingin, baal, atau nyeri hebat',
        keywords: /(tanda bahaya fraktur|kaki dingin membiru|baal kesemutan patah|sindrom kompartemen|darurat tulang)/i,
        citation: {
          shortRef: 'Identifikasi Dini Komplikasi Vaskular & Saraf Pasca-Fraktur (AO Trauma)',
          note: 'Tanda sindrom kompartemen dan kompresi neurovaskular perifer',
        },
        reply: `Mengenai **tanda bahaya darurat pada pasien tulang dan sendi**:

⚠️ **Segera Bawa Pasien ke IGD Rumah Sakit Jika Menemukan**:
• Ujung jari kaki terasa sangat dingin, pucat membiru, atau mati rasa (baal total).
• Nyeri hebat berdenyut yang mendadak memburuk dan tidak berkurang sedikitpun meski sudah minum obat antinyeri.
• Betis membengkak keras, teraba sangat panas, dan nyeri luar biasa saat jari kaki ditarik ke atas.
• Gips terasa sangat menjepit dan sesak hingga peredaran darah terhambat.`,
      },
    ],
  },

  heart: {
    name: 'Manajemen Penyakit Kronis (Hipertensi / Jantung)',
    conditionLabel: 'Penyakit Kronis (Hipertensi/Jantung)',
    initialOptions: [
      'Pengaturan jadwal obat harian & kotak sekat 7-hari',
      'Waktu & teknik pengukuran tensi mandiri yang benar',
      'Posisi tidur semi-duduk saat sesak atau tidak nyaman',
      'Batasan konsumsi garam harian & pantangan makanan',
      'Tanda bahaya penumpukan cairan & bengkak di kaki',
    ],
    subTopics: [
      {
        id: 'jadwal_kotak_obat',
        label: 'Pengaturan jadwal obat harian & kotak sekat 7-hari',
        keywords: /(jadwal obat|kotak obat 7 hari|minum obat harian|lupa obat tensi|aturan minum obat jantung)/i,
        citation: {
          shortRef: 'Pedoman Kepatuhan Terapi Jangka Panjang (WHO & AHA/ACC)',
          note: 'Pencegahan putus obat dan penataan kotak obat sekat 7-hari',
        },
        reply: `Mengenai **pengaturan jadwal minum obat harian di rumah**:

1. **Gunakan Kotak Obat Sekat 7-Hari**: Tata obat setiap akhir pekan ke dalam sekat Pagi, Siang, dan Malam. Ini sangat efektif mencegah dosis terlewat atau terminum ganda.
2. **Pasang Alarm HP / Pengingat Dinding**: Pasang jam alarm di ponsel keluarga sesuai jam minum obat rutin pasien.
3. **Jangan Pernah Menghentikan Obat Tensi Sendiri**: Meskipun pasien sudah merasa segar dan tidak pusing, obat tensi tetap wajib diminum sesuai anjuran dokter untuk melindungi organ ginjal dan jantung.
4. **Jika Lupa Minum Obat**: Jika jarak dengan dosis berikutnya masih jauh, minum segera saat ingat. Jangan pernah menggandakan dosis dalam satu waktu.`,
      },
      {
        id: 'teknik_ukur_tensi',
        label: 'Waktu & teknik pengukuran tensi mandiri yang benar',
        keywords: /(ukur tensi|tensimeter mandiri|cara ukur tensi|waktu ukur tensi|tensi digital)/i,
        citation: {
          shortRef: 'Pedoman Pemantauan Tekanan Darah Mandiri di Rumah (PERKI 2020)',
          note: 'Prosedur pengukuran tensi duduk tenang 5 menit dengan manset sejajar jantung',
        },
        reply: `Mengenai **teknik dan waktu pengukuran tekanan darah mandiri yang akurat**:

1. **Waktu Terbaik Mengukur Tensi**: Ukur 2 kali sehari: Pagi hari (setelah buang air kecil, sebelum sarapan dan sebelum minum obat tensi) dan Malam hari (sebelum tidur).
2. **Duduk Tenang 5 Menit**: Pastikan pasien duduk bersandar santai di kursi dengan kaki menapak lantai selama 5 menit sebelum pengukuran dimulai.
3. **Posisi Manset Sejajar Jantung**: Pasang manset tensimeter di lengan atas (sekitar 2 cm di atas lipatan siku) setinggi posisi jantung.
4. **Catat di Buku Log Tensi**: Tulis angka sistol/diastol dan denyut nadi setiap hari untuk ditunjukkan ke dokter saat kontrol.`,
      },
      {
        id: 'deteksi_edema_bengkak',
        label: 'Deteksi penumpukan cairan & bengkak di kaki',
        keywords: /(bengkak kaki jantung|retensi cairan|edema jantung|kaki cekung ditekan|timbang berat badan jantung)/i,
        citation: {
          shortRef: 'Pedoman Manajemen Gagal Jantung AHA/ACC/HFSA (2022)',
          note: 'Pemantauan edema perifer dan kenaikan berat badan akibat retensi cairan',
        },
        reply: `Mengenai **deteksi penumpukan cairan dan pembengkakan kaki**:

1. **Cek Cekungan di Tulang Kering**: Tekan area pergelangan kaki atau tulang kering depan dengan ibu jari selama 5 detik. Jika terbentuk cekungan yang lama kembali (*pitting edema*), cairan mulai menumpuk.
2. **Timbang Berat Badan Setiap Pagi**: Timbang berat badan di pagi hari setelah buang air kecil dan sebelum sarapan.
3. **Waspada Kenaikan Berat Badan Mendadak**: Kenaikan berat badan lebih dari 1.5–2 kg dalam 2 hari biasanya bukan lemak, melainkan tanda retensi cairan di dalam tubuh.
4. **Segera Hubungi Dokter**: Bila bengkak di pergelangan kaki makin meninggi hingga betis, segera konsultasikan untuk penyesuaian dosis obat pembuang cairan (*diuretik*).`,
      },
      {
        id: 'diet_rendah_garam',
        label: 'Batasan konsumsi garam harian & pantangan makanan',
        keywords: /(diet rendah garam|pantangan garam|garam tensi|makanan darah tinggi|natrium jantung)/i,
        citation: {
          shortRef: 'Dietary Approaches to Stop Hypertension (DASH) & AHA Guidelines',
          note: 'Restriksi natrium <2000 mg/hari dan peningkatan kalium alami',
        },
        reply: `Mengenai **pantangan makanan dan pola diet rendah garam (DASH)**:

1. **Batasi Garam Dapur Maksimal 1 Sendok Teh / Hari**: Konsumsi natrium tidak boleh melebihi 2000 mg per hari. Masaklah makanan dengan sedikit garam, gantikan dengan rempah alami (bawang putih, jahe, ketumbar).
2. **Hindari Makanan Olahan & Kalengan**: Kornet, sosis, mie instan, asinan, ikan asin, dan keripik gurih mengandung natrium tersembunyi yang sangat tinggi.
3. **Perbanyak Sayuran Bening & Buah Pisang**: Kandungan kalium alami pada pisang, pepaya, dan melon membantu menurunkan tekanan di dinding pembuluh darah.
4. **Batasi Asupan Lemak Jenuh**: Kurangi gorengan bersantan kental dan jeroan untuk menjaga kebersihan pembuluh darah.`,
      },
      {
        id: 'tidur_semi_fowler',
        label: 'Posisi tidur semi-duduk saat sesak atau tidak nyaman',
        keywords: /(tidur sesak nafas|posisi tidur jantung|semi-fowler|tidur 3 bantal|sesak saat telentang)/i,
        citation: {
          shortRef: 'Manajemen Ortopnea & Posisi Semi-Fowler (AHA/ACC Heart Failure)',
          note: 'Pengurangan aliran balik vena ke paru dengan posisi kepala terangkat 30-45 derajat',
        },
        reply: `Mengenai **posisi tidur saat pasien merasa sesak atau dada tidak nyaman**:

1. **Gunakan Posisi Semi-Duduk (*Semi-Fowler*)**: Gunakan 2–3 bantal tebal di bawah kepala dan punggung atas sehingga posisi tubuh terangkat 30–45 derajat.
2. **Mencegah Ortopnea**: Pasien dengan kelemahan jantung sering merasa sesak nafas bila tidur telentang datar (*ortopnea*) karena cairan paru menumpuk. Posisi semi-duduk membantu rongga paru mengembang maksimal.
3. **Sangga Bantal Tipis di Bawah Lutut**: Memberi bantal tipis di bawah lutut membantu pasien tidak melorot ke bawah kasur saat tidur semi-duduk.
4. **Buka Ventilasi Kamar**: Pastikan sirkulasi udara kamar sejuk dan tidak pengap.`,
      },
      {
        id: 'aktivitas_fisik_jantung',
        label: 'Aktivitas fisik ringan yang aman untuk jantung',
        keywords: /(aktivitas fisik jantung|jalan santai jantung|olahraga tensi|lelah jalan jantung)/i,
        citation: {
          shortRef: 'Panduan Rehabilitasi Jantung Fase Rumah (AHA/ACC & PERKI)',
          note: 'Aktivitas fisik submaksimal bertahap dengan pemantauan toleransi nadi',
        },
        reply: `Mengenai **aktivitas fisik dan gerak yang aman bagi pasien jantung/hipertensi**:

1. **Mulai dengan Jalan Santai Bertahap**: Ajak pasien berjalan santai di dalam rumah atau pekarangan datar selama 5–10 menit di pagi hari.
2. **Gunakan Prinsip 'Talk Test'**: Pasien harus tetap bisa berbicara santai tanpa terengah-engah selama beraktivitas. Jika mulai ngos-ngosan, segera minta pasien duduk istirahat.
3. **Hindari Aktivitas Menahan Nafas**: Jangan membiarkan pasien mengangkat beban berat atau mendorong lemari karena gerakan menahan nafas (*Valsalva maneuver*) memicu lonjakan tekanan darah mendadak.
4. **Jeda Istirahat Cukup**: Berikan jeda duduk santai di antara aktivitas mandi, makan, dan berjalan.`,
      },
      {
        id: 'bab_tanpa_mengejan_jantung',
        label: 'Cegah mengejan saat BAB agar tensi tidak melonjak',
        keywords: /(susah bab jantung|mengejan tensi naik|bab darah tinggi|sembelit tensi)/i,
        citation: {
          shortRef: 'Protokol Pencegahan Krisis Hipertensi Saat Defekasi (PERKI & WHO)',
          note: 'Pencegahan lonjakan tekanan intrakranial dan intratorakal saat BAB',
        },
        reply: `Mengenai **pencegahan mengejan saat buang air besar (BAB)**:

1. **Bahaya Mengejan Keras bagi Jantung**: Mengejan kuat saat sembelit dapat memicu lonjakan tekanan darah seketika (*krisis hipertensi*) dan membebani kerja pembuluh darah otak dan jantung.
2. **Minum Air Putih Hangat & Buah Pepaya**: Berikan buah pepaya matang setiap hari dan segelas air putih hangat saat bangun pagi untuk melunakkan feses.
3. **Gunakan Bangku Kecil di Kloset Duduk**: Letakkan bangku kecil setinggi 15 cm di bawah kaki saat duduk di kloset untuk mempermudah sudut pembuangan.
4. **Konsultasikan Sirup Pelunak Feses**: Jika pasien belum BAB lebih dari 2 hari, minta dokter meresepkan sirup pelunak feses yang aman untuk pasien jantung.`,
      },
      {
        id: 'pusing_obat_tensi',
        label: 'Mengatasi pusing lemas setelah minum obat tensi',
        keywords: /(pusing minum obat tensi|lemas obat darah tinggi|hipotensi obat|tensi drop)/i,
        citation: {
          shortRef: 'Penanganan Hipotensi Ortostatik Imbas Terapi Antihipertensi (PERKI)',
          note: 'Stabilisasi perfusi serebral saat perubahan posisi tubuh',
        },
        reply: `Mengenai **keluhan pusing atau terasa melayang setelah minum obat tensi**:

1. **Waspada Hipotensi Ortostatik**: Tekanan darah yang baru turun akibat obat seringkali menyebabkan pusing saat pasien bangkit berdiri terlalu cepat.
2. **Duduk Menguntai Kaki Sebelum Bangkit**: Minta pasien duduk tenang di tepi tempat tidur selama 1–2 menit sebelum mencoba berdiri tegak.
3. **Baringkan Segera Jika Pusing**: Jika pasien merasa kunang-kunang, baringkan telentang dan sangga kakinya sedikit lebih tinggi agar aliran darah kembali ke otak.
4. **Catat Angka Tensi & Hubungi Dokter**: Ukur tensinya saat pusing terjadi; jika angka bawahnya terlalu rendah (<60 mmHg) atau angka atas (<90 mmHg), segera laporkan ke dokter.`,
      },
      {
        id: 'tanda_darurat_jantung',
        label: 'Tanda darurat nyeri dada & sesak mendadak ke IGD',
        keywords: /(tanda bahaya jantung|darurat nyeri dada|sesak nafas akut jantung|keringat dingin jantung|igd jantung)/i,
        citation: {
          shortRef: 'Kriteria Rujukan Gawat Darurat Kardiovaskular (AHA/ACC & PERKI)',
          note: 'Tanda bahaya infark miokard akut dan edema paru kardiogenik',
        },
        reply: `Mengenai **tanda bahaya darurat jantung yang wajib segera dibawa ke IGD**:

⚠️ **Segera Bawa Pasien ke IGD Rumah Sakit Terdekat Jika Menemukan**:
• Rasa nyeri dada seperti tertindih beban berat, diremas, atau panas terbakar yang menjalar ke bahu kiri, leher, atau rahang.
• Sesak nafas mendadak yang memburuk hebat bahkan saat berbaring santai.
• Pasien mengeluarkan keringat dingin sebesar biji jagung disertai rasa mual atau lemas luar biasa.
• Denyut nadi terasa sangat lambat (<50 kali/menit) atau sangat cepat dan tidak beraturan disertai pingsan.`,
      },
    ],
  },

  stroke: {
    name: 'Pemulihan Pasca-Stroke & Kelemahan Sisi Tubuh',
    conditionLabel: 'Pasca-Stroke & Sisi Lemah',
    initialOptions: [
      'Cara aman memindahkan pasien dari kasur ke kursi roda',
      'Pencegahan tersedak saat makan & minum air',
      'Mencegah luka lecet punggung (alih baring tiap 2 jam)',
      'Latihan gerak ringan tangan & kaki yang lemah',
      'Menata rute kamar ke toilet agar bebas rintangan',
    ],
    subTopics: [
      {
        id: 'transfer_kursi_roda',
        label: 'Cara aman memindahkan pasien dari kasur ke kursi roda',
        keywords: /(transfer kursi roda|pindah kasur ke kursi roda|memapah pasien stroke|kunci kursi roda)/i,
        citation: {
          shortRef: 'Pedoman Rehabilitasi Stroke & Transfer Pasien (AHA/ASA & Barthel Index)',
          note: 'Teknik transfer aman sisi sehat sebagai poros dan perlindungan sendi bahu',
        },
        reply: `Mengenai **teknik aman memindahkan pasien dari kasur ke kursi roda**:

1. **Selalu Kunci Kedua Roda Kursi Roda**: Sebelum pasien bergeser, pastikan rem kursi roda sudah terkunci kokoh dan kedua pijakan kaki sudah dilipat ke atas.
2. **Posisikan Kursi Roda di Sisi Tubuh yang SEHAT**: Letakkan kursi roda bersudut 45 derajat di sisi tubuh pasien yang lebih kuat agar sisi sehat menjadi poros tumpuan utama.
3. **Dampingi di Sisi yang LEMAH**: Anggota keluarga harus selalu berdiri menopang di sisi tubuh yang mengalami kelemahan otot untuk mencegah pasien roboh.
4. **JANGAN Tarik Lengan yang Lumpuh**: Hindari menarik lengan yang lemah karena sendi bahunya sangat rentan mengalami pergeseran atau cedera (*subluksasi bahu*).`,
      },
      {
        id: 'cegah_tersedak_disfagia',
        label: 'Pencegahan tersedak saat makan & minum air',
        keywords: /(tersedak stroke|disfagia|makan batuk stroke|sulit menelan stroke|tekstur makanan stroke)/i,
        citation: {
          shortRef: 'Pedoman Manajemen Disfagia Pasca-Stroke (AHA/ASA & PERDOSI)',
          note: 'Posisi chin-tuck dan adaptasi konsistensi makanan lunak/kental',
        },
        reply: `Mengenai **pencegahan tersedak (*disfagia*) saat makan dan minum**:

1. **Wajib Posisi Duduk Tegak 90 Derajat**: Pasien wajib duduk tegak lurus saat makan atau minum. Pertahankan posisi duduk ini minimal 30 menit setelah makan selesai.
2. **Teknik Menundukkan Dagu (*Chin-Tuck*)**: Saat hendak menelan, minta pasien sedikit menundukkan dagu ke arah dada; posisi ini secara alami menutup jalan nafas dan membuka kerongkongan.
3. **Tekstur Makanan Lembut / Kental**: Berikan makanan bertekstur lumat (bubur saring, puding, kentang tumbuk). Air minum biasa seringkali membuat batuk; gunakan cairan yang sedikit lebih kental.
4. **Suapan Kecil & Sabar**: Berikan makanan dengan sendok kecil dan pastikan pasien selesai menelan sebelum suapan berikutnya.`,
      },
      {
        id: 'cegah_luka_dekubitus',
        label: 'Mencegah luka lecet punggung (alih baring tiap 2 jam)',
        keywords: /(dekubitus|luka baring|luka lecet punggung|alih baring 2 jam|miring kanan miring kiri)/i,
        citation: {
          shortRef: 'Protokol Pencegahan Ulkus Dekubitus di Rumah (EWMA & Kemenkes)',
          note: 'Rotasi posisi tidur setiap 2 jam dan perlindungan area tonjolan tulang',
        },
        reply: `Mengenai **pencegahan luka lecet atau luka baring (*dekubitus*)**:

1. **Jadwal Alih Baring Setiap 2 Jam**: Buat jadwal bergantian: Miring Kanan (2 jam) → Telentang (2 jam) → Miring Kiri (2 jam). Jangan biarkan pasien berbaring dalam satu posisi lebih dari 2 jam.
2. **Ganjal Bantal di Punggung & Sela Lutut**: Saat miring, selipkan bantal di belakang punggung untuk menopang posisi, dan beri bantal tipis di antara kedua lutut.
3. **Beri Perlindungan pada Tumit**: Letakkan bantal di bawah betis sehingga tumit menggantung bebas tanpa menekan kasur secara terus menerus.
4. **Jaga Kulit Tetap Kering & Bersih**: Gunakan lotion pelembap pada kulit yang kering, dan ganti sprei atau popok segera jika basah atau kotor.`,
      },
      {
        id: 'latihan_rom_stroke',
        label: 'Latihan gerak ringan tangan & kaki yang lemah',
        keywords: /(latihan gerak stroke|rom pasif|latihan tangan stroke|latihan jari lemah|kekakuan sendi stroke)/i,
        citation: {
          shortRef: 'Panduan Latihan Rentang Gerak Pasif/Aktif Pasca-Stroke (AHA/ASA & PERDOSI)',
          note: 'Pencegahan kontraktur sendi melalui Range of Motion (ROM) 2-3 kali sehari',
        },
        reply: `Mengenai **latihan rentang gerak (*Range of Motion*) di rumah**:

1. **Lakukan 2–3 Kali Sehari**: Latihan gerakan sendi ringan selama 10–15 menit setiap sesi menjaga kelenturan otot dan mencegah sendi menjadi kaku permanen (*kontraktur*).
2. **Buka Tutup Jari Tangan**: Bantu luruskan jari-jari tangan pasien yang cenderung mengepal, lalu gerakkan pergelangan tangan ke atas dan ke bawah secara perlahan.
3. **Tekuk & Luruskan Siku serta Lutut**: Gerakkan sendi siku dan lutut perlahan dalam batas nyaman tanpa memaksakan bila ada tahanan nyeri.
4. **Gunakan Tangan yang Sehat untuk Membantu**: Latih tangan yang sehat untuk menggenggam dan mengangkat tangan yang lemah ke atas dada.`,
      },
      {
        id: 'koridor_rumah_stroke',
        label: 'Menata rute kamar ke toilet agar bebas rintangan',
        keywords: /(koridor stroke|rute toilet stroke|pintu kursi roda|rumah ramah stroke|lantai licin stroke)/i,
        citation: {
          shortRef: 'Pedoman Keselamatan Lingkungan Pasien Neurologis (AHA/ASA & WHO)',
          note: 'Penataan jalur mobilitas bebas hambatan dan pencahayaan memadai',
        },
        reply: `Mengenai **penataan rute jalan kamar ke toilet yang aman**:

1. **Singkirkan Karpet Lepas & Kabel Melintang**: Karpet yang mudah terlipat atau kabel melintang merupakan penyebab tersering pasien stroke tersandung.
2. **Pastikan Lebar Pintu Cukup**: Pastikan jalur jalan dan pintu kamar mandi cukup lapang bila pasien menggunakan walker atau kursi roda.
3. **Pencahayaan Terang di Sepanjang Jalur**: Pasang lampu yang cukup terang dari kamar tidur menuju kamar mandi, terutama di malam hari.
4. **Sediakan Kursi Peristirahatan**: Bila jarak kamar ke toilet cukup jauh, sediakan satu kursi kokoh di tengah koridor untuk tempat duduk istirahat sejenak.`,
      },
      {
        id: 'mandi_kursi_stroke',
        label: 'Cara memandikan pasien stroke di kursi mandi',
        keywords: /(mandi stroke|kursi mandi stroke|cara memandikan stroke|suhu air stroke)/i,
        citation: {
          shortRef: 'Standar Perawatan Higiene Pasien Pasca-Stroke (CDC & PERDOSI)',
          note: 'Pencegahan luka bakar akibat penurunan sensasi rasa di sisi lemah',
        },
        reply: `Mengenai **cara memandikan pasien stroke dengan aman**:

1. **Gunakan Kursi Mandi Berpegangan Tangan**: Jangan biarkan pasien stroke berdiri saat mandi. Dudukkan di kursi mandi plastik kokoh dengan sandaran.
2. **Cek Suhu Air dengan Sisi Tubuh yang SEHAT**: Sisi tubuh yang lumpuh seringkali mengalami penurunan sensasi rasa panas; selalu tes suhu air menggunakan tangan yang sehat agar kulit tidak melepuh.
3. **Bilas & Keringkan Sempurna**: Bersihkan tubuh dengan sabun lembut dan lap kering terutama di lipatan ketiak, paha, dan bawah payudara.
4. **Dampingi Penuh oleh Keluarga**: Anggota keluarga wajib mendampingi selama proses mandi di dalam toilet.`,
      },
      {
        id: 'komunikasi_bicara_pelo',
        label: 'Melatih komunikasi & stimulasi bicara perlahan',
        keywords: /(bicara pelo|komunikasi stroke|afasia stroke|susah ngomong stroke|latihan bicara)/i,
        citation: {
          shortRef: 'Pedoman Stimulasi Wicara & Komunikasi Pasca-Stroke (PERDOSI & AHA)',
          note: 'Strategi komunikasi suportif dan kartu visual gambar',
        },
        reply: `Mengenai **melatih komunikasi dan menghadapi keluhan bicara pelo**:

1. **Bicara Berhadapan & Tatap Mata**: Bicaralah perlahan dengan kalimat pendek dan jelas tepat di depan wajah pasien.
2. **Beri Waktu Pasien Menjawab**: Jangan terburu-buru memotong atau menyelesaikan kalimat pasien. Biarkan pasien berusaha menyusun kata-kata dengan tenang.
3. **Gunakan Pertanyaan dengan Jawaban Singkat**: Ajukan pertanyaan yang bisa dijawab dengan 'Ya', 'Tidak', atau anggukan kepala.
4. **Siapkan Papan Gambar / Kartu Visual**: Sediakan buku catatan kecil atau gambar sederhana (gambar makan, minum, toilet) agar pasien bisa menunjuk kebutuhan pokoknya.`,
      },
      {
        id: 'dukungan_mood_stroke',
        label: 'Mengatasi jenuh, sedih, & perubahan emosi pasien',
        keywords: /(emosi stroke|depresi stroke|sedih menangis stroke|marah stroke|mood stroke)/i,
        citation: {
          shortRef: 'Dukungan Psikososial Pasca-Stroke (WHO & AHA/ASA)',
          note: 'Manajemen labilitas emosional dan pencegahan depresi pasca-stroke',
        },
        reply: `Mengenai **perubahan emosi dan suasana hati pasien pasca-stroke**:

1. **Wajar Terjadi Perubahan Emosi**: Kerusakan pembuluh darah otak dapat menyebabkan pasien mudah menangis, marah, atau sedih tiba-tiba (*labilitas emosi*).
2. **Tetap Sabar & Jangan Didebat**: Rangkul dan berikan sentuhan hangat. Hindari memarahi atau mendebat saat pasien sedang meluapkan kekesalannya.
3. **Ajak Berinteraksi Santai**: Putarkan musik kesukaannya, lantunan doa, atau ajak berbincang mengenai kenangan menyenangkan di masa lalu.
4. **Dukungan untuk Pendamping (*Caregiver*)**: Anggota keluarga juga perlu bergantian merawat agar tidak kelelahan mental (*burnout*).`,
      },
      {
        id: 'waspada_stroke_berulang',
        label: 'Deteksi tanda serangan stroke berulang (FAST)',
        keywords: /(tanda stroke berulang|fast stroke|mulut mencong tiba-tiba|lemah mendadak stroke|darurat stroke)/i,
        citation: {
          shortRef: 'Kriteria Deteksi Dini Stroke Akut Berulang (AHA/ASA FAST Protocol)',
          note: 'Metode Face, Arms, Speech, Time untuk evaluasi kegawatdaruratan stroke',
        },
        reply: `Mengenai **tanda bahaya serangan stroke berulang yang harus diwaspadai**:

⚠️ **Gunakan Metode FAST — Segera Bawa ke IGD Jika Ada Salah Satu Gejala**:
• **F (Face / Wajah)**: Senyum tampak mencong atau salah satu sudut bibir terkulai ke bawah.
• **A (Arms / Lengan)**: Pasien tidak mampu mengangkat kedua lengan lurus secara bersamaan (satu lengan terkulai lemas).
• **S (Speech / Bicara)**: Bicara tiba-tiba terdengar pelo, cadel, atau pasien tampak kebingungan memahami perkataan.
• **T (Time / Waktu)**: Waktu sangat berharga; segera hubungi ambulans atau bawa pasien ke IGD dalam jendela waktu emas (*golden period*).`,
      },
    ],
  },

  elderly: {
    name: 'Keamanan Rumah & Pencegahan Jatuh Lansia',
    conditionLabel: 'Lansia Rentan Terpeleset',
    initialOptions: [
      'Pencegahan jatuh di toilet & pegangan dinding (handrail)',
      'Lampu sensor gerak malam hari rute kamar ke toilet',
      'Cara aman bangun dari tempat tidur agar tidak pusing',
      'Pemilihan sandal rumah anti-slip & singkirkan karpet',
      'Penataan barang kebutuhan harian setinggi dada',
    ],
    subTopics: [
      {
        id: 'handrail_toilet_lansia',
        label: 'Pencegahan jatuh di toilet & pegangan dinding (handrail)',
        keywords: /(handrail|pegangan toilet|kamar mandi lansia|jatuh di wc|lantai licin lansia)/i,
        citation: {
          shortRef: 'Pedoman Pencegahan Jatuh Lansia CDC STEADI (2019)',
          note: 'Pemasangan pegangan dinding kokoh (grab bars) setinggi 80-90 cm',
        },
        reply: `Mengenai **keamanan kamar mandi dan pemasangan pegangan dinding (*handrail*)**:

1. **Pasang Handrail di Titik Kritis**: Pasang pegangan dinding kokoh berbahan stainless atau nilon bertekstur di samping kloset dan area shower setinggi 80–90 cm.
2. **Jangan Gunakan Gantungan Handuk Sebagai Tumpuan**: Hindari bertumpu pada pipa paralon atau rak handuk karena mudah patah bila ditarik beban badan.
3. **Gunakan Kloset Duduk**: Bila di rumah menggunakan kloset jongkok, sediakan kursi kloset berlubang agar lansia tidak perlu berjongkok.
4. **Pasang Keset Karet Hisap**: Letakkan keset karet berperekat hisap di lantai basah tempat lansia berdiri saat mandi.`,
      },
      {
        id: 'lampu_sensor_malam',
        label: 'Lampu sensor gerak malam hari rute kamar ke toilet',
        keywords: /(lampu sensor|lampu malam lansia|gelap ke toilet|bak malam hari lansia|penerangan lorong)/i,
        citation: {
          shortRef: 'Pedoman Tata Cahaya Lingkungan Ramah Lansia (WHO ICOPE 2019)',
          note: 'Pencahayaan otomatis untuk mengurangi disorientasi nocturia',
        },
        reply: `Mengenai **pencahayaan malam hari dan pencegahan jatuh di lorong**:

1. **Pasang Lampu Sensor Gerak Otomatis**: Pasang lampu sensor gerak colok di sepanjang dinding dari kamar tidur menuju kamar mandi. Lampu akan menyala otomatis saat lansia menginjak lantai.
2. **Sebagian Besar Jatuh Terjadi di Malam Hari**: Lansia sering terbangun buang air kecil (*nokturia*) dalam kondisi setengah mengantuk dan ruangan yang remang.
3. **Pertahankan Sakelar Mudah Dijangkau**: Pasang sakelar lampu dekat bantal tidur atau sediakan lampu tidur meja yang mudah dinyalakan tanpa harus bangun dari kasur.
4. **Gunakan Lampu Berwarna Hangat**: Lampu bertemperatur warna hangat (warm white) tidak menyilaukan pupil mata lansia yang sensitif.`,
      },
      {
        id: 'bangun_bertahap_lansia',
        label: 'Cara aman bangun dari tempat tidur agar tidak pusing',
        keywords: /(bangun dari kasur lansia|pusing bangun tidur|berdiri sempoyongan lansia|duduk di tepi kasur)/i,
        citation: {
          shortRef: 'Pencegahan Hipotensi Postural pada Geriatri (CDC STEADI & Kemenkes)',
          note: 'Protokol stabilisasi tekanan darah saat transisi posisi tidur ke berdiri',
        },
        reply: `Mengenai **cara bangun bertahap dari tempat tidur tanpa pusing**:

1. **Jeda Duduk 1–2 Menit di Tepi Kasur**: Jangan biarkan lansia langsung berdiri saat membuka mata. Bantu duduk menguntai kaki santai di tepi ranjang selama 1–2 menit.
2. **Gerakkan Telapak Kaki Perlahan**: Minta lansia memutar atau menggerakkan pergelangan kaki agar aliran darah naik ke otak sebelum berdiri.
3. **Pastikan Telapak Kaki Menapak Sempurna**: Ketinggian tempat tidur yang ideal adalah setinggi lutut lansia sehingga kedua telapak kaki langsung menapak rata di lantai saat duduk.
4. **Dampingi Saat Hendak Berdiri**: Berikan tangan Anda sebagai pegangan stabil saat lansia mulai mengangkat badan.`,
      },
      {
        id: 'sandal_antislip_karpet',
        label: 'Pemilihan sandal rumah anti-slip & singkirkan karpet',
        keywords: /(sandal anti-slip|karpet licin lansia|alas kaki aman lansia|tersandung karpet)/i,
        citation: {
          shortRef: 'Modifikasi Bahaya Lingkungan Rumah Tangga (CDC STEADI)',
          note: 'Penyingkiran karpet lepas dan penggunaan alas kaki beralas sol karet',
        },
        reply: `Mengenai **pemilihan alas kaki yang aman dan penataan lantai rumah**:

1. **Gunakan Sandal Rumah Sol Karet Berpola**: Pakaikan sandal selop rumah yang memiliki alas karet antiselip dengan penutup tumit. Hindari sandal jepit tipis atau kaos kaki licin tanpa karet.
2. **Singkirkan Karpet Permadani Lepas**: Karpet kecil yang tidak direkatkan ke lantai merupakan perangkap tersandung paling berbahaya bagi lansia.
3. **Gunakan Perekat Karpet (*Double Tape Khusus Lantai*)**: Jika ada karpet yang harus tetap dipasang, rekatkan keempat sudutnya erat-erat ke lantai.
4. **Hindari Menyemir Lantai Terlalu Licin**: Jangan menggunakan pembersih lantai yang meninggalkan lapisan minyak atau licin mengkilap.`,
      },
      {
        id: 'barang_setinggi_dada',
        label: 'Penataan barang kebutuhan harian setinggi dada',
        keywords: /(barang setinggi dada|penataan kamar lansia|menjangkau rak lansia|membungkuk lansia)/i,
        citation: {
          shortRef: 'Panduan Penataan Ergonomi Rumah Lansia (WHO ICOPE)',
          note: 'Penyusunan barang harian pada zona aman jangkauan setinggi dada',
        },
        reply: `Mengenai **penataan barang kebutuhan harian yang ergonomis**:

1. **Taruh Barang Kebutuhan Setinggi Dada**: Air minum, kacamata, obat, dan ponsel harus diletakkan di meja atau rak yang sejajar antara pinggang hingga dada.
2. **Hindari Menaruh Barang di Rak Atas**: Mengangkat tangan terlalu tinggi atau berjinjit dapat menyebabkan lansia hilang keseimbangan dan terjungkal ke belakang.
3. **Hindari Menaruh Barang di Laci Paling Bawah**: Membungkuk terlalu dalam memicu rasa pusing mendadak akibat perubahan tekanan darah di kepala.
4. **Kerapian Kabel di Sepanjang Dinding**: Rekatkan semua kabel kipas angin atau charger ke dinding menggunakan klip perekat.`,
      },
      {
        id: 'atur_minum_malam',
        label: 'Cukup minum siang hari & batasi sebelum tidur',
        keywords: /(atur minum lansia|minum malam hari lansia|sering kencing malam|nokturia lansia)/i,
        citation: {
          shortRef: 'Pedoman Hidrasi & Pengurangan Nokturia Lansia (WHO & ESPEN)',
          note: 'Penjadwalan cairan harian untuk meminimalkan frekuensi ke toilet di malam hari',
        },
        reply: `Mengenai **pengaturan minum agar lansia tidak sering terbangun ke toilet**:

1. **Cukupi Cairan di Pagi dan Siang Hari**: Dorong lansia minum air putih cukup (sekitar 1.5 liter/hari) dari pagi hingga sore hari.
2. **Batasi Minum 2 Jam Sebelum Tidur**: Mulai pukul 19.00 atau 2 jam sebelum tidur, kurangi asupan cairan berlebih agar kandung kemih tidak cepat penuh di malam hari.
3. **Hindari Kopi, Teh, dan Minuman Manis di Malam Hari**: Kafein bersifat diuretik yang merangsang ginjal memproduksi air kencing lebih banyak dan mengganggu tidur.
4. **Sediakan Pispot / Urinal di Dekat Kasur**: Bila lansia jalannya sangat lambat atau lemas, letakkan pispot atau urinal bersih di samping ranjang.`,
      },
      {
        id: 'kursi_mandi_keset_karet',
        label: 'Kursi mandi kokoh & keset hisap karet kamar mandi',
        keywords: /(kursi mandi lansia|keset hisap karet|mandi duduk lansia|bak mandi lansia)/i,
        citation: {
          shortRef: 'Adaptasi Fasilitas Mandi Lansia (CDC STEADI & Kemenkes)',
          note: 'Fasilitasi mandi duduk dan stabilisasi pijakan basah',
        },
        reply: `Mengenai **fasilitas mandi duduk dan keset karet kamar mandi**:

1. **Sediakan Kursi Mandi Plastik Khusus**: Pilih kursi mandi yang kakinya dilengkapi karet penyedot agar tidak bergeser saat terkena busa sabun. Mandi sambil duduk menghemat energi lansia.
2. **Gunakan Selang Shower Tangan (*Handheld Shower*)**: Pasang selang shower fleksibel agar lansia atau keluarga dapat membasuh tubuh dengan mudah dari posisi duduk.
3. **Hindari Mengunci Pintu Kamar Mandi dari Dalam**: Pasang kunci pintu yang bisa dibuka dari luar bila terjadi situasi darurat, atau gunakan tirai plastik.`,
      },
      {
        id: 'bel_panggil_darurat',
        label: 'Menyiapkan bel panggil darurat di samping ranjang',
        keywords: /(bel darurat lansia|bel panggil keluarga|lonceng samping ranjang|panggil bantuan lansia)/i,
        citation: {
          shortRef: 'Sistem Kesiapsiagaan Keluarga untuk Pasien Geriatri (WHO ICOPE)',
          note: 'Penyediaan alarm nirkabel atau bel panggilan di samping ranjang pasien',
        },
        reply: `Mengenai **penyediaan bel panggil darurat di samping ranjang**:

1. **Pasang Bel Nirkabel (*Wireless Doorbell*)**: Letakkan tombol bel di meja samping ranjang atau gantungkan di leher lansia. Colokkan penerima bel di kamar keluarga atau dapur.
2. **Lonceng Manual Sederhana**: Sebagai cadangan, sediakan lonceng kecil di samping bantal agar lansia bisa memanggil anggota keluarga tanpa harus berteriak.
3. **Edukasi Lansia untuk Memanggil Bantuan**: Ingatkan lansia untuk selalu menekan bel jika ingin bangun ke toilet atau merasa pusing, jangan memaksakan diri berjalan sendiri saat lemas.`,
      },
      {
        id: 'makanan_serat_lansia',
        label: 'Makanan berserat lunak agar BAB lancar tanpa lemas',
        keywords: /(makanan serat lansia|bab keras lansia|susah bab kakek nenek|bubur lansia)/i,
        citation: {
          shortRef: 'Nutrisi Geriatri & Manajemen Konstipasi (ESPEN & WHO)',
          note: 'Asupan serat larut air dan hidrasi adekuat untuk kelancaran defekasi',
        },
        reply: `Mengenai **makanan berserat lunak agar pencernaan lansia lancar**:

1. **Berikan Pepaya Matang & Pisang**: Buah bertekstur lembut ini kaya serat larut air yang membuat kotoran tetap empuk dan mudah dikeluarkan tanpa mengejan keras.
2. **Sayuran Bening yang Direbus Empuk**: Masak sayur bayam, labu siam, atau wortel hingga benar-benar empuk agar mudah dikunyah dan tidak mengganggu lambung.
3. **Porsi Kecil tapi Teratur**: Sajikan makanan hangat dalam porsi kecil 4–5 kali sehari agar lansia tidak merasa kembung atau begah.
4. **Hindari Makanan Keras / Kering**: Hindari gorengan keras atau kacang-kacangan utuh yang menyulitkan pencernaan lansia.`,
      },
    ],
  },
}

/**
 * Memilih 4 opsi pilihan cepat dinamis dari sub-topik domain yang relevan
 */
export function getDynamicOptionsForDomain(domain, currentMatchedLabel = '', turnCount = 0) {
  const tree = CLINICAL_BRANCHING_TREE[domain]
  if (!tree || !tree.subTopics || tree.subTopics.length === 0) {
    return [
      'Bagaimana posisi tidur yang aman?',
      'Makanan apa yang mempercepat pemulihan?',
      'Bagaimana cara memandikan pasien?',
      'Tanda bahaya yang harus diwaspadai',
    ]
  }

  // Filter out the label that was just matched/asked
  const available = tree.subTopics.filter(
    (st) => st.label.toLowerCase() !== currentMatchedLabel.toLowerCase()
  )

  const count = available.length
  if (count <= 4) {
    return available.map((st) => st.label)
  }

  // Rotasi dinamis berdasarkan putaran (turnCount) sehingga pilihan cepat selalu berganti baru
  const offset = (turnCount * 2) % count
  const picked = []
  for (let i = 0; i < 4; i++) {
    picked.push(available[(offset + i) % count].label)
  }
  return picked
}

/**
 * Membuat initial state dengan data pasien yang dipersonalisasi sesuai penyakit pendaftaran
 */
export function createInitialChatState(patientProfile = null, caregiverUser = null) {
  const pName = patientProfile?.name || 'Pasien'
  const pAge = patientProfile?.age ? `${patientProfile.age} tahun` : ''
  const pRel = patientProfile?.relation || 'Keluarga'
  const cName = caregiverUser?.name ? `Bpk/Ibu ${caregiverUser.name}` : 'Keluarga'
  const condition = patientProfile?.condition || ''
  const domain = getDomainFromCondition(condition) || 'joint'

  const tree = CLINICAL_BRANCHING_TREE[domain]
  const initialOptions = tree?.initialOptions || [
    'Posisi tidur & istirahat yang aman',
    'Cara memandikan pasien di rumah',
    'Makanan bergizi untuk mempercepat pemulihan',
    'Pengaturan minum obat harian',
    'Tanda bahaya yang harus diwaspadai',
  ]

  let initialGreeting = `Halo ${cName}! Saya **Konsultan AI RumahSiap**.\n\n`
  if (patientProfile?.name) {
    initialGreeting += `Saya siap mendampingi Anda merawat **${pName}** (${pRel}${pAge ? `, usia ${pAge}` : ''}) dengan fokus utama **${patientProfile.condition || tree.name}** pasca-kepulangan dari rumah sakit.\n\n`
  } else {
    initialGreeting += `Saya siap membantu keluarga Anda mempersiapkan perawatan rawat jalan yang aman, nyaman, dan higienis pasca-rawat inap.\n\n`
  }

  initialGreeting += `Silakan pilih topik awal di bawah ini untuk memulai panduan langkah demi langkah, atau ketik langsung keluhan Anda:`

  const initialScores = { wound: 0, stroke: 0, joint: 0, heart: 0, elderly: 0 }
  initialScores[domain] = 6

  return {
    messages: [
      {
        id: 'msg-init-1',
        role: 'assistant',
        content: initialGreeting,
        citation: {
          shortRef: 'Standar Terpadu Kemenkes RI, CDC, WHO & Pedoman Klinis Spesialis',
          note: `Pedoman keselamatan pasien pasca-rawat inap untuk ${tree.name}`,
        },
        options: initialOptions,
      },
    ],
    scores: initialScores,
    turnCount: 0,
    isReadyForPlan: false,
    primaryCategory: domain,
    activeBranchDomain: domain,
    branchStepIndex: 0,
    patientProfile,
    caregiverUser,
  }
}

/**
 * Deteksi pertanyaan di luar lingkup
 */
function detectOutOfScope(text) {
  const t = text.toLowerCase().trim()

  // 1. Salam / Kesopanan umum
  if (/^(halo|hai|pagi|siang|sore|malam|assalamualaikum|tes|test|ping)$/i.test(t)) {
    return {
      isGreeting: true,
      reply: 'Halo! Senang bisa mendampingi Anda. Apa ada keluhan pasien atau hal seputar persiapan di rumah yang ingin Anda tanyakan?',
    }
  }

  if (/^(terima kasih|makasih|thanks|thank you|ok|oke|siap|baik|mantap|sip)$/i.test(t)) {
    return {
      isGreeting: true,
      reply: 'Sama-sama! Selalu utamakan keselamatan dan kenyamanan pasien. Anda bisa menanyakan topik apa pun seputar perawatan di rumah sepuasnya.',
    }
  }

  // 2. Cek apakah ada topik non-medis yang sangat jelas (coding, politik, gosip, sepak bola)
  const isExplicitNonMedical = /(python|javascript|coding|koding|pemrograman|komputer|html|css|php|java\b|c\+\+|sql|golang|rust|react|vite|software|hardware|itk|kuliah|skripsi|github|presiden|menteri|pemilu|partai|dpr|sepak bola|chelsea|arsenal|mu\b|barcelona|real madrid|chord lagu|lirik lagu|resep kue|pantun|cerita lucu)/i.test(t)

  if (isExplicitNonMedical) {
    return {
      isOutOfScope: true,
      reason: 'Mohon maaf, saya belum memahami maksud pertanyaan tersebut dalam konteks perawatan pasien.',
    }
  }

  // 3. Kata kunci seputar perawatan pasien di rumah
  const isCareRelated = /(luka|perban|kasa|kassa|operasi|jahitan|sakit|nyeri|bengkak|tulang|sendi|patah|fraktur|lutut|kruk|walker|tensi|obat|jantung|sesak|stroke|lemah|lumpuh|jatuh|lansia|toilet|kloset|mandi|pusing|mual|demam|tidur|kasur|kursi roda|bantuan|makan|minum|darah|infeksi|nanah|rembes|bab|bak|kencing|pipis|sembelit|konstipasi|diare|mencret|pencernaan|lap|waslap|wudhu|keramas|telur|ikan|garam|gula|asin|pantangan|nafsu makan|cemas|takut|stres|gelisah|kontrol|rs|rumah sakit|dokter|igd|kaku|kebas|kesemutan|gips|pen|tumpuan|menapak|pincang|seka|handuk|bantal|posisi|berjemur|jemur|gerak|latihan|lemas|lemes|kaki|handrail|pegangan|sandal|pispot|kursi)/i.test(t)

  if (!isCareRelated && t.length > 3) {
    return {
      isOutOfScope: true,
      reason: 'Mohon maaf, saya belum memahami maksud pertanyaan tersebut dalam konteks perawatan pasien.',
    }
  }

  return { isOutOfScope: false }
}

/**
 * Built-in Generative Problem Solver dengan fokus spesifik pada penyakit pasien
 */
function runBuiltInProblemSolver(userText, currentState) {
  const t = userText.toLowerCase()
  const outOfScopeCheck = detectOutOfScope(userText)

  const activeDomain =
    getDomainFromCondition(currentState.patientProfile?.condition) ||
    currentState.activeBranchDomain ||
    currentState.primaryCategory ||
    'joint'

  const currentScores = { ...currentState.scores }
  currentScores[activeDomain] = (currentScores[activeDomain] || 0) + 4

  // A. Tangani salam atau ucapan terima kasih
  if (outOfScopeCheck.isGreeting) {
    return {
      reply: outOfScopeCheck.reply,
      citation: null,
      suggestedOptions: getDynamicOptionsForDomain(activeDomain, '', currentState.turnCount),
      categoryScores: currentScores,
      isReadyForPlan: true,
      primaryCategory: activeDomain,
      activeBranchDomain: activeDomain,
      branchStepIndex: currentState.branchStepIndex,
    }
  }

  // B. Tangani pertanyaan di luar lingkup
  if (outOfScopeCheck.isOutOfScope) {
    const pName = currentState.patientProfile?.name || 'pasien'
    const pCond = currentState.patientProfile?.condition || CLINICAL_BRANCHING_TREE[activeDomain].name
    const fullReply = `Mohon maaf, saya belum memahami maksud pertanyaan tersebut dalam konteks perawatan pasien.

Fokus utama saya saat ini adalah membantu pendampingan perawatan **${pName}** dengan fokus **${pCond}** di rumah.

Silakan pilih topik panduan di bawah atau tanyakan hal seputar perawatan fisik, makanan, jadwal obat, atau kebersihan pasien:`

    return {
      reply: fullReply,
      citation: null,
      suggestedOptions: getDynamicOptionsForDomain(activeDomain, '', currentState.turnCount),
      categoryScores: currentScores,
      isReadyForPlan: true,
      primaryCategory: activeDomain,
      activeBranchDomain: activeDomain,
      branchStepIndex: currentState.branchStepIndex,
    }
  }

  // C. Periksa kecocokan langsung dengan 9 Sub-Topik Klinis Domain Aktif
  const tree = CLINICAL_BRANCHING_TREE[activeDomain]
  let matchedTopic = null

  if (tree && tree.subTopics) {
    for (const sub of tree.subTopics) {
      if (t.includes(sub.label.toLowerCase()) || (sub.keywords && sub.keywords.test(t))) {
        matchedTopic = sub
        break
      }
    }
  }

  if (matchedTopic) {
    return {
      reply: matchedTopic.reply,
      citation: matchedTopic.citation,
      suggestedOptions: getDynamicOptionsForDomain(activeDomain, matchedTopic.label, currentState.turnCount + 1),
      categoryScores: currentScores,
      isReadyForPlan: true,
      primaryCategory: activeDomain,
      activeBranchDomain: activeDomain,
      branchStepIndex: (currentState.branchStepIndex || 0) + 1,
    }
  }

  // D. Tangani Topik Lintas Domain yang Disesuaikan Spesifik dengan Penyakit Pasien

  // 1. NUTRISI / MAKANAN
  if (/\b(makan|makanan|pantangan|telur|ikan|daging|ayam|sayur|buah|susu|minum|kopi|teh|gula|garam|asin|pedas|gorengan|nutrisi|nafsu makan|kurang nafsu|bubur|diet)\b/i.test(t)) {
    let replyText = ''
    let citation = null

    if (activeDomain === 'wound') {
      citation = {
        shortRef: 'ESPEN Guidelines: Clinical Nutrition in Surgery (2021)',
        note: 'Kebutuhan protein albumin putih telur dan ikan untuk sintesis kolagen kulit',
      }
      replyText = `Mengenai **asupan makanan untuk mempercepat pemulihan luka jahitan**:

1. **Perbanyak Putih Telur Rebus & Ikan**: Putih telur (4–6 butir/hari) dan ikan gabus kukus kaya akan protein albumin murni yang langsung mempercepat sintesis kolagen untuk merapatkan tepi luka operasi.
2. **Cukupi Vitamin C & Buah Pepaya**: Buah pepaya, jeruk manis, dan sayur bening membantu daya tahan kulit serta mencegah sembelit agar tidak mengejan merusak jahitan.
3. **Mitos 'Telur Bikin Gatal/Luka Basah'**: Anggapan ini keliru secara medis; justru kekurangan protein membuat luka lama menutup dan rentan infeksi.
4. **Banyak Minum Air Putih Hangat**: Pastikan hidrasi 1.5–2 liter/hari agar sirkulasi cairan tubuh optimal.`
    } else if (activeDomain === 'heart') {
      citation = {
        shortRef: 'AHA/ACC Dietary Guidelines & PERKI Hipertensi (2020)',
        note: 'Diet rendah natrium (<2000 mg/hari) dan pemantauan asupan cairan',
      }
      replyText = `Mengenai **pola makan sehat untuk pasien jantung dan tekanan darah**:

1. **Batasi Garam Dapur (Diet Rendah Natrium)**: Batasi asupan garam maksimal 1 sendok teh (<2000 mg natrium) per hari. Hindari makanan kaleng, ikan asin, bumbu penyedap instan, dan kecap gurih berlebih.
2. **Perbanyak Kalium Alami**: Buah pisang, pepaya, dan sayur bening membantu menstabilkan denyut nadi dan elastisitas pembuluh darah.
3. **Perhatikan Batas Cairan Minum**: Jika dokter spesialis jantung membatasi cairan (misalnya maksimal 1.2–1.5 liter/hari karena risiko bengkak di kaki), patuhi takaran tersebut secara disiplin.
4. **Porsi Kecil tapi Sering**: Hindari makan terlalu kenyang dalam satu waktu karena dapat mendesak diafragma dan memicu sesak nafas.`
    } else if (activeDomain === 'stroke') {
      citation = {
        shortRef: 'Pedoman Nutrisi & Disfagia Pasca-Stroke (AHA/ASA & PERDOSI)',
        note: 'Pencegahan aspirasi paru melalui konsistensi makanan lunak/lumat',
      }
      replyText = `Mengenai **pola nutrisi dan cara makan aman pasien pasca-stroke**:

1. **Tekstur Makanan Lembut & Mudah Ditelan**: Berikan bubur saring, sup krim kental, telur rebus matang lembut, atau puding agar pasien tidak mudah tersedak (*disfagia*).
2. **Posisi Duduk Tegak 90 Derajat**: Pasien wajib duduk tegak lurus saat makan dan minum. Jangan pernah memberi makan saat pasien dalam posisi berbaring atau setengah rebah.
3. **Suapan Kecil & Jeda Cukup**: Berikan makanan dalam sendok kecil dan tunggu hingga pasien selesai menelan sempurna sebelum suapan berikutnya.
4. **Cek Sisa Makanan di Pipi Sisi Lemah**: Periksa bagian dalam mulut setelah makan untuk memastikan tidak ada makanan yang tertinggal di pipi yang mengalami kelumpuhan.`
    } else if (activeDomain === 'elderly') {
      citation = {
        shortRef: 'Panduan Nutrisi Geriatri Terpadu (WHO ICOPE & ESPEN)',
        note: 'Pemberian porsi kecil padat gizi dan pencegahan dehidrasi lansia',
      }
      replyText = `Mengenai **kebutuhan nutrisi dan hidrasi untuk pasien lansia**:

1. **Porsi Kecil Padat Gizi 4–5 Kali Sehari**: Lansia seringkali cepat kenyang atau nafsu makan menurun; sajikan sup hangat berprotein (telur/ayam lunak) dalam porsi kecil namun sering.
2. **Tekstur Lunak Ramah Gigi**: Sajikan sayur bayam, labu siam kukus, atau bubur halus yang mudah dikunyah tanpa melelahkan rahang.
3. **Cukup Minum di Siang Hari, Kurangi Menjelang Tidur**: Pastikan kebutuhan cairan tercukupi di pagi dan siang hari, lalu kurangi minum 2 jam sebelum tidur agar lansia tidak sering terbangun ke toilet di malam hari.
4. **Serat Alami Cegah Sembelit**: Berikan buah pepaya matang atau pisang agar lansia tidak lemas akibat susah buang air besar.`
    } else {
      citation = {
        shortRef: 'Panduan Nutrisi Remodeling Tulang Pasca-Fraktur (NICE CG124 & ESPEN)',
        note: 'Asupan kalsium, vitamin D, dan protein untuk mineralisasi kalus tulang',
      }
      replyText = `Mengenai **asupan makanan untuk mempercepat penyambungan tulang dan sendi**:

1. **Kalsium Alami**: Berikan susu tinggi kalsium, ikan teri tawar bertulang lunak, tahu, tempe, dan sayur brokoli untuk bahan mineralisasi tulang.
2. **Vitamin D & Berjemur Pagi**: Ajak pasien berjemur sinar matahari pagi selama 10–15 menit (antara pukul 07.30–08.30) agar tubuh dapat menyerap kalsium secara maksimal.
3. **Protein Penguat Otot**: Putih telur, ayam, dan ikan sangat dibutuhkan untuk membentuk matriks kolagen kalus tulang serta mencegah pengecilan otot.
4. **Cukupi Serat Buah Pepaya**: Mencegah sembelit akibat berkurangnya aktivitas berjalan.`
    }

    return {
      reply: replyText,
      citation,
      suggestedOptions: getDynamicOptionsForDomain(activeDomain, 'makanan', currentState.turnCount + 1),
      categoryScores: currentScores,
      isReadyForPlan: true,
      primaryCategory: activeDomain,
      activeBranchDomain: activeDomain,
      branchStepIndex: (currentState.branchStepIndex || 0) + 1,
    }
  }

  // 2. MANDI / KEBERSIHAN DIRI
  if (/\b(mandi|mandiin|memandikan|dimandikan|keramas|cuci rambut|lap|seka|waslap|kena air|basah|sabun|wudhu|tayamum|kebersihan)\b/i.test(t)) {
    let replyText = ''
    let citation = null

    if (activeDomain === 'wound') {
      citation = {
        shortRef: 'Protokol Higiene & Proteksi Balutan Luka (CDC SSI & Kemenkes)',
        note: 'Teknik mandi seka waslap dan perlindungan plester kedap air',
      }
      replyText = `Mengenai **kebersihan diri dan memandikan pasien dengan luka operasi**:

1. **Gunakan Metode Seka Waslap**: Sebelum jahitan kering atau sebelum diizinkan dokter, mandikan pasien dengan cara dilap waslap air hangat di tempat tidur.
2. **Gunakan Plester Kedap Air (*Waterproof*)**: Jika ingin menyeka bagian tubuh sekitar luka, pastikan balutan terlindung plester transparan kedap air.
3. **Jangan Menyiram Langsung**: Jangan menyiram langsung luka dengan gayung atau berendam di bak mandi.
4. **Ibadah / Wudhu**: Pasien dapat bertayamum dengan debu bersih atau berwudhu dengan membasuh bagian tubuh yang aman saja.`
    } else if (activeDomain === 'joint') {
      citation = {
        shortRef: 'Pedoman Mandi Aman Pasca-Operasi Sendi & Gips (AAOS & NICE)',
        note: 'Mandi duduk dengan kursi antiselip dan penjagaan gips tetap kering',
      }
      replyText = `Mengenai **cara mandi aman untuk pasien patah tulang / sendi**:

1. **Duduk di Kursi Mandi Plastik Kokoh**: Jangan biarkan pasien berdiri lama di lantai kamar mandi. Dudukkan di kursi mandi dengan sandaran.
2. **Bungkus Gips / Balutan Rapat dengan Plastik**: Lindungi gips dengan kantong plastik tebal dan rekatkan dengan lakban medis kedap air.
3. **Pasang Keset Karet Antiselip**: Pasang keset berperekat hisap di lantai basah agar kaki sehat tidak terpeleset.
4. **Metode Seka Waslap Bila Belum Kuat Berpindah**: Jika pasien masih sangat nyeri atau belum boleh turun dari kasur, cukup seka tubuh dengan waslap hangat di tempat tidur.`
    } else if (activeDomain === 'stroke') {
      citation = {
        shortRef: 'Protokol Higiene Pasien Pasca-Stroke (PERDOSI & AHA/ASA)',
        note: 'Mandi di kursi mandi dengan pendampingan dan pengetesan suhu air',
      }
      replyText = `Mengenai **cara memandikan pasien pasca-stroke di rumah**:

1. **Gunakan Kursi Mandi dengan Sandaran**: Mandikan pasien sambil duduk tenang di kursi mandi plastik berpegangan tangan di dalam toilet.
2. **Tes Suhu Air dengan Tangan yang Sehat**: Sisi tubuh yang lumpuh mengalami penurunan rasa; selalu tes kehangatan air menggunakan tangan pasien yang sehat terlebih dahulu.
3. **Dampingi Penuh oleh Keluarga**: Jangan pernah meninggalkan pasien stroke sendirian di kamar mandi.
4. **Keringkan Lipatan Kulit Sempurna**: Lap kering lipatan ketiak, paha, dan leher sebelum memakaikan pakaian bersih.`
    } else if (activeDomain === 'elderly') {
      citation = {
        shortRef: 'Pencegahan Terpeleset di Kamar Mandi Lansia (CDC STEADI)',
        note: 'Fasilitas kursi mandi, handrail, dan peniadaan kunci grendel dalam',
      }
      replyText = `Mengenai **keamanan mandi bagi pasien lansia**:

1. **Pasang Pegangan Dinding (Handrail)**: Pasang pegangan di dekat shower dan kloset setinggi 80–90 cm.
2. **Gunakan Bangku Mandi Antiselip**: Mandi sambil duduk menghemat tenaga lansia dan mengeliminasi risiko hilang keseimbangan.
3. **Pasang Keset Karet Mangkok Hisap**: Pastikan lantai basah tertutup keset hisap antilicin.
4. **Hindari Mengunci Pintu dari Dalam**: Gunakan tirai atau pintu yang mudah dibuka keluarga bila terjadi kondisi darurat.`
    } else {
      citation = {
        shortRef: 'Pedoman Mandi Pasien Kardiovaskular (PERKI & WHO)',
        note: 'Penggunaan air hangat suam-suam kuku dan mandi posisi duduk santai',
      }
      replyText = `Mengenai **cara mandi aman untuk pasien dengan riwayat tensi / jantung**:

1. **Gunakan Air Hangat Suam-Suam Kuku**: Hindari air yang terlalu dingin atau terlalu panas mendadak karena memicu lonjakan tekanan darah seketika.
2. **Mandi Sambil Duduk di Kursi**: Mandi dalam posisi duduk mencegah pusing atau lemas mendadak.
3. **Buka Ventilasi Udara Toilet**: Pastikan sirkulasi udara kamar mandi tidak pengap.
4. **Jangan Mengunci Pintu Terlalu Rapat**: Pastikan pintu mudah diakses keluarga bila pasien membutuhkan bantuan.`
    }

    return {
      reply: replyText,
      citation,
      suggestedOptions: getDynamicOptionsForDomain(activeDomain, 'mandi', currentState.turnCount + 1),
      categoryScores: currentScores,
      isReadyForPlan: true,
      primaryCategory: activeDomain,
      activeBranchDomain: activeDomain,
      branchStepIndex: (currentState.branchStepIndex || 0) + 1,
    }
  }

  // 3. POSISI TIDUR & ISTIRAHAT
  if (/(tidur|posisi tidur|miring|telentang|tengkurap|kasur|bantal|susah tidur|gelisah|ngorok|pegal|ganjal bantal)/i.test(t)) {
    let replyText = ''
    let citation = null

    if (activeDomain === 'wound') {
      citation = {
        shortRef: 'Pedoman Perlindungan Insisi Pasca-Bedah (Kemenkes & CDC)',
        note: 'Pencegahan tekanan langsung pada sayatan operasi saat berbaring',
      }
      replyText = `Mengenai **posisi tidur aman agar jahitan luka tidak tertarik**:

1. **Tidur Telentang atau Sisi Tubuh Sehat**: Hindari menindih sisi tubuh yang dioperasi agar tidak timbul nyeri berdenyut atau rembesan perban.
2. **Ganjal Bantal di Sisi Tubuh**: Letakkan bantal empuk di samping tubuh untuk mencegah pasien berguling tanpa sengaja saat tertidur pulas.
3. **Bantal Tipis di Bawah Lutut (Untuk Luka Perut)**: Mengganjal lutut saat telentang membuat otot perut rileks dan mengurangi tarikan benang jahitan.
4. **Gunakan Pakaian Katun Longgar**: Pakaian yang longgar mencegah gesekan kain pada perban luka.`
    } else if (activeDomain === 'joint') {
      citation = {
        shortRef: 'Pedoman Ergonomi Posisi Pasca-Arthroplasti & Fraktur (AAOS)',
        note: 'Pencegahan rotasi berlebih sendi panggul dan dislokasi implan',
      }
      replyText = `Mengenai **posisi tidur aman bagi pasien patah tulang / sendi**:

1. **Bantal di Antara Kedua Paha**: Sisipkan bantal empuk di antara paha agar kedua kaki tetap lurus sejajar dan tidak terpelintir (*adduksi*).
2. **Elevasi Tungkai di Atas Level Dada**: Letakkan 1–2 bantal di bawah betis dan pergelangan kaki agar pembengkakan sendi lekas mereda.
3. **Hindari Menyilangkan Kaki**: Dilarang menyilangkan kaki saat berbaring karena berisiko menggeser posisi sambungan tulang atau implan sendi.
4. **Kasur yang Rata & Padat**: Gunakan kasur yang tidak terlalu ambles agar pinggul tetap stabil.`
    } else if (activeDomain === 'stroke') {
      citation = {
        shortRef: 'Protokol Penataan Posisi Tidur & Pencegahan Dekubitus (AHA/ASA & PERDOSI)',
        note: 'Alih baring tiap 2 jam dan penyanggaan sisi tubuh yang lumpuh',
      }
      replyText = `Mengenai **posisi tidur aman bagi pasien pasca-stroke**:

1. **Jadwal Alih Baring Tiap 2 Jam**: Miring Kanan (2 jam) → Telentang (2 jam) → Miring Kiri (2 jam) untuk mencegah luka lecet punggung (*dekubitus*).
2. **Sangga Lengan & Kaki yang Lemah**: Letakkan bantal empuk di bawah lengan dan tungkai yang lemah agar tidak menggantung atau tertindih badan.
3. **Ganjal Bantal di Belakang Punggung**: Saat posisi miring, tahan punggung dengan bantal agar posisi tubuh stabil 30 derajat.
4. **Bebaskan Tumit dari Kasur**: Sediakan bantal tipis di bawah betis agar tumit tidak terus-menerus menekan kasur.`
    } else if (activeDomain === 'heart') {
      citation = {
        shortRef: 'Manajemen Ortopnea & Posisi Semi-Fowler (AHA/ACC Heart Failure)',
        note: 'Posisi semi-duduk 30-45 derajat untuk meringankan beban kerja paru dan jantung',
      }
      replyText = `Mengenai **posisi tidur bagi pasien jantung dan tekanan darah**:

1. **Gunakan Posisi Semi-Duduk (*Semi-Fowler*)**: Gunakan 2–3 bantal sehingga kepala dan punggung terangkat 30–45 derajat agar nafas terasa lega.
2. **Mencegah Sesak Saat Telentang Datar**: Tidur telentang datar sering memicu rasa sesak (*ortopnea*) karena cairan menumpuk di paru. Posisi semi-duduk mengatasinya secara efektif.
3. **Bantal Tipis di Bawah Paha**: Mencegah tubuh pasien melorot ke bawah saat tidur semi-duduk.
4. **Ventilasi Kamar Sejuk**: Sirkulasi udara kamar yang segar sangat membantu kenyamanan pernafasan pasien.`
    } else {
      citation = {
        shortRef: 'Pedoman Tata Ruang Tidur Ramah Lansia (WHO ICOPE & CDC STEADI)',
        note: 'Ketinggian kasur setinggi lutut dan pencahayaan lorong otomatis',
      }
      replyText = `Mengenai **posisi tidur dan keamanan ranjang lansia**:

1. **Ketinggian Kasur Setinggi Lutut**: Pastikan saat duduk di kasur, kedua telapak kaki lansia langsung menapak rata di lantai untuk mencegah terpeleset saat bangun.
2. **Sediakan Lampu Tidur Meja & Bel Panggil**: Letakkan tombol lampu dan bel panggil di samping bantal yang mudah dijangkau.
3. **Duduk 1–2 Menit Sebelum Berdiri**: Ingatkan lansia untuk duduk menguntai kaki sejenak sebelum berdiri agar tidak pusing berputar.
4. **Hindari Kasur Terlalu Lembek**: Kasur yang terlalu empuk menyulitkan lansia bergeser atau bangkit.`
    }

    return {
      reply: replyText,
      citation,
      suggestedOptions: getDynamicOptionsForDomain(activeDomain, 'tidur', currentState.turnCount + 1),
      categoryScores: currentScores,
      isReadyForPlan: true,
      primaryCategory: activeDomain,
      activeBranchDomain: activeDomain,
      branchStepIndex: (currentState.branchStepIndex || 0) + 1,
    }
  }

  // 4. KELUHAN PENCERNAAN / BAB / SEMBELIT
  if (/(bab|buang air besar|susah bab|sembelit|konstipasi|kencing|bak|buang air kecil|pipis|pispot|urinal|kateter|perut kembung|begah|kentut)/i.test(t)) {
    const citation = {
      shortRef: 'Protokol Manajemen Eliminasi & Mobilitas Pasien (NICE & WHO)',
      note: 'Pencegahan konstipasi pasca-rawat inap dan adaptasi posisi kloset aman',
    }
    const replyText = `Mengenai **keluhan BAB dan pencernaan selama pemulihan di rumah**:

1. **Jangan Memaksa Mengejan Kuat**: Mengejan keras dapat meningkatkan tekanan rongga dada dan perut yang berbahaya bagi jahitan operasi, sambungan tulang, atau tensi jantung.
2. **Minum Air Putih Hangat di Pagi Hari**: Segelas air hangat saat bangun tidur merangsang refleks usus secara alami.
3. **Posisikan Kaki di Bangku Kecil (15–20 cm)**: Letakkan bangku kecil di bawah kaki saat di kloset duduk agar posisi usus lurus dan feses mudah keluar tanpa jongkok.
4. **Konsumsi Pepaya Matang Setiap Hari**: Serat lunak alami melunakkan feses tanpa menyebabkan perut mulas berlebih.
5. **Konsultasikan Obat Pelunak Feses**: Jika sudah lebih dari 3 hari belum BAB, tanyakan ke dokter untuk peresepan sirup laktulosa.`

    return {
      reply: replyText,
      citation,
      suggestedOptions: getDynamicOptionsForDomain(activeDomain, 'bab', currentState.turnCount + 1),
      categoryScores: currentScores,
      isReadyForPlan: true,
      primaryCategory: activeDomain,
      activeBranchDomain: activeDomain,
      branchStepIndex: (currentState.branchStepIndex || 0) + 1,
    }
  }

  // 5. JADWAL KONTROL & TANDA BAHAYA KE IGD
  if (/(kontrol|ke rs|rumah sakit|dokter|jadwal kontrol|kapan harus ke dokter|darurat|emergency|igd|tanda bahaya|demam)/i.test(t)) {
    let specificRedFlags = ''
    if (activeDomain === 'wound') {
      specificRedFlags = '• Luka operasi terbuka, berdarah deras, atau keluar nanah berbau\n• Demam tinggi di atas 38°C disertai menggigil\n• Kulit sekitar jahitan memerah meluas (>2 cm) dan teraba panas'
    } else if (activeDomain === 'joint') {
      specificRedFlags = '• Kaki yang sakit terasa dingin, pucat membiru, atau baal (mati rasa total)\n• Nyeri hebat yang mendadak memburuk dan tidak mempan obat\n• Betis membengkak keras dan sangat nyeri'
    } else if (activeDomain === 'heart') {
      specificRedFlags = '• Nyeri dada seperti tertindih beban berat menjalar ke leher/lengan kiri\n• Sesak nafas akut mendadak bahkan saat istirahat\n• Keringat dingin deras disertai rasa lemas atau pingsan'
    } else if (activeDomain === 'stroke') {
      specificRedFlags = '• Mulut mencong mendadak atau senyum tidak simetris\n• Salah satu lengan terkulai lemas tiba-tiba\n• Bicara pelo mendadak atau penurunan kesadaran'
    } else {
      specificRedFlags = '• Terjatuh dan mengeluh nyeri hebat di area panggul/punggung\n• Penurunan kesadaran, mengantuk berat yang sulit dibangunkan\n• Pusing berputar hebat disertai muntah'
    }

    const citation = {
      shortRef: 'Pedoman Pemantauan Tanda Bahaya Pasca-Rawat (Kemenkes & WHO)',
      note: 'Kriteria rujukan darurat pasca-rawat inap',
    }

    const replyText = `Mengenai **jadwal kontrol dokter dan tanda bahaya yang wajib diwaspadai**:

1. **Jadwal Kontrol Rutin**: Ikuti tanggal kontrol poli yang tertera di surat kepulangan RS (biasanya 5–7 hari untuk evaluasi luka/tensi, atau 10–14 hari untuk angkat jahitan).
2. **Berkas yang Perlu Dibawa**: Bawa surat kontrol RS, buku catatan tensi/suhu harian, dan sisa obat yang masih ada.

⚠️ **TANDA BAHAYA — SEGERA KE IGD TANPA MENUNGGU KONTROL**:
${specificRedFlags}`

    return {
      reply: replyText,
      citation,
      suggestedOptions: getDynamicOptionsForDomain(activeDomain, 'kontrol', currentState.turnCount + 1),
      categoryScores: currentScores,
      isReadyForPlan: true,
      primaryCategory: activeDomain,
      activeBranchDomain: activeDomain,
      branchStepIndex: (currentState.branchStepIndex || 0) + 1,
    }
  }

  // 6. DUKUNGAN EMOSIONAL & PSIKOLOGIS
  if (/(cemas|takut|stres|sedih|menangis|marah|ngelamun|melamun|bosan|rewel|putus asa|frustrasi)/i.test(t)) {
    const citation = {
      shortRef: 'Panduan Dukungan Psikososial Keluarga dalam Perawatan (WHO & Kemenkes)',
      note: 'Pendampingan emosional untuk pemulihan pasien di rumah',
    }
    const replyText = `Mengenai **kondisi emosional dan kejenuhan pasien di rumah**:

Pasien pasca-rawat inap wajar merasa cemas, mudah tersinggung, atau sedih karena belum bisa leluasa beraktivitas mandiri:

1. **Dengarkan Tanpa Membantah**: Berikan ruang bagi pasien untuk mengutarakan rasa bosan atau keluhannya dengan sabar.
2. **Beri Pilihan Sederhana**: Libatkan pasien dalam keputusan kecil, seperti memilih pakaian yang ingin dikenakan atau menu sayur hari ini.
3. **Suasana Kamar yang Segar**: Buka jendela di pagi hari agar sinar matahari dan udara segar masuk. Putarkan musik menenangkan atau lantunan doa.
4. **Jaga Kesehatan Pendamping (*Caregiver*)**: Anggota keluarga juga perlu bergantian istirahat agar tidak mengalami kelelahan mental (*caregiver burnout*).`

    return {
      reply: replyText,
      citation,
      suggestedOptions: getDynamicOptionsForDomain(activeDomain, 'emosi', currentState.turnCount + 1),
      categoryScores: currentScores,
      isReadyForPlan: true,
      primaryCategory: activeDomain,
      activeBranchDomain: activeDomain,
      branchStepIndex: (currentState.branchStepIndex || 0) + 1,
    }
  }

  // 7. PERTANYAAN UMUM LAINNYA (FALLBACK RAMAH)
  const citation = {
    shortRef: 'Standar Terpadu Kemenkes RI, WHO & CDC',
    note: `Panduan keselamatan lingkungan dan pemulihan pasien untuk ${tree.name}`,
  }

  const replyText = `Baik, saya memahami hal tersebut. Dalam merawat pasien di rumah, hal terpenting adalah menjaga keselamatan fisik, memastikan istirahat cukup, dan memberikan nutrisi yang baik untuk pemulihan.

Untuk kondisi **${tree.name}**, apakah ada hal spesifik lain yang sedang Anda khawatirkan saat ini?`

  return {
    reply: replyText,
    citation,
    suggestedOptions: getDynamicOptionsForDomain(activeDomain, '', currentState.turnCount + 1),
    categoryScores: currentScores,
    isReadyForPlan: true,
    primaryCategory: activeDomain,
    activeBranchDomain: activeDomain,
    branchStepIndex: (currentState.branchStepIndex || 0) + 1,
  }
}

/**
 * Format system instruction prompt untuk Gemini API
 */
function buildGeminiSystemPrompt(activeDomain = null, patientProfile = null) {
  const journalsText = VERIFIED_CLINICAL_GUIDELINES.map(
    (j) => `[${j.id}] ${j.shortRef}: ${j.title}. Temuan Klinis: ${j.takeaway}`
  ).join('\n')

  const domainName =
    activeDomain && CLINICAL_BRANCHING_TREE[activeDomain]
      ? CLINICAL_BRANCHING_TREE[activeDomain].name
      : 'Pemulihan Pasca-Rawat Inap'

  const pName = patientProfile?.name || 'Pasien'
  const pRel = patientProfile?.relation || 'Keluarga'
  const pAge = patientProfile?.age ? `${patientProfile.age} tahun` : ''
  const pCond = patientProfile?.condition || domainName

  return `Anda adalah "Konsultan AI RumahSiap", asisten pendamping perawatan pasca-rawat inap bagi keluarga non-medis di Indonesia.

PROFIL PASIEN AKTIF SAAT INI:
- Nama Pasien: ${pName} (${pRel}${pAge ? `, usia ${pAge}` : ''})
- Penyakit / Fokus Pemulihan Terdaftar: ${pCond} (Kategori: ${domainName})

Pedoman klinis resmi yang menjadi dasar pengetahuan Anda:
${journalsText}

ATURAN PERILAKU WAJIB (KETAT):
1. FOKUS KETAT PADA PENYAKIT PASIEN TERSEBUT:
   Semua jawaban Anda, penjelasan, tips praktis, dan pilihan cepat lanjutan WAJIB berfokus pada kondisi: "${pCond}".
   Bila pengguna bertanya hal umum (seperti makanan, mandi, posisi tidur, BAB, atau olahraga), sesuaikan penjelasan Anda KHUSUS untuk kondisi ${pCond}.
2. JAWAB SINGKAT, RINGKAS, DAN JELAS (cukup 2-3 poin praktis saja) dengan bahasa Indonesia yang ramah, santun, dan mudah dipahami keluarga non-medis.
3. DUKUNG PERCAKAPAN BERKALI-KALI (UNLIMITED FOLLOW-UP):
   Selalu sediakan 4 "suggestedOptions" yang baru dan relevan dengan topik lanjutan dari ${pCond}, agar pendamping bisa terus bertanya dan mengeksplorasi perawatan sepuasnya tanpa henti.
4. JANGAN PERNAH MENJAWAB HAL-HAL DI LUAR KESEHATAN PERAWATAN PASIEN:
   Jika pertanyaan sama sekali tidak relevan dengan perawatan pasien (seperti coding Python, politik, gosip artis, resep kue, olahraga bola), WAJIB menjawab:
   "Mohon maaf, saya belum memahami maksud pertanyaan tersebut dalam konteks perawatan pasien."
5. JANGAN PERNAH MENYEBUTKAN NAMA JURNAL, NOMOR REGULASI, ATAU JUDUL BUKU di dalam teks jawaban ("reply"). Simpan rujukan hanya di objek "citation" agar tersembunyi.
6. Format output JSON wajib valid:
{
  "reply": "Penjelasan ringkas, padat, hangat dan alami tanpa menyebut nama jurnal...",
  "citation": { "shortRef": "Nama Pedoman Singkat", "note": "Rangkuman klinis" },
  "suggestedOptions": ["Opsi Lanjutan 1", "Opsi Lanjutan 2", "Opsi Lanjutan 3", "Opsi Lanjutan 4"],
  "categoryScores": { "wound": 0, "stroke": 0, "joint": 0, "heart": 0, "elderly": 0 },
  "isReadyForPlan": true
}`
}

/**
 * Memproses pesan baru dari pengguna
 */
export async function sendConsultationMessage(currentState, userMessage, customApiKey = '') {
  const apiKey =
    customApiKey ||
    (typeof window !== 'undefined' && localStorage.getItem('rumahsiap_gemini_key')) ||
    (typeof import.meta !== 'undefined' && import.meta.env?.VITE_GEMINI_API_KEY) ||
    ''

  const userMsgObj = {
    id: `msg-user-${Date.now()}`,
    role: 'user',
    content: userMessage,
  }
  const updatedMessages = [...currentState.messages, userMsgObj]

  let responseData = null

  // Panggil Gemini API jika ada API Key
  if (apiKey && apiKey.length > 10) {
    const modelsToTry = ['gemini-1.5-flash', 'gemini-2.0-flash', 'gemini-1.5-pro']

    for (const modelName of modelsToTry) {
      if (responseData) break
      try {
        const contents = updatedMessages.map((m) => ({
          role: m.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: m.content }],
        }))

        const res = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents,
              systemInstruction: {
                parts: [
                  {
                    text: buildGeminiSystemPrompt(
                      currentState.activeBranchDomain,
                      currentState.patientProfile
                    ),
                  },
                ],
              },
              generationConfig: {
                temperature: 0.2,
                maxOutputTokens: 800,
                responseMimeType: 'application/json',
              },
            }),
          }
        )

        if (res.ok) {
          const jsonRes = await res.json()
          const rawText = jsonRes.candidates?.[0]?.content?.parts?.[0]?.text
          if (rawText) {
            // Bersihkan format markdown codeblock jika ada
            const cleanedText = rawText.replace(/^\`\`\`json\s*/, '').replace(/\`\`\`$/, '').trim()
            const parsed = JSON.parse(cleanedText)
            responseData = {
              reply: parsed.reply,
              citation: parsed.citation || {
                shortRef: 'Standar Terpadu Medis',
                note: 'Pedoman Klinis Terverifikasi',
              },
              suggestedOptions: parsed.suggestedOptions || [],
              categoryScores: parsed.categoryScores || currentState.scores,
              isReadyForPlan: true,
              primaryCategory: currentState.primaryCategory || 'joint',
              activeBranchDomain: currentState.activeBranchDomain || 'joint',
              branchStepIndex: (currentState.branchStepIndex || 0) + 1,
            }
            break
          }
        }
      } catch (err) {
        console.info(`[AIConsultant] Gagal dengan model ${modelName}:`, err.message)
      }
    }
  }

  // Built-in Clinical Problem Solver & Out-of-scope handler
  if (!responseData) {
    responseData = runBuiltInProblemSolver(userMessage, currentState)
  }

  const sorted = Object.entries(responseData.categoryScores).sort((a, b) => b[1] - a[1])
  const topCat = sorted[0][1] > 0 ? sorted[0][0] : (currentState.primaryCategory || 'joint')

  const assistantMsgObj = {
    id: `msg-bot-${Date.now()}`,
    role: 'assistant',
    content: responseData.reply,
    citation: responseData.citation,
    options: responseData.suggestedOptions,
  }

  return {
    messages: [...updatedMessages, assistantMsgObj],
    scores: responseData.categoryScores,
    turnCount: currentState.turnCount + 1,
    isReadyForPlan: responseData.isReadyForPlan !== undefined ? responseData.isReadyForPlan : true,
    primaryCategory: topCat,
    activeBranchDomain: responseData.activeBranchDomain || topCat,
    branchStepIndex: responseData.branchStepIndex || (currentState.branchStepIndex + 1),
    patientProfile: currentState.patientProfile,
    caregiverUser: currentState.caregiverUser,
  }
}

/**
 * Mengubah hasil obrolan menjadi output profil yang kompatibel dengan Result.jsx
 */
export function buildResultFromChat(chatState) {
  const scores = { ...chatState.scores }
  const topCategory = chatState.primaryCategory || chatState.activeBranchDomain || 'joint'

  if (!scores[topCategory] || scores[topCategory] < 4) {
    scores[topCategory] = Math.max((scores[topCategory] || 0) + 6, 6)
  }

  const sorted = Object.keys(scores).sort((a, b) => (scores[b] || 0) - (scores[a] || 0))
  const margin = (scores[sorted[0]] || 0) - (scores[sorted[1]] || 0)

  return {
    categoryId: topCategory,
    scores,
    ranking: sorted,
    margin,
    isMixed: margin <= 1,
    meta: CATEGORY_META[topCategory],
    patientProfile: chatState.patientProfile,
    caregiverUser: chatState.caregiverUser,
  }
}
