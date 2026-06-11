import Image from "next/image";
import {
  ArrowRight,
  CheckCircle,
  ExternalLink,
  Instagram,
  Mail,
  MapPinned,
  MessageCircle,
  Quote,
  Star,
} from "lucide-react";
import { HeroCarousel } from "@/components/HeroCarousel";
import { LightboxGallery } from "@/components/LightboxGallery";
import { AccommodationCards } from "@/components/AccommodationCards";
import { brand } from "@/lib/brand";
import {
  accommodationGroups,
  accommodations,
  amenities,
  contact,
  experienceHighlights,
  gallery,
  highlights,
  heroSlides,
  navItems,
  regionHighlights,
  reviews,
  reviewStats,
  services,
  stayModes,
  whatsappUrl,
} from "@/lib/site-data";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: brand.name,
    description:
      "Hospedagem em Triunfo, RS, com a casa de campo Gästehaus, quartos individuais e a Cabana Umbu independente em meio à natureza.",
    image: [
      "https://www.pousadatriunfo.com.br/images/drive-extra/fachada-noite2.png",
      "https://www.pousadatriunfo.com.br/images/drive-extra/fachada-dia.jpg",
      "https://www.pousadatriunfo.com.br/images/cabana-umbu/umbu1.jpeg",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Costa da Cadeia, 27855",
      addressLocality: "Triunfo",
      addressRegion: "RS",
      postalCode: "95840-000",
      addressCountry: "BR",
    },
    telephone: contact.phone,
    email: contact.email,
    url: "https://www.pousadatriunfo.com.br/",
    hasMap: contact.directionsUrl,
    sameAs: [contact.instagram, contact.googleReviewsUrl],
    amenityFeature: [
      "Wi-Fi",
      "Estacionamento",
      "Café da manhã rural",
      "Ar-condicionado",
      "Jardins",
    ].map((name) => ({
      "@type": "LocationFeatureSpecification",
      name,
      value: true,
    })),
  };

  return (
    <main className="min-h-screen bg-linen text-moss-900 antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Header />
      <Hero />
      <About />
      <Experience />
      <Gallery />
      <Accommodations />
      <BookingCta />
      <Reviews />
      <Location />
      <ContactFooter />

      <a
        aria-label={`Chamar a ${brand.name} no WhatsApp`}
        className="fixed bottom-5 right-5 z-40 inline-flex size-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-[0_18px_45px_rgba(79,159,112,0.32)] transition hover:scale-105 hover:bg-whatsapp-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-moss-900"
        href={whatsappUrl}
        rel="noreferrer"
        target="_blank"
      >
        <MessageCircle aria-hidden className="size-7" />
      </a>
    </main>
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/45 bg-[rgba(252,235,221,0.64)] text-moss-700 shadow-[0_10px_28px_rgba(90,58,34,0.08)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6 lg:px-8">
        <a className="flex items-center gap-3" href="#inicio" aria-label={brand.name}>
          <span className="relative size-14 overflow-hidden rounded-full bg-white shadow-soft ring-1 ring-moss-500/18">
            <Image
              src={brand.logos.header}
              alt=""
              fill
              sizes="56px"
              className="object-contain p-1.5"
            />
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-extrabold tracking-[0.18em] text-clay">
              POUSADA
            </span>
            <span className="block font-display text-lg font-semibold text-moss-700 sm:text-xl">
              {brand.shortName}
            </span>
          </span>
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              className="text-sm font-bold text-moss-700 transition hover:text-clay focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-clay"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          className="hidden items-center gap-2 rounded-full bg-marigold/85 px-5 py-2.5 text-sm font-semibold text-moss-900 shadow-soft ring-1 ring-white/40 transition hover:bg-marigold sm:inline-flex"
          href={whatsappUrl}
          rel="noreferrer"
          target="_blank"
        >
          <MessageCircle aria-hidden className="size-4" />
          Consultar datas
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative min-h-[94svh] scroll-mt-24 overflow-hidden bg-moss-900 text-white">
      <HeroCarousel desktopSlides={heroSlides.desktop} mobileSlides={heroSlides.mobile} />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(45,29,18,0.92)_0%,rgba(45,29,18,0.76)_34%,rgba(45,29,18,0.42)_67%,rgba(45,29,18,0.22)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_46%,rgba(0,0,0,0.28),transparent_42%)]" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-linen via-linen/72 to-transparent" />

      <div className="relative mx-auto flex min-h-[94svh] max-w-7xl flex-col justify-end px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pb-24">
        <div className="max-w-5xl">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/22 bg-moss-900/76 px-4 py-2 text-sm font-semibold text-white shadow-soft backdrop-blur">
            <Star aria-hidden className="size-4 fill-marigold" />
            Casa de campo e cabana em Triunfo, RS
          </p>
          <h1 className="font-display text-4xl leading-[0.98] text-balance drop-shadow-[0_4px_18px_rgba(0,0,0,0.38)] sm:text-6xl lg:text-7xl">
            {brand.name}
          </h1>
          <p className="mt-7 max-w-2xl text-lg font-medium leading-8 text-white/92 drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)] sm:text-xl">
            Duas casas em 40 mil m² de área verde: a Gästehaus, inteira ou por quarto, e a
            Cabana Umbu independente para viver Triunfo com calma e privacidade.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex items-center justify-center gap-2 rounded-full bg-marigold px-7 py-4 text-sm font-semibold tracking-[0.02em] text-moss-900 shadow-soft transition hover:-translate-y-0.5 hover:bg-moss-100"
              href={whatsappUrl}
              rel="noreferrer"
              target="_blank"
            >
              Solicitar disponibilidade
              <ArrowRight aria-hidden className="size-4" />
            </a>
            <a
              className="inline-flex items-center justify-center rounded-full border border-white/45 bg-white/8 px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white backdrop-blur transition hover:-translate-y-0.5 hover:border-marigold hover:bg-white/14 hover:text-marigold"
              href="#acomodacoes"
            >
              Conhecer acomodações
            </a>
          </div>
        </div>

        <div className="mt-16 grid max-w-6xl grid-cols-2 gap-x-6 gap-y-5 border-y border-white/20 py-5 sm:grid-cols-3 lg:grid-cols-6 lg:rounded-[8px] lg:border-white/12 lg:bg-moss-900/62 lg:px-5 lg:shadow-soft lg:backdrop-blur-md">
          {amenities.map((item) => (
            <div
              className="flex min-w-0 items-center gap-3 text-sm font-bold leading-tight text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.55)]"
              key={item.label}
            >
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-marigold/22 text-marigold lg:bg-marigold/28">
                <item.icon aria-hidden className="size-4" />
              </span>
              <span className="min-w-0 break-words">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="scroll-mt-24 bg-linen py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
        <div>
          <p className="section-kicker">Sobre a pousada</p>
          <h2 className="section-title">Um refúgio de família para família.</h2>
          <p className="section-copy mt-7">
            Em Triunfo, entre jardins, lago e o ritmo calmo do interior, a {brand.name}{" "}
            nasceu do desejo de compartilhar um lugar único, acolhedor e exclusivo, onde a
            natureza encontra a sofisticação sem deixar a simplicidade.
          </p>
          <p className="mt-5 max-w-2xl leading-8 text-moss-700">
            O espaço reúne duas casas: a Gästehaus, que pode ser reservada inteira ou por um de seus
            três quartos, e a Cabana Umbu, uma hospedagem independente dentro dos jardins.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-3">
          {highlights.map((item) => (
            <article
              className="rounded-[8px] border border-moss-500/10 bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:bg-white/82"
              key={item.title}
            >
              <span className="inline-flex size-11 items-center justify-center rounded-full bg-marigold/32 text-clay">
                <item.icon aria-hidden className="size-6" />
              </span>
              <h3 className="mt-7 font-display text-2xl leading-tight text-moss-900">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-moss-700">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experiencia" className="scroll-mt-24 bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <div>
            <p className="section-kicker">Experiência</p>
            <h2 className="section-title">Contemplação, privacidade e charme em meio aos jardins.</h2>
          </div>
          <p className="section-copy lg:pb-2">
            A pousada foi pensada para receber cada hóspede de maneira única, valorizando as
            características locais, o respeito ao meio ambiente e uma hospitalidade atenta aos
            pequenos detalhes.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {experienceHighlights.map((item) => (
            <article
              className="rounded-[8px] border border-moss-500/10 bg-linen/70 p-7 shadow-soft"
              key={item.title}
            >
              <span className="inline-flex size-12 items-center justify-center rounded-full bg-marigold/30 text-clay">
                <item.icon aria-hidden className="size-6" />
              </span>
              <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.18em] text-clay">
                {item.eyebrow}
              </p>
              <h3 className="mt-3 font-display text-3xl leading-tight text-moss-900">{item.title}</h3>
              <p className="mt-4 leading-7 text-moss-700">{item.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-[8px] border border-clay/12 bg-[rgba(252,235,221,0.72)] p-6 text-moss-700 shadow-[0_18px_55px_rgba(95,70,48,0.08)] backdrop-blur-sm sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((item) => (
              <div className="flex items-center gap-3" key={item.label}>
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-white/58 text-clay ring-1 ring-clay/10">
                  <item.icon aria-hidden className="size-5" />
                </span>
                <span className="text-sm font-semibold leading-snug text-moss-700">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="galeria" className="scroll-mt-24 bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="section-kicker">Galeria</p>
            <h2 className="section-title">Espaços para respirar, descansar e aproveitar.</h2>
          </div>
          <p className="max-w-md text-base leading-8 text-moss-700">
            Clique nas fotos para ampliar e conhecer quartos, áreas externas, interiores e
            paisagens da pousada.
          </p>
        </div>

        <LightboxGallery items={gallery} />
      </div>
    </section>
  );
}

function Accommodations() {
  return (
    <section id="acomodacoes" className="scroll-mt-24 bg-moss-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="section-kicker justify-center">Acomodações</p>
          <h2 className="section-title mx-auto">
            Duas casas, diferentes formas de viver os jardins.
          </h2>
          <p className="section-copy mx-auto mt-6">
            A Gästehaus é a pousada principal, com 3 quartos e opção de locação completa. A Cabana
            Umbu é uma segunda casa independente, reservada separadamente.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {stayModes.map((mode) => (
            <article
              className="rounded-[8px] border border-moss-500/10 bg-white p-6 shadow-[0_12px_35px_rgba(90,58,34,0.06)]"
              key={mode.title}
            >
              <span className="inline-flex size-11 items-center justify-center rounded-full bg-marigold/30 text-clay">
                <mode.icon aria-hidden className="size-5" />
              </span>
              <h3 className="mt-5 font-display text-2xl leading-tight text-moss-900">{mode.title}</h3>
              <p className="mt-3 text-sm leading-7 text-moss-700">{mode.text}</p>
            </article>
          ))}
        </div>

        <AccommodationCards
          accommodations={accommodations}
          groups={accommodationGroups}
          whatsappUrl={whatsappUrl}
        />
      </div>
    </section>
  );
}

function BookingCta() {
  return (
    <section className="bg-[rgba(234,205,180,0.62)] py-16 sm:py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="max-w-3xl">
          <p className="section-kicker">Sua próxima pausa</p>
          <h2 className="font-display text-4xl leading-tight text-moss-900 sm:text-5xl">
            Planeje seu descanso em Triunfo.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-moss-700 sm:text-lg">
            Conte quantas pessoas irão viajar e quais datas você procura. A pousada ajuda a escolher
            entre a Gästehaus completa, os quartos individuais e a Cabana Umbu.
          </p>
        </div>
        <a
          className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-full bg-marigold px-7 py-4 text-sm font-semibold text-moss-900 shadow-soft transition hover:-translate-y-0.5 hover:bg-moss-100 lg:self-auto"
          href={whatsappUrl}
          rel="noreferrer"
          target="_blank"
        >
          Solicitar disponibilidade
          <ArrowRight aria-hidden className="size-4" />
        </a>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section id="avaliacoes" className="scroll-mt-24 bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="section-kicker">Avaliações</p>
            <h2 className="section-title">O que os hóspedes sentem quando vivem os jardins.</h2>
            <p className="section-copy mt-7">
              A experiência aparece nas palavras de quem valoriza acolhimento, silêncio, ar puro,
              natureza e uma recepção feita com atenção.
            </p>
            <div className="mt-10 divide-y divide-clay/10 border-y border-clay/12 py-1 sm:grid sm:grid-cols-3 sm:divide-y-0 sm:py-5">
              {reviewStats.map((item) => (
                <div
                  className="flex items-baseline justify-between gap-5 py-4 sm:flex-col sm:items-center sm:justify-start sm:gap-2 sm:py-0 sm:text-center"
                  key={item.label}
                >
                  <strong className="order-2 block shrink-0 font-display text-2xl leading-none text-clay sm:order-1 sm:text-3xl">
                    {item.value}
                  </strong>
                  <span className="order-1 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-moss-500/80 sm:order-2">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
            <a
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-marigold/85 px-6 py-3 text-sm font-semibold tracking-[0.02em] text-moss-900 shadow-soft ring-1 ring-white/40 transition hover:-translate-y-0.5 hover:bg-marigold"
              href={contact.googleReviewsUrl}
              rel="noreferrer"
              target="_blank"
            >
              Ver avaliações no Google
              <ExternalLink aria-hidden className="size-4" />
            </a>
            <p className="mt-4 max-w-md text-sm leading-6 text-moss-500">
              Consulte no perfil público as avaliações e informações mais recentes da pousada.
            </p>
          </div>

          <div className="grid gap-5">
            {reviews.map((review) => (
              <article
                className="rounded-[8px] border border-moss-500/10 bg-linen/55 p-7 shadow-soft"
                key={review.quote}
              >
                <div className="flex items-center justify-between gap-4">
                  <Quote aria-hidden className="size-8 text-clay" />
                  <div className="flex gap-1 text-marigold" aria-label="Avaliação cinco estrelas">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star aria-hidden className="size-4 fill-marigold" key={index} />
                    ))}
                  </div>
                </div>
                <p className="mt-6 font-display text-2xl leading-snug text-moss-900">
                  “{review.quote}”
                </p>
                <p className="mt-5 text-sm font-bold uppercase tracking-[0.14em] text-moss-700">
                  {review.author} · {review.source}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Location() {
  return (
    <section id="localizacao" className="scroll-mt-24 bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <p className="section-kicker">Localização</p>
          <h2 className="section-title">Triunfo, RS, com tranquilidade e fácil acesso.</h2>
          <div className="mt-9 space-y-5 text-moss-700">
            <p className="flex gap-3 leading-7">
              <MapPinned aria-hidden className="mt-1 size-5 shrink-0 text-lavender" />
              <span>{contact.address}</span>
            </p>
            <p className="leading-7">
              Para quem procura hospedagem em Triunfo, a pousada oferece uma base tranquila em meio
              à natureza, com acesso às experiências históricas, culturais e gastronômicas da região.
            </p>
          </div>
          <h3 className="mt-8 font-display text-2xl text-moss-900">O que conhecer por perto</h3>
          <ul className="mt-7 space-y-3">
            {regionHighlights.map((item) => (
              <li className="flex gap-3 text-sm font-semibold text-moss-700" key={item}>
                <CheckCircle aria-hidden className="mt-0.5 size-4 shrink-0 text-clay" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-clay px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-moss-700"
            href={contact.directionsUrl}
            rel="noreferrer"
            target="_blank"
          >
            Como chegar
            <ArrowRight aria-hidden className="size-4" />
          </a>
        </div>

        <div className="self-start overflow-hidden rounded-[8px] border border-moss-500/10 bg-white shadow-soft">
          <iframe
            className="h-[420px] w-full border-0 sm:h-[520px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={contact.mapUrl}
            title={`Mapa com a localização da ${brand.name}`}
          />
        </div>
      </div>
    </section>
  );
}

function ContactFooter() {
  return (
    <footer id="contato" className="scroll-mt-24 bg-moss-50 text-moss-900">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:px-8">
        <div>
          <Image
            src={brand.logos.footer}
            alt={`Logo da ${brand.name}`}
            width={168}
            height={168}
            className="rounded-[8px] bg-linen/70 p-3 shadow-soft ring-1 ring-moss-500/10 mix-blend-multiply"
          />
          <h2 className="mt-9 font-display text-5xl leading-tight text-moss-900">Planeje sua estadia.</h2>
          <p className="mt-5 max-w-lg leading-8 text-moss-700">
            Fale com a pousada para tirar dúvidas, consultar disponibilidade ou receber
            orientações sobre acesso.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <ContactLink
            href={whatsappUrl}
            icon={MessageCircle}
            label="WhatsApp"
            value={contact.phone}
            external
          />
          <ContactLink href={`mailto:${contact.email}`} icon={Mail} label="E-mail" value={contact.email} />
          <ContactLink
            href={contact.instagram}
            icon={Instagram}
            label="Instagram"
            value="@pousadajardinsgastehaus"
            external
          />
        </div>
      </div>
      <div className="border-t border-moss-500/10 px-4 py-7 text-center text-sm text-moss-700">
        © 2026 {brand.name}. Site institucional preparado para deploy na Vercel.
      </div>
    </footer>
  );
}

function ContactLink({
  external,
  href,
  icon: Icon,
  label,
  value,
}: {
  external?: boolean;
  href: string;
  icon: typeof MessageCircle;
  label: string;
  value: string;
}) {
  return (
    <a
      className="rounded-[8px] border border-moss-500/14 bg-white p-6 shadow-[0_12px_35px_rgba(90,58,34,0.06)] transition hover:-translate-y-1 hover:border-clay/35 hover:bg-white/70"
      href={href}
      rel={external ? "noreferrer" : undefined}
      target={external ? "_blank" : undefined}
    >
      <span className="inline-flex size-11 items-center justify-center rounded-full bg-marigold/30 text-clay">
        <Icon aria-hidden className="size-5" />
      </span>
      <span className="mt-5 block text-sm font-bold uppercase tracking-[0.14em] text-moss-500">
        {label}
      </span>
      <span className="mt-2 block break-words text-lg font-semibold text-moss-900">{value}</span>
    </a>
  );
}
