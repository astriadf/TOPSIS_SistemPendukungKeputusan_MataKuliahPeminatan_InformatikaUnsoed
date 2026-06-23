# Sistem Pendukung Keputusan Mata Kuliah Pilihan
## Program Studi Informatika UNSOED

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.8-purple.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0.0-cyan.svg)](https://tailwindcss.com/)

---

## 📋 Deskripsi Project

Sistem Pendukung Keputusan berbasis web yang mengimplementasikan metode **TOPSIS (Technique for Order of Preference by Similarity to Ideal Solution)** untuk membantu mahasiswa Program Studi Informatika Universitas Jenderal Soedirman dalam memilih mata kuliah pilihan yang optimal.

Sistem ini menganalisis 26 mata kuliah pilihan berdasarkan 6 kriteria keputusan dengan data survei dari 41 mahasiswa dan wawancara dengan 8 responden.

---

## 🎯 Fitur Utama

### 1. **Dashboard**
- Overview hasil analisis TOPSIS
- Visualisasi top 10 mata kuliah dengan grafik batang
- Sebaran kategori rekomendasi dengan pie chart
- Informasi kriteria keputusan dan bobotnya
- Filter berdasarkan semester (Ganjil/Genap)

### 2. **Criteria**
- Detail 6 kriteria keputusan
- Bobot masing-masing kriteria (%)
- Tipe kriteria (Benefit/Cost)
- Visualisasi perbandingan bobot

### 3. **Rankings**
- Daftar lengkap 26 mata kuliah pilihan
- Nilai preferensi hasil perhitungan TOPSIS
- Kategori rekomendasi (Sangat Direkomendasikan, Direkomendasikan, Netral)
- Filter semester dan search functionality
- Detail informasi per mata kuliah

### 4. **Bidang Minat**
- Pengelompokan mata kuliah berdasarkan 9 bidang minat karir
- Perhitungan total SKS per bidang
- Indikator ketentuan minimal 17 SKS
- Pemisahan mata kuliah per semester (Ganjil/Genap)
- Detail lengkap termasuk ranking TOPSIS dan skor preferensi

---

## 🛠️ Teknologi yang Digunakan

### Frontend Framework
- **React 18.3.1** - Library UI modern dan reactive
- **TypeScript 5.5.3** - Type-safe JavaScript
- **Vite 5.4.8** - Build tool dan dev server yang cepat

### Styling & UI
- **Tailwind CSS 4.0.0** - Utility-first CSS framework
- **Lucide React 0.453.0** - Icon library yang modern

### Data Visualization
- **Recharts 2.15.2** - Library untuk grafik dan chart

### Routing & State Management
- **Wouter 3.3.5** - Lightweight routing solution
- **TanStack Query 5.56.2** - Powerful data fetching dan caching

---

## 📁 Struktur Project

```
spk-topsis/
├── src/
│   ├── assets/              # Gambar dan assets statis
│   │   └── background.jpeg
│   ├── components/          # Komponen React reusable
│   │   └── layout.tsx       # Layout utama dengan navbar
│   ├── data/               # Data dan logic TOPSIS
│   │   ├── topsis.ts       # Data ranking dan kriteria
│   │   └── bidangMinat.ts  # Data bidang minat dan SKS
│   ├── pages/              # Halaman-halaman aplikasi
│   │   ├── Dashboard.tsx   # Halaman utama
│   │   ├── Criteria.tsx    # Halaman kriteria
│   │   ├── Rankings.tsx    # Halaman ranking lengkap
│   │   └── BidangMinat.tsx # Halaman bidang minat
│   ├── App.tsx             # Root component dan routing
│   ├── main.tsx            # Entry point aplikasi
│   └── index.css           # Global styles
├── public/                 # Static files
├── index.html             # HTML template
├── package.json           # Dependencies dan scripts
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
├── USER_MANUAL.md         # Panduan pengguna
└── README.md              # Dokumentasi teknis (file ini)
```

---

## 🚀 Cara Menjalankan Project

### Prasyarat
Pastikan sudah terinstall:
- **Node.js** versi 18.x atau lebih baru
- **npm** versi 9.x atau lebih baru

### Langkah-langkah

1. **Clone repository**
   ```bash
   git clone https://github.com/astriadf/TOPSIS_SistemPendukungKeputusan_MataKuliahPeminatan_InformatikaUnsoed.git
   cd spk-topsis
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Jalankan development server**
   ```bash
   npm run dev
   ```

4. **Buka browser**
   - Akses: `http://localhost:5174`
   - Aplikasi akan otomatis reload saat ada perubahan code

### Scripts Tersedia

```bash
# Development server dengan hot-reload
npm run dev

# Build untuk production
npm run build

# Preview build production
npm run preview
```

---

## 📊 Metodologi TOPSIS

### Kriteria Keputusan

| Kode | Nama Kriteria | Bobot | Tipe |
|------|---------------|-------|------|
| C1 | Tingkat Kesulitan | 14.75% | Cost |
| C2 | Relevansi Karir | 17.59% | Benefit |
| C3 | Ketersediaan Sumber Belajar | 16.85% | Benefit |
| C4 | Kompetensi Dosen | 16.47% | Benefit |
| C5 | Minat Mahasiswa | 16.75% | Benefit |
| C6 | Kompatibilitas Jadwal | 17.59% | Benefit |

### Langkah Perhitungan TOPSIS

1. **Normalisasi Matriks Keputusan**
   - Transformasi data ke skala 0-1

2. **Pembobotan Matriks Ternormalisasi**
   - Mengalikan nilai normalisasi dengan bobot kriteria

3. **Menentukan Solusi Ideal Positif & Negatif**
   - A+ = nilai terbaik untuk setiap kriteria
   - A- = nilai terburuk untuk setiap kriteria

4. **Menghitung Jarak Euclidean**
   - D+ = jarak ke solusi ideal positif
   - D- = jarak ke solusi ideal negatif

5. **Menghitung Nilai Preferensi**
   - Vi = D- / (D+ + D-)
   - Nilai Vi menentukan ranking akhir

### Kategori Rekomendasi

- **SANGAT DIREKOMENDASIKAN**: Vi ≥ 0.7 (Ranking 1-8)
- **DIREKOMENDASIKAN**: 0.5 ≤ Vi < 0.7 (Ranking 9-18)
- **Netral**: Vi < 0.5 (Ranking 19-26)

---

## 🎓 Bidang Minat Karir

Sistem mengelompokkan 26 mata kuliah pilihan ke dalam 9 bidang minat:

1. **Artificial Intelligence & Data Science** (7 MK)
2. **Software Engineering & System Analysis** (4 MK)
3. **Computer Vision & Pattern Recognition** (2 MK)
4. **Web & Information Systems** (4 MK)
5. **Network & Security** (2 MK)
6. **Embedded Systems & Real-Time Programming** (3 MK)
7. **Multimedia & Interactive Technology** (1 MK)
8. **Healthcare IT & Medical Informatics** (1 MK)
9. **Social Computing & Emerging Topics** (2 MK)

**Ketentuan**: Minimal 17 SKS mata kuliah pilihan sesuai Kurikulum Informatika UNSOED 2021.

---

## 📦 Dependencies

### Production Dependencies
```json
{
  "@tailwindcss/vite": "^4.0.0",
  "@tanstack/react-query": "^5.56.2",
  "lucide-react": "^0.453.0",
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "recharts": "^2.15.2",
  "wouter": "^3.3.5"
}
```

### Development Dependencies
```json
{
  "@types/node": "^25.9.1",
  "@types/react": "^18.3.5",
  "@types/react-dom": "^18.3.0",
  "@vitejs/plugin-react": "^4.3.1",
  "tailwindcss": "^4.0.0",
  "typescript": "^5.5.3",
  "vite": "^5.4.8"
}
```

---

## 🔧 Konfigurasi

### Vite Configuration
```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
    },
  },
});
```

### TypeScript Configuration
- Target: ES2020
- Module: ESNext
- Strict mode enabled
- Path aliases configured

---

## 📱 Responsiveness

Aplikasi didesain **fully responsive** untuk berbagai ukuran layar:
- 📱 **Mobile**: 320px - 767px
- 📱 **Tablet**: 768px - 1023px
- 💻 **Desktop**: 1024px ke atas

Grid system menggunakan Tailwind breakpoints:
- `sm:` - Small devices (640px)
- `md:` - Medium devices (768px)
- `lg:` - Large devices (1024px)
- `xl:` - Extra large devices (1280px)

---

## 🎨 Design System

### Color Palette
- **Primary**: `#0f1d3d` (Navy blue)
- **Secondary**: `#2d5fad` (Blue)
- **Background**: `#eef1f7` (Light gray)
- **Success**: Green-based colors
- **Warning**: Orange-based colors
- **Neutral**: Gray-based colors

### Typography
- Font Family: System font stack (Inter, SF Pro, Roboto, etc.)
- Heading: Bold, various sizes (text-2xl, text-xl, text-lg)
- Body: Regular, text-sm / text-base
- Small: text-xs for labels dan metadata

---

## 📖 User Manual

Untuk panduan penggunaan lengkap, lihat file **[USER_MANUAL.md](USER_MANUAL.md)** yang berisi:
- Cara mengakses sistem
- Penjelasan setiap fitur
- Tips penggunaan
- FAQ (Frequently Asked Questions)

---

## 👥 Tim Pengembang

**Kelompok 12 - Kelas SPK A**
- Program Studi Informatika
- Universitas Jenderal Soedirman
- Tahun Akademik 2025/2026

---

## 📄 Lisensi

© 2026 Kelompok 12 Kelas SPK A. All rights reserved.

Project ini dikembangkan untuk keperluan akademis Program Studi Informatika Universitas Jenderal Soedirman.

---

## 📞 Kontak & Dukungan

Jika ada pertanyaan, saran, atau ingin berkontribusi:
- **GitHub**: [Repository Link](https://github.com/astriadf/TOPSIS_SistemPendukungKeputusan_MataKuliahPeminatan_InformatikaUnsoed)
- **Program Studi**: Informatika UNSOED

---

## 🔄 Update Log

### Version 1.0.0 (Juni 2026)
- ✅ Implementasi TOPSIS untuk 26 mata kuliah
- ✅ Dashboard dengan visualisasi data
- ✅ Halaman Criteria dengan detail bobot
- ✅ Halaman Rankings lengkap
- ✅ Fitur Bidang Minat dengan 9 kategori
- ✅ Responsive design untuk semua perangkat
- ✅ User manual lengkap

---

**Happy Coding! 🚀**
