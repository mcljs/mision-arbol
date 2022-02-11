  module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
      extend: {
        fontFamily: {
          sans: ['Roboto', 'sans-serif', 'system-ui', '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',]
           },
        colors:{
   'brown-primary': '#eed9cc',
        'brown-secondary': '#fff9f0',
        'brown-third': '#fff3e0',
        'brown-five':'#c58560', 
        'brown-six': '#ffcd84',
        'brown-seven': '#120c09',
        'brown-eight': '#322925',
        'brown-nine': '#d6a485',
        'brown-ten': '#754d38',
        'brown-eleven': '#ac562a',
        'brown-twelve': '#1f2126',
        'brown-thirteen': '#906e59',
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
