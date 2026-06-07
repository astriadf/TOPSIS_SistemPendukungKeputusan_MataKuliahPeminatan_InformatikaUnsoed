export const kelompokInfo = {
  nomor: 12,
  alternatif: 26,
  kriteria: 6,
  responden: 41,
  wawancara: 8,
};

export const kriteria = [
  { kode: "C1", tipe: "COST",   bobot: 16.34980988593156, nama: "Tingkat Kesulitan" },
  { kode: "C2", tipe: "BENEFIT", bobot: 17.58555133079848, nama: "Relevansi Karir" },
  { kode: "C3", tipe: "BENEFIT", bobot: 17.30038022813689, nama: "Minat Mahasiswa" },
  { kode: "C4", tipe: "COST",   bobot: 15.87452471482890, nama: "Beban Kerja" },
  { kode: "C5", tipe: "BENEFIT", bobot: 15.30418250950570, nama: "Dampak IPK" },
  { kode: "C6", tipe: "BENEFIT", bobot: 17.58555133079848, nama: "Kompatibilitas Jadwal" },
];

export type Kategori = "SANGAT DIREKOMENDASIKAN" | "DIREKOMENDASIKAN" | "Netral";
export type Semester = "Ganjil" | "Genap";

export interface MataKuliah {
  rank: number;
  kode: string;
  nama: string;
  semester: Semester;
  dPlus: number;
  dMinus: number;
  preferensi: number;
  kategori: Kategori;
  matriksY: number[];
}

