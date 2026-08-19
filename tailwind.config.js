/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0b192c', // Bleu nuit aquatique profond (Hydro-Luxe)
          light: '#1e3e62',   // Nuance intermédiaire plus douce
          dark: '#040d12',    // Bleu abyssal pour les contrastes forts
        },
        accent: {
          DEFAULT: '#c2410c', // Orange cuivré / terracotta (gardé pour le chauffage)
          light: '#ea580c',
          dark: '#9a3412',
        },
        hydro: {
          DEFAULT: '#0284c7', // Bleu lagon subtil pour les touches techniques
          light: '#38bdf8',
        }
      },
    },
  },
  plugins: [],
}