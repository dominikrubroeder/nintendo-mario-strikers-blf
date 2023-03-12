import React, { createContext, useContext, useEffect, useState } from "react";
import { Constants } from "../data/constants";
import { soundtracks } from "../data/audio";
import AppContext from "./appContext";
import teams from "../data/teams";

type AudioContextType = {
  interactiveAudioisEnabled: boolean | null;
  toggleInteractiveAudio: () => void;
  sound: null | string;
  setSound: (soundURL: string) => void;
  soundtrack: null | string;
  setSoundtrack: (soundtrackURL: string) => void;
  playAudio: () => void;
  pauseAudio: () => void;
  isPlaying: boolean;
};

const AudioContext = createContext<null | AudioContextType>(null);

interface AudioContextProviderProps {
  children: React.ReactNode;
}

export const AudioContextProvider: React.FC<AudioContextProviderProps> = ({
  children,
}) => {
  const [interactiveAudioisEnabled, setinteractiveAudioisEnabled] = useState<
    boolean | null
  >(null);
  const [sound, setSound] = useState<null | string>(null);
  const [soundtrack, setSoundtrack] = useState<null | string>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const appCtx = useContext(AppContext);

  useEffect(() => {
    if (appCtx?.selectedTeam) {
      const selectedTeamData = teams.find(
        (team) => team.id === appCtx?.selectedTeam
      );
      setSound(selectedTeamData?.sound[0] ?? "/audio/sound-mario-0.mp3");
    }
  }, [appCtx?.selectedTeam]);

  const initInteractiveAudio = () => {
    if (
      localStorage.getItem(Constants.InteractiveAudio) === null ||
      localStorage.getItem(Constants.InteractiveAudio) === "true"
    ) {
      setinteractiveAudioisEnabled(true);
      return;
    }

    if (localStorage.getItem(Constants.InteractiveAudio) === "false") {
      setinteractiveAudioisEnabled(false);
      return;
    }
  };

  function playAudio() {
    const currentSoundtrack = document.getElementById(
      "currentSoundtrack"
    ) as HTMLAudioElement;
    currentSoundtrack?.play();
    setIsPlaying(true);
  }

  function pauseAudio() {
    const currentSoundtrack = document.getElementById(
      "currentSoundtrack"
    ) as HTMLAudioElement;
    currentSoundtrack?.pause();
    setIsPlaying(false);
  }

  function toggleInteractiveAudio() {
    setinteractiveAudioisEnabled((previousState) => !previousState);
  }

  // Initial page load instructions
  useEffect(() => {
    initInteractiveAudio();
  }, []);

  useEffect(() => {
    localStorage.setItem(
      Constants.InteractiveAudio,
      String(interactiveAudioisEnabled) ?? "true"
    );
  }, [interactiveAudioisEnabled]);

  const context = {
    interactiveAudioisEnabled,
    toggleInteractiveAudio,
    sound,
    setSound,
    soundtrack,
    setSoundtrack,
    playAudio,
    pauseAudio,
    isPlaying,
  };

  return (
    <AudioContext.Provider value={context}>{children}</AudioContext.Provider>
  );
};

export default AudioContext;
