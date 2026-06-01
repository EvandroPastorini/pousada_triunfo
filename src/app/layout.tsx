import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pousadatriunfo.com.br"),
  title: "Pousada Triunfo | Hospedagem em Triunfo, RS",
  description:
    "Site institucional da Pousada Triunfo em Triunfo, RS. Conheça a pousada, acomodações, galeria, localização e fale pelo WhatsApp.",
  icons: {
    icon: "/images/logo-brand.png",
    apple: "/images/logo-brand.png",
  },
  openGraph: {
    title: "Pousada Triunfo",
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
