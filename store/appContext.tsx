import React, { createContext, useEffect, useState } from "react";
import { Constants } from "../data/constants";
import { Editions } from "../data/editions";

type AppContextType = {
  selectedTeam: null | string;
  setTeam: (team: string | null) => void;
  selectedEdition: null | string;
  validateEdition: (edition: string | null) => void;
  buyable: boolean;
};

const AppContext = createContext<null | AppContextType>(null);

interface AppContextProviderProps {
  children: React.ReactNode;
}

export const AppContextProvider: React.FC<AppContextProviderProps> = ({
  children,
}) => {
  const [selectedTeam, setSelectedTeam] = useState<null | string>(null);
  const [selectedEdition, setSelectedEdition] = useState<null | string>(null);
  const [buyable, setBuyable] = useState(false);

  function initThemeHandler() {
    if (localStorage.getItem(Constants.Theme)) {
      const localStorageTheme = localStorage.getItem(Constants.Theme);
      setSelectedTeam(localStorageTheme);
      document.documentElement.className = `themed theme-${localStorageTheme}`;
      document.documentElement.setAttribute("theme", String(localStorageTheme));
    }
  }

  function setThemeHandler(team: string | null) {
    document.documentElement.className = `themed theme-${team}`;
    document.documentElement.setAttribute("theme", String(team));

    localStorage.setItem(Constants.Theme, team ?? String(null));

    setSelectedTeam(team);

    setBuyable(true);

    validateEditionHandler(Editions.teamId);
  }

  function initEditionHandler() {
    if (localStorage.getItem(Constants.Edition)) {
      const localStorageEdition = localStorage.getItem(Constants.Edition);
      setSelectedEdition(localStorageEdition);
    }
  }

  function validateEditionHandler(edition: string | null) {
    if (edition === Editions.standardId) {
      document.documentElement.className = "";
      document.documentElement.removeAttribute("theme");
      localStorage.removeItem(Constants.Themed);
      localStorage.removeItem(Constants.Theme);
      setSelectedTeam(null);
      setBuyable(true);
    }

    if (edition === Editions.teamId) {
      setBuyable(false);
    }

    localStorage.setItem(Constants.Edition, edition ?? "");

    setSelectedEdition(edition);
  }

  function initBuyableHandler() {
    const storedEdition = localStorage.getItem(Constants.Edition);
    const hasTheme = localStorage.getItem(Constants.Theme);

    if (!storedEdition || (storedEdition === Editions.teamId && !hasTheme)) {
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
  }, [selectedTeam]);

  useEffect(() => {
    initBuyableHandler();
  }, [buyable]);

  useEffect(() => {
    initEditionHandler();
  }, [selectedEdition]);

  const context = {
    selectedTeam: selectedTeam,
    setTeam: setThemeHandler,
    selectedEdition,
    validateEdition: validateEditionHandler,
    buyable,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export default AppContext;
