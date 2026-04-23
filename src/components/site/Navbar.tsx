import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { SITE, DEFAULT_WA_MESSAGE, waLink } from "@/lib/site";
import { cn } from "@/lib/utils";

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

        <button
          aria-label="Buka menu"
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="container-x flex flex-col py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-medium text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href={waLink(DEFAULT_WA_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex h-11 items-center justify-center rounded-full bg-accent px-5 text-sm font-semibold text-accent-foreground"
            >
              Pesan via WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
