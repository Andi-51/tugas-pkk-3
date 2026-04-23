export const SITE = {
  brand: "Ferrum Prima",
  tagline: "Besi Batang Premium untuk Industri",
  whatsappNumber: "6281234567890",
  email: "sales@ferrumprima.co.id",
  address: "Kawasan Industri Pulogadung, Jakarta Timur, Indonesia",
  phone: "+62 812-3456-7890",
};

export function waLink(message: string) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const DEFAULT_WA_MESSAGE =
  "Halo Ferrum Prima, saya ingin memesan besi batang. Mohon info diameter, grade, dan penawaran harga.";
