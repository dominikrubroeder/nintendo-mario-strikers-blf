import { createContext, useEffect, useState } from 'react';
import { Constants } from '../data/constants';
import { Editions } from '../data/editions';

const AppContext = createContext({
  selectedCharacter: null,
  setCharacter: function (character) {},
  selectedEdition: null,
  validateEdition: function (edition) {},
  buyable: false,
});

export function AppContextProvider(props) {
  const [selectedEdition, setSelectedEdition] = useState();
  const [selectedCharacter, setSelectedCharacter] = useState();
  const [buyable, setBuyable] = useState(false);

  function initThemeHandler() {
    if (
      localStorage.getItem(Constants.Themed) &&
      localStorage.getItem(Constants.Theme)
    ) {
      const localStorageTheme = localStorage.getItem(Constants.Theme);
      setSelectedCharacter(localStorageTheme);
      document.body.className = `themed theme-${localStorageTheme} bg-accent text-white`;
    }
  }

  function setThemeHandler(character) {
    document.body.className = `themed theme-${character} bg-accent text-white`;

    localStorage.setItem(Constants.Themed, true);

    localStorage.setItem(Constants.Theme, character);

    setSelectedCharacter(character);

    setBuyable(true);
  }

  function initEditionHandler() {
    if (localStorage.getItem(Constants.Edition)) {
      const localStorageEdition = localStorage.getItem(Constants.Edition);
      setSelectedEdition(localStorageEdition);
    }
  }

  function validateEditionHandler(edition) {
    if (edition === Editions.standardId) {
      document.body.className = '';
      localStorage.removeItem(Constants.Themed);
      localStorage.removeItem(Constants.Theme);
      setSelectedCharacter(null);
      setBuyable(true);
    }

    if (edition === Editions.nostalgiaId) {
      setBuyable(false);
    }

    localStorage.setItem(Constants.Edition, edition);
    setSelectedEdition(edition);
  }

  function initBuyableHandler() {
    const storedEdition = localStorage.getItem(Constants.Edition);
    const isThemed = localStorage.getItem(Constants.Themed);

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

  // Initial page load instructions
  useEffect(() => {
    initEditionHandler();
    initThemeHandler();
    initBuyableHandler();
  }, []);

  useEffect(() => {
    initThemeHandler();
  }, [selectedCharacter]);

  useEffect(() => {
    initBuyableHandler();
  }, [buyable]);

  useEffect(() => {
    initEditionHandler();
  }, [selectedEdition]);

  const context = {
    selectedCharacter: selectedCharacter,
    setCharacter: setThemeHandler,
    selectedEdition,
    validateEdition: validateEditionHandler,
    buyable,
  };

  return (
    <AppContext.Provider value={context}>{props.children}</AppContext.Provider>
  );
}

export default AppContext;
