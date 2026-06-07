import {
  Bath,
  BedDouble,
  Bird,
  BookOpen,
  CalendarCheck,
  Coffee,
  Flower2,
  Flame,
  Heart,
  Home,
  Leaf,
  MapPin,
  ParkingCircle,
  PawPrint,
  Sparkles,
  TreePine,
  Tv,
  Wifi,
  Wind,
} from "lucide-react";
import { brand } from "@/lib/brand";

export const contact = {
  phone: "+55 51 98062-6716",
  mobile: "+55 51 98186-6480",
  whatsapp: "5551980626716",
  email: "jardinsdagastehaus@gmail.com",
  instagram: "https://www.instagram.com/pousadajardinsgastehaus/",
  address: "Costa da Cadeia, 27855, Triunfo, RS, 95840-000",
  googleReviewsUrl:
    "https://www.google.com/maps/search/?api=1&query=Pousada%20Jardins%20da%20G%C3%A4stehaus%20Triunfo%20RS",
  mapUrl:
    "https://www.google.com/maps?q=-29.766861172261,-51.623592535333&z=16&output=embed",
  directionsUrl: "https://maps.google.com/maps?q=-29.766861172261,-51.623592535333",
};

export const whatsappUrl = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
  `Olá! Gostaria de saber mais sobre hospedagem na ${brand.name}.`,
)}`;

export const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Galeria", href: "#galeria" },
  { label: "Acomodações", href: "#acomodacoes" },
  { label: "Avaliações", href: "#avaliacoes" },
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

export const heroSlides = {
  desktop: [
    {
      src: "/images/drive-extra/fachada-noite2.png",
      alt: "Fachada iluminada da Pousada Jardins da Gästehaus ao anoitecer",
      position: "object-center",
    },
    {
      src: "/images/drive-extra/petit-spa.jpg",
      alt: "Experiência de massagem nos jardins da pousada",
      position: "object-center",
    },
    {
      src: "/images/hero-desktop.jpg",
      alt: "Detalhe acolhedor do café rural da pousada",
      position: "object-center",
    },
  ],
  mobile: [
    {
      src: "/images/drive-extra/fachada-dia.jpg",
      alt: "Fachada da pousada cercada por jardins durante o dia",
      position: "object-center",
    },
    {
      src: "/images/drive-extra/varanda-descanso.jpg",
      alt: "Hóspedes descansando em redes na varanda da pousada",
      position: "object-center",
    },
    {
      src: "/images/hero-01.png",
      alt: "Lago e pôr do sol na área externa da pousada",
      position: "object-center",
    },
    {
      src: "/images/gallery-hidro.jpg",
      alt: "Banheira de hidromassagem em acomodação da pousada",
      position: "object-center",
    },
  ],
};

export const experienceHighlights = [
  {
    icon: Leaf,
    eyebrow: "Natureza preservada",
    title: "40 mil m² de área verde",
    text: "Jardins, deck, lounge e espaços sob as árvores para viver dias de contemplação, silêncio e ar puro.",
  },
  {
    icon: Bird,
    eyebrow: "Fauna local",
    title: "Refúgio para observar pássaros",
    text: "A área preservada atrai espécies que encantam os hóspedes visualmente e pelo canto ao amanhecer.",
  },
  {
    icon: Heart,
    eyebrow: "Cuidado sob agendamento",
    title: "Petit Spa e bem-estar",
    text: "Massagens, Reiki, escalda-pés, yoga e meditação guiada podem compor a experiência da estadia.",
  },
];

export const services = [
  { icon: Tv, label: "Smart TV" },
  { icon: Wifi, label: "Wi-Fi" },
  { icon: ParkingCircle, label: "Estacionamento" },
  { icon: Wind, label: "Ar-condicionado" },
  { icon: Flame, label: "Aquecedores ou lareiras" },
  { icon: Coffee, label: "Café da manhã rural" },
  { icon: BookOpen, label: "Acervo de livros" },
  { icon: PawPrint, label: "Pet friendly sob consulta" },
];

export const gallery = [
  {
    src: "/images/drive-extra/fachada-dia.jpg",
    alt: "Fachada da Pousada Jardins da Gästehaus durante o dia, cercada por jardins",
    category: "Casa de campo",
  },
  {
    src: "/images/gallery-nature.png",
    alt: "Lago e pôr do sol na área externa da pousada",
    category: "Natureza",
  },
  {
    src: "/images/drive-extra/salao-interno.jpg",
    alt: "Salão interno amplo da pousada com teto de madeira e área de convivência",
    category: "Interiores",
  },
  {
    src: "/images/gallery-bangalo.png",
    alt: "Bangalô à beira do lago",
    category: "Áreas externas",
  },
  {
    src: "/images/drive-extra/fachada-noite.jpg",
    alt: "Fachada iluminada da pousada ao anoitecer",
    category: "Fachada",
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
    src: "/images/drive-extra/gallery-romantico.jpg",
    alt: "Mesa posta com flor, taças e sobremesa para uma experiência especial",
    category: "Experiência",
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
  {
    src: "/images/drive-extra/varanda-descanso.jpg",
    alt: "Hóspedes descansando em redes na varanda com vista para os jardins",
    category: "Descanso",
  },
  {
    src: "/images/drive-extra/cafe-na-cama.jpg",
    alt: "Café servido na cama em uma das acomodações",
    category: "Café",
  },
  {
    src: "/images/drive-extra/petit-spa.jpg",
    alt: "Experiência de massagem ao ar livre nos jardins da pousada",
    category: "Petit Spa",
  },
];

export const accommodations = [
  {
    name: "Casa de Campo Completa",
    image: "/images/drive-extra/fachada-dia.jpg",
    tag: "Espaço inteiro",
    description:
      "Locação exclusiva da pousada para famílias, grupos e encontros especiais, com acesso aos jardins, deck, lounge e às 4 suítes.",
    features: ["Privacidade total", "Ideal para grupos", "Áreas comuns exclusivas"],
  },
  {
    name: "Suítes Jardins",
    image: "/images/gallery-hidro.jpg",
    tag: "Hospedagem individual",
    description:
      "Acomodações confortáveis para quem busca descanso com charme, ar-condicionado, Wi-Fi e clima acolhedor junto ao verde.",
    features: ["Cama confortável", "Ar-condicionado", "Vista para os jardins"],
  },
  {
    name: "Quartos Econômicos",
    image: "/images/gallery-bangalo.png",
    tag: "Opção mais acessível",
    description:
      "Alternativa para quem quer viver a experiência da pousada com melhor custo-benefício, reservando apenas o quarto.",
    features: ["Reserva por quarto", "Acesso à pousada", "Café da manhã sob consulta"],
  },
];

export const stayModes = [
  {
    icon: Home,
    title: "Casa de campo inteira",
    text: "Para famílias, amigos, celebrações e encontros que pedem privacidade, natureza e uso exclusivo dos espaços.",
  },
  {
    icon: BedDouble,
    title: "Quartos avulsos",
    text: "Para casais ou viajantes que buscam uma opção mais econômica, mantendo o acolhimento da pousada.",
  },
  {
    icon: CalendarCheck,
    title: "Eventos e experiências",
    text: "Ensaios fotográficos, workshops, pré-wedding, casamentos intimistas e experiências de bem-estar sob agendamento.",
  },
];

export const reviews = [
  {
    quote:
      "Gostamos muito da pousada. Ambiente familiar, bonito e acolhedor. Lindo jardim com silêncio e ar puro.",
    author: "Hóspede verificado",
    source: "Avaliação pública",
  },
  {
    quote:
      "Recepção maravilhosa e anfitriões incansáveis para agradar. Acordamos com o canto dos pássaros.",
    author: "Hóspede verificado",
    source: "Avaliação pública",
  },
  {
    quote:
      "A proposta de locar o espaço inteiro como casa de campo entrega privacidade, natureza e conforto para grupos.",
    author: "Resumo da experiência",
    source: "Perfil de hospedagem",
  },
];

export const reviewStats = [
  { value: "4", label: "suítes" },
  { value: "40 mil m²", label: "de área verde" },
  { value: "10/10", label: "em avaliações públicas" },
];

export const regionHighlights = [
  "Centro histórico de Triunfo e Museu Farroupilha",
  "Orla dos rios Taquari e Jacuí",
  "Queijaria artesanal Fazenda Três Montes",
  "Azeite Milonga, produzido em Triunfo",
];
