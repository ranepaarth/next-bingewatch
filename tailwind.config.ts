import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          50: "#f7c3c3",
          100: "#f5b0b0",
          200: "#f55b5b",
          300: "#fa3737",
          400: "#fa1e1e",
          500: "#fa0707",
          600: "#db0707",
          700: "#ab0303",
          800: "#8a0303",
          900: "#5e0202",
          950: "#360101",
        },
      },
    },
  },
  plugins: [],
};
export default config;
