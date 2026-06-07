import { useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell,
  PieChart, Pie,
} from "recharts";
import {
  kelompokInfo, kriteria, rankingData, top10ChartData, sebaranKategori, alurMetodologi,
  type Kategori,
} from "../data/topsis";
import campusImg from "@assets/background.jpeg";

const katBadge: Record<Kategori, string> = {
  "SANGAT DIREKOMENDASIKAN": "bg-[#0f1d3d] text-white",
  "DIREKOMENDASIKAN": "bg-blue-100 text-blue-800",
  "Netral": "bg-gray-100 text-gray-500",
};

const katColor: Record<Kategori, string> = {
  "SANGAT DIREKOMENDASIKAN": "#0f1d3d",
  "DIREKOMENDASIKAN": "#1e4080",
  "Netral": "#a0b4d4",
};

const alurColors = ["#0f1d3d", "#163570", "#1e4080", "#2558a0", "#2d6bbf"];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<"Semua" | "Ganjil" | "Genap">("Semua");

  const filtered = rankingData
    .filter((mk) => activeTab === "Semua" || mk.semester === activeTab)
    .slice(0, 5);

  const top3 = rankingData.slice(0, 3);

  return (
    <div className="space-y-5">
      {/* ── Header ── */}
      <div style={{ backgroundColor: "#0f1d3d" }} className="rounded-xl overflow-hidden text-white">
        <div className="flex">
          <div className="flex-1 p-6">
            <div className="mb-3">
              <span className="text-xs bg-white/20 px-2 py-1 rounded font-medium tracking-wider">
                KELOMPOK {kelompokInfo.nomor}
              </span>
            </div>
            <h1 className="text-xl font-bold leading-tight mb-3">
              IMPLEMENTASI TOPSIS UNTUK SISTEM PENDUKUNG KEPUTUSAN MATA KULIAH PEMINATAN PROGRAM STUDI INFORMATIKA UNIVERSITAS JENDERAL SOEDIRMAN
            </h1>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Visualisasi hasil analisis TOPSIS berdasarkan survei terhadap {kelompokInfo.responden} mahasiswa dan wawancara dengan {kelompokInfo.wawancara} responden untuk menentukan prioritas mata kuliah peminatan yang optimal.
            </p>
            <div className="flex gap-8">
              <div>
                <div className="text-3xl font-bold">{kelompokInfo.alternatif}</div>
                <div className="text-xs text-white/60 uppercase tracking-wide mt-1">ALTERNATIF</div>
              </div>
              <div>
                <div className="text-3xl font-bold">{kelompokInfo.kriteria}</div>
                <div className="text-xs text-white/60 uppercase tracking-wide mt-1">KRITERIA</div>
              </div>
              <div>
                <div className="text-3xl font-bold">{kelompokInfo.responden}</div>
                <div className="text-xs text-white/60 uppercase tracking-wide mt-1">RESPONDEN</div>
              </div>
            </div>
          </div>
          <div className="w-72 flex-shrink-0 relative hidden md:block">
            <img
              src={campusImg}
              alt="Universitas Jenderal Soedirman"
              className="w-full h-full object-cover"
              style={{ objectPosition: "center top" }}
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0f1d3d]/50" />
          </div>
        </div>
      </div>

      {/* ── Analisis Latar Belakang + Alur Metodologi ── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 bg-white rounded-xl p-5 shadow-sm">
          <h2 className="font-bold text-[#0f1d3d] text-base mb-3">Analisis Latar Belakang</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-3">
            Pemilihan mata kuliah peminatan seringkali menjadi tantangan bagi tiap mahasiswa karena menyangkut rencana karir, tingkat kesulitan, dan keterbatasan data survei yang sistematis dan terukur.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Penelitian ini menggunakan metode TOPSIS (Technique for Order of Preference by Similarity to Ideal Solution) untuk memberikan rekomendasi objektif yang mempertimbangkan preferensi mahasiswa dan kriteria akademis.
          </p>
        </div>
        <div className="bg-white rounded-xl p-5 shadow-sm">
          <h2 className="font-bold text-[#0f1d3d] text-xs mb-4 text-center tracking-widest uppercase">
            Alur Metodologi Penelitian
          </h2>
          <div className="space-y-2">
            {alurMetodologi.map((step, i) => (
              <div key={i} className="flex items-center gap-3">
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                  style={{ backgroundColor: alurColors[i] }}
                >
                  {i + 1}
                </div>
                <div
                  className="flex-1 py-2 px-3 rounded text-xs font-medium text-white text-center"
                  style={{ backgroundColor: alurColors[i] }}
                >
                  {step.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Kriteria Keputusan ── */}
      <div className="bg-white rounded-xl p-5 shadow-sm">
        <div className="flex items-center justify-between mb-2">
          <h2 className="font-bold text-[#0f1d3d] text-base">Kriteria Keputusan</h2>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#0f1d3d] inline-block" /> Benefit
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-red-400 inline-block" /> Cost
            </span>
          </div>
        </div>
        <p className="text-xs text-gray-500 mb-4">Bobot kriteria yang digunakan dalam perhitungan matriks keputusan.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {kriteria.map((k) => (
            <div key={k.kode} className="border border-gray-100 rounded-lg p-3 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-400 font-medium">{k.kode} - {k.tipe}</span>
                <span
                  className={`text-xs font-bold px-1.5 py-0.5 rounded ${
                    k.tipe === "BENEFIT" ? "bg-[#0f1d3d] text-white" : "bg-red-100 text-red-700"
                  }`}
                >
                  {k.tipe === "BENEFIT" ? "+" : "−"}
                </span>
              </div>
              <div className="text-2xl font-bold text-[#0f1d3d] mb-1">{k.bobot.toFixed(2)}%</div>
              <div className="text-xs text-gray-600 font-medium">{k.nama}</div>
              <div className="mt-2 h-1 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${(k.bobot / 18) * 100}%`,
                    backgroundColor: k.tipe === "BENEFIT" ? "#0f1d3d" : "#f87171",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Hasil Analisis Teratas ── */}
      <div className="bg-white rounded-xl p-5 shadow-sm">
        <h2 className="font-bold text-[#0f1d3d] text-base mb-4">Hasil Analisis Teratas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
          {top3.map((mk, i) => (
            <div
              key={mk.rank}
              className="rounded-lg p-4 border-2 transition-shadow hover:shadow-md"
              style={{
                borderColor: i === 0 ? "#0f1d3d" : i === 1 ? "#1e4080" : "#2d5fad",
                background: i === 0 ? "#f0f4ff" : "white",
              }}
            >
              <div className="text-xs text-gray-400 mb-1 font-medium">RANK #{mk.rank}</div>
              <div className="font-bold text-[#0f1d3d] text-sm mb-2">{mk.nama}</div>
              <div className="text-2xl font-bold text-[#0f1d3d] mb-0.5 font-mono">
                {mk.preferensi.toFixed(4)}
              </div>
              <div className="text-xs text-gray-400 mb-3">Preferensi (Vi)</div>
              <div className="text-xs text-gray-400 mb-2">{mk.semester} · {mk.kode}</div>
              <button
                className="w-full text-xs font-semibold py-2 rounded text-white"
                style={{ backgroundColor: "#0f1d3d" }}
              >
                SANGAT DIREKOMENDASIKAN
              </button>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3">
          {rankingData.slice(3, 5).map((mk) => (
            <div key={mk.rank} className="border border-gray-100 rounded-lg p-3">
              <div className="text-xs text-gray-400 mb-1">RANK #{mk.rank}</div>
              <div className="font-semibold text-[#0f1d3d] text-sm">{mk.nama}</div>
              <div className="text-lg font-bold font-mono text-[#0f1d3d]">{mk.preferensi.toFixed(4)}</div>
              <div className="text-xs text-gray-400">{mk.semester}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Daftar Peringkat Keseluruhan ── */}
      <div className="bg-white rounded-xl p-5 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-[#0f1d3d] text-base">Top 5 Mata Kuliah</h2>
          <div className="flex gap-1">
            {(["Semua", "Ganjil", "Genap"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1.5 text-xs font-medium rounded transition-colors ${
                  activeTab === tab ? "text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
                style={activeTab === tab ? { backgroundColor: "#0f1d3d" } : {}}
              >
                {tab === "Semua" ? "Semua" : `Semester ${tab}`}
              </button>
            ))}
          </div>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left py-2 px-2 text-xs text-gray-400 font-medium">RANK</th>
              <th className="text-left py-2 px-2 text-xs text-gray-400 font-medium">MATA KULIAH</th>
              <th className="text-left py-2 px-2 text-xs text-gray-400 font-medium">SEMESTER</th>
              <th className="text-left py-2 px-2 text-xs text-gray-400 font-medium">PREFERENSI (Vi)</th>
              <th className="text-left py-2 px-2 text-xs text-gray-400 font-medium">REKOMENDASI</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((mk) => (
              <tr key={mk.rank} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                <td className="py-2.5 px-2 font-bold text-[#0f1d3d]">{mk.rank}</td>
                <td className="py-2.5 px-2 font-medium text-gray-800">{mk.nama}</td>
                <td className="py-2.5 px-2 text-gray-500">{mk.semester}</td>
                <td className="py-2.5 px-2 font-mono font-semibold text-[#0f1d3d]">
                  {mk.preferensi.toFixed(4)}
                </td>
                <td className="py-2.5 px-2">
                  <span className={`text-xs font-semibold px-2 py-1 rounded ${katBadge[mk.kategori]}`}>
                    {mk.kategori}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ── Visualisasi Data ── */}
      <div className="bg-white rounded-xl p-5 shadow-sm">
        <h2 className="font-bold text-[#0f1d3d] text-base mb-4">Visualisasi Data</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm font-semibold text-gray-600 mb-3">Top 10 Preferensi Mata Kuliah</h3>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart
                data={top10ChartData}
                layout="vertical"
                margin={{ top: 0, right: 20, left: 0, bottom: 0 }}
              >
                <XAxis type="number" tick={{ fontSize: 10 }} domain={[0, 1]} tickFormatter={(v) => v.toFixed(1)} />
                <YAxis type="category" dataKey="nama" tick={{ fontSize: 9 }} width={130} />
                <Tooltip formatter={(v: number) => v.toFixed(4)} labelFormatter={(l) => l} />
                <Bar dataKey="preferensi" radius={[0, 4, 4, 0]}>
                  {top10ChartData.map((d, i) => (
                    <Cell key={i} fill={katColor[d.kategori as Kategori]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-600 mb-3">Sebaran Kategori</h3>
            <div className="flex items-center gap-4">
              <ResponsiveContainer width="55%" height={200}>
                <PieChart>
                  <Pie
                    data={sebaranKategori}
                    cx="50%" cy="50%"
                    innerRadius={55} outerRadius={85}
                    dataKey="value"
                    label={({ pct }) => pct}
                    labelLine={false}
                  >
                    {sebaranKategori.map((entry, i) => (
                      <Cell key={i} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(v, n) => [v, n]} />
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-3 flex-1">
                {sebaranKategori.map((item) => (
                  <div key={item.name} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-sm flex-shrink-0" style={{ backgroundColor: item.color }} />
                    <div>
                      <div className="text-xs font-medium text-gray-700">{item.name}</div>
                      <div className="text-xs text-gray-400">{item.value} MK · {item.pct}</div>
                    </div>
                  </div>
                ))}
                <div
                  className="mt-3 p-3 rounded-lg text-xs"
                  style={{ backgroundColor: "#f0f4ff", borderLeft: "3px solid #0f1d3d" }}
                >
                  <div className="font-bold text-[#0f1d3d] mb-1">Profil Kriteria</div>
                  <div className="text-gray-600">
                    Kriteria C2 (Relevansi Karir) dan C6 (Kompatibilitas Jadwal) menjadi faktor terkuat dalam model keputusan dengan bobot 17.59%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}