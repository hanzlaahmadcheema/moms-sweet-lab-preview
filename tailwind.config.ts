import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        rose: {
          50: "#fbf1f4",
          100: "#f7dce5",
          200: "#efb9cb",
          300: "#e08ba9",
          400: "#c96484",
          500: "#b94a6e",
          600: "#9c3a5a",
          700: "#7c2d47",
          800: "#571f33",
          900: "#3d1424",
        },
        caramel: {
          DEFAULT: "#d98a2b",
          dark: "#b06d1d",
          light: "#fdf0dc",
        },
        ivory: "#fdf8f2",
        sand: "#f6ecdd",
        gold: "#d9a441",
        amberstar: "#e8a33d",
        ink: "#2e2118",
        muted: "#6b5a4e",
      },
      fontFamily: {
        serif: ['"Fraunces"', "Georgia", '"Times New Roman"', "serif"],
        sans: ['"Inter"', "-apple-system", "BlinkMacSystemFont", '"Segoe UI"', "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
