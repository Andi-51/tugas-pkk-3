import { Gauge, Layers, Ruler, ShieldCheck, Truck, Factory } from "lucide-react";

const items = [
  { icon: Gauge, title: "Kekuatan Tinggi", desc: "Kekuatan tarik stabil ≥ 600 MPa, dirancang untuk beban kerja berat." },
  { icon: ShieldCheck, title: "Kualitas Konsisten", desc: "Komposisi material terkontrol di setiap batch produksi." },
  { icon: Ruler, title: "Diameter Lengkap", desc: "Tersedia dari Ø 6 mm hingga Ø 50 mm sesuai kebutuhan teknis." },
  { icon: Layers, title: "Beberapa Grade", desc: "Pilihan grade SS400, S45C, dan SCM440 untuk berbagai aplikasi." },
  { icon: Factory, title: "Kebutuhan Industri", desc: "Cocok untuk manufaktur, fabrikasi, dan komponen permesinan." },
  { icon: Truck, title: "Order Volume Besar", desc: "Dukungan stok dan logistik untuk pemesanan skala industri." },
];

export function Features() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow mb-5">Keunggulan Produk</span>
          <h2 className="font-display text-3xl leading-tight sm:text-4xl">
            Standar Material yang Dipercaya Industri.
          </h2>
        </div>

        <div className="mt-12 grid gap-px bg-border lg:grid-cols-3 sm:grid-cols-2 border border-border">
          {items.map((it) => (
            <div
              key={it.title}
              className="group bg-card p-7 transition-colors hover:bg-background"
            >
              <it.icon className="h-6 w-6 text-accent" strokeWidth={1.5} />
              <h3 className="mt-5 font-display text-lg font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
