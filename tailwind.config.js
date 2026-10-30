/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
        mono: ['Space Mono', 'monospace'],
      },
      colors: {
        black: '#000000',
        ink: '#0d0000',
        maroon: {
          DEFAULT: '#800000',
          light: '#b22222',
          dark: '#4a0000',
          muted: '#5c0a0a',
        },
      },
    },
  },
  plugins: [],
}
