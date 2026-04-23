export function Overview() {
  return (
    <section id="produk" className="border-y border-border bg-card">
      <div className="container-x grid gap-10 py-16 lg:grid-cols-12 lg:gap-16 lg:py-24">
        <div className="lg:col-span-4">
          <span className="eyebrow mb-5">Ringkasan Produk</span>
          <h2 className="font-display text-3xl leading-tight sm:text-4xl">
            Material yang Konsisten, Performa yang Dapat Diandalkan.
          </h2>
        </div>
        <div className="lg:col-span-8 lg:pt-2">
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            Besi batang Ferrum Prima diproduksi melalui proses cold-drawn dengan kontrol
            dimensi presisi, menghasilkan permukaan halus, kelurusan optimal, dan
            kekuatan tarik yang stabil di setiap batch.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Setiap batang melewati inspeksi material dan uji mekanis sebelum dikirim,
            memastikan kesesuaian terhadap kebutuhan manufaktur presisi, komponen
            permesinan, hingga proyek konstruksi berskala besar.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-4">
            {[
              { k: "Presisi", v: "± 0.05 mm" },
              { k: "Tarik", v: "≥ 600 MPa" },
              { k: "Panjang", v: "6 meter" },
              { k: "Standar", v: "JIS / SNI" },
            ].map((i) => (
              <div key={i.k}>
                <p className="text-[11px] uppercase tracking-widest text-muted-foreground">{i.k}</p>
                <p className="mt-1.5 font-display text-lg font-semibold">{i.v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
