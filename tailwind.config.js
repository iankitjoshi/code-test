import colors from './src/Theme/color'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    borderRadius: {
      'med': '10px',
      'md': '6px',
    },
    borderWidth: {
      1: '1px',
      'border-2' : '2px'
    },
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

