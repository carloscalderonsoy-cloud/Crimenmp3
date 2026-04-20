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
        'carbon':       '#2A2626',
        'carbon-deep':  '#1A1617',
        'cream':        '#FAEBD6',
        'magenta':      '#FC47AF',
        'light-purple': '#9640A1',
        'dark-purple':  '#391649',
        'teal':         '#B0CCC9',
        'gray':         '#D9D9D9',
      },
      fontFamily: {
        'bebas':      ["'Bebas Neue'", 'ComicBook', 'sans-serif'],
        'lilita':     ["'Lilita One'", 'serif'],
        'nunito':     ["'Nunito'", 'NeueKabel', 'sans-serif'],
        'mono-brand': ["'Share Tech Mono'", 'monospace'],
        // Legacy aliases kept for backward compat
        comic: ['ComicBook', "'Bebas Neue'", 'sans-serif'],
        neue:  ['NeueKabel', "'Nunito'", 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
