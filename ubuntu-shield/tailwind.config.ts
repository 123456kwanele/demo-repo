import type { Config } from "tailwindcss";

export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        sa: {
          blue: "#003d8f",
          green: "#007a4d",
          gold: "#ffb81c",
          red: "#de3a3a",
          black: "#0d0d0d"
        }
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Ubuntu", "Noto Sans", "Cantarell", "Helvetica Neue", "Arial", "sans-serif"],
        display: ["Outfit", "Poppins", "Inter", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
} satisfies Config;

