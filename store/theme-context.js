import { createContext, useState } from 'react';

const ThemeContext = createContext({
  theme: null,
  setTheme: function (team) {},
  resetTheme: function () {},
});

export function ThemeContextProvider(props) {
  const [activeTheme, setActiveTheme] = useState();

  function setThemeHandler(team) {
    setActiveTheme(team);
  }

  function resetThemeHandler() {
    setActiveTheme(null);
  }

  const context = {
    theme: activeTheme,
    setTheme: setThemeHandler,
    resetTheme: resetThemeHandler,
  };

  return (
    <ThemeContext.Provider value={context}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
