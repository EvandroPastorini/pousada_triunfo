export const brand = {
  name: "Pousada Jardins da Gästehaus",
  shortName: "Jardins da Gästehaus",
  logos: {
    // Troque estes arquivos por imagens dentro de /public/images.
    // Exemplo: "/images/minha-logo.png"
    header: "/images/logo-gpt.png",
    footer: "/images/logo-gpt.png",
    favicon: "/images/logo-gpt.png",
    apple: "/images/logo-gpt.png",
  },
  colors: {
    // Paleta principal do site.
    linen: "#fcebdd",
    softPeach: "#EACDB4",
    paleGold: "#ECD9AB",
    accent: "#e7c49b",
    clay: "#8b5d33",
    clayDark: "#6f4729",
    ink: "#2d1d12",

    // Botao flutuante do WhatsApp.
    whatsapp: "#4f9f70",
    whatsappHover: "#438e63",
  },
} as const;
