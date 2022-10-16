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
        bowser: '#F8BE10',
        'bowser-dark': '#E9B007',
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
        toad: '#17419A',
        'toad-dark': '#143885',
        rosalina: '#1DD4B7',
        'rosalina-dark': '#1ABCA3',
      },
      keyframes: {
        fadeUp: {
          '0%': {
            transform: 'translateY(4%)',
            opacity: '0',
            visibility: 'hidden',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
            visibility: 'visible',
          },
        },
        audioWave1: {
          '0%, 100%': { transform: 'scale(1.0)' },
          '25%': { transform: 'scale(1.6)' },
          '50%': { transform: 'scale(1.05)' },
          '75%': { transform: 'scale(1.4)' },
        },
        audioWave2: {
          '0%, 100%': {
            transform: 'scale(1.2)',
          },
          '25%': { transform: 'scale(1.05)' },
          '50%': { transform: 'scale(1.4)' },
          '75%': { transform: 'scale(1.6)' },
        },
        growthHeight: {
          '0%, 100%': {
            height: '100%',
          },
          '25%': { height: '20%' },
          '50%': { height: '80%' },
          '75%': { height: '40%' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 1s ease-out forwards',
        audioWave1: 'audioWave1 1.5s infinite ease-in-out',
        audioWave2: 'audioWave2 2.2s infinite ease-in-out',
        growthHeight: 'growthHeight 1s infinite ease-in-out',
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
      addVariant('theme-toad', '.theme-toad &');
      addVariant('theme-rosalina', '.theme-rosalina &');
    }),
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.animation-delay-100': {
          'animation-delay': '100ms',
        },
        '.animation-delay-200': {
          'animation-delay': '200ms',
        },
        '.animation-delay-300': {
          'animation-delay': '300ms',
        },
        '.animation-delay-400': {
          'animation-delay': '400ms',
        },
        '.animation-delay-700': {
          'animation-delay': '700ms',
        },
        '.text-fill-color-transparent': {
          '-webkit-text-fill-color': 'transparent',
        },
        '.transform-style-3d': {
          'transform-style': 'preserve-3d',
        },
      });
    }),
  ],
};
