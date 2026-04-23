import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import hero from "@/assets/hero-besi.jpg";

const images = [
  { src: hero, alt: "Bundel besi batang premium", label: "Produk Utama", span: "lg:col-span-2 lg:row-span-2" },
  { src: g1, alt: "Detail penampang besi batang", label: "Penampang", span: "" },
  { src: g4, alt: "Tekstur permukaan brushed steel", label: "Tekstur" , span: "" },
  { src: g2, alt: "Tumpukan besi batang siap kirim", label: "Stok Siap Kirim", span: "" },
  { src: g3, alt: "Single besi batang pada latar studio", label: "Detail Batang", span: "" },
];

export function Gallery() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow mb-5">Galeri Produk</span>
            <h2 className="font-display text-3xl leading-tight sm:text-4xl">
              Studio Look. Detail yang Bicara.
            </h2>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:grid-rows-2">
          {images.map((img, i) => (
            <figure
              key={i}
              className={`group relative overflow-hidden border border-border bg-card ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width={1200}
                height={1200}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <figcaption className="absolute bottom-3 left-3 bg-background/95 px-3 py-1.5 text-[10px] uppercase tracking-widest text-foreground">
                {img.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