export const rankingData: MataKuliah[] = [
  { rank:  1, kode:"A23", nama:"Machine Learning",             semester:"Genap",  dPlus:0.006765406347524605, dMinus:0.03714954567767133, preferensi:0.8459429867157091, kategori:"SANGAT DIREKOMENDASIKAN", matriksY:[0.024004, 0.042140, 0.039498, 0.023291, 0.032859, 0.036246] },
  { rank:  2, kode:"A1",  nama:"Analisis Algoritma",           semester:"Ganjil", dPlus:0.012093617621527242, dMinus:0.03240545043116331, preferensi:0.7282276202457229, kategori:"SANGAT DIREKOMENDASIKAN", matriksY:[0.026492, 0.039709, 0.036302, 0.023369, 0.029267, 0.033751] },
  { rank:  3, kode:"A16", nama:"Komputer Forensik",            semester:"Genap",  dPlus:0.013516400278769660, dMinus:0.02777630069780984, preferensi:0.6726685356224112, kategori:"SANGAT DIREKOMENDASIKAN", matriksY:[0.027251, 0.034531, 0.034198, 0.029817, 0.032187, 0.037624] },
  { rank:  4, kode:"A20", nama:"Sistem Pakar",                 semester:"Genap",  dPlus:0.013567739740078265, dMinus:0.02714626935308513, preferensi:0.6667550054077940, kategori:"DIREKOMENDASIKAN",        matriksY:[0.030760, 0.034932, 0.036178, 0.029846, 0.034108, 0.038154] },
  { rank:  5, kode:"A8",  nama:"Jaringan Syaraf Tiruan",       semester:"Ganjil", dPlus:0.015360013059253715, dMinus:0.03023437213833553, preferensi:0.6631161272887203, kategori:"DIREKOMENDASIKAN",        matriksY:[0.023109, 0.033110, 0.032244, 0.026763, 0.029030, 0.036110] },
  { rank:  6, kode:"A4",  nama:"Pengenalan Pola",              semester:"Ganjil", dPlus:0.014566076727357820, dMinus:0.02662052466565404, preferensi:0.6463394347990741, kategori:"DIREKOMENDASIKAN",        matriksY:[0.028327, 0.036872, 0.033709, 0.030379, 0.029648, 0.036791] },
  { rank:  7, kode:"A12", nama:"ERP",                          semester:"Ganjil", dPlus:0.016560677520651185, dMinus:0.02430626573685010, preferensi:0.5947659354823068, kategori:"DIREKOMENDASIKAN",        matriksY:[0.032005, 0.036521, 0.036933, 0.031730, 0.031130, 0.034338] },
  { rank:  8, kode:"A11", nama:"Text Mining",                  semester:"Ganjil", dPlus:0.017500713390303450, dMinus:0.02486749874670485, preferensi:0.5869376471749509, kategori:"DIREKOMENDASIKAN",        matriksY:[0.032112, 0.034036, 0.033145, 0.025706, 0.030598, 0.033018] },
  { rank:  9, kode:"A22", nama:"Algoritma Genetika",           semester:"Genap",  dPlus:0.017760977489241558, dMinus:0.02465986176797801, preferensi:0.5813148018701957, kategori:"DIREKOMENDASIKAN",        matriksY:[0.028901, 0.034036, 0.033935, 0.028822, 0.028602, 0.032284] },
  { rank: 10, kode:"A3",  nama:"Pengolahan Citra Digital",     semester:"Ganjil", dPlus:0.017636440291478420, dMinus:0.02352038565488173, preferensi:0.5714820109193050, kategori:"DIREKOMENDASIKAN",        matriksY:[0.032112, 0.036467, 0.036762, 0.033495, 0.029545, 0.035769] },
  { rank: 11, kode:"A7",  nama:"Data Warehouse",               semester:"Ganjil", dPlus:0.020580110823321857, dMinus:0.02512416234955400, preferensi:0.5497114515862043, kategori:"Netral",                  matriksY:[0.036301, 0.038934, 0.038706, 0.038305, 0.034965, 0.038568] },
  { rank: 12, kode:"A25", nama:"Pemrograman Sistem Tertanam",  semester:"Genap",  dPlus:0.018990881437102230, dMinus:0.02191275322919276, preferensi:0.5357165300336767, kategori:"Netral",                  matriksY:[0.031962, 0.032922, 0.035266, 0.032278, 0.031346, 0.033384] },
  { rank: 13, kode:"A2",  nama:"Informatika Medik",            semester:"Ganjil", dPlus:0.022578039440808974, dMinus:0.02546824879629578, preferensi:0.5300773427202518, kategori:"Netral",                  matriksY:[0.040180, 0.038979, 0.039498, 0.037468, 0.036584, 0.039108] },
  { rank: 14, kode:"A6",  nama:"Sistem Informasi Geografis",   semester:"Ganjil", dPlus:0.019425626883683670, dMinus:0.02140816183333780, preferensi:0.5242756674306310, kategori:"Netral",                  matriksY:[0.033049, 0.033226, 0.034198, 0.030379, 0.029545, 0.033384] },
  { rank: 15, kode:"A24", nama:"CRM",                          semester:"Genap",  dPlus:0.019690349672585112, dMinus:0.02120413996784319, preferensi:0.5185084874339836, kategori:"Netral",                  matriksY:[0.034520, 0.037278, 0.033935, 0.032716, 0.028824, 0.034485] },
  { rank: 16, kode:"A17", nama:"Analisa Kinerja Sistem",       semester:"Genap",  dPlus:0.020778651765507725, dMinus:0.02130659694735053, preferensi:0.5062723305432374, kategori:"Netral",                  matriksY:[0.032258, 0.035436, 0.029845, 0.030379, 0.026806, 0.033818] },
  { rank: 17, kode:"A26", nama:"Praktikum PST",                semester:"Genap",  dPlus:0.020619885052172090, dMinus:0.02076156346956764, preferensi:0.5017118590873048, kategori:"Netral",                  matriksY:[0.033266, 0.030288, 0.035266, 0.031730, 0.030265, 0.034577] },
  { rank: 18, kode:"A10", nama:"Pemrograman Game",             semester:"Ganjil", dPlus:0.026226032849821567, dMinus:0.02525849918056593, preferensi:0.4906036470460238, kategori:"Netral",                  matriksY:[0.026091, 0.027391, 0.026674, 0.026329, 0.025942, 0.028615] },
  { rank: 19, kode:"A9",  nama:"Pengantar Akuntansi",          semester:"Ganjil", dPlus:0.021991207637413710, dMinus:0.02100669062646681, preferensi:0.4885515682079987, kategori:"Netral",                  matriksY:[0.032353, 0.033712, 0.032830, 0.029367, 0.026806, 0.029569] },
  { rank: 20, kode:"A18", nama:"Pemrograman Waktu Nyata",      semester:"Genap",  dPlus:0.024715247432367310, dMinus:0.02348985680774761, preferensi:0.4872898249683695, kategori:"Netral",                  matriksY:[0.028463, 0.029690, 0.027980, 0.026697, 0.025156, 0.029482] },
  { rank: 21, kode:"A19", nama:"Sistem Tersebar",              semester:"Genap",  dPlus:0.023541551738025378, dMinus:0.02165891148586028, preferensi:0.4791745469195741, kategori:"Netral",                  matriksY:[0.029222, 0.030551, 0.028726, 0.029367, 0.027671, 0.029569] },
  { rank: 22, kode:"A5",  nama:"Kriptografi",                  semester:"Ganjil", dPlus:0.025087597195488210, dMinus:0.02183929427298905, preferensi:0.4653897496632483, kategori:"Netral",                  matriksY:[0.029073, 0.026337, 0.032244, 0.029656, 0.024706, 0.031341] },
  { rank: 23, kode:"A21", nama:"Neuro Fuzzy",                  semester:"Genap",  dPlus:0.022004824784971927, dMinus:0.01905642723060385, preferensi:0.4640975687583800, kategori:"Netral",                  matriksY:[0.032915, 0.032415, 0.030778, 0.032716, 0.027937, 0.034485] },
  { rank: 24, kode:"A13", nama:"Teori Bahasa dan Otomata",     semester:"Genap",  dPlus:0.024924625187369275, dMinus:0.02037982294981910, preferensi:0.4498415450974277, kategori:"Netral",                  matriksY:[0.030266, 0.031605, 0.029752, 0.030379, 0.025942, 0.027661] },
  { rank: 25, kode:"A14", nama:"Komputer dan Masyarakat",      semester:"Genap",  dPlus:0.030344685568194054, dMinus:0.02177776875597628, preferensi:0.4178193263987849, kategori:"Netral",                  matriksY:[0.045760, 0.036062, 0.035702, 0.042064, 0.034589, 0.041822] },
  { rank: 26, kode:"A15", nama:"Kapita Selekta Informatika",   semester:"Genap",  dPlus:0.026802223594333496, dMinus:0.01754518858673155, preferensi:0.3956304939529886, kategori:"Netral",                  matriksY:[0.042326, 0.034531, 0.033628, 0.038256, 0.032187, 0.038154] },
];

