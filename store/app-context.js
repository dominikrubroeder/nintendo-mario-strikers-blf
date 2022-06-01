import { createContext, useState } from 'react';

const AppContext = createContext({
  init: function () {},
  theme: null,
  setTheme: function (team) {},
  edition: null,
  validateEdition: function (edition) {},
  buyable: false,
  showStickyBuyBar: false,
});

export function AppContextProvider(props) {
  const [activeEdition, setActiveEdition] = useState();
  const [activeTheme, setActiveTheme] = useState();
  const [buyable, setBuyable] = useState(false);
  const [showStickyBuyBar, setShowStickyBuyBar] = useState();

  function initThemeHandler() {
    if (localStorage.getItem('themed') && localStorage.getItem('theme')) {
      const localStorageTheme = localStorage.getItem('theme');
      setActiveTheme(localStorageTheme);
      document.body.className = `themed theme-${localStorageTheme} bg-accent text-white`;
    }
  }

  function setThemeHandler(team) {
    document.body.className = `themed theme-${team} bg-themed text-white`;

    localStorage.setItem('themed', true);
    localStorage.setItem('theme', team);

    setActiveTheme(team);

    setBuyable(true);
  }

  function initEditionHandler() {
    if (localStorage.getItem('edition')) {
      const localStorageEdition = localStorage.getItem('edition');
      setActiveEdition(localStorageEdition);
    }
  }

  function validateEditionHandler(edition) {
    if (edition === 'standard') {
      document.body.className = '';
      localStorage.removeItem('themed');
      localStorage.removeItem('theme');
      setActiveTheme(null);
      setBuyable(true);
    }

    if (edition === 'nostalgie') {
      setBuyable(false);
    }

    localStorage.setItem('edition', edition);
    setActiveEdition(edition);
  }

  function initBuyableHandler() {
    if (localStorage.getItem('edition') || localStorage.getItem('themed')) {
      setBuyable(true);
    } else {
      setBuyable(false);
    }
  }

  function initHandler() {
    initEditionHandler();
    initThemeHandler();
    initBuyableHandler();
  }

  const context = {
    init: initHandler,
    theme: activeTheme,
    setTheme: setThemeHandler,
    edition: activeEdition,
    validateEdition: validateEditionHandler,
    buyable,
    showStickyBuyBar,
  };

  return (
    <AppContext.Provider value={context}>{props.children}</AppContext.Provider>
  );
}

export default AppContext;
