import type { Metadata } from "next";
import { brand } from "@/lib/brand";
import { getSiteData, localeInfo, locales, type Locale } from "@/lib/site-data";

export function buildSiteMetadata(locale: Locale, pathname: string): Metadata {
  const data = getSiteData(locale);
  const languages = Object.fromEntries([
    ...locales.map((item) => [localeInfo[item].htmlLang, item === "pt" ? "/" : `/${item}`]),
    ["x-default", "/"],
  ]);

  return {
    title: data.metadata.title,
    description: data.metadata.description,
    keywords: data.metadata.keywords,
    alternates: {
      canonical: pathname,
      languages,
    },
    openGraph: {
      title: data.metadata.openGraphTitle,
      description: data.metadata.openGraphDescription,
      url: pathname,
      siteName: brand.name,
      images: [
        {
          url: "/images/drive-extra/fachada-noite2.png",
          alt: `Fachada da ${brand.name} em Triunfo, RS`,
        },
      ],
      locale: data.localeInfo.ogLocale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: data.metadata.openGraphTitle,
      description: data.metadata.twitterDescription,
      images: ["/images/drive-extra/fachada-noite2.png"],
    },
  };
}
