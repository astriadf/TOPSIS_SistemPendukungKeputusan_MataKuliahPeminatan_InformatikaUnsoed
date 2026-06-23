# USER MANUAL
## Sistem Pendukung Keputusan Mata Kuliah Pilihan Program Studi Informatika

---

## 1. PENDAHULUAN

### 1.1 Tentang Sistem
Sistem Pendukung Keputusan ini merupakan aplikasi web yang dirancang untuk membantu mahasiswa Program Studi Informatika Universitas Jenderal Soedirman dalam memilih mata kuliah pilihan yang sesuai dengan minat dan kebutuhan karir mereka. Sistem ini menggunakan metode TOPSIS (Technique for Order of Preference by Similarity to Ideal Solution) untuk memberikan rekomendasi objektif berdasarkan berbagai kriteria akademis.

### 1.2 Tujuan Sistem
- Memberikan rekomendasi mata kuliah pilihan berdasarkan analisis objektif
- Memvisualisasikan hasil perhitungan TOPSIS secara interaktif
- Membantu mahasiswa memahami kriteria penilaian mata kuliah
- Mengelompokkan mata kuliah berdasarkan bidang minat karir

### 1.3 Pengguna Sistem
Sistem ini ditujukan untuk:
- Mahasiswa Program Studi Informatika UNSOED
- Dosen pembimbing akademik
- Pengelola program studi

---

## 2. CARA MENGAKSES SISTEM

### 2.1 Membuka Aplikasi
1. Pastikan aplikasi sudah berjalan (lihat README.md untuk cara menjalankan):
## Cara Menjalankan Project

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
   Akses: `http://localhost:XXXX`

5. Tekan Enter
6. Halaman Dashboard akan muncul secara otomatis


### 2.2 Navigasi Sistem
Sistem memiliki menu navigasi di bagian atas yang terdiri dari 4 menu utama:
- **Dashboard** - Halaman utama dengan ringkasan hasil analisis
- **Criteria** - Halaman kriteria keputusan dan bobotnya
- **Rankings** - Halaman daftar lengkap peringkat mata kuliah
- **Bidang Minat** - Halaman pengelompokan mata kuliah berdasarkan bidang karir

---

## 3. FITUR DAN CARA PENGGUNAAN

### 3.1 DASHBOARD

#### 3.1.1 Deskripsi
Halaman Dashboard menampilkan ringkasan hasil analisis TOPSIS secara visual dan mudah dipahami.

#### 3.1.2 Informasi yang Ditampilkan
1. **Header Informasi**
   - Judul sistem
   - Jumlah alternatif (26 mata kuliah)
   - Jumlah kriteria (6 kriteria)
   - Jumlah responden (41 mahasiswa)

2. **Analisis Latar Belakang**
   - Penjelasan mengapa sistem ini dibuat
   - Metodologi penelitian yang digunakan

3. **Kriteria Keputusan**
   - Menampilkan 6 kriteria dengan bobot masing-masing
   - Indikator jenis kriteria (Benefit/Cost)
   - Visual bar untuk perbandingan bobot

4. **Hasil Analisis Teratas**
   - Top 3 mata kuliah dengan tampilan yang menonjol
   - Nilai preferensi dan kategori rekomendasi
   - Informasi semester dan kode mata kuliah

5. **Top 5 Mata Kuliah**
   - Tabel interaktif dengan filter semester
   - Dapat memfilter: Semua, Semester Ganjil, atau Semester Genap

6. **Visualisasi Data**
   - Grafik batang untuk Top 10 mata kuliah
   - Diagram pie untuk sebaran kategori rekomendasi

#### 3.1.3 Cara Penggunaan
1. **Melihat Top 5 Berdasarkan Semester:**
   - Klik tombol "Semua" untuk melihat semua mata kuliah
   - Klik tombol "Semester Ganjil" untuk filter semester ganjil saja
   - Klik tombol "Semester Genap" untuk filter semester genap saja

