const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      colors: {
        // accent: 'rgb(var(--theme-accent) / <alpha-value>)',
        accent: "var(--theme-accent)",
        "accent-dark": "var(--theme-accent-dark)",
        "accent-soft": "var(--theme-accent-soft)",
        signal: "var(--theme-signal)",
        "signal-dark": "var(--theme-signal-dark)",
        mario: "var(--theme-mario)",
        "mario-dark": "var(--theme-mario-dark)",
        luigi: "var(--theme-luigi)",
        "luigi-dark": "var(--theme-luigi-dark)",
        bowser: "var(--theme-bowser)",
        "bowser-dark": "var(--theme-bowser-dark)",
        yoshi: "var(--theme-yoshi)",
        "yoshi-dark": "var(--theme-yoshi-dark)",
        "donkey-kong": "var(--theme-donkey-kong)",
        "donkey-kong-dark": "var(--theme-donkey-kong-dark)",
        wario: "var(--theme-wario)",
        "wario-dark": "var(--theme-wario-dark)",
        waluigi: "var(--theme-waluigi)",
        "waluigi-dark": "var(--theme-waluigi-dark)",
        peach: "var(--theme-peach)",
        "peach-dark": "var(--theme-peach-dark)",
        toad: "var(--theme-toad)",
        "toad-dark": "var(--theme-toad-dark)",
        rosalina: "var(--theme-rosalina)",
        "rosalina-dark": "var(--theme-rosalina-dark)",
        "bumm-bumm": "var(--theme-bumm-bumm)",
        "bumm-bumm-dark": "var(--theme-bumm-bumm-dark)",
        daisy: "var(--theme-daisy)",
        "daisy-dark": "var(--theme-daisy-dark)",
        "shy-guy": "var(--theme-shy-guy)",
        "shy-guy-dark": "var(--theme-shy-guy-dark)",
        pauline: "var(--theme-pauline)",
        "pauline-dark": "var(--theme-pauline-dark)",
        "diddy-kong": "var(--theme-donkey-kong)",
        "diddy-kong-dark": "var(--theme-donkey-kong-dark)",
      },
      backgroundImage: {
        "accent-gradient": "linear-gradient(45deg, #FF6E1A, #FFDC00)",
        "gradient-peach": "linear-gradient(45deg, #FFDC00, #FFDC00)",
        "gradient-bowser": "linear-gradient(45deg, #FF6E1A, #FF6E1A)",
        "gradient-wario": "linear-gradient(45deg, #FF6E1A, #FF6E1A)",
        "gradient-rosalina": "linear-gradient(45deg, #FF6E1A, #FF6E1A)",
        "gradient-daisy": "linear-gradient(45deg, #FFDC00, #FFDC00)",
      },
      keyframes: {
        fadeUp: {
          "0%": {
            transform: "translateY(4%)",
            opacity: "0",
            visibility: "hidden",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
            visibility: "visible",
          },
        },
        audioWave1: {
          "0%, 100%": { transform: "scale(1.0)" },
          "25%": { transform: "scale(1.6)" },
          "50%": { transform: "scale(1.05)" },
          "75%": { transform: "scale(1.4)" },
        },
        audioWave2: {
          "0%, 100%": {
            transform: "scale(1.2)",
          },
          "25%": { transform: "scale(1.05)" },
          "50%": { transform: "scale(1.4)" },
          "75%": { transform: "scale(1.6)" },
        },
        growthHeight: {
          "0%, 100%": {
            height: "100%",
          },
          "25%": { height: "20%" },
          "50%": { height: "80%" },
          "75%": { height: "40%" },
        },
        shake: {
          "0%": { transform: "translate(1px, 1px) rotate(0deg)" },
          "10%": { transform: "translate(-1px, -2px) rotate(-1deg)" },
          "20%": { transform: "translate(-3px, 0px) rotate(1deg)" },
          "30%": { transform: "translate(3px, 2px) rotate(0deg)" },
          "40%": { transform: "translate(1px, -1px) rotate(1deg)" },
          "50%": { transform: "translate(-1px, 2px) rotate(-1deg)" },
          "60%": { transform: "translate(-3px, 1px) rotate(0deg)" },
          "70%": { transform: "translate(3px, 1px) rotate(-1deg)" },
          "80%": { transform: "translate(-1px, -1px) rotate(1deg)" },
          "90%": { transform: "translate(1px, 2px) rotate(0deg)" },
          "100%": { transform: "translate(1px, -2px) rotate(-1deg)" },
        },
        shakeScale: {
          "0%": { transform: "translate(1px, 1px) rotate(0deg) scale(1)" },
          "10%": {
            transform: "translate(-1px, -2px) rotate(-1deg) scale(1.05)",
          },
          "20%": {
            transform: "translate(-3px, 0px) rotate(1deg) scale(1.025)",
          },
          "30%": { transform: "translate(3px, 2px) rotate(0deg) scale(1.05)" },
          "40%": { transform: "translate(1px, -1px) rotate(1deg) scale(1.25)" },
          "50%": { transform: "translate(-1px, 2px) rotate(-1deg) scale(1)" },
          "60%": { transform: "translate(-3px, 1px) rotate(0deg) scale(1)" },
          "70%": {
            transform: "translate(3px, 1px) rotate(-1deg) scale(1)",
          },
          "80%": { transform: "translate(-1px, -1px) rotate(1deg) scale(1)" },
          "90%": { transform: "translate(1px, 2px) rotate(0deg) scale(1)" },
          "100%": { transform: "translate(1px, -2px) rotate(-1deg) scale(1)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 1s ease-out forwards",
        audioWave1: "audioWave1 1.5s infinite ease-in-out",
        audioWave2: "audioWave2 2.2s infinite ease-in-out",
        growthHeight: "growthHeight 1s infinite ease-in-out",
        shake: "shake 0.5s infinite",
        shakeScale: "shakeScale 0.5s infinite",
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("themed", ".themed &");
      addVariant("theme-mario", ".theme-mario &");
      addVariant("theme-luigi", ".theme-luigi &");
      addVariant("theme-bowser", ".theme-bowser &");
      addVariant("theme-yoshi", ".theme-yoshi &");
      addVariant("theme-donkey-kong", ".theme-donkey-kong &");
      addVariant("theme-wario", ".theme-wario &");
      addVariant("theme-waluigi", ".theme-waluigi &");
      addVariant("theme-peach", ".theme-peach &");
      addVariant("theme-toad", ".theme-toad &");
      addVariant("theme-rosalina", ".theme-rosalina &");
      addVariant("theme-bumm-bumm", ".theme-bumm-bumm &");
      addVariant("theme-daisy", ".theme-daisy &");
      addVariant("theme-shy-guy", ".theme-shy-guy &");
      addVariant("theme-pauline", ".theme-pauline &");
      addVariant("theme-diddy-kong", ".theme-diddy-kong &");
    }),
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".animation-delay-100": {
          "animation-delay": "100ms",
        },
        ".animation-delay-200": {
          "animation-delay": "200ms",
        },
        ".animation-delay-300": {
          "animation-delay": "300ms",
        },
        ".animation-delay-400": {
          "animation-delay": "400ms",
        },
        ".animation-delay-700": {
          "animation-delay": "700ms",
        },
        ".text-fill-color-transparent": {
          "-webkit-text-fill-color": "transparent",
        },
        ".transform-style-3d": {
          "transform-style": "preserve-3d",
        },
      });
    }),
  ],
};
