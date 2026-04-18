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
        "cream": "#FAEBD6",
        "light-purple": "#9640A1",
        "dark-purple": "#391649",
        "gray": "#D9D9D9"
      },
      fontFamily: {
        comic: ['ComicBook', 'sans-serif'],
        neue: ['NeueKabel', 'sans-serif']
      },
    },
  },
  plugins: [],
};
export default config;
