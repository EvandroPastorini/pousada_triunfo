import Image from "next/image";
import {
  ArrowRight,
  Instagram,
  Mail,
  MapPinned,
  MessageCircle,
  Phone,
  Star,
} from "lucide-react";
import { LightboxGallery } from "@/components/LightboxGallery";
import {
  accommodations,
  amenities,
  contact,
  gallery,
  highlights,
  navItems,
  whatsappUrl,
} from "@/lib/site-data";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: "Pousada Triunfo",
    image: "/images/hero-01.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Costa da Cadeia, S/N",
      addressLocality: "Triunfo",
      addressRegion: "RS",
      postalCode: "95840-000",
      addressCountry: "BR",
    },
    telephone: contact.phone,
    email: contact.email,
    url: "https://www.pousadatriunfo.com.br/br/",
  };

  return (
    <main className="min-h-screen bg-linen text-moss-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Header />
      <Hero />
      <About />
      <Gallery />
      <Accommodations />
      <Location />
      <ContactFooter />

      <a
        aria-label="Chamar a Pousada Triunfo no WhatsApp"
        className="fixed bottom-5 right-5 z-40 inline-flex size-14 items-center justify-center rounded-full bg-[#4faa72] text-white shadow-[0_16px_40px_rgba(79,170,114,0.28)] transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-moss-900"
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
    <header className="fixed inset-x-0 top-0 z-40 border-b border-moss-500/18 bg-[#fcebdd]/96 text-moss-700 shadow-[0_12px_36px_rgba(90,58,34,0.14)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a className="flex items-center gap-3" href="#inicio" aria-label="Pousada Triunfo">
          <span className="relative size-14 overflow-hidden rounded-full bg-white shadow-soft ring-1 ring-moss-500/18">
            <Image
              src="/images/logo-old.png"
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
            <span className="block font-display text-xl font-semibold text-moss-700">Triunfo</span>
          </span>
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              className="text-sm font-bold text-moss-700 transition hover:text-clay"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          className="hidden items-center gap-2 rounded-full bg-marigold px-5 py-2.5 text-sm font-extrabold text-moss-700 shadow-soft ring-1 ring-moss-500/10 transition hover:bg-moss-100 sm:inline-flex"
          href={whatsappUrl}
          rel="noreferrer"
          target="_blank"
        >
          <MessageCircle aria-hidden className="size-4" />
          WhatsApp
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative min-h-[92svh] overflow-hidden bg-moss-900 text-white">
      <Image
        src="/images/hero-01.png"
        alt="Pôr do sol sobre lago e jardins na Pousada Triunfo"
        fill
        fetchPriority="high"
        loading="eager"
        sizes="(max-width: 1023px) 100vw, 0px"
        className="object-cover lg:hidden"
      />
      <Image
        src="/images/gallery-casal.jpg"
        alt="Quarto de casal aconchegante da Pousada Triunfo"
        fill
        fetchPriority="high"
        loading="eager"
        sizes="(min-width: 1024px) 100vw, 0px"
        className="hidden object-cover object-center lg:block"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-moss-900/90 via-moss-900/56 to-moss-900/18" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-linen to-transparent" />

      <div className="relative mx-auto flex min-h-[92svh] max-w-7xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-24">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-moss-900/70 px-4 py-2 text-sm font-semibold text-white shadow-soft backdrop-blur">
            <Star aria-hidden className="size-4 fill-marigold" />
            Hospedagem acolhedora em Triunfo, RS
          </p>
          <h1 className="font-display text-5xl leading-none text-balance sm:text-7xl lg:text-8xl">
            Pousada Triunfo
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/88 sm:text-xl">
            Conforto, natureza e a calma de uma pousada familiar para criar memórias em uma
            cidade que respira história e tranquilidade.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex items-center justify-center gap-2 rounded-full bg-marigold px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] text-moss-900 transition hover:bg-white"
              href={whatsappUrl}
              rel="noreferrer"
              target="_blank"
            >
              Falar no WhatsApp
              <ArrowRight aria-hidden className="size-4" />
            </a>
            <a
              className="inline-flex items-center justify-center rounded-full border border-white/35 px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:border-marigold hover:text-marigold"
              href="#galeria"
            >
              Ver fotos
            </a>
          </div>
        </div>

        <div className="mt-14 grid max-w-6xl grid-cols-2 gap-x-6 gap-y-5 border-y border-white/20 py-5 sm:grid-cols-3 lg:grid-cols-6 lg:rounded-[8px] lg:border-white/10 lg:bg-moss-900/46 lg:px-5 lg:shadow-soft lg:backdrop-blur-md">
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
    <section id="sobre" className="bg-linen py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div>
          <p className="section-kicker">Sobre a pousada</p>
          <h2 className="section-title">Um refúgio de família para família.</h2>
          <p className="mt-6 text-lg leading-8 text-moss-700">
            Em Triunfo, entre jardins, lago e o ritmo calmo do interior, a Pousada Triunfo
            recebe hóspedes que procuram descanso com conforto e uma experiência mais próxima,
            humana e sensorial.
          </p>
          <p className="mt-5 leading-8 text-moss-700">
            A proposta é simples e valiosa: acordar cercado pelo verde, aproveitar ambientes
            acolhedores e voltar para casa com a sensação de ter vivido dias leves, bem cuidados
            e memoráveis.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {highlights.map((item) => (
            <article className="rounded-[8px] bg-white p-6 shadow-soft" key={item.title}>
              <item.icon aria-hidden className="size-8 text-lavender" />
              <h3 className="mt-6 font-display text-2xl text-moss-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-moss-700">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="galeria" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="section-kicker">Galeria</p>
            <h2 className="section-title">Espaços para respirar, descansar e aproveitar.</h2>
          </div>
          <p className="max-w-md leading-7 text-moss-700">
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
    <section id="acomodacoes" className="bg-moss-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-kicker justify-center">Acomodações</p>
          <h2 className="section-title">Conforto essencial, visual acolhedor e contato com o verde.</h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {accommodations.map((room) => (
            <article className="overflow-hidden rounded-[8px] bg-white shadow-soft" key={room.name}>
              <div className="relative aspect-[4/3]">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-3xl text-moss-900">{room.name}</h3>
                <p className="mt-3 leading-7 text-moss-700">{room.description}</p>
                <a
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.12em] text-clay transition hover:text-lavender"
                  href={whatsappUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  Consultar disponibilidade
                  <ArrowRight aria-hidden className="size-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Location() {
  return (
    <section id="localizacao" className="bg-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <p className="section-kicker">Localização</p>
          <h2 className="section-title">Triunfo, RS, com tranquilidade e fácil acesso.</h2>
          <div className="mt-8 space-y-5 text-moss-700">
            <p className="flex gap-3 leading-7">
              <MapPinned aria-hidden className="mt-1 size-5 shrink-0 text-lavender" />
              <span>{contact.address}</span>
            </p>
            <p className="leading-7">
              A pousada fica em uma área calma, ideal para quem busca descanso, natureza e um
              ponto de apoio confortável em Triunfo.
            </p>
          </div>
          <a
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-moss-900 px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-clay"
            href={contact.directionsUrl}
            rel="noreferrer"
            target="_blank"
          >
            Abrir rotas
            <ArrowRight aria-hidden className="size-4" />
          </a>
        </div>

        <div className="overflow-hidden rounded-[8px] shadow-soft">
          <iframe
            className="h-[420px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={contact.mapUrl}
            title="Mapa com a localização da Pousada Triunfo"
          />
        </div>
      </div>
    </section>
  );
}

function ContactFooter() {
  return (
    <footer id="contato" className="bg-moss-50 text-moss-900">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:px-8">
        <div>
          <Image
            src="/images/logo-old.png"
            alt="Logo da Pousada Triunfo"
            width={168}
            height={168}
            className="rounded-[8px] bg-linen/70 p-3 shadow-soft ring-1 ring-moss-500/10 mix-blend-multiply"
          />
          <h2 className="mt-8 font-display text-4xl">Planeje sua estadia.</h2>
          <p className="mt-4 max-w-lg leading-7 text-moss-700">
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
          <ContactLink href={`tel:${contact.mobile}`} icon={Phone} label="Telefone" value={contact.mobile} />
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
      <div className="border-t border-moss-500/10 px-4 py-6 text-center text-sm text-moss-700">
        © 2026 Pousada Triunfo. Site institucional preparado para deploy na Vercel.
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
      className="rounded-[8px] border border-moss-500/14 bg-white/38 p-5 shadow-[0_12px_35px_rgba(90,58,34,0.06)] transition hover:border-clay/35 hover:bg-white/58"
      href={href}
      rel={external ? "noreferrer" : undefined}
      target={external ? "_blank" : undefined}
    >
      <Icon aria-hidden className="size-6 text-marigold" />
      <span className="mt-5 block text-sm font-bold uppercase tracking-[0.14em] text-moss-500">
        {label}
      </span>
      <span className="mt-2 block break-words text-lg font-semibold text-moss-900">{value}</span>
    </a>
  );
}
