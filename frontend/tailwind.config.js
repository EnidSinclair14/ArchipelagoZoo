/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#EAEAEA',
      page_background: '#959595',
      white: '#fff',
      red: 'red',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