2. **Memahami Visualisasi:**
   - Hover mouse pada grafik untuk melihat detail nilai
   - Perhatikan warna pada grafik yang menunjukkan kategori rekomendasi

---

### 3.2 CRITERIA

#### 3.2.1 Deskripsi
Halaman Criteria menampilkan detail 6 kriteria yang digunakan dalam perhitungan TOPSIS beserta bobot dan tipe masing-masing kriteria.

#### 3.2.2 Kriteria yang Digunakan
1. **C1 - Tingkat Kesulitan (14.75%)**
   - Tipe: Cost (semakin rendah semakin baik)
   - Penjelasan: Tingkat kesulitan mata kuliah berdasarkan persepsi mahasiswa

2. **C2 - Relevansi Karir (17.59%)**
   - Tipe: Benefit (semakin tinggi semakin baik)
   - Penjelasan: Kesesuaian mata kuliah dengan tujuan karir mahasiswa

3. **C3 - Ketersediaan Sumber Belajar (16.85%)**
   - Tipe: Benefit (semakin tinggi semakin baik)
   - Penjelasan: Kelengkapan buku, modul, dan referensi pembelajaran

4. **C4 - Kompetensi Dosen (16.47%)**
   - Tipe: Benefit (semakin tinggi semakin baik)
   - Penjelasan: Keahlian dan pengalaman dosen pengampu

5. **C5 - Minat Mahasiswa (16.75%)**
   - Tipe: Benefit (semakin tinggi semakin baik)
   - Penjelasan: Tingkat minat dan antusiasme mahasiswa terhadap mata kuliah

6. **C6 - Kompatibilitas Jadwal (17.59%)**
   - Tipe: Benefit (semakin tinggi semakin baik)
   - Penjelasan: Kesesuaian jadwal dengan kegiatan mahasiswa

#### 3.2.3 Cara Penggunaan
1. **Memahami Bobot:**
   - Perhatikan persentase bobot setiap kriteria
   - Semakin tinggi bobot, semakin besar pengaruhnya dalam keputusan
   - C2 dan C6 memiliki bobot tertinggi (17.59%)

2. **Memahami Tipe Kriteria:**
   - **Benefit (hijau/biru)**: Nilai tinggi lebih baik
   - **Cost (merah)**: Nilai rendah lebih baik

---

### 3.3 RANKINGS

#### 3.3.1 Deskripsi
Halaman Rankings menampilkan daftar lengkap 26 mata kuliah pilihan yang telah diurutkan berdasarkan nilai preferensi TOPSIS dari yang tertinggi hingga terendah.

#### 3.3.2 Informasi yang Ditampilkan
Setiap mata kuliah menampilkan:
- **Ranking** - Posisi peringkat (1-26)
- **Nama Mata Kuliah** - Nama lengkap mata kuliah
- **Kode** - Kode mata kuliah (A1-A26)
- **Semester** - Semester penawaran (Ganjil/Genap)
- **Nilai Preferensi** - Nilai hasil perhitungan TOPSIS (0-1)
- **Kategori Rekomendasi** - Tingkat rekomendasi mata kuliah

#### 3.3.3 Kategori Rekomendasi
1. **SANGAT DIREKOMENDASIKAN**
   - Mata kuliah dengan nilai preferensi tertinggi
   - Sangat disarankan untuk diambil
   - Ditampilkan dengan badge berwarna hijau

2. **DIREKOMENDASIKAN**
   - Mata kuliah dengan nilai preferensi menengah-tinggi
   - Layak untuk dipertimbangkan
   - Ditampilkan dengan badge berwarna biru

3. **Netral**
   - Mata kuliah dengan nilai preferensi rendah
   - Dapat dipertimbangkan sesuai minat pribadi
   - Ditampilkan dengan badge berwarna abu-abu

