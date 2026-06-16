import type { LucideIcon } from "lucide-react";
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
  Route,
  Sparkles,
  TreePine,
  Tractor,
  Tv,
  Wifi,
  Wind,
  Waves,
} from "lucide-react";
import { brand } from "@/lib/brand";

export const locales = ["pt", "es", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "pt";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function localePath(locale: Locale) {
  return locale === defaultLocale ? "/" : `/${locale}`;
}

export const localeInfo = {
  pt: { label: "PT", name: "Português", htmlLang: "pt-BR", ogLocale: "pt_BR" },
  es: { label: "ES", name: "Español", htmlLang: "es", ogLocale: "es_ES" },
  en: { label: "EN", name: "English", htmlLang: "en", ogLocale: "en_US" },
} as const satisfies Record<Locale, { label: string; name: string; htmlLang: string; ogLocale: string }>;

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

type NavItem = { label: string; href: string };
type IconText = { icon: LucideIcon; label: string };
type Highlight = { icon: LucideIcon; title: string; text: string };
type ExperienceHighlight = Highlight & { eyebrow: string };
type GalleryItem = {
  src: string;
  alt: string;
  category: string;
  fit?: "cover" | "contain-desktop";
};
type Accommodation = {
  group: string;
  name: string;
  image: string;
  images?: string[];
  tag: string;
  description: string;
  features: string[];
};
type AccommodationGroup = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
};
type Review = { quote: string; author: string; source: string };
type RegionHighlight = { title: string; text: string; image: string; alt: string };

type SiteDictionary = {
  metadata: {
    title: string;
    description: string;
    keywords: string[];
    openGraphTitle: string;
    openGraphDescription: string;
    twitterDescription: string;
  };
  structuredData: {
    description: string;
    amenities: string[];
  };
  whatsappMessage: string;
  header: {
    brandLabel: string;
    navAria: string;
    cta: string;
    languageAria: string;
  };
  floatingWhatsAppAria: string;
  navItems: NavItem[];
  heroSlides: {
    desktop: Array<{ src: string; alt: string; position: string }>;
    mobile: Array<{ src: string; alt: string; position: string }>;
  };
  hero: {
    badge: string;
    text: string;
    primaryCta: string;
    secondaryCta: string;
  };
  amenities: IconText[];
  about: {
    kicker: string;
    title: string;
    copy: string[];
  };
  highlights: Highlight[];
  experience: {
    kicker: string;
    title: string;
    copy: string;
  };
  experienceHighlights: ExperienceHighlight[];
  services: IconText[];
  galleryIntro: {
    kicker: string;
    title: string;
    copy: string;
  };
  gallery: GalleryItem[];
  galleryLabels: {
    close: string;
    zoomIconLabel: string;
  };
  accommodationsIntro: {
    kicker: string;
    title: string;
    copy: string;
  };
  stayModes: Highlight[];
  accommodations: Accommodation[];
  accommodationGroups: AccommodationGroup[];
  accommodationLabels: {
    viewPhotos: string;
    viewPhotosAriaPrefix: string;
    modalAriaPrefix: string;
    close: string;
    previous: string;
    next: string;
    selectPhotoPrefix: string;
    photoOf: string;
    consultAvailability: string;
  };
  bookingCta: {
    kicker: string;
    title: string;
    copy: string;
    cta: string;
  };
  reviewsIntro: {
    kicker: string;
    title: string;
    copy: string;
    googleCta: string;
    publicProfileNote: string;
    starsAria: string;
  };
  reviews: Review[];
  reviewStats: Array<{ value: string; label: string }>;
  location: {
    kicker: string;
    title: string;
    copy: string;
    nearbyTitle: string;
    directionsCta: string;
    mapTitle: string;
  };
  regionHighlights: RegionHighlight[];
  contactFooter: {
    logoAlt: string;
    title: string;
    copy: string;
    whatsapp: string;
    email: string;
    instagram: string;
    copyright: string;
  };
};

const sharedHeroSlides = {
  desktop: [
    {
      src: "/images/drive-extra/fachada-noite2.png",
      position: "object-center",
    },
    {
      src: "/images/drive-extra/petit-spa.jpg",
      position: "object-center",
    },
    {
      src: "/images/hero-desktop.jpg",
      position: "object-center",
    },
  ],
  mobile: [
    {
      src: "/images/drive-extra/fachada-dia.jpg",
      position: "object-center",
    },
    {
      src: "/images/drive-extra/varanda-descanso.jpg",
      position: "object-center",
    },
    {
      src: "/images/hero-01.png",
      position: "object-center",
    },
    {
      src: "/images/cabana-umbu/umbu8.jpg",
      position: "object-center",
    },
  ],
};

const accommodationImages = {
  gastehaus: [
    "/images/drive-extra/fachada-dia.jpg",
    "/images/drive-extra/salao-interno.jpg",
    "/images/drive-extra/varanda-descanso.jpg",
    "/images/drive-extra/fachada-noite.jpg",
  ],
  rosas: [
    "/images/quarto-rosa/rosa1.jpeg",
    "/images/quarto-rosa/rosa2.jpeg",
    "/images/quarto-rosa/rosa3.jpeg",
  ],
  lavandas: ["/images/quarto-lavandas/lavanda1.jpeg", "/images/quarto-lavandas/lavanda2.jpeg"],
  amoras: [
    "/images/suite-amoras/amores1.jpeg",
    "/images/suite-amoras/amores2.jpeg",
    "/images/suite-amoras/amores3.jpeg",
    "/images/suite-amoras/amores4.jpeg",
  ],
  umbu: [
    "/images/cabana-umbu/umbu1.jpeg",
    "/images/cabana-umbu/umbu3.jpeg",
    "/images/cabana-umbu/umbu4.jpeg",
    "/images/cabana-umbu/umbu7.png",
    "/images/cabana-umbu/umbu8.jpg",
    "/images/cabana-umbu/umbu5.jpeg",
    "/images/cabana-umbu/umbu6.jpeg",
  ],
};

