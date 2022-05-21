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
        mario: '#E0102F',
        'mario-dark': '#C80E2A',
        luigi: '#08A936',
        'luigi-dark': '#07922F',
        bowser: '#04BE14',
        'bowser-dark': '#038C0E',
        yoshi: '#70B921',
        'yoshi-dark': '#64A41D',
        'donkey-kong': '#983106',
        'donkey-kong-dark': '#802905',
        wario: '#F5DA0F',
        'wario-dark': '#E1C809',
        waluigi: '#5D2E8E',
        'waluigi-dark': '#51287B',
        peach: '#F096BE',
        'peach-dark': '#ED7EAF',
        daisy: '#EE830A',
        'daisy-dark': '#D77709',
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('themed', '.themed &');
      addVariant('theme-mario', '.theme-mario &');
      addVariant('theme-luigi', '.theme-luigi &');
      addVariant('theme-bowser', '.theme-bowser &');
      addVariant('theme-yoshi', '.theme-yoshi &');
      addVariant('theme-donkey-kong', '.theme-donkey-kong &');
      addVariant('theme-wario', '.theme-wario &');
      addVariant('theme-waluigi', '.theme-waluigi &');
      addVariant('theme-peach', '.theme-peach &');
      addVariant('theme-daisy', '.theme-daisy &');
    }),
  ],
};
