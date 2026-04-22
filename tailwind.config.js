/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        comic: ["Comic Neue", "cursive"],
        monoton: ["Monoton", "cursive"],
        playfair: ["Playfair Display", "serif"],
        bebas: ["Bebas Neue", "sans-serif"],
        mono: ["Space Mono", "monospace"],
      },
      colors: {
        'ugly-yellow': '#ffff00',
        'ugly-pink': '#ff00ff',
        'ugly-blue': '#0000ff',
        'ugly-green': '#00ff00',
        'ugly-red': '#ff0000',
         'brand-dark': '#0f172a',   // add this
        'brand-blue': '#4f46e5',   // add this
        'brand-muted': '#6b7280',  // add this
      },
      animation: {
        marquee: 'marquee 10s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [],
}
