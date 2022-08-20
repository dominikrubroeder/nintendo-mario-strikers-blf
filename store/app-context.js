import { createContext, useEffect, useState } from 'react';
import { Editions } from '../data/editions';

const AppContext = createContext({
  hasInteractiveAudio: true,
  toggleInteractiveAudio: function () {},
  selectedCharacter: null,
  setCharacter: function (character) {},
  edition: null,
  validateEdition: function (edition) {},
  buyable: false,
});

export function AppContextProvider(props) {
  const [hasInteractiveAudio, setHasInteractiveAudio] = useState(null);
  const [activeEdition, setActiveEdition] = useState();
  const [selectedCharacter, setSelectedCharacter] = useState();
  const [buyable, setBuyable] = useState(false);

  function initThemeHandler() {
    if (localStorage.getItem('themed') && localStorage.getItem('theme')) {
      const localStorageTheme = localStorage.getItem('theme');
      setSelectedCharacter(localStorageTheme);
      document.body.className = `themed theme-${localStorageTheme} bg-accent text-white`;
    }
  }

  function setThemeHandler(character) {
    document.body.className = `themed theme-${character} bg-accent text-white`;

    localStorage.setItem('themed', true);

    localStorage.setItem('theme', character);

    setSelectedCharacter(character);

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
    if (edition === Editions.standardId) {
      document.body.className = '';
      localStorage.removeItem('themed');
      localStorage.removeItem('theme');
      setSelectedCharacter(null);
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

  useEffect(() => {
    initThemeHandler();
  }, [selectedCharacter]);

  useEffect(() => {
    initBuyableHandler();
  }, [buyable]);

  useEffect(() => {
    initEditionHandler();
  }, [activeEdition]);

  const context = {
    hasInteractiveAudio,
    toggleInteractiveAudio: toggleInteractiveAudioHandler,
    selectedCharacter: selectedCharacter,
    setCharacter: setThemeHandler,
    edition: activeEdition,
    validateEdition: validateEditionHandler,
    buyable,
  };

  return (
    <AppContext.Provider value={context}>{props.children}</AppContext.Provider>
  );
}

export default AppContext;
