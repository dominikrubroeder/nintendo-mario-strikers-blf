import React, { createContext, useEffect, useState } from "react";
import { Constants } from "../data/constants";
import { Editions } from "../data/editions";

type AppContextType = {
  selectedTeam: null | string;
  hasTeam: boolean;
  setTeam: (team: string | null) => void;
  selectedEdition: string;
  headerIsInView: boolean;
  setHeaderIsInView: React.Dispatch<React.SetStateAction<boolean>>;
};

const AppContext = createContext<null | AppContextType>(null);

interface AppContextProviderProps {
  children: React.ReactNode;
}

export const AppContextProvider: React.FC<AppContextProviderProps> = ({
  children,
}) => {
  const [selectedTeam, setSelectedTeam] = useState<null | string>("mario");
  const [headerIsInView, setHeaderIsInView] = useState<boolean>(true);

  function setThemeHandler(team: string | null) {
    document.documentElement.className = `themed theme-${team}`;
    document.documentElement.setAttribute("theme", String(team));

    localStorage.setItem(Constants.Theme, team ?? String(null));

    setSelectedTeam(team);
  }

  // Initial page load instructions
  useEffect(() => {
    if (localStorage.getItem(Constants.Theme)) {
      const localStorageTheme = localStorage.getItem(Constants.Theme);
      setSelectedTeam(localStorageTheme);
      document.documentElement.className = `themed theme-${localStorageTheme}`;
      document.documentElement.setAttribute("theme", String(localStorageTheme));
      return;
    }

    localStorage.setItem(Constants.Theme, "mario");
  }, []);

  useEffect(() => {
    if (selectedTeam === null) {
      document.documentElement.className = "";
      document.documentElement.removeAttribute("theme");
      localStorage.removeItem(Constants.Themed);
      localStorage.removeItem(Constants.Theme);
      localStorage.setItem(Constants.Edition, Editions.standardId);
      setSelectedTeam(null);
    }

    if (selectedTeam) {
      localStorage.setItem(Constants.Edition, Editions.teamId);
    }
  }, [selectedTeam]);

  const context = {
    selectedTeam: selectedTeam,
    hasTeam: !!selectedTeam,
    setTeam: setThemeHandler,
    selectedEdition: selectedTeam ? "team" : "standard",
    headerIsInView,
    setHeaderIsInView,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export default AppContext;
