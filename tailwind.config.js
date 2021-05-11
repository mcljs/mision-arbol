  module.exports = {
   mode: 'jit',
   purge: [],
   purge: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        fontFamily: {
          sans: ['Roboto', 'sans-serif', 'system-ui', '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',]
           },
        colors:{
          yellow:{
            1050: '#2D1406',
            1100: '#8bbd52',
          },
          blue:{
            1000: '#01a5e4'
          }
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [
  require('@tailwindcss/line-clamp'),
      require('@tailwindcss/typography')
    ],
  }
