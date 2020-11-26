const defaultTheme = require('tailwindcss/defaultTheme')

/* eslint-disable no-undef */
module.exports = {
  purge: [
    './pages/**/*.js',
    './components/**/*.js'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      mono: ['Source\ Code\ Pro', ...defaultTheme.fontFamily.mono]
    },
    extend: {
      colors: {
        'red': '#ff0000',
        'black-light': '#050505'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
