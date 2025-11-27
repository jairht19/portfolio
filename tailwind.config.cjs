/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './plugins/**/*.{js,ts}',
    './app.{vue,js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        // Paleta híbrida: dark base + acentos claros
        brand: {
          blue: '#3B82F6',
          dark: '#020617',
        },
      },
    },
  },
  plugins: [],
};