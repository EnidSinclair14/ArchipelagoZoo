/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#EAEAEA',
      page_background: '#959595',
      white: '#fff',
      black: '#000',
      red: '#d43535',
      green: '#2ed17a', 
      blue: '#2ebed1',
      border_color: '#ddd',
      transparent: '',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

