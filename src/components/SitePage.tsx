import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
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
import { getSiteData, type Locale, type SiteData } from "@/lib/site-data";

export function SitePage({ locale }: { locale: Locale }) {
  const data = getSiteData(locale);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: brand.name,
    description: data.structuredData.description,
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
    telephone: data.contact.phone,
    email: data.contact.email,
    url: "https://www.pousadatriunfo.com.br/",
    hasMap: data.contact.directionsUrl,
    sameAs: [data.contact.instagram, data.contact.googleReviewsUrl],
    amenityFeature: data.structuredData.amenities.map((name) => ({
      "@type": "LocationFeatureSpecification",
      name,
      value: true,
    })),
  };

  return (
    <main className="min-h-screen bg-linen text-moss-900 antialiased" lang={data.localeInfo.htmlLang}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Header data={data} />
      <Hero data={data} />
      <About data={data} />
      <Experience data={data} />
      <Gallery data={data} />
      <Accommodations data={data} />
      <BookingCta data={data} />
      <Reviews data={data} />
      <Location data={data} />
      <ContactFooter data={data} />

      <a
        aria-label={data.floatingWhatsAppAria}
        className="fixed bottom-5 right-5 z-40 inline-flex size-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-[0_18px_45px_rgba(79,159,112,0.32)] transition hover:scale-105 hover:bg-whatsapp-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-moss-900"
        href={data.whatsappUrl}
        rel="noreferrer"
        target="_blank"
      >
        <MessageCircle aria-hidden className="size-7" />
      </a>
    </main>
  );
}

