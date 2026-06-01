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
          50: "#fffaf0",
          100: "#f1eadc",
          300: "#c0c0c0",
          500: "#8b5d33",
          700: "#5f3f23",
          900: "#24170f",
        },
        marigold: "#ffd700",
        lavender: "#b8860b",
        clay: "#8b5d33",
        linen: "#fffaf0",
      },
      fontFamily: {
        display: ["Troye Serif", "Cormorant Garamond", "Georgia", "Cambria", "Times New Roman", "serif"],
        subtitle: ["CMU Serif", "Computer Modern Serif", "Georgia", "Cambria", "Times New Roman", "serif"],
        sans: ["Morisawa", "Avenir Next", "Montserrat", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 60px rgba(139, 93, 51, 0.14)",
      },
    },
  },
  plugins: [],
};

export default config;
