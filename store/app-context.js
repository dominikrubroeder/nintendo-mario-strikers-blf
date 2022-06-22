import { createContext, useEffect, useState } from 'react';

const AppContext = createContext({
  hasInteractiveAudio: true,
  toggleInteractiveAudio: function () {},
  theme: null,
  setTheme: function (team) {},
  edition: null,
  validateEdition: function (edition) {},
  buyable: false,
  showStickyBuyBar: false,
  toggleOverlay: function () {},
});

export function AppContextProvider(props) {
  const [hasInteractiveAudio, setHasInteractiveAudio] = useState(true);
  const [activeEdition, setActiveEdition] = useState();
  const [activeTheme, setActiveTheme] = useState();
  const [buyable, setBuyable] = useState(false);
  const [showStickyBuyBar, setShowStickyBuyBar] = useState();
  const [showOverlay, setShowOverlay] = useState();

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

  function toggleOverlayHandler() {
    setShowOverlay((previousState) => !previousState);
  }

  function toggleInteractiveAudioHandler() {
    setHasInteractiveAudio((previousState) => !previousState);
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

  // Initial page load instructions
  useEffect(() => {
    initEditionHandler();
    initThemeHandler();
    initBuyableHandler();
  });

  useEffect(() => {
    if (hasInteractiveAudio) {
      localStorage.setItem('interactiveAudio', true);
    } else {
      localStorage.setItem('interactiveAudio', false);
    }
  }, [hasInteractiveAudio]);

  const context = {
    hasInteractiveAudio,
    toggleInteractiveAudio: toggleInteractiveAudioHandler,
    theme: activeTheme,
    setTheme: setThemeHandler,
    edition: activeEdition,
    validateEdition: validateEditionHandler,
    buyable,
    showStickyBuyBar,
    toggleOverlay: toggleOverlayHandler,
  };

  return (
    <AppContext.Provider value={context}>{props.children}</AppContext.Provider>
  );
}

export default AppContext;
