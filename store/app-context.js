import { createContext, useEffect, useState } from 'react';
import { Editions } from '../data/editions';

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
  const [hasInteractiveAudio, setHasInteractiveAudio] = useState(null);
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
    console.log('toggle...');
    setHasInteractiveAudio((previousState) => !previousState);
  }

  function initEditionHandler() {
    if (localStorage.getItem('edition')) {
      const localStorageEdition = localStorage.getItem('edition');
      setActiveEdition(localStorageEdition);
    }
  }

  function validateEditionHandler(edition) {
    if (edition === Editions.standardId) {
      document.body.className = '';
      localStorage.removeItem('themed');
      localStorage.removeItem('theme');
      setActiveTheme(null);
      setBuyable(true);
    }

    if (edition === Editions.nostalgiaId) {
      setBuyable(false);
    }

    localStorage.setItem('edition', edition);
    setActiveEdition(edition);
  }

  function initBuyableHandler() {
    const storedEdition = localStorage.getItem('edition');
    const isThemed = localStorage.getItem('themed');

    if (
      !storedEdition ||
      (storedEdition === Editions.standardId &&
        storedEdition === Editions.nostalgiaId)
    ) {
      setBuyable(false);
      return;
    }

    if (storedEdition === Editions.nostalgiaId && !isThemed) {
      setBuyable(false);
      return;
    }

    setBuyable(true);
  }

  const initInteractiveAudio = () => {
    if (localStorage.getItem('interactiveAudio') === null) {
      setHasInteractiveAudio(true);
      return;
    }

    if (localStorage.getItem('interactiveAudio') === 'true') {
      setHasInteractiveAudio(true);
      return;
    }

    if (localStorage.getItem('interactiveAudio') === 'false') {
      setHasInteractiveAudio(false);
      return;
    }
  };

  // Initial page load instructions
  useEffect(() => {
    initEditionHandler();
    initThemeHandler();
    initBuyableHandler();
    initInteractiveAudio();
  }, []);

  useEffect(() => {
    localStorage.setItem('interactiveAudio', hasInteractiveAudio);
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
