/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'bebas-neue': ['Bebas Neue', 'sans-serif'],
        'raleway' : ['Raleway', 'sans-serif']
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}