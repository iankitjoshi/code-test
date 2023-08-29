import colors from './src/Theme/color'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      'primary': 'Poppins',
    },
    extend: {
      colors: {
        ...colors
      },
      padding: {
        base: '24px',
      }
    },
  },
  plugins: [],
};

