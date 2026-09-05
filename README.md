# 🏥 RumahSiap — Asisten Transisi Pasien Pulang

> **Prototipe Hackathon** • Menerjemahkan instruksi pulang rumah sakit menjadi panduan visual, daftar belanja apotek, dan checklist ruangan siap aksi bagi keluarga pasien.

---

## 📌 Latar Belakang Masalah

Ketika pasien diizinkan pulang dari rawat inap (misal pasca-operasi, pasca-stroke, fraktur tulang, atau perawatan jantung), keluarga di rumah sering kali mengalami **kebingungan dan kepanikan**:
- Edukasi *discharge summary* dari rumah sakit sering kali sangat singkat dan sarat istilah medis.
- Rumah belum disesuaikan sehingga memicu **risiko jatuh (*fall risk*)** atau **infeksi sekunder**.
- Keluarga bingung alat bantu dan stok logistik apa saja yang wajib dibeli dari apotek.

**RumahSiap** hadir sebagai jembatan transisi dari rumah sakit ke rumah dengan fokus pada **logistik, tata ruang, dan keselamatan pasien (*safety & logistics guidance*)** tanpa membuat klaim atau diagnosis medis baru.

---

## ✨ Fitur Unggulan

### 1. 📋 Kuesioner Asesmen Cepat (< 2 Menit)
- 8 pertanyaan interaktif yang mudah dipahami dan ramah pengguna.
- Mengidentifikasi kondisi mobilitas, kebutuhan sterilisasi luka, risiko tersandung, dan kesiapan ruangan.

### 2. ⚡ Mesin Klasifikasi Instan (*Rule-Based Retrieval*)
Sistem secara otomatis memetakan profil kebutuhan pasien ke dalam salah satu dari **5 Kategori Protokol Pemulihan**:
- 🩹 **Pemulihan Luka / Pasca-Operasi**: Sterilisasi dan higienitas permukaan.
- 🧠 **Pasca-Stroke**: Penataan lingkungan bebas hambatan dan mobilitas aman.
- 🦴 **Tulang & Sendi (Ortopedi)**: Penataan jalur jalan, *grab bar*, dan lantai anti-slip.
- ❤️ **Pasca-Perawatan Jantung**: Zona istirahat tenang dan manajemen kepatuhan obat.
- 👵 **Lansia Umum**: Penataan rumah ramah lansia dan mitigasi risiko jatuh.

### 3. 🖼️ Kanvas Visual Interaktif (*CareCanvas*)
- Denah visual 2D interaktif kamar pasien.
- Dilengkapi tombol toggle **"⚠️ Kondisi Awal"** vs **"✓ Sudah Dirapikan"** untuk melihat secara visual bagaimana kabel, karpet, dan jalur jalan diamankan.

### 4. 🛒 Daftar Belanja Cerdas (*ShoppingList*)
- Rekomendasi logistik awal ±2 minggu sesuai kategori pemulihan.
- Dilengkapi status urgensi: **Wajib**, **Disarankan**, dan **Opsional**.
- **📄 Ekspor PDF**: Unduh daftar belanja dalam format PDF siap cetak.
- **💬 Kirim ke WhatsApp**: Buat draft pesan pesanan otomatis untuk dikirim ke apotek terdekat atau anggota keluarga yang berbelanja.

### 5. ✅ Checklist Ruangan (*RoomChecklist*)
- Panduan inspeksi langkah demi langkah per area: **Kamar Tidur**, **Kamar Mandi**, dan **Jalur Akses/Koridor**.

---

## 🛠️ *Tech Stack*

| Kategori | Teknologi |
| :--- | :--- |
| **Framework** | [React 18](https://react.dev/) + [Vite 6](https://vitejs.dev/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **Animasi & Transisi** | [Framer Motion](https://www.framer.com/motion/) |
| **PDF Generation** | [jsPDF](https://github.com/parallax/jsPDF) |
| **Integrasi Eksternal** | WhatsApp Click-to-Chat API URI |

---

## 📂 Struktur Proyek

```text
infinite/
├── src/
│   ├── components/
│   │   ├── Landing.jsx          # Halaman beranda & pengenalan
│   │   ├── Questionnaire.jsx    # Alur pengisian 8 pertanyaan
│   │   ├── Result.jsx           # Dasbor hasil klasifikasi pemulihan
│   │   ├── CareCanvas.jsx       # Kanvas 2D visual tata letak ruangan
│   │   ├── ShoppingList.jsx     # Manajemen daftar belanja logistik
│   │   ├── RoomChecklist.jsx    # Checklist mitigasi tiap ruangan
│   │   ├── VisualGuide.jsx      # Panduan tata ruang & instruksi higienitas
│   │   └── Icon.jsx             # Kumpulan ikon UI
│   ├── data/
│   │   ├── protocols.js         # Master data protokol 5 kategori pemulihan
│   │   └── questions.js         # Master data 8 butir pertanyaan & skor
│   ├── lib/
│   │   ├── classifier.js        # Logika scoring & tie-break kategori
│   │   ├── pdf.js               # Utilitas generate dokumen PDF
│   │   └── waMessage.js         # Utilitas generator teks pesan WhatsApp
│   ├── App.jsx                  # State manager & page flow controller
│   └── main.jsx                 # Entry point aplikasi
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Cara Menjalankan Proyek Secara Lokal

### Prasyarat
- Pastikan sudah menginstal [Node.js](https://nodejs.org/) (versi 18+ disarankan).

### Langkah-langkah
```bash
# 1. Clone repository
git clone https://github.com/KATA-YAA-GAS-AJA/YAA-ITK-AJA.git

# 2. Masuk ke direktori proyek
cd YAA-ITK-AJA

# 3. Instal dependensi
npm install

# 4. Jalankan development server
npm run dev
```

Aplikasi akan berjalan secara lokal di: `http://localhost:5173`

### Build untuk Produksi
```bash
npm run build
```

---

## ⚠️ Disclaimer Medis

> **RumahSiap memuat panduan statis yang tervalidasi untuk logistik dan tata ruang rumah — BUKAN diagnosis medis atau resep obat baru.**  
> Selalu konsultasikan kondisi dan kebutuhan klinis spesifik pasien dengan dokter atau tenaga medis rumah sakit yang merawat.

