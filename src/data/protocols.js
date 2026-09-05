// RumahSiap — Static protocol vault.
// All content is pre-validated, logistics-only guidance (tata ruang, sterilisasi,
// logistik apotek). NO medical claims, NO diagnosis, NO new prescriptions.

export const CATEGORY_META = {
  wound: {
    id: 'wound',
    name: 'Pemulihan Luka / Pasca-Operasi',
    short: 'Luka Kronis',
    tagline: 'Sterilisasi & perawatan permukaan luka di rumah dengan standar higienis',
    accent: '#0ea5e9', // sky
    chip: 'bg-sky-100 text-sky-800',
    bar: 'bg-sky-500',
    icon: 'bandage',
    refSource: 'Pedoman sterilisasi & tata ruang sesuai prinsip pencegahan infeksi Kemenkes RI',
  },
  stroke: {
    id: 'stroke',
    name: 'Pasca-Stroke',
    short: 'Stroke',
    tagline: 'Lingkungan rumah anti-hambatan untuk pasien pulihkan mobilitas',
    accent: '#f59e0b', // amber
    chip: 'bg-amber-100 text-amber-800',
    bar: 'bg-amber-500',
    icon: 'brain',
    refSource: 'Prinsip rehabilitasi lingkungan pasca-stroke (aksesibilitas & pencegahan jatuh)',
  },
  joint: {
    id: 'joint',
    name: 'Tulang / Sendi (Ortopedi)',
    short: 'Tulang & Sendi',
    tagline: 'Penataan rumah yang aman bagi pasien pasca-fraktur atau operasi sendi',
    accent: '#8b5cf6', // violet
    chip: 'bg-violet-100 text-violet-800',
    bar: 'bg-violet-500',
    icon: 'bone',
    refSource: 'Prinsip keselamatan pasien ortopedi pasca-operasi (behel, alat bantu jalan, anti-slip)',
  },
  heart: {
    id: 'heart',
    name: 'Pasca-Perawatan Jantung',
    short: 'Jantung',
    tagline: 'Zona tenang & rutinitas obat yang tertata untuk pemulihan jantung',
    accent: '#ef4444', // red/rose
    chip: 'bg-rose-100 text-rose-800',
    bar: 'bg-rose-500',
    icon: 'heart',
    refSource: 'Prinsip pengorganisasian obat & lingkungan tenang sesuai edukasi perawatan jantung (ADA & pelayanan rujukan)',
  },
  elderly: {
    id: 'elderly',
    name: 'Lansia Umum',
    short: 'Lansia',
    tagline: 'Rumah ramah usia lanjut: anti-jatuh, nyaman, dan mudah dijangkau',
    accent: '#10b981', // emerald
    chip: 'bg-emerald-100 text-emerald-800',
    bar: 'bg-emerald-500',
    icon: 'hearts',
    refSource: 'Prinsip keselamatan lansia di rumah (pencegahan jatuh NASEM/Kemenkes)',
  },
}

export const SHARED_DISCLAIMER =
  'RumahSiap adalah alat bantu logistik & tata ruang, BUKAN pengganti nasihat tenaga medis. Ikuti selalu instruksi dokter/perawat RS. Jangan pernah menambah, mengganti, atau menghentikan obat tanpa persetujuan dokter.'

