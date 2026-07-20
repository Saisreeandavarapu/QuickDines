/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand:   { DEFAULT: '#0B1F5A', light: '#1A3080', dark: '#07153D' },
        primary: { DEFAULT: '#FF6B35', light: '#FF885B', dark: '#E04A15' },
        accent:  { DEFAULT: '#16A34A', light: '#22C55E', dark: '#15803D' },
      },
      fontFamily: { poppins: ['Poppins', 'sans-serif'] },
    },
  },
  plugins: [],
}
