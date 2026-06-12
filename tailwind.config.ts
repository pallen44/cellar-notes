import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Georgia", "Cambria", "Times New Roman", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      colors: {
        ink: "#251B18",
        cork: "#B98258",
        cellar: "#572B2F",
        cream: "#F8F0E4",
        linen: "#FFF9F0",
        leaf: "#475C42",
        gold: "#C79C50"
      },
      boxShadow: {
        soft: "0 20px 60px rgba(42, 24, 17, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