export const PROTOCOLS = {
  wound: {
    goal: 'Buat satu sudut perawatan luka yang bersih, terang, dan lengkap agar penggantian perban aman dan bebas panik.',
    visual: [
      { step: 'Siapkan "meja perawatan"', title: 'Siapkan Meja Perawatan Khusus', desc: 'Pilih satu meja/kursi kecil tanpa sekat yang mudah dibersihkan. Lap permukaannya dengan kain basah berdisinfektan lalu keringkan sebelum mulai.', tip: 'Jauhkan dari AC langsung agar luka tidak terpapar udara kering berlebihan.' },
      { step: 'Cuci tangan 6 langkah', title: 'Cuci Tangan Sebelum Menyentuh Luka', desc: 'Gunakan sabun antibakteri dan air mengalir selama ±40–60 detik (punggung tangan, sela jari, ujung jari, ibu jari). Keringkan dengan handuk bersih sekali pakai.', tip: 'Lakukan TEPAT sebelum membuka paket kassa steril.' },
      { step: 'Pakai pelindung', title: 'Kenakan Sarung Tangan & Masker', desc: 'Gunakan sarung tangan sekali pakai dan masker medis agar droplet/tangan tidak mencemari luka. Ganti sarung tangan jika terkontaminasi.', tip: 'Siapkan juga plester anti-cepat lepas untuk menutup sisa bekas plester.' },
      { step: 'Buka perban lama dengan hati-hati', title: 'Lepas Perban Lama Perlahan', desc: 'Lepaskan perban dengan hati-hati. Jika perban menempel kuat, basahi dulu dengan NaCl 0,9% steril dan tunggu beberapa menit — jangan ditarik paksa.', tip: 'Gunakan perban sekali pakai saja; jangan dicuci ulang.' },
      { step: 'Bersihkan & keringkan', title: 'Bersihkan Sekitar Area Luka', desc: 'Usap area sekitar luka dengan kassa steril + NaCl 0,9% dari dalam ke luar, satu arah, tanpa bolak-balik. Biarkan kering sejenak sebelum penutup baru.', tip: 'Jangan pernah meniup luka atau memakai kapas yang bulunya terbuka.' },
      { step: 'Tutup dengan bahan steril baru', title: 'Tutup dengan Perban Baru', desc: 'Letakkan kassa steril baru tanpa menyentuh bagian dalamnya. Rekatkan dengan plester kain atau pembalut elastis sesuai kebiasaan dengan perawat.', tip: 'Catat tanggal ganti perban di kalender rumah supaya jadwal tidak terlewat.' },
      { step: 'Buang limbah tertutup', title: 'Buang Bahan Bekas di Wadah Tertutup', desc: 'Masukkan perban bekas, sarung tangan, dan kassa ke wadah tertutup berplastik, lalu buang sesuai kebiasaan sampah rumah tangga.', tip: 'Jangan tinggalkan perban bekas di atas meja makan atau kamar mandi.' },
    ],
    shopping: [
      { item: 'Kassa steril 7x7 cm (2 kotak)', qty: '2', unit: 'kotak', purpose: 'Penutup luka steril saat penggantian perban', urgency: 'wajib', group: 'Perawatan Luka' },
      { item: 'NaCl 0,9% steril (isi ulang botol 100 ml)', qty: '4', unit: 'botol', purpose: 'Bahan pembersih area sekitar luka yang aman dan steril', urgency: 'wajib', group: 'Perawatan Luka' },
      { item: 'Sarung tangan lateks sekali pakai', qty: '1', unit: 'kotak (50 pcs)', purpose: 'Mencegah kontaminasi tangan saat perawatan luka', urgency: 'wajib', group: 'Pelindung' },
      { item: 'Masker medis (3 ply)', qty: '1', unit: 'kotak (50 pcs)', purpose: 'Mencegah droplet dari hidung/mulut mencemari luka', urgency: 'wajib', group: 'Pelindung' },
      { item: 'Plester kain / hipoalergenik', qty: '2', unit: 'rol', purpose: 'Merekatkan kassa tanpa mengiritasi kulit', urgency: 'wajib', group: 'Perawatan Luka' },
      { item: 'Sabun cuci tangan antibakteri', qty: '2', unit: 'botol', purpose: 'Mencuci tangan sebelum dan sesudah perawatan', urgency: 'wajib', group: 'Kebersihan' },
      { item: 'Kain lap mikrofiber bersih', qty: '3', unit: 'lembar', purpose: 'Membersihkan meja perawatan tanpa meninggalkan serat', urgency: 'disarankan', group: 'Kebersihan' },
      { item: 'Tempat sampah bertutup kecil', qty: '1', unit: 'buah', purpose: 'Menampung limbah perban bekas secara tertutup', urgency: 'disarankan', group: 'Kebersihan' },
      { item: 'Hand sanitizer bebas pewangi', qty: '1', unit: 'botol', purpose: 'Cadangan cuci tangan cepat sebelum menyentuh alat bersih', urgency: 'disarankan', group: 'Kebersihan' },
    ],
    rooms: [
      { room: 'Kamar Tidur', icon: 'bed', items: [
          { text: 'Tempat tidur mudah dijangkau dari dua sisi, cukup ruang untuk caregiver bergerak', note: 'Minimal 60 cm di satu sisi untuk area perawatan' },
          { text: 'Meja/alas perawatan kecil sudah disorongkan dekat lampu', note: 'Letakkan dekat stop kontak' },
          { text: 'Lampu penerangan cukup terang untuk melihat luka dengan jelas', note: 'Tambahkan lampu meja jika perlu' },
          { text: 'Tidak ada barang berserakan (baju, kardus) di lantai sekitar tempat tidur', note: 'Rapikan jalan menuju kamar mandi juga' },
        ] },
      { room: 'Kamar Mandi', icon: 'shower', items: [
          { text: 'Handuk bersih kering dan sabun diletakkan dalam jangkauan', note: 'Ganti handuk setiap 2-3 hari' },
          { text: 'Lantai kering dan bebas genangan', note: 'Sediakan pel karet untuk mengeringkan setelah dipakai' },
          { text: 'Semua perlengkapan mandi dalam jangkauan tangan tanpa membungkuk', note: 'Gantung di tingkat sepinggang' },
        ] },
      { room: 'Ruang Bersama', icon: 'sofa', items: [
          { text: 'Meja dan kursi yang stabil untuk duduk santai saat keluar kamar', note: 'Kursi tanpa roda' },
          { text: 'Jalur dari kamar ke toilet bebas kabel dan karpet terlipat', note: 'Rekat kabel ke tembok dengan klip' },
        ] },
    ],
    safetyWarnings: [
      'Jika luka mengeluarkan bau menyengat, bengkak bertambah, atau mengeluarkan nanah, hubungi perawat/RS segera — jangan menunggu jadwal berikutnya.',
      'Jangan pernah berbagi sarung tangan/masker bekas dengan anggota keluarga lain.',
      'Perhatikan tanggal kedaluwarsa NaCl dan kassa steril sebelum dipakai.',
    ],
  },

  stroke: {
    goal: 'Buka jalur bebas hambatan dari kamar tidur ke kamar mandi agar pasien yang penuh perhatian bisa bergerak dengan aman dan percaya diri.',
    visual: [
      { step: 'Urai jalur utama', title: 'Buat Rute Bebas Hambatan', desc: 'Pastikan jalur dari kamar tidur → kamar mandi → ruang keluarga bebas dari kabel, keset menggulung, karpet terlipat, dan barang kecil di lantai.', tip: 'Kunci keselamatan pasca-stroke: semakin lurus rutenya, semakin aman langkahnya.' },
      { step: 'Pasang pegangan', title: 'Pasang Handrail di Titik Strategis', desc: 'Pasang pegangan (handrail) di dinding dekat tempat tidur, koridor menuju kamar mandi, dan di dalam kamar mandi (dekat toilet).', tip: 'Mulai dengan pegangan lepas berbahan aluminium yang dipasang ke tembok.' },
      { step: 'Amankan perabot', title: 'Geser Perabot ke Sisi & Ratakan Lantai', desc: 'Geser meja/kursi menjauh sehingga koridor lebih lebar. Karpet yang menekuk dilipat dan disingkirkan, atau direkat ke lantai.', tip: 'Lebar koridor ideal cukup untuk kursi roda +/- 80 cm.' },
      { step: 'Dekatkan kebutuhan', title: 'Tempatkan Barang di Zona Jangkauan', desc: 'Barang sering dipakai (remote, gelas, handphone, obat) diletakkan di meja samping tempat tidur — tanpa perlu berdiri untuk mengambilnya.', tip: 'Gunakan nampan berlaci agar semua barang berhenti di satu titik.' },
      { step: 'Siapkan area mandi aman', title: 'Sediakan Kursi & Alat Mandi', desc: 'Pasang kursi mandi atau bangku anti-slip di bilik kamar mandi agar pasien tidak berdiri lama. Gantung shower dengan selang panjang.', tip: 'Letakkan sabun/shampo di keranjang kecil yang mudah dijangkau.' },
      { step: 'Atur jam jaga', title: 'Tetapkan Pola Pendampingan', desc: 'Sepakati jadwal keluarga untuk menemani saat pasien berpindah posisi (bangun tidur, ke toilet, mandi) — khususnya 4 minggu pertama.', tip: 'Gunakan aplikasi pengingat atau kertas jadwal di kulkas.' },
    ],
    shopping: [
      { item: 'Kursi mandi / bangku anti-slip', qty: '1', unit: 'buah', purpose: 'Basis aman saat mandi tanpa berdiri lama', urgency: 'wajib', group: 'Kamar Mandi' },
      { item: 'Keset anti-slip (karet)', qty: '2', unit: 'lembar', purpose: 'Dipasang di lantai kamar mandi & depan wastafel', urgency: 'wajib', group: 'Kamar Mandi' },
      { item: 'Handrail / pegangan pasang-tembok', qty: '1', unit: 'paket', purpose: 'Titik tumpu saat bangun dari toilet & berjalan di koridor', urgency: 'wajib', group: 'Keselamatan' },
      { item: 'Lampu malam otomatis (sensor cahaya)', qty: '2', unit: 'unit', purpose: 'Penerangan koridor saat pasien bangun di malam hari', urgency: 'wajib', group: 'Pencahayaan' },
      { item: 'Tongkat / walker dengan tinggi bisa diatur', qty: '1', unit: 'buah', purpose: 'Alat bantu keseimbangan sesuai saran fisioterapis RS', urgency: 'wajib', group: 'Mobilitas' },
      { item: 'Klakson / bel meja pemanggil caregiver', qty: '1', unit: 'buah', purpose: 'Tanda darurat dari kamar tidur ke keluarga', urgency: 'disarankan', group: 'Keselamatan' },
      { item: 'Nampan samping tempat tidur', qty: '1', unit: 'buah', purpose: 'Menampung remote, gelas, dan obat dalam jangkauan', urgency: 'disarankan', group: 'Kenyamanan' },
      { item: 'Handuk berbahu lebar / busana mudah pakai', qty: '2', unit: 'lembar', purpose: 'Memudahkan pasien berpakaian tanpa banyak gerakan lengan', urgency: 'disarankan', group: 'Kenyamanan' },
    ],
    rooms: [
      { room: 'Koridor / Jalan', icon: 'door', items: [
          { text: 'Jalur selebar minimal 80 cm dari kamar ke kamar mandi', note: 'Cukup untuk kursi roda & walker' },
          { text: 'Kabel listrik direkat ke dinding, bukan melintas lantai', note: 'Gunakan klip kabel' },
          { text: 'Karpet/keset tidak terlipat di tengah jalan', note: 'Sebaiknya disingkirkan sementara' },
          { text: 'Lampu lorong menyala redup sepanjang malam', note: 'Lampu sensor atau socket malam' },
        ] },
      { room: 'Kamar Tidur', icon: 'bed', items: [
          { text: 'Tempat tidur posisinya paling dekat dengan pintu kamar mandi', note: 'Jika bisa dipindahkan, geser ke sisi yang memendekkan jarak' },
          { text: 'Tinggi kasur pas untuk pasien duduk lalu berdiri', note: 'Kaki pasien dapat menyentuh lantai saat duduk' },
          { text: 'Meja samping berisi barang kebutuhan tanpa perlu berdiri', note: 'Tinggi meja = tinggi kasur' },
        ] },
      { room: 'Kamar Mandi', icon: 'shower', items: [
          { text: 'Kursi mandi terpasang di dalam bilik', note: 'Uji kestabilannya sebelum dipakai' },
          { text: 'Handrail di dinding dekat toilet dan pintu', note: 'Titik tumpu bangun dari toilet' },
          { text: 'Lantai kering dan keset anti-slip terpasang', note: 'Sediakan dua keset agar selalu ada yang kering' },
        ] },
    ],
    safetyWarnings: [
      'Baru bangun dari sakit — hindari aktivitas berat tanpa instruksi dokter. Gerakan tiba-tiba bisa memicu pusing.',
      'Jika salah satu sisi tubuh lemas tiba-tiba, wajah mencong, atau bicara pelo lagi setelah pulang, segera hubungi layanan gawat darurat.',
      'Pasang handrail terlebih dahulu sebelum pasien mulai banyak berjalan di rumah.',
    ],
  },

  joint: {
    goal: 'Buat rumah "bertingkat datar" — singkirkan semua yang bisa membuat tersandung dan siapkan alat bantu jalan sebelum pasien tiba.',
    visual: [
      { step: 'Singkirkan bahaya tersandung', title: 'Bersihkan Lantai dari Risiko Tersandung', desc: 'Ketuk keset, karpet, kabel, dan barang kecil di seluruh jalur pasien. Fokus pada area mulai kamar tidur hingga kamar mandi dan pintu masuk rumah.', tip: 'Penyebab jatuh nomor satu di rumah adalah keset yang terlipat.' },
      { step: 'Siapkan alat bantu jalan', title: 'Uji Alat Bantu Jalan', desc: 'Siapkan kruk/tongkat/walker seperti yang disarankan tim RS. Sesuaikan tinggi pegangan hingga siku sedikit menekuk saat berdiri.', tip: 'Simpan di samping tempat tidur, bukan di lemari.' },
      { step: 'Amankan titik turun naik', title: 'Pasang Pegangan di Tangga & Pintu', desc: 'Jika rumah bertingkat atau ada tanjakan, pasang handrail di kedua sisi. Pasang pegangan lepas di pintu masuk dan kamar mandi.', tip: 'Untuk tangga: rekatkan juga stripe anti-slip di setiap pijakan.' },
      { step: 'Tinggikan titik duduk', title: 'Sediakan Kursi / Tempat Duduk Tinggi', desc: 'Ganti sementara sofa rendah dengan kursi bangun tinggi atau tambah bantal tebal agar pasien tidak perlu turun terlalu dalam saat duduk.', tip: 'Tinggi kursi ideal: lutut lebih rendah dari pinggul saat duduk.' },
      { step: 'Atur alur kamar mandi', title: 'Pasang Kursi Mandi & Anti-Slip', desc: 'Lantai kamar mandi adalah area paling licin. Pasang keset anti-slip, kursi mandi, dan handrail dekat toilet.', tip: 'Simpan sabun di keranjang tinggi agar tidak membungkuk.' },
      { step: 'Siapkan terapi es', title: 'Siapkan Kantong Kompres', desc: 'Sediakan kantong es (cold pack) dan handuk tipis untuk kompres dingin sesuai anjuran terapis saat bengkak.', tip: 'Jangan menempelkan es langsung ke kulit — selalu lapisi handuk.' },
    ],
    shopping: [
      { item: 'Kruk / walker (tinggi bisa diatur)', qty: '1', unit: 'unit', purpose: 'Alat bantu jalan sesuai anjuran terapi fisik RS', urgency: 'wajib', group: 'Mobilitas' },
      { item: 'Keset anti-slip kamar mandi (karet)', qty: '2', unit: 'lembar', purpose: 'Mencegah selip di area terbasahi', urgency: 'wajib', group: 'Kamar Mandi' },
      { item: 'Kursi mandi / bangku plastik anti-slip', qty: '1', unit: 'buah', purpose: 'Duduk saat mandi untuk mengurangi beban sendi/patahan', urgency: 'wajib', group: 'Kamar Mandi' },
      { item: 'Handrail pegangan tembok (toilet)', qty: '1', unit: 'paket', purpose: 'Titik tumpu saat bangun dari toilet', urgency: 'wajib', group: 'Keselamatan' },
      { item: 'Cold pack + penutup kain', qty: '2', unit: 'set', purpose: 'Kompres dingin bergantian saat ada bengkak pasca-operasi', urgency: 'wajib', group: 'Recovery' },
      { item: 'Bantal penyangga / wedge body', qty: '2', unit: 'buah', purpose: 'Menopang posisi tidur agar nyaman & sejajar', urgency: 'disarankan', group: 'Kenyamanan' },
      { item: 'Stripe anti-slip tangga (jika rumah bertingkat)', qty: '1', unit: 'paket', purpose: 'Merek serta pada tiap pijakan anak tangga', urgency: 'disarankan', group: 'Keselamatan' },
      { item: 'Kursi tunggu bergagang', qty: '1', unit: 'buah', purpose: 'Titik jangkar di ruang keluarga agar tidak jatuh saat sesi berdiri', urgency: 'disarankan', group: 'Mobilitas' },
    ],
    rooms: [
      { room: 'Pintu Masuk', icon: 'door', items: [
          { text: 'Tanjak/ambang pintu diberi tanjakan kecil (ramp portable)', note: 'Bisa dari papan kayu halus' },
          { text: 'Tak ada barang menumpuk di depan pintu', note: 'Sediakan tempat sandal tertutup' },
        ] },
      { room: 'Tangga / Naik-Turun', icon: 'stairs', items: [
          { text: 'Handrail terpasang kuat di kedua sisi tangga', note: 'Uji dengan merangkul penuh berat badan' },
          { text: 'Setiap pijakan diberi stripe anti-slip', note: 'Jangan dicat licin' },
          { text: 'Lampu tangga menyala terang dari atas hingga bawah', note: 'Tambahkan lampu sensor gerak' },
        ] },
      { room: 'Kamar Tidur', icon: 'bed', items: [
          { text: 'Jalur dari kasur ke pintu bebas barang', note: 'Pilih sisi turun yang paling dekat pintu' },
          { text: 'Kursi bangun tinggi sudah tersedia di samping kasur', note: 'Dipakai saat bangun pagi' },
          { text: 'Bantal penyangga terpasang untuk tidur miring/sejajar', note: 'Sesuai kenyamanan pasien' },
        ] },
      { room: 'Kamar Mandi', icon: 'shower', items: [
          { text: 'Kursi mandi terpasang stabil', note: 'Letakkan dekat kran' },
          { text: 'Keset anti-slip menutupi area lantai basah', note: 'Periksa tidak tergulung' },
          { text: 'Handrail terpasang di dinding dekat toilet', note: 'Setinggi pinggang saat duduk' },
        ] },
    ],
    safetyWarnings: [
      'Hormati batas beban yang ditentukan dokter/terapis (mis. tidak menumpu kaki operasi). Jangan nekat berjalan tanpa alat bantu.',
      'Es/kompres dingin maksimal 15–20 menit per sesi dan selalu dilapisi kain.',
      'Jika bagian operasi bengkak berlebihan, memerah, demam, atau nyeri tak tertahankan, hubungi RS — bukan diobati sendiri.',
    ],
  },

  heart: {
    goal: 'Ubah rumah menjadi "ruang detak tenang": obat tertata rapi, kamar nyaman, dan tanpa kejutan listrik atau suhu ekstrem.',
    visual: [
      { step: 'Tata kotak obat 7 hari', title: 'Siapkan Kotak Pil Mingguan', desc: 'Isi kotak pil 7 hari (pagi/siang/malam) bersama jadwal pulang RS. Tempelkan label hari di tiap kompartemen dan letakkan di satu titik tetap.', tip: 'Jangan pindah-pindah lokasi obat — kebiasaan tetap = tidak terlewat.' },
      { step: 'Buat zona tenang', title: 'Atur Ruang Minim Distraksi', desc: 'Arahkan tempat duduk favorit pasien menghadap area yang tenang (taman/jendela, bukan ke TV berisik). Kurangi dering telepon dan keramaian saat pasien beristirahat.', tip: 'Gunakan mode hening pada notifikasi yang tidak penting.' },
      { step: 'Tinggikan posisi tidur', title: 'Siapkan Bantal Topang Semi-Duduk', desc: 'Siapkan 2–3 bantal/bantal wedge agar pasien bisa tidur posisi setengah duduk bila lebih nyaman bernapas, sesuai saran RS.', tip: 'Jangan bertumpuk terlalu tinggi — leher harus tetap nyaman.' },
      { step: 'Siapkan ruang mandi singkat', title: 'Batasi Berdiri Lama Saat Mandi', desc: 'Letakkan kursi/bangku di bilik mandi dan semua alat mandi dalam jangkauan, agar mandi bisa dilakukan duduk & cepat.', tip: 'Air hangat-hangat kuku, jangan terlalu panas.' },
      { step: 'Cek sirkulasi udara', title: 'Jaga Suhu Ruangan Stabil', desc: 'Pastikan ventilasi baik dan suhu ruangan tidak terlalu panas/dingin ekstrem. Atur kipas/AC pada suhu nyaman (±24-27°C).', tip: 'Hindari perubahan suhu mendadak (AC → luar rumah).' },
      { step: 'Pasang alat ukur kemandirian', title: 'Siapkan Tensimeter di Rumah', desc: 'Sediakan tensimeter lengan & buku catatan tekanan darah. Catat pagi sebelum obat dan malam dengan posisi duduk, kaki tidak menyilang.', tip: 'Tunjukkan catatan ini pada kontrol berikutnya — bukan untuk diagnosis sendiri.' },
    ],
    shopping: [
      { item: 'Kotak pil harian 7 hari', qty: '1', unit: 'buah', purpose: 'Menata obat pulang agar tidak terlewat atau dobel', urgency: 'wajib', group: 'Obat' },
      { item: 'Tensimeter lengan digital', qty: '1', unit: 'unit', purpose: 'Memantau tekanan darah rutin di rumah sesuai arahan RS', urgency: 'wajib', group: 'Pemantauan' },
      { item: 'Buku catatan tekanan darah', qty: '1', unit: 'buah', purpose: 'Rekam hasil tiap pengecekan untuk dibawa saat kontrol', urgency: 'wajib', group: 'Pemantauan' },
      { item: 'Bantal wedge / bantal penyangga', qty: '2', unit: 'buah', purpose: 'Posisi tidur sedikit tegak bila pasien lebih nyaman', urgency: 'disarankan', group: 'Kenyamanan' },
      { item: 'Kursi/bangku mandi anti-slip', qty: '1', unit: 'buah', purpose: 'Mandi dilakukan duduk secara singkat', urgency: 'disarankan', group: 'Kamar Mandi' },
      { item: 'Jam alarm digital besar + label obat', qty: '1', unit: 'set', purpose: 'Pengingat visual jadwal minum obat tanpa listrik rumit', urgency: 'disarankan', group: 'Obat' },
      { item: 'Termometer ruangan', qty: '1', unit: 'unit', purpose: 'Menjaga suhu kamar tidak ekstrem', urgency: 'opsional', group: 'Kenyamanan' },
    ],
    rooms: [
      { room: 'Kamar Tidur', icon: 'bed', items: [
          { text: 'Stop kontak dekat tempat tidur untuk tensimeter & lampu baca', note: 'Tanpa kabel terjulur panjang' },
          { text: 'Bantal penyangga siap untuk posisi setengah duduk', note: 'Sesuai kenyamanan' },
          { text: 'Kotak pil & air minum ada di meja samping', note: 'Satu titik tetap, tidak dipindah' },
          { text: 'Ventilasi/jendela bisa dibuka untuk udara segar', note: 'Atur tirai agar tidak silau' },
        ] },
      { room: 'Ruang Keluarga', icon: 'sofa', items: [
          { text: 'Kursi favorit menghadap area tenang, bukan layar TV keras', note: 'Pindah posisi kursi bila perlu' },
          { text: 'Terasa sejuk dan tidak pengap', note: 'Aktifkan kipas pada posisi tidak langsung ke badan' },
        ] },
      { room: 'Kamar Mandi', icon: 'shower', items: [
          { text: 'Kursi mandi tersedia & semua perlengkapan dalam jangkauan', note: 'Basis mandi duduk singkat' },
          { text: 'Air hangat-hangat kuku (tidak panas)', note: 'Uji suhu dengan punggung tangan' },
          { text: 'Lantai kering & anti-slip', note: 'Keset karet terpasang' },
        ] },
    ],
    safetyWarnings: [
      'Nyeri dada, sesak yang tidak seperti biasa, pingsan, atau palpitasi mendadak = tanda darurat. Segera hubungi RS/layanan gawat darurat.',
      'Jangan mengubah jadwal atau dosis obat sendiri walau tensi terlihat "normal". Semua perubahan dari dokter.',
      'Nilai tensimeter adalah ALAT BANTU — bukan alat diagnosis. Hasil ekstrem tetap dikonsultasikan.',
    ],
  },

  elderly: {
    goal: 'Sapuan bersih seluruh rumah ala "anti-jatuh": pencahayaan terang, lantai anti-slip, dan kebutuhan pokok dalam jangkauan tanpa membungkuk.',
    visual: [
      { step: 'Terangi semua lorong', title: 'Maksimalkan Pencahayaan', desc: 'Ganti lampu redup dengan bohlam lebih terang di koridor, tangga, dan kamar mandi. Pasang lampu malam otomatis di titik-titik penting.', tip: 'Nyalakan lampu koridor sepanjang malam — jangan sampai gelap gulita.' },
      { step: 'Amankan lantai', title: 'Hilangkan Keset & Karpet Longgar', desc: 'Keset/karpet yang tidak menempel ke lantai adalah penyebab jatuh. Lipat dan singkirkan, atau rekatkan dengan perekat double-tape tepi demi tepi.', tip: 'Ganti dengan keset karet bertekstur jika tetap diperlukan.' },
      { step: 'Tinggikan titik duduk', title: 'Sesuaikan Kursi & Kasur', desc: 'Pastikan kursi tidak terlalu rendah dan kasur cukup tinggi sehingga lansia bisa berdiri tanpa mengayun berlebihan.', tip: 'Tambahkan bantal tebal sebagai penambah tinggi kursi.' },
      { step: 'Siapkan kamar mandi anti-jatuh', title: 'Pasang Pegangan di Toilet & Bilik', desc: 'Pasang handrail di dinding dekat toilet dan pancuran. Letakkan bangku mandi untuk kegiatan berendam/mandi duduk.', tip: 'Sedia keset anti-slip di lantai bagian terbasah.' },
      { step: 'Tata dapur ringkas', title: 'Dekatkan Barang Sering Dipakai', desc: 'Simpan piring, gelas, dan makanan ringan di rak setinggi dada — hindari jangkauan tinggi/membungkuk. Gunakan tangga kecil bertapak lebar jika perlu.', tip: 'Pindahkan panci berat ke rak dasar lemari.' },
      { step: 'Siapkan sistem panggil', title: 'Pasang Alat Panggil Bantuan', desc: 'Sediakan bel meja di samping tempat tidur dan kamar mandi sebagai cara memanggil keluarga saat butuh bantuan.', tip: 'Simpan handphone di laci samping kasur dengan kontak darurat di layar kunci.' },
    ],
    shopping: [
      { item: 'Lampu malam otomatis (sensor cahaya)', qty: '3', unit: 'unit', purpose: 'Koridor, kamar, dan lorong kamar mandi terang otomatis', urgency: 'wajib', group: 'Pencahayaan' },
      { item: 'Keset anti-slip kamar mandi (karet)', qty: '2', unit: 'lembar', purpose: 'Area basah di toilet & bilik', urgency: 'wajib', group: 'Kamar Mandi' },
      { item: 'Handrail pegangan dinding (toilet)', qty: '1', unit: 'paket', purpose: 'Titik tumpu duduk & berdiri dari kloset', urgency: 'wajib', group: 'Keselamatan' },
      { item: 'Bangku/kursi mandi anti-slip', qty: '1', unit: 'buah', purpose: 'Mandi dengan aman tanpa berdiri lama', urgency: 'wajib', group: 'Kamar Mandi' },
      { item: 'Kotak pil mingguan 7-hari', qty: '1', unit: 'buah', purpose: 'Obat rutin tertata tanpa perlu mengingat', urgency: 'wajib', group: 'Obat' },
      { item: 'Bel meja pemanggil / bell darurat', qty: '2', unit: 'unit', purpose: 'Memanggil keluarga saat butuh bantuan', urgency: 'disarankan', group: 'Keselamatan' },
      { item: 'Sapu pel karet / kain microfiber', qty: '1', unit: 'set', purpose: 'Mengeringkan lantai basah segera', urgency: 'disarankan', group: 'Perawatan Lantai' },
      { item: 'Pensil dan kertas catatan dinding', qty: '1', unit: 'set', purpose: 'Jadwal obat & catatan harian tempel di kulkas', urgency: 'opsional', group: 'Obat' },
    ],
    rooms: [
      { room: 'Kamar Tidur', icon: 'bed', items: [
          { text: 'Jalur bangun → pintu → kamar mandi bebas barang', note: 'Bersihkan karpet/kabel' },
          { text: 'Kasur tinggi sehingga kaki menyentuh lantai saat duduk', note: 'Tambahkan penyangga kasur bila perlu' },
          { text: 'Lampu malam menyala secara otomatis di sisi kamar', note: 'Sensor cahaya, bukan saklar' },
          { text: 'Lampu beranda dinyalakan di titik yang mudah dijangkau dari kasur', note: 'Gunakan "saklar pintar" atau lampu sentuh' },
        ] },
      { room: 'Kamar Mandi / Toilet', icon: 'shower', items: [
          { text: 'Handrail terpasang kuat di dinding dekat kloset', note: 'Uji kelayakan dengan guncangan' },
          { text: 'Bangku mandi tersedia dan diuji kestabilannya', note: 'Tanpa kaki goyang' },
          { text: 'Keset anti-slip menutupi area basah', note: 'Simpan cadangan yang kering' },
          { text: 'Tissue/pembersih dalam jangkauan tanpa memutar badan', note: 'Letakkan di sabuk jejak samping kloset' },
        ] },
      { room: 'Dapur / Ruang Makan', icon: 'couch', items: [
          { text: 'Barang tiap hari di ketinggian dada (tanpa membungkuk/memanjat)', note: 'Rak terbuka di dinding' },
          { text: 'Panci berat disimpan di rak bawah', note: 'Gunakan tarikan laci' },
          { text: 'Lantai dapur kering saat lansia lalu-lalang', note: 'Lap tumpahan segera' },
        ] },
      { room: 'Tangga / Lorong', icon: 'stairs', items: [
          { text: 'Handrail di satu/kedua sisi untuk seluruh panjang tangga', note: 'Setinggi pinggang' },
          { text: 'Setiap anak tangga terang oleh lampu', note: 'Lampu sensor gerak terbaik' },
          { text: 'Tepi anak tangga diberi kontras warna', note: 'Stripe anti-slip warna cerah' },
        ] },
    ],
    safetyWarnings: [
      'Jatuh adalah musuh utama lansia. Selalu utamakan pencegahan (lantai, cahaya, pegangan) daripada pengobatan setelah jatuh.',
      'Jika lansia pernah jatuh atau hampir jatuh, diskusikan dengan dokter pada kontrol berikut.',
      'Pada gangguan penglihatan, gunakan komponen kontras (gelap vs terang) pada tepi tangga dan handrail.',
    ],
  },
}