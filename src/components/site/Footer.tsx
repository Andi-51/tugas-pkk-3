import { SITE, DEFAULT_WA_MESSAGE, waLink } from "@/lib/site";

const links = [
  { href: "#produk", label: "Produk" },
  { href: "#spesifikasi", label: "Spesifikasi" },
  { href: "#varian", label: "Varian" },
  { href: "#perusahaan", label: "Perusahaan" },
  { href: "#faq", label: "FAQ" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-x py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5">
              {/* <span className="grid h-8 w-8 place-items-center rounded-md bg-foreground text-background font-display text-sm font-bold">
                F
              </span> */}
              <span className="font-display text-base font-bold tracking-tight">
                {SITE.brand}
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Distributor besi batang premium untuk kebutuhan manufaktur, konstruksi,
              dan rekayasa industri di seluruh Indonesia.
            </p>
          </div>

          <div className="lg:col-span-3">
            <p className="text-[11px] uppercase tracking-widest text-muted-foreground">Tautan Cepat</p>
            <ul className="mt-5 space-y-3">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-foreground transition-colors hover:text-accent">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className="text-[11px] uppercase tracking-widest text-muted-foreground">Kontak</p>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a href={waLink(DEFAULT_WA_MESSAGE)} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-accent">
                  WhatsApp · {SITE.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="text-foreground hover:text-accent">
                  {SITE.email}
                </a>
              </li>
              <li className="text-muted-foreground">{SITE.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {SITE.brand}. Seluruh hak cipta dilindungi.</p>
          <p>Indonesia · B2B Industrial Supply</p>
        </div>
      </div>
    </footer>
  );
}
