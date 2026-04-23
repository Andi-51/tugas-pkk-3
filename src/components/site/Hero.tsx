import heroImg from "@/assets/hero-besi.jpg";
import { DEFAULT_WA_MESSAGE, waLink } from "@/lib/site";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6 flex flex-col justify-center animate-fade-up">
          <span className="eyebrow mb-6">Katalog Industri Premium</span>
          <h1 className="font-display text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
            Besi Batang Presisi, <br />
            <span className="text-muted-foreground">untuk Industri yang Menuntut Konsistensi.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Diproduksi dengan toleransi ketat dan pengujian material berlapis. Tersedia
            dalam berbagai diameter dan grade untuk kebutuhan manufaktur, konstruksi,
            dan rekayasa industri.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink(DEFAULT_WA_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-accent px-6 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-hover"
            >
              Pesan via WhatsApp
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#spesifikasi"
              className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-card px-6 text-sm font-semibold text-foreground transition-colors hover:border-foreground"
            >
              Lihat Spesifikasi
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              { k: "12+", v: "Tahun Pengalaman" },
              { k: "ISO", v: "Material Standar" },
              { k: "B2B", v: "Pengiriman Nasional" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="font-display text-2xl font-bold text-foreground">{s.k}</dt>
                <dd className="mt-1 text-xs text-muted-foreground sm:text-sm">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-6">
          <div className="relative overflow-hidden rounded-2xl bg-card border border-border shadow-card">
            <img
              src={heroImg}
              alt="Besi batang premium dengan permukaan presisi tinggi"
              width={1600}
              height={1200}
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-4 left-4 rounded-xl bg-background/95 backdrop-blur px-4 py-3 border border-border shadow-sm">
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Produk Utama</p>
              <p className="mt-1 font-display text-sm font-semibold">Besi Batang Premium · Cold-Drawn</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
