import type { Metadata } from "next";
import { brand } from "@/lib/brand";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pousadatriunfo.com.br"),
  title: {
    default: `${brand.name} | Pousada rural e cabana em Triunfo, RS`,
    template: `%s | ${brand.name}`,
  },
  description:
    `Pousada rural em Triunfo, RS, com casa de campo, quartos individuais, Cabana Umbu e experiências no meio rural em 40 mil m² de natureza.`,
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
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: brand.logos.favicon,
    apple: brand.logos.apple,
  },
  openGraph: {
    title: `${brand.name} | Pousada rural em Triunfo, RS`,
    description:
      "Casa de campo, quartos individuais, Cabana Umbu e vivências acolhedoras no meio rural.",
    url: "/",
    siteName: brand.name,
    images: [
      {
        url: "/images/drive-extra/fachada-noite2.png",
        alt: `Fachada da ${brand.name} em Triunfo, RS`,
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${brand.name} | Pousada rural em Triunfo, RS`,
    description:
      "Casa de campo, quartos individuais e Cabana Umbu no meio rural de Triunfo.",
    images: ["/images/drive-extra/fachada-noite2.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
