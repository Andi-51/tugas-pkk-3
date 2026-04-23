import gallery from "@/assets/gallery-2.jpg";

const points = [
  { k: "01", t: "Komitmen Kualitas", d: "Setiap material melewati pengujian dimensi dan mekanis sebelum dikirim ke pelanggan." },
  { k: "02", t: "Pengalaman Industri", d: "Lebih dari satu dekade melayani kebutuhan manufaktur, fabrikasi, dan konstruksi nasional." },
  { k: "03", t: "Layanan Responsif", d: "Tim sales dan teknis siap membantu konsultasi spesifikasi dan estimasi kebutuhan." },
  { k: "04", t: "Dukungan Skala Besar", d: "Kapasitas stok dan logistik yang dirancang untuk pemesanan industri berkelanjutan." },
];

export function Company() {
  return (
    <section id="perusahaan" className="border-y border-border bg-card py-16 lg:py-24">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <span className="eyebrow mb-5">Tentang Perusahaan</span>
          <h2 className="font-display text-3xl leading-tight sm:text-4xl">
            Mitra Material Industri yang Dipercaya.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Ferrum Prima berdiri dengan komitmen menyediakan material besi batang
            berkualitas industri kepada pabrik, kontraktor, dan perusahaan rekayasa di
            seluruh Indonesia. Kami percaya kualitas material adalah fondasi setiap
            produk industri yang baik.
          </p>
          <div className="mt-8 overflow-hidden rounded-2xl border border-border shadow-card">
            <img
              src={gallery}
              alt="Stok besi batang premium siap kirim"
              loading="lazy"
              width={1200}
              height={1200}
              className="h-72 w-full object-cover"
            />
          </div>
        </div>

        <div className="lg:col-span-7">
          <ul className="divide-y divide-border border-y border-border">
            {points.map((p) => (
              <li key={p.k} className="grid grid-cols-12 gap-6 py-7">
                <span className="col-span-2 font-display text-sm font-semibold text-accent">{p.k}</span>
                <div className="col-span-10">
                  <h3 className="font-display text-lg font-semibold">{p.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
