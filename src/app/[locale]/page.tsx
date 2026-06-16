import { notFound } from "next/navigation";
import { SitePage } from "@/components/SitePage";
import { buildSiteMetadata } from "@/lib/metadata";
import { isLocale, locales, type Locale } from "@/lib/site-data";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocalePageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  return buildSiteMetadata(locale, locale === "pt" ? "/" : `/${locale}`);
}

export default async function LocalePage({ params }: LocalePageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return <SitePage locale={locale as Locale} />;
}
