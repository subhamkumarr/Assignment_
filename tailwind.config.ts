import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class', 
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'btn-col': 'rgba(114, 77, 255, 1)',
      'txt-col-hover': 'rgba(250, 250, 250, 1)',
      'grey': 'rgba(237, 237, 237, 1)',
      'gray-light': 'rgba(211, 220, 230, 1)',
      'gray-dark': 'rgba(128, 128, 128, 1)',
      'white-shade': 'rgba(250, 250, 250, 1)',
      'white': 'rgba(255, 255, 255, 1)',
      'green': 'rgba(171, 228, 35, 1)',
      'black': 'rgba(0, 0, 0, 1)'
    },
    dropShadow: {
      '4xl': '0 0 1px rgba(114, 77, 255, 0.82)'
    },
    extend: {},
  },
  plugins: [],
};

export default config;
