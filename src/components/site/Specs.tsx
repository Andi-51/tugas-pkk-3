const rows = [
  { d: "Ø 8 mm", g: "SS400", l: "6 m", w: "2.37 kg", m: "Carbon Steel", u: "Konstruksi Umum" },
  { d: "Ø 12 mm", g: "SS400", l: "6 m", w: "5.33 kg", m: "Carbon Steel", u: "Konstruksi Struktural" },
  { d: "Ø 16 mm", g: "S45C", l: "6 m", w: "9.47 kg", m: "Medium Carbon Steel", u: "Komponen Permesinan" },
  { d: "Ø 20 mm", g: "S45C", l: "6 m", w: "14.80 kg", m: "Medium Carbon Steel", u: "Poros & Shaft" },
  { d: "Ø 25 mm", g: "SCM440", l: "6 m", w: "23.13 kg", m: "Alloy Steel", u: "Komponen Beban Berat" },
  { d: "Ø 32 mm", g: "SCM440", l: "6 m", w: "37.89 kg", m: "Alloy Steel", u: "Industri Berat" },
  { d: "Ø 40 mm", g: "SCM440", l: "6 m", w: "59.21 kg", m: "Alloy Steel", u: "Heavy Duty Engineering" },
];

export function Specs() {
  return (
    <section id="spesifikasi" className="border-t border-border bg-card py-16 lg:py-24">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow mb-5">Spesifikasi Produk</span>
            <h2 className="font-display text-3xl leading-tight sm:text-4xl">
              Tabel Spesifikasi Teknis.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Referensi dimensi dan karakteristik untuk perencanaan kebutuhan material.
            </p>
          </div>
          <p className="text-xs text-muted-foreground">
            * Ukuran lain tersedia berdasarkan permintaan.
          </p>
        </div>

        <div className="mt-10 overflow-x-auto border border-border bg-background">
          <table className="w-full min-w-[720px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-card">
                {["Diameter", "Grade", "Panjang", "Berat / Batang", "Material", "Kategori Penggunaan"].map((h) => (
                  <th
                    key={h}
                    className="px-5 py-4 text-left text-[11px] font-semibold uppercase tracking-widest text-muted-foreground"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr
                  key={r.d + r.g}
                  className={`border-b border-border last:border-0 transition-colors hover:bg-card ${
                    i % 2 === 1 ? "bg-card/40" : ""
                  }`}
                >
                  <td className="px-5 py-4 font-display font-semibold text-foreground">{r.d}</td>
                  <td className="px-5 py-4 text-foreground">{r.g}</td>
                  <td className="px-5 py-4 text-muted-foreground">{r.l}</td>
                  <td className="px-5 py-4 text-muted-foreground">{r.w}</td>
                  <td className="px-5 py-4 text-muted-foreground">{r.m}</td>
                  <td className="px-5 py-4 text-muted-foreground">{r.u}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