const dictionary: Record<Locale, SiteDictionary> = {
  pt: {
    metadata: {
      title: `${brand.name} | Pousada rural e cabana em Triunfo, RS`,
      description:
        "Pousada rural em Triunfo, RS, com casa de campo, quartos individuais, Cabana Umbu e experiências no meio rural em 40 mil m² de natureza.",
      keywords: [
        "pousada em Triunfo RS",
        "pousada rural em Triunfo RS",
        "hospedagem em Triunfo",
        "hospedagem rural em Triunfo",
        "casa de campo em Triunfo",
        "cabana em Triunfo RS",
        "Jardins da Gästehaus",
        "turismo em Triunfo RS",
      ],
      openGraphTitle: `${brand.name} | Pousada rural em Triunfo, RS`,
      openGraphDescription:
        "Casa de campo, quartos individuais, Cabana Umbu e vivências acolhedoras no meio rural.",
      twitterDescription: "Casa de campo, quartos individuais e Cabana Umbu no meio rural de Triunfo.",
    },
    structuredData: {
      description:
        "Pousada rural em Triunfo, RS, com a casa de campo Gästehaus, quartos individuais, Cabana Umbu independente e experiências acolhedoras no meio rural.",
      amenities: ["Wi-Fi", "Estacionamento", "Café da manhã rural", "Ar-condicionado", "Jardins"],
    },
    whatsappMessage: `Olá! Gostaria de consultar datas e disponibilidade na ${brand.name} para uma estadia em Triunfo.`,
    header: {
      brandLabel: "POUSADA",
      navAria: "Navegação principal",
      cta: "Consultar datas",
      languageAria: "Selecionar idioma",
    },
    floatingWhatsAppAria: `Chamar a ${brand.name} no WhatsApp`,
    navItems: [
      { label: "Sobre", href: "#sobre" },
      { label: "Galeria", href: "#galeria" },
      { label: "Acomodações", href: "#acomodacoes" },
      { label: "Avaliações", href: "#avaliacoes" },
      { label: "Localização", href: "#localizacao" },
      { label: "Contato", href: "#contato" },
    ],
    heroSlides: {
      desktop: [
        {
          ...sharedHeroSlides.desktop[0],
          alt: "Fachada iluminada da Pousada Jardins da Gästehaus ao anoitecer",
        },
        { ...sharedHeroSlides.desktop[1], alt: "Experiência de massagem nos jardins da pousada" },
        { ...sharedHeroSlides.desktop[2], alt: "Detalhe acolhedor do café rural da pousada" },
      ],
      mobile: [
        { ...sharedHeroSlides.mobile[0], alt: "Fachada da pousada cercada por jardins durante o dia" },
        { ...sharedHeroSlides.mobile[1], alt: "Hóspedes descansando em redes na varanda da pousada" },
        { ...sharedHeroSlides.mobile[2], alt: "Lago e pôr do sol na área externa da pousada" },
        { ...sharedHeroSlides.mobile[3], alt: "Banheira de hidromassagem em acomodação da pousada" },
      ],
    },
    hero: {
      badge: "Pousada rural em Triunfo, RS",
      text: "Duas casas em 40 mil m² de área verde: a Gästehaus, inteira ou por quarto, e a Cabana Umbu independente para viver o meio rural de Triunfo com calma e privacidade.",
      primaryCta: "Solicitar disponibilidade",
      secondaryCta: "Conhecer acomodações",
    },
    amenities: [
      { icon: Wifi, label: "Wi-Fi" },
      { icon: Coffee, label: "Café da manhã" },
      { icon: ParkingCircle, label: "Estacionamento" },
      { icon: Bath, label: "Hidro" },
      { icon: Flower2, label: "Jardins" },
      { icon: BedDouble, label: "2 casas" },
    ],
    about: {
      kicker: "Sobre a pousada",
      title: "Um refúgio rural de família para família.",
      copy: [
        `Em Triunfo, entre jardins, lago e o ritmo calmo do interior, a ${brand.name} nasceu do desejo de compartilhar um lugar rural, acolhedor e exclusivo, onde a natureza encontra a sofisticação sem deixar a simplicidade.`,
        "O espaço reúne duas casas: a Gästehaus, que pode ser reservada inteira ou por um de seus três quartos, e a Cabana Umbu, uma hospedagem independente dentro dos jardins e da vida simples do campo.",
      ],
    },
    highlights: [
      {
        icon: TreePine,
        title: "Meio rural",
        text: "Uma hospedagem rural em Triunfo, cercada por jardins, lago e paisagens de interior.",
      },
      {
        icon: Sparkles,
        title: "Experiência acolhedora",
        text: "Uma pousada de clima familiar, pensada para receber bem em cada detalhe.",
      },
      {
        icon: MapPin,
        title: "Refúgio em Triunfo",
        text: "Localização calma para quem busca descanso, ar livre e vivências simples no campo.",
      },
    ],
    experience: {
      kicker: "Experiência",
      title: "Contemplação, privacidade e vivências no meio rural.",
      copy: "A pousada foi pensada para receber cada hóspede de maneira única, valorizando as características do interior, o respeito ao meio ambiente e uma hospitalidade atenta aos pequenos detalhes, com experiências rurais acolhedoras ao longo da estadia.",
    },
    experienceHighlights: [
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
        icon: Tractor,
        eyebrow: "Vivências no campo",
        title: "Experiências rurais acolhedoras",
        text: "Carroça tratorada, trilhas, toboágua e banho de açude podem aproximar a estadia do ritmo leve do interior.",
      },
      {
        icon: Heart,
        eyebrow: "Cuidado sob agendamento",
        title: "Petit Spa e bem-estar",
        text: "Massagens, Reiki, escalda-pés, yoga e meditação guiada podem compor a experiência da estadia.",
      },
    ],
    services: [
      { icon: Tv, label: "Smart TV" },
      { icon: Wifi, label: "Wi-Fi" },
      { icon: ParkingCircle, label: "Estacionamento" },
      { icon: Wind, label: "Ar-condicionado" },
      { icon: Flame, label: "Aquecedores ou lareiras" },
      { icon: Coffee, label: "Café da manhã rural" },
      { icon: BookOpen, label: "Acervo de livros" },
      { icon: PawPrint, label: "Pet friendly sob consulta" },
      { icon: Route, label: "Trilhas e vivências rurais" },
      { icon: Waves, label: "Banho de açude" },
    ],
    galleryIntro: {
      kicker: "Galeria",
      title: "Espaços para respirar, descansar e aproveitar.",
      copy: "Clique nas fotos para ampliar e conhecer quartos, áreas externas, interiores, paisagens e experiências rurais da pousada.",
    },
    gallery: [
      {
        src: "/images/drive-extra/fachada-dia.jpg",
        alt: "Fachada da Pousada Jardins da Gästehaus durante o dia, cercada por jardins",
        category: "Casa de campo",
        fit: "contain-desktop",
      },
      { src: "/images/gallery-nature.png", alt: "Lago e pôr do sol na área externa da pousada", category: "Natureza" },
      {
        src: "/images/drive-extra/salao-interno.jpg",
        alt: "Salão interno amplo da pousada com teto de madeira e área de convivência",
        category: "Interiores",
      },
      { src: "/images/gallery-bangalo.png", alt: "Bangalô à beira do lago", category: "Áreas externas" },
      {
        src: "/images/drive-extra/varanda-descanso.jpg",
        alt: "Varanda com redes em meio à área rural da pousada",
        category: "Experiências rurais",
      },
      {
        src: "/images/cabana-umbu/umbu4.jpeg",
        alt: "Cabana Umbu cercada pela natureza, com deck de madeira e rede",
        category: "Cabana Umbu",
      },
      { src: "/images/drive-extra/fachada-noite.jpg", alt: "Fachada iluminada da pousada ao anoitecer", category: "Fachada" },
      { src: "/images/gallery-casal.jpg", alt: "Quarto de casal com teto de madeira e vista para o jardim", category: "Quartos" },
      { src: "/images/suite-amoras/amores1.jpeg", alt: "Suíte Amoras da Gästehaus", category: "Suíte Amoras" },
      {
        src: "/images/drive-extra/gallery-romantico.jpg",
        alt: "Mesa posta com flor, taças e sobremesa para uma experiência especial",
        category: "Experiência",
      },
      { src: "/images/hero-01.png", alt: "Área verde com lago para banho de açude e contemplação", category: "Açude" },
      { src: "/images/quarto-lavandas/lavanda2.jpeg", alt: "Cama arrumada em acomodação aconchegante", category: "Conforto" },
      { src: "/images/drive-extra/cafe-na-cama.jpg", alt: "Café servido na cama em uma das acomodações", category: "Café" },
      {
        src: "/images/drive-extra/petit-spa.jpg",
        alt: "Experiência de massagem ao ar livre nos jardins da pousada",
        category: "Petit Spa",
      },
      {
        src: "/images/cabana-umbu/umbu2.jpeg",
        alt: "Natureza preservada próxima às acomodações rurais",
        category: "Trilhas e natureza",
      },
    ],
    galleryLabels: {
      close: "Fechar imagem ampliada",
      zoomIconLabel: "Ampliar foto",
    },
    accommodationsIntro: {
      kicker: "Acomodações",
      title: "Duas casas, diferentes formas de viver os jardins.",
      copy: "A Gästehaus é a pousada principal, com 3 quartos e opção de locação completa. A Cabana Umbu é uma segunda casa independente, reservada separadamente.",
    },
    stayModes: [
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
    ],
    accommodations: [
      {
        group: "gastehaus",
        name: "Gästehaus Completa",
        image: "/images/drive-extra/fachada-dia.jpg",
        images: accommodationImages.gastehaus,
        tag: "Espaço inteiro",
        description:
          "Locação exclusiva da casa de campo com seus 3 quartos — Rosas, Lavandas e Suíte Amoras — além das áreas de convivência.",
        features: ["3 quartos", "Privacidade total", "Áreas comuns exclusivas"],
      },
      {
        group: "gastehaus",
        name: "Quarto Rosas",
        image: "/images/gallery-casal.jpg",
        images: accommodationImages.rosas,
        tag: "Casal",
        description:
          "Quarto de casal com janela voltada para as roseiras e para a frente da pousada, ideal para uma estadia tranquila a dois.",
        features: ["Cama de casal", "Vista para as roseiras", "Frente da pousada"],
      },
      {
        group: "gastehaus",
        name: "Quarto Lavandas",
        image: "/images/quarto-lavandas/lavanda2.jpeg",
        images: accommodationImages.lavandas,
        tag: "Até 4 pessoas",
        description:
          "Acomodação para até 4 pessoas, com uma cama de casal e duas camas de solteiro. A janela tem vista para o lavandário.",
        features: ["1 cama de casal", "2 camas de solteiro", "Vista para o lavandário"],
      },
      {
        group: "gastehaus",
        name: "Suíte Amoras",
        image: "/images/suite-amoras/amores1.jpeg",
        images: accommodationImages.amoras,
        tag: "Suíte da Gästehaus",
        description:
          "Suíte privativa que integra os três quartos da Gästehaus e pode ser reservada individualmente ou junto com a casa completa.",
        features: ["Suíte privativa", "Reserva individual", "Inclusa na casa completa"],
      },
      {
        group: "cabana-umbu",
        name: "Cabana Umbu",
        image: "/images/drive-extra/cabana-umbu.jpg",
        images: accommodationImages.umbu,
        tag: "Cabana independente",
        description:
          "Hospedagem independente da Gästehaus, localizada dentro do Jardins da Gästehaus e cercada pela natureza.",
        features: ["Unidade independente", "Deck com rede", "Cercada pelo verde"],
      },
    ],
    accommodationGroups: [
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
    ],
    accommodationLabels: {
      viewPhotos: "Ver fotos",
      viewPhotosAriaPrefix: "Ver fotos de",
      modalAriaPrefix: "Galeria de",
      close: "Fechar galeria",
      previous: "Foto anterior",
      next: "Próxima foto",
      selectPhotoPrefix: "Ir para foto",
      photoOf: "de",
      consultAvailability: "Solicitar disponibilidade",
    },
    bookingCta: {
      kicker: "Sua próxima pausa",
      title: "Planeje seu descanso em Triunfo.",
      copy: "Conte quantas pessoas irão viajar e quais datas você procura. A pousada ajuda a escolher entre a Gästehaus completa, os quartos individuais e a Cabana Umbu.",
      cta: "Solicitar disponibilidade",
    },
    reviewsIntro: {
      kicker: "Avaliações",
      title: "O que os hóspedes sentem quando vivem os jardins.",
      copy: "A experiência aparece nas palavras de quem valoriza acolhimento, silêncio, ar puro, natureza e uma recepção feita com atenção.",
      googleCta: "Ver avaliações no Google",
      publicProfileNote: "Consulte no perfil público as avaliações e informações mais recentes da pousada.",
      starsAria: "Avaliação cinco estrelas",
    },
    reviews: [
      {
        quote:
          "Gostamos muito da pousada. Ambiente familiar, bonito e acolhedor. Lindo jardim com silêncio e ar puro.",
        author: "Relato de hóspede",
        source: "Avaliação pública",
      },
      {
        quote:
          "Recepção maravilhosa e anfitriões incansáveis para agradar. Acordamos com o canto dos pássaros.",
        author: "Relato de hóspede",
        source: "Avaliação pública",
      },
      {
        quote:
          "A proposta de locar o espaço inteiro como casa de campo entrega privacidade, natureza e conforto para grupos.",
        author: "Resumo da experiência",
        source: "Perfil de hospedagem",
      },
    ],
    reviewStats: [
      { value: "2", label: "casas" },
      { value: "40 mil m²", label: "de área verde" },
      { value: "Direto", label: "com os anfitriões" },
    ],
    location: {
      kicker: "Localização",
      title: "Triunfo, RS, com tranquilidade e fácil acesso.",
      copy: "Para quem procura hospedagem em Triunfo, a pousada oferece uma base tranquila em meio à natureza, com acesso às experiências históricas, culturais e gastronômicas da região.",
      nearbyTitle: "O que conhecer por perto",
      directionsCta: "Como chegar",
      mapTitle: `Mapa com a localização da ${brand.name}`,
    },
    regionHighlights: [
      {
        title: "Centro histórico de Triunfo e Museu Farroupilha",
        text: "Ruas, memória e arquitetura que ajudam a contar a história da cidade.",
        image: "/images/region-images/museum.jpg",
        alt: "Museu e centro histórico de Triunfo",
      },
      {
        title: "Encontro dos rios Taquari e Jacuí",
        text: "Um cenário natural marcante de Triunfo para contemplar a paisagem e o ritmo das águas.",
        image: "/images/region-images/river-meeting.jpg",
        alt: "Encontro dos rios Taquari e Jacuí em Triunfo",
      },
      {
        title: "Queijaria artesanal Fazenda Três Montes",
        text: "Uma experiência gastronômica local para quem gosta de sabores do interior.",
        image: "/images/region-images/cheese.jpeg",
        alt: "Queijos artesanais da Fazenda Três Montes",
      },
      {
        title: "Azeite Milonga, produzido em Triunfo",
        text: "Produção local que valoriza o turismo rural e os sabores da região.",
        image: "/images/region-images/olive-oil.jpg",
        alt: "Azeite Milonga produzido em Triunfo",
      },
    ],
    contactFooter: {
      logoAlt: `Logo da ${brand.name}`,
      title: "Planeje sua estadia.",
      copy: "Fale com a pousada para tirar dúvidas, consultar disponibilidade ou receber orientações sobre acesso.",
      whatsapp: "WhatsApp",
      email: "E-mail",
      instagram: "Instagram",
      copyright: `© 2026 ${brand.name}. Site institucional preparado para deploy na Vercel.`,
    },
  },
  es: {
    metadata: {
      title: `${brand.name} | Posada rural y cabaña en Triunfo, RS`,
      description:
        "Posada rural en Triunfo, RS, con casa de campo, habitaciones individuales, Cabaña Umbu y experiencias rurales en 40 mil m² de naturaleza.",
      keywords: [
        "posada en Triunfo RS",
        "posada rural en Triunfo RS",
        "alojamiento en Triunfo",
        "alojamiento rural en Triunfo",
        "casa de campo en Triunfo",
        "cabaña en Triunfo RS",
        "Jardins da Gästehaus",
        "turismo en Triunfo RS",
      ],
      openGraphTitle: `${brand.name} | Posada rural en Triunfo, RS`,
      openGraphDescription:
        "Casa de campo, habitaciones individuales, Cabaña Umbu y experiencias acogedoras en el medio rural.",
      twitterDescription: "Casa de campo, habitaciones individuales y Cabaña Umbu en el medio rural de Triunfo.",
    },
    structuredData: {
      description:
        "Posada rural en Triunfo, RS, con la casa de campo Gästehaus, habitaciones individuales, Cabaña Umbu independiente y experiencias acogedoras en el medio rural.",
      amenities: ["Wi-Fi", "Estacionamiento", "Desayuno rural", "Aire acondicionado", "Jardines"],
    },
    whatsappMessage: `¡Hola! Me gustaría consultar fechas y disponibilidad en ${brand.name} para una estadía en Triunfo.`,
    header: {
      brandLabel: "POSADA",
      navAria: "Navegación principal",
      cta: "Consultar fechas",
      languageAria: "Seleccionar idioma",
    },
    floatingWhatsAppAria: `Contactar a ${brand.name} por WhatsApp`,
    navItems: [
      { label: "Sobre", href: "#sobre" },
      { label: "Galería", href: "#galeria" },
      { label: "Alojamientos", href: "#acomodacoes" },
      { label: "Opiniones", href: "#avaliacoes" },
      { label: "Ubicación", href: "#localizacao" },
      { label: "Contacto", href: "#contato" },
    ],
    heroSlides: {
      desktop: [
        { ...sharedHeroSlides.desktop[0], alt: "Fachada iluminada de la Posada Jardins da Gästehaus al anochecer" },
        { ...sharedHeroSlides.desktop[1], alt: "Experiencia de masaje en los jardines de la posada" },
        { ...sharedHeroSlides.desktop[2], alt: "Detalle acogedor del desayuno rural de la posada" },
      ],
      mobile: [
        { ...sharedHeroSlides.mobile[0], alt: "Fachada de la posada rodeada de jardines durante el día" },
        { ...sharedHeroSlides.mobile[1], alt: "Huéspedes descansando en hamacas en la veranda de la posada" },
        { ...sharedHeroSlides.mobile[2], alt: "Lago y puesta de sol en el área exterior de la posada" },
        { ...sharedHeroSlides.mobile[3], alt: "Bañera de hidromasaje en un alojamiento de la posada" },
      ],
    },
    hero: {
      badge: "Posada rural en Triunfo, RS",
      text: "Dos casas en 40 mil m² de área verde: la Gästehaus, completa o por habitación, y la Cabaña Umbu independiente para vivir el medio rural de Triunfo con calma y privacidad.",
      primaryCta: "Consultar disponibilidad",
      secondaryCta: "Conocer alojamientos",
    },
    amenities: [
      { icon: Wifi, label: "Wi-Fi" },
      { icon: Coffee, label: "Desayuno" },
      { icon: ParkingCircle, label: "Estacionamiento" },
      { icon: Bath, label: "Hidro" },
      { icon: Flower2, label: "Jardines" },
      { icon: BedDouble, label: "2 casas" },
    ],
    about: {
      kicker: "Sobre la posada",
      title: "Un refugio rural de familia para familia.",
      copy: [
        `En Triunfo, entre jardines, lago y el ritmo tranquilo del interior, ${brand.name} nació del deseo de compartir un lugar rural, acogedor y exclusivo, donde la naturaleza encuentra sofisticación sin perder la sencillez.`,
        "El espacio reúne dos casas: la Gästehaus, que puede reservarse completa o por una de sus tres habitaciones, y la Cabaña Umbu, un alojamiento independiente dentro de los jardines y de la vida simple del campo.",
      ],
    },
    highlights: [
      {
        icon: TreePine,
        title: "Medio rural",
        text: "Un alojamiento rural en Triunfo, rodeado de jardines, lago y paisajes del interior.",
      },
      {
        icon: Sparkles,
        title: "Experiencia acogedora",
        text: "Una posada de ambiente familiar, pensada para recibir bien en cada detalle.",
      },
      {
        icon: MapPin,
        title: "Refugio en Triunfo",
        text: "Ubicación tranquila para quienes buscan descanso, aire libre y vivencias simples en el campo.",
      },
    ],
    experience: {
      kicker: "Experiencia",
      title: "Contemplación, privacidad y vivencias en el medio rural.",
      copy: "La posada fue pensada para recibir a cada huésped de manera única, valorando las características del interior, el respeto por el medio ambiente y una hospitalidad atenta a los pequeños detalles, con experiencias rurales acogedoras durante la estadía.",
    },
    experienceHighlights: [
      {
        icon: Leaf,
        eyebrow: "Naturaleza preservada",
        title: "40 mil m² de área verde",
        text: "Jardines, deck, lounge y espacios bajo los árboles para vivir días de contemplación, silencio y aire puro.",
      },
      {
        icon: Bird,
        eyebrow: "Fauna local",
        title: "Refugio para observar aves",
        text: "El área preservada atrae especies que encantan visualmente y por su canto al amanecer.",
      },
      {
        icon: Tractor,
        eyebrow: "Vivencias en el campo",
        title: "Experiencias rurales acogedoras",
        text: "Paseo en carroza con tractor, senderos, tobogán de agua y baño en el tajamar pueden acercar la estadía al ritmo leve del interior.",
      },
      {
        icon: Heart,
        eyebrow: "Cuidado con reserva",
        title: "Petit Spa y bienestar",
        text: "Masajes, Reiki, escalda-pies, yoga y meditación guiada pueden formar parte de la experiencia.",
      },
    ],
    services: [
      { icon: Tv, label: "Smart TV" },
      { icon: Wifi, label: "Wi-Fi" },
      { icon: ParkingCircle, label: "Estacionamiento" },
      { icon: Wind, label: "Aire acondicionado" },
      { icon: Flame, label: "Calefactores o chimeneas" },
      { icon: Coffee, label: "Desayuno rural" },
      { icon: BookOpen, label: "Biblioteca" },
      { icon: PawPrint, label: "Pet friendly bajo consulta" },
      { icon: Route, label: "Senderos y vivencias rurales" },
      { icon: Waves, label: "Baño en el tajamar" },
    ],
    galleryIntro: {
      kicker: "Galería",
      title: "Espacios para respirar, descansar y disfrutar.",
      copy: "Haz clic en las fotos para ampliar y conocer habitaciones, áreas externas, interiores, paisajes y experiencias rurales de la posada.",
    },
    gallery: [
      {
        src: "/images/drive-extra/fachada-dia.jpg",
        alt: "Fachada de la Posada Jardins da Gästehaus durante el día, rodeada de jardines",
        category: "Casa de campo",
        fit: "contain-desktop",
      },
      { src: "/images/gallery-nature.png", alt: "Lago y puesta de sol en el área externa de la posada", category: "Naturaleza" },
      {
        src: "/images/drive-extra/salao-interno.jpg",
        alt: "Salón interno amplio de la posada con techo de madera y área de convivencia",
        category: "Interiores",
      },
      { src: "/images/gallery-bangalo.png", alt: "Bungalow junto al lago", category: "Áreas externas" },
      {
        src: "/images/drive-extra/varanda-descanso.jpg",
        alt: "Veranda con hamacas en medio del área rural de la posada",
        category: "Experiencias rurales",
      },
      {
        src: "/images/cabana-umbu/umbu4.jpeg",
        alt: "Cabaña Umbu rodeada de naturaleza, con deck de madera y hamaca",
        category: "Cabaña Umbu",
      },
      { src: "/images/drive-extra/fachada-noite.jpg", alt: "Fachada iluminada de la posada al anochecer", category: "Fachada" },
      { src: "/images/gallery-casal.jpg", alt: "Habitación doble con techo de madera y vista al jardín", category: "Habitaciones" },
      { src: "/images/suite-amoras/amores1.jpeg", alt: "Suite Amoras de la Gästehaus", category: "Suite Amoras" },
      {
        src: "/images/drive-extra/gallery-romantico.jpg",
        alt: "Mesa puesta con flor, copas y postre para una experiencia especial",
        category: "Experiencia",
      },
      { src: "/images/hero-01.png", alt: "Área verde con lago para baño y contemplación", category: "Tajamar" },
      { src: "/images/quarto-lavandas/lavanda2.jpeg", alt: "Cama preparada en un alojamiento acogedor", category: "Confort" },
      { src: "/images/drive-extra/cafe-na-cama.jpg", alt: "Desayuno servido en la cama en uno de los alojamientos", category: "Desayuno" },
      {
        src: "/images/drive-extra/petit-spa.jpg",
        alt: "Experiencia de masaje al aire libre en los jardines de la posada",
        category: "Petit Spa",
      },
      {
        src: "/images/cabana-umbu/umbu2.jpeg",
        alt: "Naturaleza preservada cerca de los alojamientos rurales",
        category: "Senderos y naturaleza",
      },
    ],
    galleryLabels: {
      close: "Cerrar imagen ampliada",
      zoomIconLabel: "Ampliar foto",
    },
    accommodationsIntro: {
      kicker: "Alojamientos",
      title: "Dos casas, diferentes formas de vivir los jardines.",
      copy: "La Gästehaus es la posada principal, con 3 habitaciones y opción de reserva completa. La Cabaña Umbu es una segunda casa independiente, reservada por separado.",
    },
    stayModes: [
      {
        icon: Home,
        title: "Gästehaus completa",
        text: "La casa de campo entera, con las habitaciones Rosas, Lavandas y Suite Amoras, para familias y grupos.",
      },
      {
        icon: BedDouble,
        title: "Habitaciones de la Gästehaus",
        text: "Rosas, Lavandas y Suite Amoras también pueden reservarse individualmente.",
      },
      {
        icon: TreePine,
        title: "Cabaña Umbu",
        text: "Una casa independiente de la posada, inserta en los jardines y reservada por separado.",
      },
    ],
    accommodations: [
      {
        group: "gastehaus",
        name: "Gästehaus Completa",
        image: "/images/drive-extra/fachada-dia.jpg",
        images: accommodationImages.gastehaus,
        tag: "Espacio entero",
        description:
          "Reserva exclusiva de la casa de campo con sus 3 habitaciones — Rosas, Lavandas y Suite Amoras — además de las áreas comunes.",
        features: ["3 habitaciones", "Privacidad total", "Áreas comunes exclusivas"],
      },
      {
        group: "gastehaus",
        name: "Habitación Rosas",
        image: "/images/gallery-casal.jpg",
        images: accommodationImages.rosas,
        tag: "Pareja",
        description:
          "Habitación doble con ventana hacia los rosales y la parte frontal de la posada, ideal para una estadía tranquila para dos.",
        features: ["Cama doble", "Vista a los rosales", "Frente de la posada"],
      },
      {
        group: "gastehaus",
        name: "Habitación Lavandas",
        image: "/images/quarto-lavandas/lavanda2.jpeg",
        images: accommodationImages.lavandas,
        tag: "Hasta 4 personas",
        description:
          "Alojamiento para hasta 4 personas, con una cama doble y dos camas individuales. La ventana tiene vista al lavandario.",
        features: ["1 cama doble", "2 camas individuales", "Vista al lavandario"],
      },
      {
        group: "gastehaus",
        name: "Suite Amoras",
        image: "/images/suite-amoras/amores1.jpeg",
        images: accommodationImages.amoras,
        tag: "Suite de la Gästehaus",
        description:
          "Suite privada que integra las tres habitaciones de la Gästehaus y puede reservarse individualmente o junto con la casa completa.",
        features: ["Suite privada", "Reserva individual", "Incluida en la casa completa"],
      },
      {
        group: "cabana-umbu",
        name: "Cabaña Umbu",
        image: "/images/drive-extra/cabana-umbu.jpg",
        images: accommodationImages.umbu,
        tag: "Cabaña independiente",
        description:
          "Alojamiento independiente de la Gästehaus, ubicado dentro de Jardins da Gästehaus y rodeado de naturaleza.",
        features: ["Unidad independiente", "Deck con hamaca", "Rodeada de verde"],
      },
    ],
    accommodationGroups: [
      {
        id: "gastehaus",
        eyebrow: "Casa de campo",
        title: "Gästehaus",
        description:
          "La posada principal puede reservarse completa, con sus 3 habitaciones, o por habitación individual: Rosas, Lavandas y Suite Amoras.",
      },
      {
        id: "cabana-umbu",
        eyebrow: "Alojamiento independiente",
        title: "Cabaña Umbu",
        description:
          "Una segunda casa, separada de la posada, que también forma parte de la experiencia Jardins da Gästehaus.",
      },
    ],
    accommodationLabels: {
      viewPhotos: "Ver fotos",
      viewPhotosAriaPrefix: "Ver fotos de",
      modalAriaPrefix: "Galería de",
      close: "Cerrar galería",
      previous: "Foto anterior",
      next: "Siguiente foto",
      selectPhotoPrefix: "Ir a la foto",
      photoOf: "de",
      consultAvailability: "Consultar disponibilidad",
    },
    bookingCta: {
      kicker: "Tu próxima pausa",
      title: "Planifica tu descanso en Triunfo.",
      copy: "Cuéntanos cuántas personas viajarán y qué fechas buscas. La posada ayuda a elegir entre la Gästehaus completa, las habitaciones individuales y la Cabaña Umbu.",
      cta: "Consultar disponibilidad",
    },
    reviewsIntro: {
      kicker: "Opiniones",
      title: "Lo que sienten los huéspedes cuando viven los jardines.",
      copy: "La experiencia aparece en las palabras de quienes valoran acogida, silencio, aire puro, naturaleza y una recepción hecha con atención.",
      googleCta: "Ver opiniones en Google",
      publicProfileNote: "Consulta en el perfil público las opiniones e informaciones más recientes de la posada.",
      starsAria: "Opinión de cinco estrellas",
    },
    reviews: [
      {
        quote:
          "Nos gustó mucho la posada. Ambiente familiar, bonito y acogedor. Hermoso jardín con silencio y aire puro.",
        author: "Relato de huésped",
        source: "Opinión pública",
      },
      {
        quote:
          "Recepción maravillosa y anfitriones incansables para agradar. Despertamos con el canto de los pájaros.",
        author: "Relato de huésped",
        source: "Opinión pública",
      },
      {
        quote:
          "La propuesta de alquilar el espacio entero como casa de campo entrega privacidad, naturaleza y confort para grupos.",
        author: "Resumen de la experiencia",
        source: "Perfil de alojamiento",
      },
    ],
    reviewStats: [
      { value: "2", label: "casas" },
      { value: "40 mil m²", label: "de área verde" },
      { value: "Directo", label: "con los anfitriones" },
    ],
    location: {
      kicker: "Ubicación",
      title: "Triunfo, RS, con tranquilidad y fácil acceso.",
      copy: "Para quienes buscan alojamiento en Triunfo, la posada ofrece una base tranquila en medio de la naturaleza, con acceso a experiencias históricas, culturales y gastronómicas de la región.",
      nearbyTitle: "Qué conocer cerca",
      directionsCta: "Cómo llegar",
      mapTitle: `Mapa con la ubicación de ${brand.name}`,
    },
    regionHighlights: [
      {
        title: "Centro histórico de Triunfo y Museo Farroupilha",
        text: "Calles, memoria y arquitectura que ayudan a contar la historia de la ciudad.",
        image: "/images/region-images/museum.jpg",
        alt: "Museo y centro histórico de Triunfo",
      },
      {
        title: "Encuentro de los ríos Taquari y Jacuí",
        text: "Un escenario natural destacado de Triunfo para contemplar el paisaje y el ritmo de las aguas.",
        image: "/images/region-images/river-meeting.jpg",
        alt: "Encuentro de los ríos Taquari y Jacuí en Triunfo",
      },
      {
        title: "Quesería artesanal Fazenda Três Montes",
        text: "Una experiencia gastronómica local para quienes disfrutan sabores del interior.",
        image: "/images/region-images/cheese.jpeg",
        alt: "Quesos artesanales de Fazenda Três Montes",
      },
      {
        title: "Aceite de oliva Milonga, producido en Triunfo",
        text: "Producción local que valora el turismo rural y los sabores de la región.",
        image: "/images/region-images/olive-oil.jpg",
        alt: "Aceite de oliva Milonga producido en Triunfo",
      },
    ],
    contactFooter: {
      logoAlt: `Logo de ${brand.name}`,
      title: "Planifica tu estadía.",
      copy: "Habla con la posada para resolver dudas, consultar disponibilidad o recibir orientación sobre el acceso.",
      whatsapp: "WhatsApp",
      email: "E-mail",
      instagram: "Instagram",
      copyright: `© 2026 ${brand.name}. Sitio institucional preparado para deploy en Vercel.`,
    },
  },
  en: {
    metadata: {
      title: `${brand.name} | Rural inn and cabin in Triunfo, RS`,
      description:
        "Rural inn in Triunfo, RS, with a country house, individual rooms, Cabana Umbu and countryside experiences across 40,000 m² of nature.",
      keywords: [
        "inn in Triunfo RS",
        "rural inn in Triunfo RS",
        "lodging in Triunfo",
        "rural lodging in Triunfo",
        "country house in Triunfo",
        "cabin in Triunfo RS",
        "Jardins da Gästehaus",
        "tourism in Triunfo RS",
      ],
      openGraphTitle: `${brand.name} | Rural inn in Triunfo, RS`,
      openGraphDescription:
        "Country house, individual rooms, Cabana Umbu and welcoming countryside experiences.",
      twitterDescription: "Country house, individual rooms and Cabana Umbu in rural Triunfo.",
    },
    structuredData: {
      description:
        "Rural inn in Triunfo, RS, with the Gästehaus country house, individual rooms, independent Cabana Umbu and welcoming countryside experiences.",
      amenities: ["Wi-Fi", "Parking", "Rural breakfast", "Air conditioning", "Gardens"],
    },
    whatsappMessage: `Hello! I would like to check dates and availability at ${brand.name} for a stay in Triunfo.`,
    header: {
      brandLabel: "GUESTHOUSE",
      navAria: "Main navigation",
      cta: "Check dates",
      languageAria: "Select language",
    },
    floatingWhatsAppAria: `Contact ${brand.name} on WhatsApp`,
    navItems: [
      { label: "About", href: "#sobre" },
      { label: "Gallery", href: "#galeria" },
      { label: "Stays", href: "#acomodacoes" },
      { label: "Reviews", href: "#avaliacoes" },
      { label: "Location", href: "#localizacao" },
      { label: "Contact", href: "#contato" },
    ],
    heroSlides: {
      desktop: [
        { ...sharedHeroSlides.desktop[0], alt: "Lit facade of Pousada Jardins da Gästehaus at dusk" },
        { ...sharedHeroSlides.desktop[1], alt: "Massage experience in the inn gardens" },
        { ...sharedHeroSlides.desktop[2], alt: "Welcoming detail of the inn rural breakfast" },
      ],
      mobile: [
        { ...sharedHeroSlides.mobile[0], alt: "Inn facade surrounded by gardens during the day" },
        { ...sharedHeroSlides.mobile[1], alt: "Guests resting in hammocks on the inn veranda" },
        { ...sharedHeroSlides.mobile[2], alt: "Lake and sunset in the inn outdoor area" },
        { ...sharedHeroSlides.mobile[3], alt: "Hot tub in one of the inn accommodations" },
      ],
    },
    hero: {
      badge: "Rural inn in Triunfo, RS",
      text: "Two houses across 40,000 m² of green area: the Gästehaus, booked whole or by room, and the independent Cabana Umbu for experiencing rural Triunfo with calm and privacy.",
      primaryCta: "Check availability",
      secondaryCta: "View stays",
    },
    amenities: [
      { icon: Wifi, label: "Wi-Fi" },
      { icon: Coffee, label: "Breakfast" },
      { icon: ParkingCircle, label: "Parking" },
      { icon: Bath, label: "Hot tub" },
      { icon: Flower2, label: "Gardens" },
      { icon: BedDouble, label: "2 houses" },
    ],
    about: {
      kicker: "About the inn",
      title: "A rural refuge from family to family.",
      copy: [
        `In Triunfo, among gardens, lake and the calm rhythm of the countryside, ${brand.name} was born from the wish to share a rural, welcoming and exclusive place where nature meets sophistication without losing simplicity.`,
        "The property brings together two houses: the Gästehaus, which can be booked as a whole or by one of its three rooms, and Cabana Umbu, an independent stay within the gardens and the simple life of the countryside.",
      ],
    },
    highlights: [
      {
        icon: TreePine,
        title: "Rural setting",
        text: "A rural stay in Triunfo, surrounded by gardens, lake and countryside landscapes.",
      },
      {
        icon: Sparkles,
        title: "Welcoming experience",
        text: "A family-style inn designed to receive guests well in every detail.",
      },
      {
        icon: MapPin,
        title: "Refuge in Triunfo",
        text: "A calm location for those seeking rest, open air and simple countryside experiences.",
      },
    ],
    experience: {
      kicker: "Experience",
      title: "Contemplation, privacy and countryside experiences.",
      copy: "The inn was designed to welcome each guest in a unique way, valuing the countryside setting, respect for the environment and hospitality attentive to small details, with welcoming rural experiences throughout the stay.",
    },
    experienceHighlights: [
      {
        icon: Leaf,
        eyebrow: "Preserved nature",
        title: "40,000 m² of green area",
        text: "Gardens, deck, lounge and spaces under the trees for days of contemplation, silence and fresh air.",
      },
      {
        icon: Bird,
        eyebrow: "Local fauna",
        title: "A refuge for birdwatching",
        text: "The preserved area attracts species that delight guests visually and through their morning songs.",
      },
      {
        icon: Tractor,
        eyebrow: "Countryside activities",
        title: "Welcoming rural experiences",
        text: "Tractor wagon rides, trails, water slide and pond swimming can bring the stay closer to the gentle rhythm of the countryside.",
      },
      {
        icon: Heart,
        eyebrow: "Care by appointment",
        title: "Petit Spa and well-being",
        text: "Massages, Reiki, foot baths, yoga and guided meditation can be part of the stay experience.",
      },
    ],
    services: [
      { icon: Tv, label: "Smart TV" },
      { icon: Wifi, label: "Wi-Fi" },
      { icon: ParkingCircle, label: "Parking" },
      { icon: Wind, label: "Air conditioning" },
      { icon: Flame, label: "Heaters or fireplaces" },
      { icon: Coffee, label: "Rural breakfast" },
      { icon: BookOpen, label: "Book collection" },
      { icon: PawPrint, label: "Pet friendly on request" },
      { icon: Route, label: "Trails and rural experiences" },
      { icon: Waves, label: "Pond swimming" },
    ],
    galleryIntro: {
      kicker: "Gallery",
      title: "Spaces to breathe, rest and enjoy.",
      copy: "Click the photos to enlarge and discover rooms, outdoor areas, interiors, landscapes and rural experiences at the inn.",
    },
    gallery: [
      {
        src: "/images/drive-extra/fachada-dia.jpg",
        alt: "Facade of Pousada Jardins da Gästehaus during the day, surrounded by gardens",
        category: "Country house",
        fit: "contain-desktop",
      },
      { src: "/images/gallery-nature.png", alt: "Lake and sunset in the inn outdoor area", category: "Nature" },
      {
        src: "/images/drive-extra/salao-interno.jpg",
        alt: "Large indoor lounge with wooden ceiling and living area",
        category: "Interiors",
      },
      { src: "/images/gallery-bangalo.png", alt: "Lakeside bungalow", category: "Outdoor areas" },
      {
        src: "/images/drive-extra/varanda-descanso.jpg",
        alt: "Veranda with hammocks in the rural area of the inn",
        category: "Rural experiences",
      },
      {
        src: "/images/cabana-umbu/umbu4.jpeg",
        alt: "Cabana Umbu surrounded by nature, with wooden deck and hammock",
        category: "Cabana Umbu",
      },
      { src: "/images/drive-extra/fachada-noite.jpg", alt: "Lit inn facade at dusk", category: "Facade" },
      { src: "/images/gallery-casal.jpg", alt: "Double room with wooden ceiling and garden view", category: "Rooms" },
      { src: "/images/suite-amoras/amores1.jpeg", alt: "Gästehaus Suite Amoras", category: "Suite Amoras" },
      {
        src: "/images/drive-extra/gallery-romantico.jpg",
        alt: "Table set with flower, glasses and dessert for a special experience",
        category: "Experience",
      },
      { src: "/images/hero-01.png", alt: "Green area with lake for pond swimming and contemplation", category: "Pond" },
      { src: "/images/quarto-lavandas/lavanda2.jpeg", alt: "Bed prepared in a cozy accommodation", category: "Comfort" },
      { src: "/images/drive-extra/cafe-na-cama.jpg", alt: "Breakfast served in bed in one of the accommodations", category: "Breakfast" },
      {
        src: "/images/drive-extra/petit-spa.jpg",
        alt: "Outdoor massage experience in the inn gardens",
        category: "Petit Spa",
      },
      {
        src: "/images/cabana-umbu/umbu2.jpeg",
        alt: "Preserved nature near the rural accommodations",
        category: "Trails and nature",
      },
    ],
    galleryLabels: {
      close: "Close enlarged image",
      zoomIconLabel: "Enlarge photo",
    },
    accommodationsIntro: {
      kicker: "Stays",
      title: "Two houses, different ways to experience the gardens.",
      copy: "The Gästehaus is the main inn, with 3 rooms and the option to book the full house. Cabana Umbu is a second independent house, booked separately.",
    },
    stayModes: [
      {
        icon: Home,
        title: "Full Gästehaus",
        text: "The entire country house, with Rosas, Lavandas and Suite Amoras rooms, for families and groups.",
      },
      {
        icon: BedDouble,
        title: "Gästehaus rooms",
        text: "Rosas, Lavandas and Suite Amoras can also be booked individually.",
      },
      {
        icon: TreePine,
        title: "Cabana Umbu",
        text: "An independent house within the gardens, booked separately from the main inn.",
      },
    ],
    accommodations: [
      {
        group: "gastehaus",
        name: "Full Gästehaus",
        image: "/images/drive-extra/fachada-dia.jpg",
        images: accommodationImages.gastehaus,
        tag: "Entire space",
        description:
          "Exclusive booking of the country house with its 3 rooms — Rosas, Lavandas and Suite Amoras — plus shared living areas.",
        features: ["3 rooms", "Full privacy", "Exclusive shared areas"],
      },
      {
        group: "gastehaus",
        name: "Rosas Room",
        image: "/images/gallery-casal.jpg",
        images: accommodationImages.rosas,
        tag: "Couple",
        description:
          "Double room with a window facing the rose bushes and the front of the inn, ideal for a quiet stay for two.",
        features: ["Double bed", "View of the rose bushes", "Front of the inn"],
      },
      {
        group: "gastehaus",
        name: "Lavandas Room",
        image: "/images/quarto-lavandas/lavanda2.jpeg",
        images: accommodationImages.lavandas,
        tag: "Up to 4 guests",
        description:
          "Accommodation for up to 4 guests, with one double bed and two single beds. The window overlooks the lavender area.",
        features: ["1 double bed", "2 single beds", "View of the lavender area"],
      },
      {
        group: "gastehaus",
        name: "Suite Amoras",
        image: "/images/suite-amoras/amores1.jpeg",
        images: accommodationImages.amoras,
        tag: "Gästehaus suite",
        description:
          "Private suite that is part of the three Gästehaus rooms and can be booked individually or with the full house.",
        features: ["Private suite", "Individual booking", "Included in full house booking"],
      },
      {
        group: "cabana-umbu",
        name: "Cabana Umbu",
        image: "/images/drive-extra/cabana-umbu.jpg",
        images: accommodationImages.umbu,
        tag: "Independent cabin",
        description:
          "Independent accommodation from the Gästehaus, located within Jardins da Gästehaus and surrounded by nature.",
        features: ["Independent unit", "Deck with hammock", "Surrounded by greenery"],
      },
    ],
    accommodationGroups: [
      {
        id: "gastehaus",
        eyebrow: "Country house",
        title: "Gästehaus",
        description:
          "The main inn can be booked as a full house, with its 3 rooms, or by individual room: Rosas, Lavandas and Suite Amoras.",
      },
      {
        id: "cabana-umbu",
        eyebrow: "Independent stay",
        title: "Cabana Umbu",
        description: "A second house, separate from the inn, which is also part of the Jardins da Gästehaus experience.",
      },
    ],
    accommodationLabels: {
      viewPhotos: "View photos",
      viewPhotosAriaPrefix: "View photos of",
      modalAriaPrefix: "Gallery of",
      close: "Close gallery",
      previous: "Previous photo",
      next: "Next photo",
      selectPhotoPrefix: "Go to photo",
      photoOf: "of",
      consultAvailability: "Check availability",
    },
    bookingCta: {
      kicker: "Your next pause",
      title: "Plan your rest in Triunfo.",
      copy: "Tell us how many people will travel and which dates you are looking for. The inn helps you choose between the full Gästehaus, individual rooms and Cabana Umbu.",
      cta: "Check availability",
    },
    reviewsIntro: {
      kicker: "Reviews",
      title: "What guests feel when they experience the gardens.",
      copy: "The experience appears in the words of those who value warmth, silence, fresh air, nature and attentive hospitality.",
      googleCta: "See Google reviews",
      publicProfileNote: "Check the public profile for the inn's most recent reviews and information.",
      starsAria: "Five-star review",
    },
    reviews: [
      {
        quote:
          "We really liked the inn. Family atmosphere, beautiful and welcoming. Lovely garden with silence and fresh air.",
        author: "Guest report",
        source: "Public review",
      },
      {
        quote:
          "Wonderful reception and tireless hosts who do everything to please. We woke up to birds singing.",
        author: "Guest report",
        source: "Public review",
      },
      {
        quote:
          "The proposal of renting the full space as a country house delivers privacy, nature and comfort for groups.",
        author: "Experience summary",
        source: "Lodging profile",
      },
    ],
    reviewStats: [
      { value: "2", label: "houses" },
      { value: "40k m²", label: "green area" },
      { value: "Direct", label: "with the hosts" },
    ],
    location: {
      kicker: "Location",
      title: "Triunfo, RS, with calm and easy access.",
      copy: "For travelers looking for lodging in Triunfo, the inn offers a peaceful base surrounded by nature, with access to historical, cultural and gastronomic experiences in the region.",
      nearbyTitle: "What to see nearby",
      directionsCta: "Get directions",
      mapTitle: `Map showing the location of ${brand.name}`,
    },
    regionHighlights: [
      {
        title: "Historic center of Triunfo and Farroupilha Museum",
        text: "Streets, memory and architecture that help tell the city's story.",
        image: "/images/region-images/museum.jpg",
        alt: "Museum and historic center of Triunfo",
      },
      {
        title: "Meeting of the Taquari and Jacuí rivers",
        text: "A striking natural setting in Triunfo to contemplate the landscape and the rhythm of the waters.",
        image: "/images/region-images/river-meeting.jpg",
        alt: "Meeting of the Taquari and Jacuí rivers in Triunfo",
      },
      {
        title: "Fazenda Três Montes artisan cheese",
        text: "A local gastronomic experience for those who enjoy countryside flavors.",
        image: "/images/region-images/cheese.jpeg",
        alt: "Artisan cheeses from Fazenda Três Montes",
      },
      {
        title: "Milonga olive oil, produced in Triunfo",
        text: "Local production that values rural tourism and the flavors of the region.",
        image: "/images/region-images/olive-oil.jpg",
        alt: "Milonga olive oil produced in Triunfo",
      },
    ],
    contactFooter: {
      logoAlt: `${brand.name} logo`,
      title: "Plan your stay.",
      copy: "Contact the inn to ask questions, check availability or receive guidance about access.",
      whatsapp: "WhatsApp",
      email: "E-mail",
      instagram: "Instagram",
      copyright: `© 2026 ${brand.name}. Institutional website prepared for Vercel deployment.`,
    },
  },
};

export function getSiteData(locale: Locale = defaultLocale) {
  const data = dictionary[locale];
  return {
    ...data,
    contact,
    locale,
    localeInfo: localeInfo[locale],
    languageOptions: locales.map((item) => ({
      locale: item,
      href: localePath(item),
      label: localeInfo[item].label,
      name: localeInfo[item].name,
    })),
    whatsappUrl: `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(data.whatsappMessage)}`,
  };
}

export type SiteData = ReturnType<typeof getSiteData>;
