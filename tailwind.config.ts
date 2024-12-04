import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "brand-midnight-green": "#104F55",
        "brand-myrtle-green": "#32746D",
        "brand-cambridge-blue": "#9EC5AB",
        "brand-snow-drift": "#f5f8f2",
        "brand-dark-green": "#01200F",
        "brand-night": "#011502",
      },
      transform: ['hover', 'focus'],
      perspective: {
        '1000': '1000px',
      },
      rotate: {
        'y-180': 'rotateY(180deg)',
      },
    },
  },
  plugins: [],
} satisfies Config;
