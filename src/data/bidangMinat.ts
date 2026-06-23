import { rankingData, MataKuliah, Semester } from "./topsis";

export interface BidangMinat {
  id: string;
  nama: string;
  icon: string;
  deskripsi: string;
  kodeMK: string[]; // Array kode mata kuliah yang termasuk dalam bidang ini
}

// Mapping bidang minat berdasarkan Kurikulum Informatika UNSOED 2021
// Data berdasarkan dokumen kurikulum (Tabel 4 - Matakuliah pilihan)
export const bidangMinatList: BidangMinat[] = [
  {
    id: "ai-data-science",
    nama: "Artificial Intelligence & Data Science",
    icon: "🤖",
    deskripsi: "Pembelajaran mesin, kecerdasan buatan, algoritma genetika, dan analisis data",
    kodeMK: ["A23", "A8", "A20", "A21", "A22", "A11", "A7"] 
    // Machine Learning, JST, Sistem Pakar, Neuro Fuzzy, Algoritma Genetika, Text Mining, Data Warehouse
  },
  {
    id: "software-engineering",
    nama: "Software Engineering & System Analysis",
    icon: "⚙️",
    deskripsi: "Analisis algoritma, rekayasa perangkat lunak, dan teori sistem",
    kodeMK: ["A1", "A17", "A13", "A19"] 
    // Analisis Algoritma, Analisa Kinerja Sistem, Teori Bahasa dan Otomata, Sistem Tersebar
  },
  {
    id: "computer-vision",
    nama: "Computer Vision & Pattern Recognition",
    icon: "👁️",
    deskripsi: "Pengolahan citra digital dan pengenalan pola",
    kodeMK: ["A3", "A4"] 
    // Pengolahan Citra Digital, Pengenalan Pola
  },
  {
    id: "information-systems",
    nama: "Web & Information Systems",
    icon: "💼",
    deskripsi: "Sistem informasi bisnis, ERP, CRM, dan sistem informasi geografis",
    kodeMK: ["A12", "A24", "A6", "A9"] 
    // ERP, CRM, Sistem Informasi Geografis, Pengantar Akuntansi
  },
  {
    id: "network-security",
    nama: "Network & Security",
    icon: "🔒",
    deskripsi: "Keamanan komputer, kriptografi, dan forensik digital",
    kodeMK: ["A5", "A16"] 
    // Kriptografi, Komputer Forensik
  },
  {
    id: "embedded-systems",
    nama: "Embedded Systems & Real-Time Programming",
    icon: "🔌",
    deskripsi: "Sistem tertanam, pemrograman waktu nyata, dan praktikum PST",
    kodeMK: ["A25", "A26", "A18"] 
    // Pemrograman Sistem Tertanam, Praktikum PST, Pemrograman Waktu Nyata
  },
  {
    id: "multimedia-interactive",
    nama: "Multimedia & Interactive Technology",
    icon: "🎮",
    deskripsi: "Pengembangan game dan teknologi multimedia interaktif",
    kodeMK: ["A10"] 
    // Pemrograman Game
  },
  {
    id: "healthcare-it",
    nama: "Healthcare IT & Medical Informatics",
    icon: "🏥",
    deskripsi: "Informatika medis dan aplikasi teknologi informasi di bidang kesehatan",
    kodeMK: ["A2"] 
    // Informatika Medik
  },
  {
    id: "social-computing",
    nama: "Social Computing & Emerging Topics",
    icon: "🌐",
    deskripsi: "Komputer dan masyarakat, etika, serta topik-topik terkini dalam informatika",
    kodeMK: ["A14", "A15"] 
    // Komputer dan Masyarakat, Kapita Selekta Informatika
  }
];

// Fungsi untuk mendapatkan mata kuliah berdasarkan bidang minat
export function getMataKuliahByBidang(bidangId: string): MataKuliah[] {
  const bidang = bidangMinatList.find(b => b.id === bidangId);
  if (!bidang) return [];
  
  return rankingData.filter(mk => bidang.kodeMK.includes(mk.kode));
}

// Fungsi untuk menghitung total SKS
// Berdasarkan kurikulum: setiap mata kuliah pilihan memiliki SKS yang bervariasi
// Dari tabel kurikulum: sebagian besar MK pilihan = 3 SKS, beberapa = 2 SKS
export function getTotalSKS(mataKuliah: MataKuliah[]): number {
  // Mapping SKS berdasarkan kode MK dari dokumen kurikulum (Tabel 4)
  const sksMapping: Record<string, number> = {
    // Semester Ganjil
    "A1": 3,   // Analisis Algoritma
    "A2": 3,   // Informatika Medik
    "A3": 3,   // Pengolahan Citra Digital
    "A4": 3,   // Pengenalan Pola
    "A5": 3,   // Kriptografi
    "A6": 3,   // Sistem Informasi Geografis
    "A7": 3,   // Data Warehouse
    "A8": 3,   // Jaringan Syaraf Tiruan
    "A9": 2,   // Pengantar Akuntansi
    "A10": 2,  // Pemrograman Game
    "A11": 3,  // Text Mining
    "A12": 3,  // ERP
    // Semester Genap
    "A13": 3,  // Teori Bahasa dan Otomata
    "A14": 2,  // Komputer dan Masyarakat
    "A15": 3,  // Kapita Selekta Informatika
    "A16": 2,  // Komputer Forensik
    "A17": 3,  // Analisa Kinerja Sistem
    "A18": 3,  // Pemrograman Waktu Nyata
    "A19": 3,  // Sistem Tersebar
    "A20": 3,  // Sistem Pakar
    "A21": 3,  // Neuro Fuzzy
    "A22": 3,  // Algoritma Genetika
    "A23": 3,  // Machine Learning
    "A24": 3,  // CRM
    "A25": 2,  // Pemrograman Sistem Tertanam
    "A26": 1,  // Praktikum PST
  };
  
  return mataKuliah.reduce((total, mk) => {
    const sks = sksMapping[mk.kode] || 3; // default 3 SKS jika tidak ada di mapping
    return total + sks;
  }, 0);
}

// Fungsi untuk mengelompokkan MK berdasarkan semester
export function groupBySemester(mataKuliah: MataKuliah[]) {
  const ganjil = mataKuliah.filter(mk => mk.semester === "Ganjil");
  const genap = mataKuliah.filter(mk => mk.semester === "Genap");
  
  return { ganjil, genap };
}

// Fungsi untuk mendapatkan SKS per mata kuliah
export function getSKS(kodeMK: string): number {
  const sksMapping: Record<string, number> = {
    "A1": 3, "A2": 3, "A3": 3, "A4": 3, "A5": 3, "A6": 3,
    "A7": 3, "A8": 3, "A9": 2, "A10": 2, "A11": 3, "A12": 3,
    "A13": 3, "A14": 2, "A15": 3, "A16": 2, "A17": 3, "A18": 3,
    "A19": 3, "A20": 3, "A21": 3, "A22": 3, "A23": 3, "A24": 3,
    "A25": 2, "A26": 1,
  };
  return sksMapping[kodeMK] || 3;
}

// Batas maksimal SKS mata kuliah pilihan sesuai kurikulum
export const MAX_SKS_PILIHAN = 17;
