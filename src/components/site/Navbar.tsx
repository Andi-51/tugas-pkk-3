import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { SITE, DEFAULT_WA_MESSAGE, waLink } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const links = [
  { href: "#produk", label: "Produk" },
  { href: "#spesifikasi", label: "Spesifikasi" },
  { href: "#varian", label: "Varian" },
  { href: "#perusahaan", label: "Perusahaan" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-200",
        scrolled ? "bg-background/95 backdrop-blur border-b border-border" : "bg-transparent"
      )}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-foreground text-background font-display text-sm font-bold">
            F
          </span>
          <span className="font-display text-base font-bold tracking-tight">
            {SITE.brand}
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={waLink(DEFAULT_WA_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center rounded-full bg-accent px-5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-hover"
          >
            Pesan via WhatsApp
          </a>
        </div>

        {/* Mobile side navigation */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              aria-label="Buka menu navigasi"
              className="grid h-10 w-10 place-items-center rounded-md border border-border bg-card text-foreground md:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[86%] max-w-sm border-l border-border bg-background p-0 [&>button]:hidden"
          >
            <div className="flex h-full flex-col">
              {/* Header */}
              <div className="flex h-16 items-center justify-between border-b border-border px-6">
                <div className="flex items-center gap-2.5">
                  <span className="grid h-8 w-8 place-items-center rounded-md bg-foreground text-background font-display text-sm font-bold">
                    F
                  </span>
                  <span className="font-display text-base font-bold tracking-tight">
                    {SITE.brand}
                  </span>
                </div>
                <button
                  aria-label="Tutup menu"
                  onClick={() => setOpen(false)}
                  className="grid h-9 w-9 place-items-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Eyebrow */}
              <div className="px-6 pt-6">
                <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  Navigasi
                </span>
              </div>

              {/* Links */}
              <nav className="flex-1 overflow-y-auto px-3 pb-6 pt-2">
                <ul className="flex flex-col">
                  {links.map((l, i) => (
                    <li key={l.href}>
                      <a
                        href={l.href}
                        onClick={() => setOpen(false)}
                        className="group flex items-center justify-between rounded-lg px-3 py-3.5 transition-colors hover:bg-muted"
                      >
                        <span className="flex items-baseline gap-3">
                          <span className="font-display text-[11px] font-semibold text-muted-foreground">
                            0{i + 1}
                          </span>
                          <span className="font-display text-base font-semibold text-foreground">
                            {l.label}
                          </span>
                        </span>
                        <span className="text-muted-foreground transition-transform group-hover:translate-x-0.5">
                          →
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Footer / CTA */}
              <div className="border-t border-border bg-card p-6">
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  Pemesanan Cepat
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Hubungi tim sales kami untuk konsultasi spesifikasi dan penawaran harga.
                </p>
                <a
                  href={waLink(DEFAULT_WA_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="mt-4 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-accent px-6 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-hover"
                >
                  <MessageCircle className="h-4 w-4" />
                  Pesan via WhatsApp
                </a>
                <p className="mt-4 text-center text-xs text-muted-foreground">
                  {SITE.phone}
                </p>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
