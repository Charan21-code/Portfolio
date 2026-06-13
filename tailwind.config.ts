import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FDFBF7",
        sand: "#FAF6F0",
        espresso: "#1E1916",
        terracotta: "#E05A36",
        gold: "#E6A13B",
        oat: "#E6DFD5"
      },
      fontFamily: {
        display: ["Playfair Display", "Clash Display", "Georgia", "serif"],
        sans: ["Plus Jakarta Sans", "Inter", "Segoe UI", "Arial", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "Consolas", "monospace"]
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        "fade-up": "fadeUp 700ms ease-out both"
      }
    }
  },
  plugins: []
};

export default config;