function Header({ data }: { data: SiteData }) {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/45 bg-[rgba(252,235,221,0.64)] text-moss-700 shadow-[0_10px_28px_rgba(90,58,34,0.08)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2.5 sm:gap-4 sm:px-6 sm:py-3.5 lg:px-8">
        <a className="flex min-w-0 items-center gap-3" href="#inicio" aria-label={brand.name}>
          <span className="relative size-12 shrink-0 overflow-hidden rounded-full bg-white shadow-soft ring-1 ring-moss-500/18 sm:size-14">
            <Image
              src={brand.logos.header}
              alt=""
              fill
              sizes="(min-width: 640px) 56px, 48px"
              className="object-contain p-1.5"
            />
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block text-xs font-extrabold tracking-[0.18em] text-clay sm:text-sm">
              {data.header.brandLabel}
            </span>
            <span className="block truncate font-display text-base font-semibold text-moss-700 sm:text-xl">
              {brand.shortName}
            </span>
          </span>
        </a>

        <nav aria-label={data.header.navAria} className="hidden items-center gap-8 md:flex">
          {data.navItems.map((item) => (
            <a
              className="text-sm font-bold text-moss-700 transition hover:text-clay focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-clay"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <details className="relative sm:hidden">
            <summary className="flex cursor-pointer list-none rounded-full bg-white/62 px-2.5 py-1.5 text-xs font-bold text-clay ring-1 ring-clay/12 transition hover:bg-white [&::-webkit-details-marker]:hidden">
              {data.localeInfo.label}
            </summary>
            <div
              aria-label={data.header.languageAria}
              className="absolute right-0 mt-2 grid min-w-20 gap-1 rounded-[8px] bg-white p-1.5 shadow-soft ring-1 ring-clay/12"
              role="navigation"
            >
              {data.languageOptions.map((option) => (
                <Link
                  className={`rounded-[6px] px-3 py-1.5 text-center text-xs font-bold transition ${
                    option.locale === data.locale
                      ? "bg-clay text-white"
                      : "text-moss-700 hover:bg-linen hover:text-clay"
                  }`}
                  href={option.href}
                  key={option.locale}
                  title={option.name}
                >
                  {option.label}
                </Link>
              ))}
            </div>
          </details>
          <div
            aria-label={data.header.languageAria}
            className="hidden rounded-full bg-white/52 p-1 ring-1 ring-clay/12 sm:flex"
            role="navigation"
          >
            {data.languageOptions.map((option) => (
              <Link
                className={`rounded-full px-2 py-1 text-xs font-bold transition sm:px-2.5 ${
                  option.locale === data.locale
                    ? "bg-clay text-white"
                    : "text-moss-700 hover:bg-white hover:text-clay"
                }`}
                href={option.href}
                key={option.locale}
                title={option.name}
              >
                {option.label}
              </Link>
            ))}
          </div>
          <a
            className="hidden items-center gap-2 rounded-full bg-marigold/85 px-5 py-2.5 text-sm font-semibold text-moss-900 shadow-soft ring-1 ring-white/40 transition hover:bg-marigold sm:inline-flex"
            href={data.whatsappUrl}
            rel="noreferrer"
            target="_blank"
          >
            <MessageCircle aria-hidden className="size-4" />
            {data.header.cta}
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero({ data }: { data: SiteData }) {
  return (
    <section id="inicio" className="relative min-h-[94svh] scroll-mt-24 overflow-hidden bg-moss-900 text-white">
      <HeroCarousel desktopSlides={data.heroSlides.desktop} mobileSlides={data.heroSlides.mobile} />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(45,29,18,0.92)_0%,rgba(45,29,18,0.76)_34%,rgba(45,29,18,0.42)_67%,rgba(45,29,18,0.22)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_46%,rgba(0,0,0,0.28),transparent_42%)]" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-linen via-linen/72 to-transparent" />

      <div className="relative mx-auto flex min-h-[94svh] max-w-7xl flex-col justify-end px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pb-24">
        <div className="max-w-5xl">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/22 bg-moss-900/76 px-4 py-2 text-sm font-semibold text-white shadow-soft backdrop-blur">
            <Star aria-hidden className="size-4 fill-marigold" />
            {data.hero.badge}
          </p>
          <h1 className="font-display text-4xl leading-[0.98] text-balance drop-shadow-[0_4px_18px_rgba(0,0,0,0.38)] sm:text-6xl lg:text-7xl">
            {brand.name}
          </h1>
          <p className="mt-7 max-w-2xl text-lg font-medium leading-8 text-white/92 drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)] sm:text-xl">
            {data.hero.text}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex items-center justify-center gap-2 rounded-full bg-marigold px-7 py-4 text-sm font-semibold tracking-[0.02em] text-moss-900 shadow-soft transition hover:-translate-y-0.5 hover:bg-moss-100"
              href={data.whatsappUrl}
              rel="noreferrer"
              target="_blank"
            >
              {data.hero.primaryCta}
              <ArrowRight aria-hidden className="size-4" />
            </a>
            <a
              className="inline-flex items-center justify-center rounded-full border border-white/45 bg-white/8 px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white backdrop-blur transition hover:-translate-y-0.5 hover:border-marigold hover:bg-white/14 hover:text-marigold"
              href="#acomodacoes"
            >
              {data.hero.secondaryCta}
            </a>
          </div>
        </div>

        <div className="mt-16 grid max-w-6xl grid-cols-2 gap-x-6 gap-y-5 border-y border-white/20 py-5 sm:grid-cols-3 lg:grid-cols-6 lg:rounded-[8px] lg:border-white/12 lg:bg-moss-900/62 lg:px-5 lg:shadow-soft lg:backdrop-blur-md">
          {data.amenities.map((item) => (
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

function About({ data }: { data: SiteData }) {
  return (
    <section id="sobre" className="scroll-mt-24 bg-linen py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
        <div>
          <p className="section-kicker">{data.about.kicker}</p>
          <h2 className="section-title">{data.about.title}</h2>
          {data.about.copy.map((paragraph, index) => (
            <p
              className={index === 0 ? "section-copy mt-7" : "mt-5 max-w-2xl leading-8 text-moss-700"}
              key={paragraph}
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="grid gap-5 sm:grid-cols-3">
          {data.highlights.map((item) => (
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

function Experience({ data }: { data: SiteData }) {
  return (
    <section id="experiencia" className="scroll-mt-24 bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <div>
            <p className="section-kicker">{data.experience.kicker}</p>
            <h2 className="section-title">
              {data.experience.title}
            </h2>
          </div>
          <p className="section-copy lg:pb-2">
            {data.experience.copy}
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {data.experienceHighlights.map((item) => (
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
            {data.services.map((item) => (
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

function Gallery({ data }: { data: SiteData }) {
  return (
    <section id="galeria" className="scroll-mt-24 bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="section-kicker">{data.galleryIntro.kicker}</p>
            <h2 className="section-title">{data.galleryIntro.title}</h2>
          </div>
          <p className="max-w-md text-base leading-8 text-moss-700">
            {data.galleryIntro.copy}
          </p>
        </div>

        <LightboxGallery items={data.gallery} labels={data.galleryLabels} />
      </div>
    </section>
  );
}

function Accommodations({ data }: { data: SiteData }) {
  return (
    <section id="acomodacoes" className="scroll-mt-24 bg-moss-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="section-kicker justify-center">{data.accommodationsIntro.kicker}</p>
          <h2 className="section-title mx-auto">{data.accommodationsIntro.title}</h2>
          <p className="section-copy mx-auto mt-6">
            {data.accommodationsIntro.copy}
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {data.stayModes.map((mode) => (
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
          accommodations={data.accommodations}
          groups={data.accommodationGroups}
          labels={data.accommodationLabels}
          whatsappUrl={data.whatsappUrl}
        />
      </div>
    </section>
  );
}

function BookingCta({ data }: { data: SiteData }) {
  return (
    <section className="bg-[rgba(234,205,180,0.62)] py-16 sm:py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="max-w-3xl">
          <p className="section-kicker">{data.bookingCta.kicker}</p>
          <h2 className="font-display text-4xl leading-tight text-moss-900 sm:text-5xl">
            {data.bookingCta.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-moss-700 sm:text-lg">
            {data.bookingCta.copy}
          </p>
        </div>
        <a
          className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-full bg-marigold px-7 py-4 text-sm font-semibold text-moss-900 shadow-soft transition hover:-translate-y-0.5 hover:bg-moss-100 lg:self-auto"
          href={data.whatsappUrl}
          rel="noreferrer"
          target="_blank"
        >
          {data.bookingCta.cta}
          <ArrowRight aria-hidden className="size-4" />
        </a>
      </div>
    </section>
  );
}

function Reviews({ data }: { data: SiteData }) {
  return (
    <section id="avaliacoes" className="scroll-mt-24 bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="section-kicker">{data.reviewsIntro.kicker}</p>
            <h2 className="section-title">{data.reviewsIntro.title}</h2>
            <p className="section-copy mt-7">
              {data.reviewsIntro.copy}
            </p>
            <div className="mt-10 divide-y divide-clay/10 border-y border-clay/12 py-1 sm:grid sm:grid-cols-3 sm:divide-y-0 sm:py-5">
              {data.reviewStats.map((item) => (
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
              href={data.contact.googleReviewsUrl}
              rel="noreferrer"
              target="_blank"
            >
              {data.reviewsIntro.googleCta}
              <ExternalLink aria-hidden className="size-4" />
            </a>
            <p className="mt-4 max-w-md text-sm leading-6 text-moss-500">
              {data.reviewsIntro.publicProfileNote}
            </p>
          </div>

          <div className="grid gap-5">
            {data.reviews.map((review) => (
              <article
                className="rounded-[8px] border border-moss-500/10 bg-linen/55 p-7 shadow-soft"
                key={review.quote}
              >
                <div className="flex items-center justify-between gap-4">
                  <Quote aria-hidden className="size-8 text-clay" />
                  <div className="flex gap-1 text-marigold" aria-label={data.reviewsIntro.starsAria}>
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

function Location({ data }: { data: SiteData }) {
  return (
    <section id="localizacao" className="scroll-mt-24 bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <p className="section-kicker">{data.location.kicker}</p>
          <h2 className="section-title">{data.location.title}</h2>
          <div className="mt-9 space-y-5 text-moss-700">
            <p className="flex gap-3 leading-7">
              <MapPinned aria-hidden className="mt-1 size-5 shrink-0 text-lavender" />
              <span>{data.contact.address}</span>
            </p>
            <p className="leading-7">
              {data.location.copy}
            </p>
          </div>
          <h3 className="mt-8 font-display text-2xl text-moss-900">{data.location.nearbyTitle}</h3>
          <div className="mt-6 grid gap-4">
            {data.regionHighlights.map((item) => (
              <article
                className="overflow-hidden rounded-[8px] border border-moss-500/10 bg-linen/55 shadow-[0_14px_34px_rgba(90,58,34,0.08)] sm:grid sm:grid-cols-[128px_1fr]"
                key={item.title}
              >
                <div className="relative aspect-[16/9] sm:aspect-auto sm:min-h-32">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 640px) 128px, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-moss-900/38 to-transparent" />
                </div>
                <div className="p-4">
                  <h4 className="font-display text-2xl leading-tight text-moss-900">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-sm leading-6 text-moss-700">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
          <a
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-clay px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-moss-700"
            href={data.contact.directionsUrl}
            rel="noreferrer"
            target="_blank"
          >
            {data.location.directionsCta}
            <ArrowRight aria-hidden className="size-4" />
          </a>
        </div>

        <div className="self-start overflow-hidden rounded-[8px] border border-moss-500/10 bg-white shadow-soft">
          <iframe
            className="h-[420px] w-full border-0 sm:h-[520px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={data.contact.mapUrl}
            title={data.location.mapTitle}
          />
        </div>
      </div>
    </section>
  );
}

function ContactFooter({ data }: { data: SiteData }) {
  return (
    <footer id="contato" className="scroll-mt-24 bg-moss-50 text-moss-900">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:px-8">
        <div>
          <Image
            src={brand.logos.footer}
            alt={data.contactFooter.logoAlt}
            width={168}
            height={168}
            className="rounded-[8px] bg-linen/70 p-3 shadow-soft ring-1 ring-moss-500/10 mix-blend-multiply"
          />
          <h2 className="mt-9 font-display text-5xl leading-tight text-moss-900">{data.contactFooter.title}</h2>
          <p className="mt-5 max-w-lg leading-8 text-moss-700">
            {data.contactFooter.copy}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <ContactLink
            href={data.whatsappUrl}
            icon={MessageCircle}
            label={data.contactFooter.whatsapp}
            value={data.contact.phone}
            external
          />
          <ContactLink
            href={`mailto:${data.contact.email}`}
            icon={Mail}
            label={data.contactFooter.email}
            value={data.contact.email}
          />
          <ContactLink
            href={data.contact.instagram}
            icon={Instagram}
            label={data.contactFooter.instagram}
            value="@pousadajardinsgastehaus"
            external
          />
        </div>
      </div>
      <div className="border-t border-moss-500/10 px-4 py-7 text-center text-sm text-moss-700">
        {data.contactFooter.copyright}
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
