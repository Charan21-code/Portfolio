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
        // Existing warm palette — preserved
        cream: "#FDFBF7",
        sand: "#FAF6F0",
        espresso: "#1E1916",
        terracotta: "#E05A36",
        gold: "#E6A13B",
        oat: "#E6DFD5",
        // New editorial tokens — "Refined Editorial Travel"
        background: "#FAF9F6",
        surface: "#E8E5D9",
        "primary-text": "#2C2825",
        "secondary-text": "#5C564F",
        teal: "#1E5F5A"
      },
      fontFamily: {
        display: ["var(--font-display)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "Inter", "Arial", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "Fira Code", "Consolas", "monospace"]
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
