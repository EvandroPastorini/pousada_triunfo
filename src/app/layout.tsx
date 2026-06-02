import type { Metadata } from "next";
import { brand } from "@/lib/brand";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pousadatriunfo.com.br"),
  title: `${brand.name} | Hospedagem em Triunfo, RS`,
  description:
    `Site institucional da ${brand.name} em Triunfo, RS. Conheça a pousada, acomodações, galeria, localização e fale pelo WhatsApp.`,
  icons: {
    icon: brand.logos.favicon,
    apple: brand.logos.apple,
  },
  openGraph: {
    title: brand.name,
    description:
      "Conforto, natureza e acolhimento em Triunfo, RS. Fale pelo WhatsApp e planeje sua hospedagem.",
    images: ["/images/hero-01.png"],
    locale: "pt_BR",
    type: "website",
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