#### 3.3.4 Cara Penggunaan
1. **Melihat Detail Mata Kuliah:**
   - Scroll untuk melihat seluruh daftar
   - Perhatikan nilai preferensi untuk membandingkan

2. **Memfilter Berdasarkan Semester:**
   - Gunakan toggle di bagian atas untuk filter
   - Pilih "Semester Ganjil" atau "Semester Genap"

3. **Memilih Mata Kuliah:**
   - Prioritaskan mata kuliah kategori "SANGAT DIREKOMENDASIKAN"
   - Pertimbangkan semester untuk perencanaan KRS
   - Perhatikan batas maksimal 17 SKS untuk mata kuliah pilihan

---

### 3.4 BIDANG MINAT

#### 3.4.1 Deskripsi
Halaman Bidang Minat mengelompokkan mata kuliah pilihan berdasarkan 9 bidang minat karir yang relevan dengan industri dan akademis di bidang Informatika.

#### 3.4.2 Daftar Bidang Minat
1. **Artificial Intelligence & Data Science**
   - Machine Learning, Jaringan Syaraf Tiruan, Sistem Pakar
   - Neuro Fuzzy, Algoritma Genetika, Text Mining, Data Warehouse

2. **Software Engineering & System Analysis**
   - Analisis Algoritma, Analisa Kinerja Sistem
   - Teori Bahasa dan Otomata, Sistem Tersebar

3. **Computer Vision & Pattern Recognition**
   - Pengolahan Citra Digital, Pengenalan Pola

4. **Web & Information Systems**
   - ERP, CRM, Sistem Informasi Geografis, Pengantar Akuntansi

5. **Network & Security**
   - Kriptografi, Komputer Forensik

6. **Embedded Systems & Real-Time Programming**
   - Pemrograman Sistem Tertanam, Praktikum PST
   - Pemrograman Waktu Nyata

7. **Multimedia & Interactive Technology**
   - Pemrograman Game

8. **Healthcare IT & Medical Informatics**
   - Informatika Medik

9. **Social Computing & Emerging Topics**
   - Komputer dan Masyarakat, Kapita Selekta Informatika

#### 3.4.3 Cara Penggunaan
1. **Memilih Bidang Minat:**
   - Klik pada card bidang minat yang diminati
   - Sistem akan menampilkan detail mata kuliah dalam bidang tersebut

2. **Melihat Detail Mata Kuliah:**
   - Setelah memilih bidang, akan muncul:
     - Total SKS dari semua mata kuliah dalam bidang tersebut
     - Indikator apakah sudah memenuhi minimal 17 SKS
     - Daftar mata kuliah dikelompokkan per semester (Ganjil/Genap)

3. **Informasi per Mata Kuliah:**
   - Nama lengkap mata kuliah
   - Kode mata kuliah
   - Jumlah SKS
   - Semester penawaran
   - Ranking TOPSIS
   - Kategori rekomendasi
   - Skor preferensi dengan visualisasi bar

4. **Kembali ke Daftar Bidang:**
   - Klik tombol "← Kembali ke Daftar Bidang Minat"

#### 3.4.4 Perencanaan Pengambilan Mata Kuliah
1. **Ketentuan SKS:**
   - Minimal pengambilan mata kuliah pilihan: **17 SKS**
   - Sistem akan menampilkan warning jika total SKS belum mencukupi

2. **Strategi Pemilihan:**
   - Pilih bidang minat sesuai rencana karir
   - Perhatikan sebaran semester (Ganjil/Genap)
   - Kombinasikan mata kuliah dari beberapa bidang jika perlu
   - Prioritaskan mata kuliah dengan ranking TOPSIS tinggi

3. **Contoh Perencanaan:**
   - Minat: AI & Data Science
   - Semester Ganjil: Machine Learning (3 SKS) + Data Warehouse (3 SKS) + Text Mining (3 SKS)
   - Semester Genap: Jaringan Syaraf Tiruan (3 SKS) + Sistem Pakar (3 SKS) + Algoritma Genetika (3 SKS)
   - Total: 18 SKS  Memenuhi ketentuan

