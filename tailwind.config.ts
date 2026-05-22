import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        gold: "#C8A44D",
        teal: "#0F7C7A",
        sage: "#7FAF8E",
        warm: "#F8F7F3",
        charcoal: "#2F2F2F"
      },
      fontFamily: {
        sans: ["Avenir Next", "Montserrat", "Helvetica Neue", "Arial", "sans-serif"],
        serif: ["Cinzel", "Iowan Old Style", "Baskerville", "Georgia", "serif"]
      },
      boxShadow: {
        soft: "0 18px 60px rgba(15, 124, 122, 0.10)"
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at top left, rgba(200, 164, 77, 0.18), transparent 35%), radial-gradient(circle at bottom right, rgba(127, 175, 142, 0.18), transparent 30%)"
      }
    }
  },
  plugins: []
};

export default config;
