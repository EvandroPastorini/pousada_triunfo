import {
  Bath,
  BedDouble,
  Coffee,
  Flower2,
  MapPin,
  ParkingCircle,
  Sparkles,
  TreePine,
  Wifi,
} from "lucide-react";

export const contact = {
  phone: "+55 51 98062-6716",
  mobile: "+55 51 98186-6480",
  whatsapp: "5551980626716",
  email: "jardinsdagastehaus@gmail.com",
  instagram: "https://www.instagram.com/pousadajardinsgastehaus/",
  address: "Costa da Cadeia, S/N, Triunfo, RS, 95840-000",
  mapUrl:
    "https://www.google.com/maps?q=-29.766861172261,-51.623592535333&z=16&output=embed",
  directionsUrl: "https://maps.google.com/maps?q=-29.766861172261,-51.623592535333",
};

export const whatsappUrl = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
  "Olá! Gostaria de saber mais sobre hospedagem na Pousada Triunfo.",
)}`;

export const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Galeria", href: "#galeria" },
  { label: "Acomodações", href: "#acomodacoes" },
  { label: "Localização", href: "#localizacao" },
  { label: "Contato", href: "#contato" },
];

export const highlights = [
  {
    icon: TreePine,
    title: "Natureza ao redor",
    text: "Jardins, lago e paisagens tranquilas para desacelerar sem abrir mão do conforto.",
  },
  {
    icon: Sparkles,
    title: "Experiência acolhedora",
    text: "Uma pousada de clima familiar, pensada para receber bem em cada detalhe.",
  },
  {
    icon: MapPin,
    title: "Refúgio em Triunfo",
    text: "Localização calma em Triunfo, com acesso fácil para quem busca descanso e ar livre.",
  },
];

export const amenities = [
  { icon: Wifi, label: "Wi-Fi" },
  { icon: Coffee, label: "Café da manhã" },
  { icon: ParkingCircle, label: "Estacionamento" },
  { icon: Bath, label: "Hidro" },
  { icon: Flower2, label: "Jardins" },
  { icon: BedDouble, label: "4 acomodações" },
];

export const gallery = [
  {
    src: "/images/gallery-nature.png",
    alt: "Lago e pôr do sol na área externa da pousada",
    category: "Natureza",
  },
  {
    src: "/images/gallery-bangalo.png",
    alt: "Bangalô à beira do lago",
    category: "Áreas externas",
  },
  {
    src: "/images/gallery-casal.jpg",
    alt: "Quarto de casal com teto de madeira e vista para o jardim",
    category: "Quartos",
  },
  {
    src: "/images/gallery-hidro.jpg",
    alt: "Banheira de hidromassagem da suíte",
    category: "Suíte",
  },
  {
    src: "/images/gallery-banheiro.png",
    alt: "Banheiro privativo da suíte",
    category: "Interiores",
  },
  {
    src: "/images/hero-02.png",
    alt: "Suíte com cama branca, paredes de tijolo e banheira",
    category: "Acomodações",
  },
  {
    src: "/images/gallery-suite.jpg",
    alt: "Cama arrumada em acomodação aconchegante",
    category: "Conforto",
  },
];

export const accommodations = [
  {
    name: "Suíte Casal",
    image: "/images/gallery-casal.jpg",
    description:
      "Ambiente confortável para dias de descanso, com cama de casal, ar-condicionado e vista para o verde.",
  },
  {
    name: "Suíte com Hidro",
    image: "/images/gallery-hidro.jpg",
    description:
      "Acomodação pensada para uma experiência mais romântica, com banheira e atmosfera reservada.",
  },
  {
    name: "Bangalô Jardim",
    image: "/images/gallery-bangalo.png",
    description:
      "Opção charmosa próxima às áreas externas, ideal para viver a pousada com calma e contato com a natureza.",
  },
];
