import type { Config } from "tailwindcss";
import { brand } from "./src/lib/brand";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        moss: {
          50: brand.colors.linen,
          100: brand.colors.softPeach,
          300: brand.colors.paleGold,
          500: brand.colors.clay,
          700: brand.colors.clayDark,
          900: brand.colors.ink,
        },
        marigold: brand.colors.accent,
        lavender: brand.colors.clay,
        clay: brand.colors.clay,
        linen: brand.colors.linen,
        whatsapp: brand.colors.whatsapp,
        "whatsapp-hover": brand.colors.whatsappHover,
      },
      fontFamily: {
        display: ["Troye Serif", "Cormorant Garamond", "Georgia", "Cambria", "Times New Roman", "serif"],
        subtitle: ["CMU Serif", "Computer Modern Serif", "Georgia", "Cambria", "Times New Roman", "serif"],
        sans: ["Morisawa", "Avenir Next", "Montserrat", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 60px rgba(95, 70, 48, 0.13)",
      },
    },
  },
  plugins: [],
};

export default config;
