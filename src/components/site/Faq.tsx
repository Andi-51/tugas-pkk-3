import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Apakah tersedia berbagai diameter besi batang?",
    a: "Ya. Kami menyediakan diameter mulai dari Ø 6 mm hingga Ø 50 mm. Ukuran khusus di luar standar dapat dikonsultasikan dengan tim sales kami sesuai ketersediaan produksi.",
  },
  {
    q: "Apakah bisa melakukan pemesanan dalam jumlah besar?",
    a: "Tentu. Kami melayani pemesanan skala industri dengan dukungan stok dan logistik nasional. Untuk volume besar, harga khusus dan jadwal pengiriman dapat dinegosiasikan.",
  },
  {
    q: "Bagaimana proses pemesanannya?",
    a: "Cukup hubungi kami via WhatsApp dengan menyertakan diameter, grade, dan kuantitas yang dibutuhkan. Tim kami akan mengirimkan penawaran harga, konfirmasi stok, dan instruksi pembayaran.",
  },
  {
    q: "Apakah bisa konsultasi kebutuhan material terlebih dahulu?",
    a: "Bisa. Tim teknis kami siap membantu menentukan grade dan dimensi yang paling sesuai dengan aplikasi industri Anda, termasuk rekomendasi material untuk beban kerja tertentu.",
  },
  {
    q: "Berapa lama waktu respon admin?",
    a: "Rata-rata kurang dari 30 menit pada hari dan jam kerja (Senin–Sabtu, 08.00–17.00 WIB). Pesan di luar jam tersebut akan dibalas pada hari kerja berikutnya.",
  },
  {
    q: "Apakah tersedia pengiriman ke seluruh Indonesia?",
    a: "Ya. Kami bekerja sama dengan ekspedisi industri untuk pengiriman antar kota dan antar pulau. Estimasi biaya dan waktu kirim akan disampaikan saat penawaran.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="border-t border-border bg-card py-16 lg:py-24">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <span className="eyebrow mb-5">Pertanyaan Umum</span>
          <h2 className="font-display text-3xl leading-tight sm:text-4xl">
            Hal yang Sering Ditanyakan.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Tidak menemukan jawaban? Silakan hubungi tim kami via WhatsApp.
          </p>
        </div>
        <div className="lg:col-span-8">
          <Accordion type="single" collapsible className="border-y border-border">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-border last:border-0">
                <AccordionTrigger className="py-5 text-left font-display text-base font-semibold hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
