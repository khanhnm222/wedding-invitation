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
        cream: {
          50: "#fdfcfb",
          100: "#faf8f5",
          200: "#f5f0e8",
          300: "#ebe3d5",
          400: "#ddd0ba",
          500: "#c9b79c",
        },
        sage: {
          100: "#e8ede8",
          200: "#d4dfd4",
          300: "#b8c9b8",
        },
        rose: {
          100: "#f9e8e8",
          200: "#f2d1d1",
          300: "#e8b4b4",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;