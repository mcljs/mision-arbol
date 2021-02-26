  module.exports = {
   purge: [],
   purge: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors:{
          yellow:{
            1050: '#2D1406'
          },
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
