import { useState } from "react";
import { rankingData, type Kategori, type Semester } from "../data/topsis";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  ReferenceLine, Cell,
} from "recharts";

const katBadge: Record<Kategori, string> = {
  "SANGAT DIREKOMENDASIKAN": "bg-[#0f1d3d] text-white",
  "DIREKOMENDASIKAN":        "bg-blue-100 text-blue-800",
  "Netral":                  "bg-gray-100 text-gray-500",
};

const katColor: Record<Kategori, string> = {
  "SANGAT DIREKOMENDASIKAN": "#0f1d3d",
  "DIREKOMENDASIKAN":        "#2d5fad",
  "Netral":                  "#a0b4d4",
};

const semBadge: Record<Semester, string> = {
  "Ganjil": "bg-amber-100 text-amber-700",
  "Genap":  "bg-purple-100 text-purple-700",
};

export default function Rankings() {
  const [search, setSearch]       = useState("");
  const [semester, setSemester]   = useState<"Semua" | Semester>("Semua");
  const [katFilter, setKatFilter] = useState<Kategori | "Semua">("Semua");

  const filtered = rankingData.filter((mk) => {
    const mSearch = mk.nama.toLowerCase().includes(search.toLowerCase());
    const mSem    = semester === "Semua" || mk.semester === semester;
    const mKat    = katFilter === "Semua" || mk.kategori === katFilter;
    return mSearch && mSem && mKat;
  });

  const chartData = rankingData.map(mk => ({
    nama: mk.nama.length > 18 ? mk.nama.slice(0, 18) + "…" : mk.nama,
    Vi: Number(mk.preferensi.toFixed(4)),
    kategori: mk.kategori,
  }));

  const avg = rankingData.reduce((s, m) => s + m.preferensi, 0) / rankingData.length;

  return (
    <div className="space-y-6">

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label: "Rata-rata Vi",       value: avg.toFixed(4),                                                                          sub: "semua 26 MK",                            color: "#0f1d3d" },
          { label: "Skor Tertinggi",     value: rankingData[0].preferensi.toFixed(4),                                                    sub: rankingData[0].nama,                      color: "#0f1d3d" },
          { label: "Skor Terendah",      value: rankingData[rankingData.length - 1].preferensi.toFixed(4),                               sub: rankingData[rankingData.length - 1].nama, color: "#2d5fad" },
          { label: "Rentang (Max − Min)",value: (rankingData[0].preferensi - rankingData[rankingData.length - 1].preferensi).toFixed(4), sub: "spread skor Vi",                         color: "#1e4080" },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-xl p-4 shadow-sm text-center">
            <div className="text-2xl font-bold font-mono" style={{ color: s.color }}>{s.value}</div>
            <div className="text-xs font-medium text-gray-600 mt-1">{s.label}</div>
            <div className="text-xs text-gray-400 truncate">{s.sub}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
        {[
          { label: "Total MK",          value: rankingData.length,                                                                     color: "#0f1d3d" },
          { label: "Sangat Direk.",     value: rankingData.filter(m => m.kategori === "SANGAT DIREKOMENDASIKAN").length,               color: "#0f1d3d" },
          { label: "Direkomendasikan",  value: rankingData.filter(m => m.kategori === "DIREKOMENDASIKAN").length,                      color: "#2d5fad" },
          { label: "Netral",            value: rankingData.filter(m => m.kategori === "Netral").length,                                color: "#a0b4d4" },
          { label: "MK Ganjil",         value: rankingData.filter(m => m.semester === "Ganjil").length,                               color: "#b45309" },
          { label: "MK Genap",          value: rankingData.filter(m => m.semester === "Genap").length,                                color: "#7c3aed" },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-xl p-3 shadow-sm text-center">
            <div className="text-xl font-bold" style={{ color: s.color }}>{s.value}</div>
            <div className="text-xs text-gray-500 mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Filter bar */}
      <div className="bg-white rounded-xl p-4 shadow-sm">
        <div className="flex flex-wrap gap-2 items-center">
          <input
            type="search"
            placeholder="Cari mata kuliah..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-200 rounded-lg px-3 py-1.5 text-sm outline-none focus:ring-1 focus:ring-[#0f1d3d] flex-1 min-w-40"
          />
          <select
            value={semester}
            onChange={(e) => setSemester(e.target.value as "Semua" | Semester)}
            className="border border-gray-200 rounded-lg px-3 py-1.5 text-sm outline-none focus:ring-1 focus:ring-[#0f1d3d]"
          >
            <option value="Semua">Semua Semester</option>
            <option value="Ganjil">Semester Ganjil</option>
            <option value="Genap">Semester Genap</option>
          </select>
          <select
            value={katFilter}
            onChange={(e) => setKatFilter(e.target.value as Kategori | "Semua")}
            className="border border-gray-200 rounded-lg px-3 py-1.5 text-sm outline-none focus:ring-1 focus:ring-[#0f1d3d]"
          >
            <option value="Semua">Semua Kategori</option>
            <option value="SANGAT DIREKOMENDASIKAN">Sangat Direkomendasikan</option>
            <option value="DIREKOMENDASIKAN">Direkomendasikan</option>
            <option value="Netral">Netral</option>
          </select>
          <span className="text-xs text-gray-400">{filtered.length} mata kuliah</span>
        </div>
      </div>

      {/* Tabel ranking */}
      <div className="bg-white rounded-xl p-5 shadow-sm">
        <h2 className="font-bold text-[#0f1d3d] text-base mb-4">Daftar Peringkat Lengkap ({rankingData.length} Mata Kuliah)</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ backgroundColor: "#0f1d3d" }} className="text-white">
                <th className="text-left py-2.5 px-3 text-xs font-medium rounded-tl-lg">RANK</th>
                <th className="text-left py-2.5 px-3 text-xs font-medium">KODE</th>
                <th className="text-left py-2.5 px-3 text-xs font-medium">MATA KULIAH</th>
                <th className="text-left py-2.5 px-3 text-xs font-medium">SEMESTER</th>
                <th className="text-right py-2.5 px-3 text-xs font-medium">D⁺</th>
                <th className="text-right py-2.5 px-3 text-xs font-medium">D⁻</th>
                <th className="text-left py-2.5 px-3 text-xs font-medium">Vi (Preferensi)</th>
                <th className="text-left py-2.5 px-3 text-xs font-medium rounded-tr-lg">REKOMENDASI</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((mk, i) => (
                <tr
                  key={mk.rank}
                  className={`border-b border-gray-50 hover:bg-blue-50 transition-colors ${i % 2 === 0 ? "bg-white" : "bg-gray-50/30"}`}
                >
                  <td className="py-2.5 px-3">
                    <span
                      className="font-bold text-white w-7 h-7 rounded-full flex items-center justify-center text-xs"
                      style={{ backgroundColor: mk.rank <= 3 ? "#0f1d3d" : mk.rank <= 10 ? "#2d5fad" : "#a0b4d4" }}
                    >
                      {mk.rank}
                    </span>
                  </td>
                  <td className="py-2.5 px-3 text-gray-400 text-xs font-mono">{mk.kode}</td>
                  <td className="py-2.5 px-3 font-medium text-gray-800">{mk.nama}</td>
                  <td className="py-2.5 px-3">
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${semBadge[mk.semester]}`}>
                      {mk.semester}
                    </span>
                  </td>
                  <td className="py-2.5 px-3 text-right font-mono text-xs text-gray-500">{mk.dPlus.toFixed(6)}</td>
                  <td className="py-2.5 px-3 text-right font-mono text-xs text-gray-500">{mk.dMinus.toFixed(6)}</td>
                  <td className="py-2.5 px-3">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 max-w-20 bg-gray-100 rounded-full h-1.5">
                        <div
                          className="h-1.5 rounded-full"
                          style={{ width: `${mk.preferensi * 100}%`, backgroundColor: katColor[mk.kategori] }}
                        />
                      </div>
                      <span className="font-mono font-semibold text-[#0f1d3d] text-xs">{mk.preferensi.toFixed(4)}</span>
                    </div>
                  </td>
                  <td className="py-2.5 px-3">
                    <span className={`text-xs font-semibold px-2 py-1 rounded whitespace-nowrap ${katBadge[mk.kategori]}`}>
                      {mk.kategori}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filtered.length === 0 && (
            <div className="text-center py-10 text-gray-400 text-sm">Tidak ada mata kuliah ditemukan</div>
          )}
        </div>
      </div>

      {/* Bar chart distribusi skor */}
      <div className="bg-white rounded-xl p-5 shadow-sm">
        <h3 className="font-bold text-[#0f1d3d] text-sm mb-1">Distribusi Skor Preferensi Semua Mata Kuliah</h3>
        <p className="text-xs text-gray-400 mb-4">Garis putus-putus = rata-rata Vi ({avg.toFixed(4)})</p>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData} margin={{ top: 5, right: 10, left: -20, bottom: 80 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="nama" tick={{ fontSize: 8 }} angle={-45} textAnchor="end" interval={0} />
            <YAxis tick={{ fontSize: 10 }} domain={[0, 1]} tickFormatter={(v) => v.toFixed(1)} />
            <Tooltip formatter={(v: number) => v.toFixed(4)} />
            <ReferenceLine y={avg} stroke="#f59e0b" strokeDasharray="6 3" strokeWidth={2}
              label={{ value: `Avg ${avg.toFixed(3)}`, fill: "#f59e0b", fontSize: 10 }} />
            <Bar dataKey="Vi" radius={[3, 3, 0, 0]}>
              {chartData.map((d, i) => (
                <Cell key={i} fill={katColor[d.kategori as Kategori]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <div className="flex justify-center gap-4 mt-2 text-xs text-gray-500 flex-wrap">
          {Object.entries(katColor).map(([k, c]) => (
            <span key={k} className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-sm inline-block" style={{ backgroundColor: c }} />{k}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
}