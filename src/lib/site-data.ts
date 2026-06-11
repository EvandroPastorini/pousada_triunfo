import {
  Bath,
  BedDouble,
  Bird,
  BookOpen,
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
  { icon: BedDouble, label: "2 casas" },
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
    fit: "contain-desktop" as const,
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
    src: "/images/cabana-umbu/umbu4.jpeg",
    alt: "Cabana Umbu cercada pela natureza, com deck de madeira e rede",
    category: "Cabana Umbu",
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
    src: "/images/suite-amoras/amores1.jpeg",
    alt: "Suíte Amoras da Gästehaus",
    category: "Suíte Amoras",
  },
  {
    src: "/images/drive-extra/gallery-romantico.jpg",
    alt: "Mesa posta com flor, taças e sobremesa para uma experiência especial",
    category: "Experiência",
  },
  {
    src: "/images/quarto-lavandas/lavanda2.jpeg",
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
    group: "gastehaus",
    name: "Gästehaus Completa",
    image: "/images/drive-extra/fachada-dia.jpg",
    images: [
      "/images/drive-extra/fachada-dia.jpg",
      "/images/drive-extra/salao-interno.jpg",
      "/images/drive-extra/varanda-descanso.jpg",
      "/images/drive-extra/fachada-noite.jpg",
    ],
    tag: "Espaço inteiro",
    description:
      "Locação exclusiva da casa de campo com seus 3 quartos — Rosas, Lavandas e Suíte Amoras — além das áreas de convivência.",
    features: ["3 quartos", "Privacidade total", "Áreas comuns exclusivas"],
  },
  {
    group: "gastehaus",
    name: "Quarto Rosas",
    image: "/images/gallery-casal.jpg",
    images: [
      "/images/quarto-rosa/rosa1.jpeg",
      "/images/quarto-rosa/rosa2.jpeg",
      "/images/quarto-rosa/rosa3.jpeg",
    ],
    tag: "Casal",
    description:
      "Quarto de casal com janela voltada para as roseiras e para a frente da pousada, ideal para uma estadia tranquila a dois.",
    features: ["Cama de casal", "Vista para as roseiras", "Frente da pousada"],
  },
  {
    group: "gastehaus",
    name: "Quarto Lavandas",
    image: "/images/quarto-lavandas/lavanda2.jpeg",
    images: [
      "/images/quarto-lavandas/lavanda1.jpeg",
      "/images/quarto-lavandas/lavanda2.jpeg",
    ],
    tag: "Até 4 pessoas",
    description:
      "Acomodação para até 4 pessoas, com uma cama de casal e duas camas de solteiro. A janela tem vista para o lavandário.",
    features: ["1 cama de casal", "2 camas de solteiro", "Vista para o lavandário"],
  },
  {
    group: "gastehaus",
    name: "Suíte Amoras",
    image: "/images/suite-amoras/amores1.jpeg",
    images: [
      "/images/suite-amoras/amores1.jpeg",
      "/images/suite-amoras/amores2.jpeg",
      "/images/suite-amoras/amores3.jpeg",
      "/images/suite-amoras/amores4.jpeg",
    ],
    tag: "Suíte da Gästehaus",
    description:
      "Suíte privativa que integra os três quartos da Gästehaus e pode ser reservada individualmente ou junto com a casa completa.",
    features: ["Suíte privativa", "Reserva individual", "Inclusa na casa completa"],
  },
  {
    group: "cabana-umbu",
    name: "Cabana Umbu",
    image: "/images/drive-extra/cabana-umbu.jpg",
    images: [
      "/images/cabana-umbu/umbu1.jpeg",
      "/images/cabana-umbu/umbu3.jpeg",
      "/images/cabana-umbu/umbu4.jpeg",
      "/images/cabana-umbu/umbu7.png",
      "/images/cabana-umbu/umbu8.jpg",
      "/images/cabana-umbu/umbu5.jpeg",
      "/images/cabana-umbu/umbu6.jpeg",
    ],
    tag: "Cabana independente",
    description:
      "Hospedagem independente da Gästehaus, localizada dentro do Jardins da Gästehaus e cercada pela natureza.",
    features: ["Unidade independente", "Deck com rede", "Cercada pelo verde"],
  },
];

export const accommodationGroups = [
  {
    id: "gastehaus",
    eyebrow: "Casa de campo",
    title: "Gästehaus",
    description:
      "A pousada principal pode ser reservada inteira, com seus 3 quartos, ou por quarto individual: Rosas, Lavandas e Suíte Amoras.",
  },
  {
    id: "cabana-umbu",
    eyebrow: "Hospedagem independente",
    title: "Cabana Umbu",
    description:
      "Uma segunda casa, separada da pousada, que também faz parte da experiência Jardins da Gästehaus.",
  },
];

export const stayModes = [
  {
    icon: Home,
    title: "Gästehaus completa",
    text: "A casa de campo inteira, com os quartos Rosas, Lavandas e Suíte Amoras, para famílias e grupos.",
  },
  {
    icon: BedDouble,
    title: "Quartos da Gästehaus",
    text: "Rosas, Lavandas e Suíte Amoras também podem ser reservados individualmente.",
  },
  {
    icon: TreePine,
    title: "Cabana Umbu",
    text: "Uma casa independente da pousada, inserida nos jardins e reservada separadamente.",
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
  { value: "2", label: "casas" },
  { value: "40 mil m²", label: "de área verde" },
  { value: "10/10", label: "em avaliações públicas" },
];

export const regionHighlights = [
  "Centro histórico de Triunfo e Museu Farroupilha",
  "Orla dos rios Taquari e Jacuí",
  "Queijaria artesanal Fazenda Três Montes",
  "Azeite Milonga, produzido em Triunfo",
];
