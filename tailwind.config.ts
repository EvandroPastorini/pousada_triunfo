import type { Config } from "tailwindcss";

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
          50: "#fcebdd",
          100: "#EACDB4",
          300: "#ECD9AB",
          500: "#8b5d33",
          700: "#6f4729",
          900: "#2d1d12",
        },
        marigold: "#e7c49b",
        lavender: "#8b5d33",
        clay: "#8b5d33",
        linen: "#fcebdd",
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
