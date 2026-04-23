import { useMemo, useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import { waLink } from "@/lib/site";
import { cn } from "@/lib/utils";

const diameters = ["8 mm", "12 mm", "16 mm", "20 mm", "25 mm", "32 mm", "40 mm"];
const grades = [
  { k: "SS400", d: "Konstruksi umum & struktural" },
  { k: "S45C", d: "Komponen permesinan & poros" },
  { k: "SCM440", d: "Alloy untuk beban berat" },
];

export function Variants() {
  const [dia, setDia] = useState("16 mm");
  const [grade, setGrade] = useState("S45C");

  const message = useMemo(
    () =>
      `Halo Ferrum Prima, saya tertarik memesan besi batang dengan spesifikasi:\n• Diameter: Ø ${dia}\n• Grade: ${grade}\n\nMohon info ketersediaan stok dan penawaran harga. Terima kasih.`,
    [dia, grade]
  );

  return (
    <section id="varian" className="py-16 lg:py-24">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow mb-5">Varian Produk</span>
          <h2 className="font-display text-3xl leading-tight sm:text-4xl">
            Pilih Spesifikasi Sesuai Kebutuhan Anda.
          </h2>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7 space-y-10">
            <div>
              <div className="mb-4 flex items-baseline justify-between">
                <p className="text-sm font-semibold">Diameter</p>
                <p className="text-xs text-muted-foreground">Ø {dia}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {diameters.map((d) => (
                  <button
                    key={d}
                    onClick={() => setDia(d)}
                    className={cn(
                      "h-11 min-w-[72px] rounded-full border px-4 text-sm font-medium transition-colors",
                      dia === d
                        ? "border-foreground bg-foreground text-background"
                        : "border-border bg-card text-foreground hover:border-foreground/60"
                    )}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-4 flex items-baseline justify-between">
                <p className="text-sm font-semibold">Grade Material</p>
                <p className="text-xs text-muted-foreground">{grade}</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {grades.map((g) => {
                  const active = grade === g.k;
                  return (
                    <button
                      key={g.k}
                      onClick={() => setGrade(g.k)}
                      className={cn(
                        "group flex flex-col items-start gap-2 rounded-xl border p-4 text-left transition-all",
                        active
                          ? "border-foreground bg-card shadow-card"
                          : "border-border bg-card hover:border-foreground/60"
                      )}
                    >
                      <div className="flex w-full items-center justify-between">
                        <span className="font-display text-base font-semibold">{g.k}</span>
                        {active && <Check className="h-4 w-4 text-accent" />}
                      </div>
                      <span className="text-xs text-muted-foreground">{g.d}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="rounded-2xl border border-border bg-card p-7 shadow-card">
              <p className="text-[11px] uppercase tracking-widest text-muted-foreground">
                Ringkasan Pemesanan
              </p>
              <div className="mt-5 space-y-3 border-y border-border py-5">
                <Row label="Produk" value="Besi Batang Premium" />
                <Row label="Diameter" value={`Ø ${dia}`} />
                <Row label="Grade" value={grade} />
                <Row label="Panjang Standar" value="6 meter" />
              </div>
              <p className="mt-5 text-xs text-muted-foreground">
                Konfirmasi ketersediaan stok dan penawaran harga akan diberikan oleh tim
                kami melalui WhatsApp.
              </p>
              <a
                href={waLink(message)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-accent px-6 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-hover"
              >
                Pesan Varian Ini
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-medium text-foreground">{value}</span>
    </div>
  );
}
