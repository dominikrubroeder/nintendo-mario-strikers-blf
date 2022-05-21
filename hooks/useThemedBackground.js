export default function useThemedBackgroundStyle({ variant }) {
  if (variant === 'dark') {
    return 'theme-mario:bg-mario-dark theme-luigi:bg-luigi-dark theme-peach:bg-peach-dark theme-yoshi:bg-yoshi-dark theme-daisy:bg-daisy-dark theme-bowser:bg-bowser-dark theme-wario:bg-wario-dark theme-waluigi:bg-waluigi-dark theme-donkey-kong:bg-donkey-kong-dark';
  }

  return 'theme-mario:bg-mario theme-luigi:bg-luigi theme-peach:bg-peach theme-yoshi:bg-yoshi theme-daisy:bg-daisy theme-bowser:bg-bowser theme-wario:bg-wario theme-waluigi:bg-waluigi theme-donkey-kong:bg-donkey-kong';
}
