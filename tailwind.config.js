const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#E60012',
        'accent-dark': '#D10000',
        signal: '#FFB800',
        'signal-dark': '#F1980D',
        mario: '#E60012',
        'mario-dark': '#D10000',
        luigi: '#04BE14',
        'luigi-dark': '#038C0E',
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('themed', '.themed &');
      addVariant('theme-mario', '.theme-mario &');
      addVariant('theme-luigi', '.theme-luigi &');
    }),
  ],
};
