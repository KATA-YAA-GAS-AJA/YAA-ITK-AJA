// Kuesioner pemetaan profil pemulihan pasien pasca-rawat inap.
// Menghitung skor kesesuaian kategori untuk menentukan panduan logistik & tata ruang yang relevan.

export const QUESTIONS = [
  {
    id: 'q1',
    question: 'Alasan utama pasien dirawat inap?',
    helper: 'Pilih yang paling menggambarkan kondisi saat masuk rumah sakit.',
    options: [
      { label: 'Luka / area operasi bekas tindakan', sub: 'Luka, sayatan, atau bekas operasi yang belum sembuh', scores: { wound: 3, joint: 1, stroke: 0, heart: 0, elderly: 0 } },
      { label: 'Stroke / kelumpuhan sebagian tubuh', sub: 'Sulit gerak atau bicara akibat gangguan pembuluh darah otak', scores: { stroke: 3, joint: 0, wound: 0, heart: 0, elderly: 0 } },
      { label: 'Jantung / pembuluh darah', sub: 'Sakit dada, operasi jantung, atau pengobatan jantung', scores: { heart: 3, stroke: 0, wound: 0, joint: 0, elderly: 0 } },
      { label: 'Patah tulang / masalah sendi', sub: 'Fraktur, penggantian sendi, atau operasi tulang belakang', scores: { joint: 3, wound: 0, stroke: 0, heart: 0, elderly: 0 } },
      { label: 'Usia lanjut & butuh perawatan umum', sub: 'Lemah karena usia, dehidrasi, atau perawatan umum', scores: { elderly: 3, joint: 1, wound: 0, stroke: 0, heart: 0 } },
      { label: 'Tidak yakin / lainnya', sub: 'Jawaban ini tetap menghasilkan rekomendasi umum', scores: { elderly: 1, joint: 1, stroke: 1, wound: 1, heart: 1 } },
    ],
  },
  {
    id: 'q2',
    question: 'Apakah masih ada luka terbuka / bekas jahitan operasi?',
    helper: 'Termasuk luka yang masih diganti perbannya di rumah.',
    options: [
      { label: 'Ya, masih rutin ganti perban', sub: 'Perban diganti setiap hari / beberapa hari sekali', scores: { wound: 3, stroke: 0, joint: 0, heart: 0, elderly: 0 } },
      { label: 'Ada, tapi sudah kecil', sub: 'Bekas luka hampir sembuh tanpa perban besar', scores: { wound: 1, stroke: 0, joint: 0, heart: 0, elderly: 0 } },
      { label: 'Tidak ada luka', sub: 'Kulit utuh / luka sudah menutup sempurna', scores: { wound: -2, stroke: 0, joint: 0, heart: 0, elderly: 0 } },
      { label: 'Tidak tahu', sub: 'Tidak sempat melihat kondisi luka', scores: { wound: 1, stroke: 0, joint: 0, heart: 0, elderly: 0 } },
    ],
  },
  {
    id: 'q3',
    question: 'Seberapa mampu pasien bergerak sendiri di rumah?',
    helper: 'Berdasar pengamatan keluarga selama di rumah sakit.',
    options: [
      { label: 'Berjalan sendiri tanpa bantuan', sub: 'Bisa bangun & ke kamar mandi tanpa dibantu', scores: { stroke: -2, joint: -2, elderly: -2, wound: 0, heart: 0 } },
      { label: 'Butuh bantuan bangun / berjalan', sub: 'Perlu ditopang, tongkat, atau didampingi', scores: { stroke: 2, joint: 2, elderly: 2, wound: 0, heart: 0 } },
      { label: 'Terbaring, sangat terbatas', sub: 'Sebagian besar waktu di tempat tidur', scores: { stroke: 3, elderly: 2, joint: 1, wound: 0, heart: 0 } },
      { label: 'Tidak tahu', sub: 'Belum sempat mencoba bergerak', scores: { elderly: 1, stroke: 1, joint: 1, wound: 0, heart: 0 } },
    ],
  },
  {
    id: 'q4',
    question: 'Apakah pasien punya kondisi / riwayat jantung?',
    helper: 'Termasuk tekanan darah tinggi yang terkontrol.',
    options: [
      { label: 'Ya, baru tindakan jantung', sub: 'Operasi, pemasangan ring, atau perawatan intensif jantung', scores: { heart: 3, stroke: 1, wound: 0, joint: 0, elderly: 0 } },
      { label: 'Ya, riwayat (stabil)', sub: 'Hipertensi / jantung lama yang terkontrol', scores: { heart: 2, stroke: 0, wound: 0, joint: 0, elderly: 0 } },
      { label: 'Tidak ada', sub: 'Tidak pernah didiagnosis masalah jantung', scores: { heart: -2, stroke: 0, wound: 0, joint: 0, elderly: 0 } },
      { label: 'Tidak tahu', sub: 'Belum pernah diperiksa / tidak disampaikan', scores: { heart: 1, stroke: 0, wound: 0, joint: 0, elderly: 0 } },
    ],
  },
  {
    id: 'q5',
    question: 'Apakah pasien pernah mengalami stroke?',
    helper: 'Untuk kewaspadaan risiko jatuh & perawatan rumah.',
    options: [
      { label: 'Ya, dalam 6 bulan terakhir', sub: 'Kejadian stroke yang baru', scores: { stroke: 3, heart: 1, wound: 0, joint: 0, elderly: 0 } },
      { label: 'Ya, sudah lama', sub: 'Pernah, lebih dari 6 bulan lalu', scores: { stroke: 1, joint: 0, wound: 0, heart: 0, elderly: 0 } },
      { label: 'Tidak pernah', sub: 'Tidak ada riwayat stroke', scores: { stroke: -2, joint: 0, wound: 0, heart: 0, elderly: 0 } },
      { label: 'Tidak tahu', sub: 'Riwayat pasien tidak jelas', scores: { stroke: 1, joint: 0, wound: 0, heart: 0, elderly: 1 } },
    ],
  },
  {
    id: 'q6',
    question: 'Berapa usia pasien?',
    helper: 'Rentang saja, tidak perlu tanggal pasti.',
    options: [
      { label: '65 tahun ke atas', scores: { elderly: 3, heart: 1, joint: 1, stroke: 0, wound: 0 } },
      { label: '50 – 64 tahun', scores: { elderly: 1, heart: 0, joint: 0, stroke: 0, wound: 0 } },
      { label: 'Di bawah 50 tahun', scores: { elderly: -2, joint: 0, stroke: 0, heart: 0, wound: 0 } },
      { label: 'Tidak mau menyebut', scores: { elderly: 1, joint: 0, stroke: 0, heart: 0, wound: 0 } },
    ],
  },
  {
    id: 'q7',
    question: 'Berapa banyak aktivitas harian yang masih dibantu keluarga?',
    helper: 'Makan, mandi, dan ke kamar mandi.',
    options: [
      { label: 'Sebagian besar dibantu', sub: 'Butuh bantuan di banyak aktivitas', scores: { elderly: 2, stroke: 2, joint: 1, wound: 0, heart: 0 } },
      { label: 'Dibantu sebagian', sub: 'Mandiri sebagian, dibantu sebagian', scores: { elderly: 1, stroke: 1, joint: 0, wound: 0, heart: 0 } },
      { label: 'Mandiri penuh', sub: 'Bisa melakukan sendiri', scores: { elderly: -1, stroke: -1, joint: 0, wound: 0, heart: 0 } },
      { label: 'Tidak tahu', sub: 'Belum teramati', scores: { elderly: 1, joint: 0, stroke: 0, wound: 0, heart: 0 } },
    ],
  },
  {
    id: 'q8',
    question: 'Obat yang dibawa pulang kira-kira jenis apa?',
    helper: 'Tidak mengubah dosis — hanya membantu menyusun checklist logistik.',
    options: [
      { label: 'Obat jantung / pengencer darah', sub: 'Obat tensi, jantung, atau antikoagulan', scores: { heart: 2, stroke: 1, wound: 0, joint: 0, elderly: 0 } },
      { label: 'Obat luka / antibiotik / vitamin', sub: 'Untuk perawatan luka atau suplemen', scores: { wound: 1, joint: 0, heart: 0, stroke: 0, elderly: 0 } },
      { label: 'Obat nyeri & penunjang umum', sub: 'Painkiller, obat lambung, dan sejenisnya', scores: { joint: 1, elderly: 1, heart: 0, stroke: 0, wound: 0 } },
      { label: 'Tidak ada obat khusus', sub: 'Belum ada obat rutin yang diresepkan', scores: { joint: 0, elderly: 0, wound: 0, stroke: 0, heart: 0 } },
    ],
  },
]