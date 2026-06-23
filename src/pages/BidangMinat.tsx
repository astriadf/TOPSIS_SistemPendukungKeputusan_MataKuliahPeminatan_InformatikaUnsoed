import { useState } from "react";
import { 
  bidangMinatList, 
  getMataKuliahByBidang, 
  getTotalSKS, 
  groupBySemester,
  getSKS,
  MAX_SKS_PILIHAN 
} from "@/data/bidangMinat";
import type { MataKuliah } from "@/data/topsis";

export default function BidangMinat() {
  const [selectedBidang, setSelectedBidang] = useState<string | null>(null);

  const handleBidangClick = (bidangId: string) => {
    setSelectedBidang(bidangId);
  };

  const selectedBidangData = bidangMinatList.find(b => b.id === selectedBidang);
  const mataKuliah = selectedBidang ? getMataKuliahByBidang(selectedBidang) : [];
  const totalSKS = getTotalSKS(mataKuliah);
  const { ganjil, genap } = groupBySemester(mataKuliah);
  const totalSKSGanjil = getTotalSKS(ganjil);
  const totalSKSGenap = getTotalSKS(genap);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold text-[#0f1d3d] mb-2">
          Rekomendasi Mata Kuliah Pilihan Berdasarkan Bidang Minat
        </h1>
        <p className="text-gray-600 text-sm">
          Pilih bidang minat Anda untuk melihat mata kuliah pilihan yang relevan berdasarkan Kurikulum Informatika UNSOED 2021.
          <span className="font-semibold text-[#0f1d3d]"> Ketentuan minimal pengambilan: {MAX_SKS_PILIHAN} SKS</span>
        </p>
      </div>

      {/* Grid Bidang Minat */}
      {!selectedBidang ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {bidangMinatList.map((bidang) => {
            const mkCount = getMataKuliahByBidang(bidang.id).length;
            const sks = getTotalSKS(getMataKuliahByBidang(bidang.id));
            
            return (
              <button
                key={bidang.id}
                onClick={() => handleBidangClick(bidang.id)}
                className="bg-white rounded-lg shadow hover:shadow-lg transition-all p-6 text-left border-2 border-transparent hover:border-[#0f1d3d] group h-full"
              >
                <div className="flex items-start gap-4 h-full flex-col">
                  <div className="text-4xl">{bidang.icon}</div>
                  <div className="flex-1 w-full">
                    <h3 className="font-bold text-[#0f1d3d] mb-2 group-hover:text-[#2d5fad] transition-colors">
                      {bidang.nama}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">{bidang.deskripsi}</p>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-500 w-full">
                    <span className="bg-[#eef1f7] px-2 py-1 rounded font-medium">
                      {mkCount} Mata Kuliah
                    </span>
                    <span className="bg-[#eef1f7] px-2 py-1 rounded font-medium">
                      {sks} SKS Total
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      ) : (
        <>
          {/* Tombol Kembali */}
          <button
            onClick={() => setSelectedBidang(null)}
            className="flex items-center gap-2 text-[#0f1d3d] hover:text-[#2d5fad] font-medium transition-colors"
          >
            <span className="text-xl">←</span>
            Kembali ke Daftar Bidang Minat
          </button>

          {/* Detail Bidang yang Dipilih */}
          {selectedBidangData && (
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-5xl">{selectedBidangData.icon}</div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-[#0f1d3d] mb-2">
                    {selectedBidangData.nama}
                  </h2>
                  <p className="text-gray-600 mb-4">{selectedBidangData.deskripsi}</p>
                  <div className="flex items-center gap-4 flex-wrap">
                    <div className="bg-[#0f1d3d] text-white px-4 py-2 rounded-lg">
                      <span className="font-bold text-lg">{totalSKS} SKS</span>
                      <span className="text-xs ml-2">Total SKS</span>
                    </div>
                    <div className="text-sm">
                      {totalSKS >= MAX_SKS_PILIHAN ? (
                        <span className="text-green-600 font-semibold flex items-center gap-1">
                          <span className="text-lg">✓</span> 
                          Memenuhi ketentuan minimal ({MAX_SKS_PILIHAN} SKS)
                        </span>
                      ) : (
                        <span className="text-orange-600 font-semibold flex items-center gap-1">
                          <span className="text-lg">⚠</span> 
                          Total SKS: {totalSKS} dari {MAX_SKS_PILIHAN} SKS minimal
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Daftar Mata Kuliah - Semester Ganjil */}
          {ganjil.length > 0 && (
            <div>
              <div className="bg-gradient-to-r from-[#0f1d3d] to-[#2d5fad] text-white px-4 py-3 rounded-t-lg">
                <h3 className="text-xl font-bold flex items-center justify-between">
                  <span>📅 Semester Ganjil</span>
                  <span className="text-sm font-normal bg-white/20 px-3 py-1 rounded">
                    {ganjil.length} MK • {totalSKSGanjil} SKS
                  </span>
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 bg-white rounded-b-lg shadow">
                {ganjil.map((mk) => (
                  <MataKuliahCard key={mk.kode} mk={mk} />
                ))}
              </div>
            </div>
          )}

          {/* Daftar Mata Kuliah - Semester Genap */}
          {genap.length > 0 && (
            <div>
              <div className="bg-gradient-to-r from-[#2d5fad] to-[#5a7fc7] text-white px-4 py-3 rounded-t-lg">
                <h3 className="text-xl font-bold flex items-center justify-between">
                  <span>📅 Semester Genap</span>
                  <span className="text-sm font-normal bg-white/20 px-3 py-1 rounded">
                    {genap.length} MK • {totalSKSGenap} SKS
                  </span>
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 bg-white rounded-b-lg shadow">
                {genap.map((mk) => (
                  <MataKuliahCard key={mk.kode} mk={mk} />
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

// Component untuk Card Mata Kuliah
function MataKuliahCard({ mk }: { mk: MataKuliah }) {
  const getBadgeColor = (kategori: string) => {
    if (kategori === "SANGAT DIREKOMENDASIKAN") return "bg-green-100 text-green-800 border-green-300";
    if (kategori === "DIREKOMENDASIKAN") return "bg-blue-100 text-blue-800 border-blue-300";
    return "bg-gray-100 text-gray-700 border-gray-300";
  };

  const sks = getSKS(mk.kode);

  return (
    <div className="bg-gradient-to-br from-white to-gray-50 rounded-lg shadow hover:shadow-xl transition-all p-5 border border-gray-200 hover:border-[#0f1d3d] h-full flex flex-col">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1 mr-2">
          <h4 className="font-bold text-[#0f1d3d] mb-1 leading-tight">{mk.nama}</h4>
          <p className="text-xs text-gray-500">Kode: {mk.kode}</p>
        </div>
        <div className="bg-[#0f1d3d] text-white px-3 py-1.5 rounded-lg text-sm font-bold whitespace-nowrap">
          {sks} SKS
        </div>
      </div>

      <div className="space-y-2 flex-1">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-gray-600 text-xs">Semester:</span>
          <span className={`px-2 py-0.5 rounded text-xs font-medium ${
            mk.semester === "Ganjil" ? "bg-purple-100 text-purple-800" : "bg-blue-100 text-blue-800"
          }`}>
            {mk.semester}
          </span>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <span className="text-gray-600 text-xs">Ranking TOPSIS:</span>
          <span className="font-bold text-[#0f1d3d]">#{mk.rank}</span>
        </div>

        <div className="pt-2 border-t border-gray-200">
          <span className={`inline-block px-2 py-1 rounded text-xs font-medium border ${getBadgeColor(mk.kategori)}`}>
            {mk.kategori}
          </span>
        </div>

        <div className="pt-2">
          <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
            <span>Skor Preferensi</span>
            <span className="font-bold text-[#0f1d3d]">{(mk.preferensi * 100).toFixed(1)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-[#0f1d3d] to-[#2d5fad] h-2 rounded-full transition-all"
              style={{ width: `${mk.preferensi * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
