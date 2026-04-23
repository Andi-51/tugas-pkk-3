import { ArrowRight, MessageCircle, Clock, Phone } from "lucide-react";
import { DEFAULT_WA_MESSAGE, SITE, waLink } from "@/lib/site";

export function OrderCTA() {
  return (
    <section id="pesan" className="bg-foreground text-background py-16 lg:py-24">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-background/60">
            <span className="block h-px w-8 bg-background/30" />
            Pemesanan Langsung
          </span>
          <h2 className="mt-5 font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">
            Hubungi Tim Sales Kami via WhatsApp.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-background/70 sm:text-lg">
            Sampaikan kebutuhan diameter, grade, dan kuantitas. Tim kami akan merespon
            dengan ketersediaan stok, estimasi pengiriman, dan penawaran harga terbaik.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink(DEFAULT_WA_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-accent px-6 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-hover"
            >
              <MessageCircle className="h-4 w-4" />
              Pesan via WhatsApp
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={`tel:${SITE.phone.replace(/\s/g, "")}`}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-background/20 px-6 text-sm font-semibold text-background transition-colors hover:bg-background/10"
            >
              <Phone className="h-4 w-4" />
              {SITE.phone}
            </a>
          </div>
        </div>

        <aside className="lg:col-span-5">
          <div className="rounded-2xl border border-background/15 bg-background/[0.03] p-7">
            <p className="text-[11px] uppercase tracking-widest text-background/50">
              Format Pesan Default
            </p>
            <blockquote className="mt-4 border-l-2 border-accent pl-4 text-sm leading-relaxed text-background/85">
              "Halo, saya ingin memesan besi batang. Mohon info diameter, grade, dan
              penawaran harga."
            </blockquote>

            <div className="mt-6 space-y-3 border-t border-background/15 pt-6 text-sm">
              <div className="flex items-center gap-3 text-background/70">
                <Clock className="h-4 w-4 text-accent" />
                <span>Respon admin: rata-rata &lt; 30 menit pada jam kerja</span>
              </div>
              <div className="flex items-center gap-3 text-background/70">
                <MessageCircle className="h-4 w-4 text-accent" />
                <span>Konsultasi spesifikasi tersedia sebelum order</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