---

## 4. TIPS PENGGUNAAN SISTEM

### 4.1 Untuk Mahasiswa
1. **Gunakan Dashboard untuk overview awal**
   - Lihat mata kuliah teratas
   - Pahami kriteria yang digunakan

2. **Eksplorasi Rankings untuk detail lengkap**
   - Bandingkan nilai preferensi antar mata kuliah
   - Perhatikan kategori rekomendasi

3. **Manfaatkan Bidang Minat untuk perencanaan**
   - Pilih bidang sesuai minat karir
   - Hitung total SKS sebelum memutuskan
   - Perhatikan sebaran semester

4. **Pertimbangkan faktor pribadi:**
   - Minat dan bakat
   - Rencana karir
   - Beban kuliah semester berjalan
   - Kompatibilitas dengan jadwal lain

### 4.2 Untuk Dosen Pembimbing Akademik
1. Gunakan sistem sebagai referensi konseling mahasiswa
2. Bantu mahasiswa memahami hasil rekomendasi
3. Diskusikan kesesuaian dengan rencana studi mahasiswa
4. Pertimbangkan faktor individual mahasiswa

### 4.3 Untuk Pengelola Program Studi
1. Analisis popularitas mata kuliah berdasarkan ranking
2. Evaluasi kriteria dan bobot jika diperlukan
3. Gunakan data untuk perencanaan penawaran mata kuliah
4. Monitor sebaran pemilihan mahasiswa

---

## 5. PEMAHAMAN HASIL ANALISIS TOPSIS

### 5.1 Nilai Preferensi (Vi)
- Rentang: 0.0000 - 1.0000
- Semakin tinggi nilai, semakin direkomendasikan
- Nilai di atas 0.7: Sangat Direkomendasikan
- Nilai 0.5 - 0.7: Direkomendasikan
- Nilai di bawah 0.5: Netral

### 5.2 Interpretasi Ranking
- Ranking 1-8: Sangat Direkomendasikan
- Ranking 9-18: Direkomendasikan
- Ranking 19-26: Netral

### 5.3 Catatan Penting
- Hasil rekomendasi bersifat objektif berdasarkan data survei
- Keputusan akhir tetap pada mahasiswa dengan pertimbangan pribadi
- Konsultasikan dengan dosen pembimbing akademik
- Sesuaikan dengan rencana karir dan minat pribadi

---

## 6. PERTANYAAN UMUM (FAQ)

**Q: Apakah saya harus mengikuti rekomendasi sistem sepenuhnya?**
A: Tidak. Sistem memberikan rekomendasi objektif, namun keputusan akhir tetap pada mahasiswa dengan mempertimbangkan minat dan rencana karir pribadi.

**Q: Bagaimana jika mata kuliah yang saya minati memiliki ranking rendah?**
A: Anda tetap boleh mengambil mata kuliah tersebut. Ranking rendah tidak berarti mata kuliah buruk, hanya kurang sesuai dengan kriteria agregat responden.

**Q: Berapa jumlah SKS minimal mata kuliah pilihan yang harus diambil?**
A: Minimal 17 SKS sesuai Kurikulum Informatika UNSOED 2021.

**Q: Bisakah saya mengambil mata kuliah dari beberapa bidang minat berbeda?**
A: Ya, sangat disarankan. Kombinasi mata kuliah dari beberapa bidang dapat memperluas kompetensi Anda.

**Q: Apakah data ranking akan berubah?**
A: Data saat ini berdasarkan survei tahun akademik tertentu. Jika survei diperbarui, ranking dapat berubah.

**Q: Bagaimana jika saya kesulitan memilih bidang minat?**
A: Konsultasikan dengan dosen pembimbing akademik, atau pilih mata kuliah dengan ranking tertinggi terlebih dahulu.

---

© 2026 Kelompok 12 Kelas SPK A. All rights reserved.
