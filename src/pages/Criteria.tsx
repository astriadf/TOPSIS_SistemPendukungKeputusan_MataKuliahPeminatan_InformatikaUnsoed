import { kriteria, rankingData, idealPositif, idealNegatif } from "../data/topsis";
import {
  ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Cell,
} from "recharts";

const top3 = rankingData.slice(0, 3);

const radarData = kriteria.map((k, i) => ({
  subject: k.kode,
  [top3[0].nama]: Number((top3[0].matriksY[i] * 1000).toFixed(3)),
  [top3[1].nama]: Number((top3[1].matriksY[i] * 1000).toFixed(3)),
  [top3[2].nama]: Number((top3[2].matriksY[i] * 1000).toFixed(3)),
  "A⁺ Ideal":    Number((idealPositif[i] * 1000).toFixed(3)),
}));

const radarColors = ["#0f1d3d", "#2d5fad", "#a0b4d4", "#f59e0b"];

export default function Criteria() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-5 shadow-sm">
        <h2 className="font-bold text-[#0f1d3d] text-lg mb-1">Kriteria Keputusan</h2>
        <p className="text-sm text-gray-500 mb-5">
          Detail bobot dan tipe setiap kriteria yang digunakan dalam perhitungan TOPSIS. C1 dan C4 bersifat BIAYA (COST) — semakin kecil nilainya semakin baik.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {kriteria.map((k) => (
            <div key={k.kode} className="border border-gray-100 rounded-xl p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <span
                  className="text-lg font-bold px-3 py-1 rounded-lg text-white"
                  style={{ backgroundColor: "#0f1d3d" }}
                >
                  {k.kode}
                </span>
                <span
                  className={`text-xs font-semibold px-2 py-1 rounded-full ${
                    k.tipe === "BENEFIT" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                  }`}
                >
                  {k.tipe}
                </span>
              </div>
              <div className="text-2xl font-bold text-[#0f1d3d] mb-1">{k.bobot.toFixed(2)}%</div>
              <div className="text-sm font-medium text-gray-700 mb-1">{k.nama}</div>
              <div className="text-xs text-gray-400 mb-3">
                {k.tipe === "COST" ? "↓ Nilai lebih rendah = lebih baik (Cost)" : "↑ Nilai lebih tinggi = lebih baik (Benefit)"}
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div
                  className="h-2 rounded-full transition-all"
                  style={{
                    width: `${(k.bobot / 18) * 100}%`,
                    backgroundColor: k.tipe === "BENEFIT" ? "#0f1d3d" : "#ef4444",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-white rounded-xl p-5 shadow-sm lg:col-span-2">
          <h3 className="font-bold text-[#0f1d3d] text-sm mb-1">Distribusi Bobot Kriteria</h3>
          <p className="text-xs text-gray-400 mb-4">Perbandingan bobot 6 kriteria (total ≈ 100%)</p>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={kriteria} margin={{ top: 0, right: 20, left: 10, bottom: 0 }} barCategoryGap="30%" barSize={60}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="kode" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 10 }} domain={[14, 19]} tickFormatter={(v) => `${v}%`} />
              <Tooltip formatter={(v: number) => [`${v.toFixed(2)}%`, "Bobot"]} />
              <Bar dataKey="bobot" radius={[4, 4, 0, 0]}>
                {kriteria.map((k, i) => (
                  <Cell key={i} fill={k.tipe === "BENEFIT" ? "#0f1d3d" : "#ef4444"} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <div className="flex justify-center gap-4 mt-2 text-xs text-gray-500">
            <span className="flex items-center gap-1"><span className="w-2 h-2 bg-[#0f1d3d] rounded-sm inline-block" />BENEFIT</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 bg-red-500 rounded-sm inline-block" />COST</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-5 shadow-sm">
        <h3 className="font-bold text-[#0f1d3d] text-sm mb-1">Matriks Y Ternormalisasi Terbobot</h3>
        <p className="text-xs text-gray-400 mb-4">Nilai y_ij = w_j × r_ij untuk semua {rankingData.length} alternatif</p>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr style={{ backgroundColor: "#0f1d3d" }} className="text-white">
                <th className="text-left py-2 px-3 font-medium rounded-tl-lg">Rank</th>
                <th className="text-left py-2 px-3 font-medium">Kode</th>
                <th className="text-left py-2 px-3 font-medium">Mata Kuliah</th>
                <th className="text-left py-2 px-3 font-medium">Sem.</th>
                {kriteria.map(k => (
                  <th key={k.kode} className="text-center py-2 px-2 font-medium">
                    {k.kode}<br /><span className="text-white/60 text-xs">[{k.tipe === "COST" ? "COST" : "BENEFIT"}]</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rankingData.map((mk, i) => (
                <tr key={mk.rank} className={`border-b border-gray-50 hover:bg-blue-50 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/30"}`}>
                  <td className="py-1.5 px-3 font-bold text-[#0f1d3d]">{mk.rank}</td>
                  <td className="py-1.5 px-3 text-gray-500">{mk.kode}</td>
                  <td className="py-1.5 px-3 font-medium text-gray-800">{mk.nama}</td>
                  <td className="py-1.5 px-3 text-gray-500">{mk.semester}</td>
                  {mk.matriksY.map((v, ci) => (
                    <td key={ci} className="py-1.5 px-2 text-center font-mono text-gray-700">
                      {v.toFixed(5)}
                    </td>
                  ))}
                </tr>
              ))}
              <tr style={{ backgroundColor: "#0f1d3d" }} className="text-white font-medium">
                <td colSpan={4} className="py-1.5 px-3 text-xs">A⁺ Ideal Positif</td>
                {idealPositif.map((v, i) => (
                  <td key={i} className="py-1.5 px-2 text-center font-mono text-xs">{v.toFixed(5)}</td>
                ))}
              </tr>
              <tr className="bg-red-50 text-red-700 font-medium">
                <td colSpan={4} className="py-1.5 px-3 text-xs">A⁻ Ideal Negatif</td>
                {idealNegatif.map((v, i) => (
                  <td key={i} className="py-1.5 px-2 text-center font-mono text-xs">{v.toFixed(5)}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}