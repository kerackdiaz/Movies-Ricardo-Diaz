/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'bebas-neue': ['Bebas Neue', 'sans-serif'],
      },
      backgroundImage: {
        'movie': "url('../../../../src/assets/img/movies-bg.jpg')",
      }
    },
  },
  plugins: [

  ],
}