export const idealPositif = [0.023109, 0.042140, 0.039498, 0.023291, 0.036584, 0.041822];
export const idealNegatif = [0.045760, 0.026337, 0.026674, 0.042064, 0.024706, 0.027661];

export const top10ChartData = rankingData.slice(0, 10).map((mk) => ({
  nama: mk.nama.length > 25 ? mk.nama.substring(0, 25) + "…" : mk.nama,
  preferensi: Number(mk.preferensi.toFixed(4)),
  kategori: mk.kategori,
}));

export const sebaranKategori = [
  { name: "Sangat Direkomendasikan", value: rankingData.filter(m => m.kategori === "SANGAT DIREKOMENDASIKAN").length, color: "#0f1d3d", pct: "" },
  { name: "Direkomendasikan",        value: rankingData.filter(m => m.kategori === "DIREKOMENDASIKAN").length,        color: "#2d5fad", pct: "" },
  { name: "Netral",                  value: rankingData.filter(m => m.kategori === "Netral").length,                  color: "#a0b4d4", pct: "" },
].map(s => ({ ...s, pct: `${((s.value / rankingData.length) * 100).toFixed(1)}%` }));

export const alurMetodologi = [
  { label: "Survei & Data",       icon: "📋" },
  { label: "Pembobotan Kriteria", icon: "⚖️" },
  { label: "Kalkulasi TOPSIS",    icon: "🧮" },
  { label: "Perankingan",         icon: "📊" },
  { label: "Rekomendasi",         icon: "✅" },
];
