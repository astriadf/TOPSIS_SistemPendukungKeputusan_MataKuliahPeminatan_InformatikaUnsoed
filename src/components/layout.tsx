import { Link, useLocation } from "wouter";

const navItems = [
  { label: "Dashboard", path: "/" },
  { label: "Criteria",  path: "/criteria" },
  { label: "Rankings",  path: "/rankings" },
  { label: "Bidang Minat", path: "/bidang-minat" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  return (
    <div className="min-h-screen bg-[#eef1f7]">
      <nav style={{ backgroundColor: "#0f1d3d" }} className="text-white px-6 py-0">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="font-bold text-sm tracking-wide whitespace-nowrap py-3 flex-shrink-0">
            Sistem Pendukung Keputusan A
          </span>
          <div className="flex-1 flex items-center gap-1 ml-12">
            {navItems.map((item) => {
              const isActive = location === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`px-4 py-3 text-sm font-medium transition-colors hover:bg-white/10 border-b-2 ${
                    isActive ? "border-white bg-white/15" : "border-transparent"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-6 py-6">{children}</main>
      <footer style={{ backgroundColor: "#0f1d3d" }} className="text-white mt-8 py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs text-white/70">
          <span>© 2026 Kelompok 12 Kelas SPK A. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
