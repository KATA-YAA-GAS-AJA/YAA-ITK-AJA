# RumahSiap — Asisten Transisi Pasien Pulang

Menerjemahkan instruksi pulang rumah sakit menjadi panduan visual, daftar belanja apotek, dan checklist ruangan siap aksi bagi keluarga pasien.

---

## Latar Belakang Masalah

Ketika pasien diizinkan pulang dari rawat inap (misal pasca-operasi, pasca-stroke, fraktur tulang, atau perawatan jantung), keluarga di rumah sering kali mengalami **kebingungan dan kepanikan**:
- Edukasi *discharge summary* dari rumah sakit sering kali sangat singkat dan sarat istilah medis.
- Rumah belum disesuaikan sehingga memicu **risiko jatuh (*fall risk*)** atau **infeksi sekunder**.
- Keluarga bingung alat bantu dan stok logistik apa saja yang wajib dibeli dari apotek.

**RumahSiap** hadir sebagai jembatan transisi dari rumah sakit ke rumah dengan fokus pada **logistik, tata ruang, dan keselamatan pasien (*safety & logistics guidance*)** tanpa membuat klaim atau diagnosis medis baru.

---

## Fitur Unggulan

### 1. Live Chat Konsultan AI Berbasis 10 Jurnal Medis
- Konsultasi interaktif berbahasa Indonesia yang dirancang khusus untuk keluarga pasien awam (non-medis).
- Pengguna dapat mengetik pertanyaan atau keluhan bebas mengenai kondisi pasien, atau memilih opsi cepat yang disodorkan AI.
- AI langsung menjawab secara terfokus pada keluhan spesifik yang dialami pasien, berlandaskan pedoman klinis dari 10 jurnal dan standar kesehatan resmi (Kemenkes RI Permenkes No. 27, CDC SSI, AHA/ASA Stroke, Barthel Index, AAOS Arthroplasty, Morse Fall Scale, AHA/ACC Heart Failure, WHO Adherence, CDC STEADI, dan WHO ICOPE).
- Mendukung integrasi Google Gemini API dan dilengkapi Built-in Clinical RAG Engine bawaan.

### 2. Saran Perlengkapan & Logistik Pasien
- Rekomendasi perlengkapan esensial (seperti kassa steril, cairan NaCl 0.9%, kotak obat sekat, walker/kruk, kursi mandi anti-slip).
- Disajikan sebagai bacaan rekomendasi praktis yang menjelaskan fungsi dan tujuan penggunaan setiap barang.
- Fitur ekspor: Simpan dalam format PDF atau bagikan langsung via WhatsApp.

### 3. Panduan Perawatan Mandiri di Rumah
- Langkah-langkah perawatan harian terarah (teknik aseptik balutan, aturan tumpuan beban, pencegahan jatuh, dan rutinitas jadwal obat).
- Dilengkapi tips praktis keluarga untuk mempermudah eksekusi di rumah.

---

## *Tech Stack*

| Kategori | Teknologi |
| :--- | :--- |
| **Framework** | [React 18](https://react.dev/) + [Vite 6](https://vitejs.dev/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **Animasi & Transisi** | [Framer Motion](https://www.framer.com/motion/) |
| **AI Engine** | Google Gemini API + Built-in Clinical RAG Engine |
| **PDF Generation** | [jsPDF](https://github.com/parallax/jsPDF) |
| **Integrasi Eksternal** | WhatsApp Click-to-Chat URI & OpenAlex API |

---

## Struktur Proyek

```text
src/
├── components/
│   ├── Landing.jsx          # Halaman beranda & pengenalan layanan
│   ├── LiveChat.jsx         # Ruang konsultasi Live AI Chat interaktif
│   ├── Result.jsx           # Rangkuman saran perawatan & hasil pemulihan
│   ├── ShoppingList.jsx     # Panduan bacaan saran perlengkapan logistik
│   ├── VisualGuide.jsx      # Langkah praktis panduan perawatan di rumah
│   └── Icon.jsx             # Kumpulan ikon UI SVG
├── data/
│   ├── protocols.js         # Master data protokol & 10 rujukan jurnal
│   └── questions.js         # Taksonomi evaluasi pemulihan
├── lib/
│   ├── aiConsultant.js      # Mesin AI Konsultan (Gemini API + Clinical RAG)
│   ├── evidenceService.js   # Layanan integrasi literatur terbuka OpenAlex
│   ├── classifier.js        # Klasifikasi skor pemulihan pasien
│   ├── pdf.js               # Utilitas generate dokumen PDF
│   └── waMessage.js         # Utilitas generator teks pesan WhatsApp
├── App.jsx                  # State manager & pengatur alur halaman
└── main.jsx                 # Entry point aplikasi
```

## Disclaimer Medis

> **RumahSiap memuat panduan statis yang tervalidasi untuk logistik dan tata ruang rumah — BUKAN diagnosis medis atau resep obat baru.**  
> Selalu konsultasikan kondisi dan kebutuhan klinis spesifik pasien dengan dokter atau tenaga medis rumah sakit yang merawat.

