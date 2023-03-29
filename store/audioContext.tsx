import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { Constants } from "../data/constants";
import AppContext from "./appContext";
import teams from "../data/teams";

type AudioContextType = {
  interactiveAudioisEnabled: boolean | null;
  toggleInteractiveAudio: () => void;
  sound: null | string;
  setSound: (soundURL: string) => void;
  soundtrack: null | string;
  setSoundtrack: (soundtrackURL: string) => void;
  playSoundtrackOnce: boolean;
  setPlaySoundtrackOnce: Dispatch<SetStateAction<boolean>>;
  playAudio: () => void;
  pauseAudio: () => void;
  toggleAudio: () => void;
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
  const [playSoundtrackOnce, setPlaySoundtrackOnce] = useState(false);
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
    setPlaySoundtrackOnce(true);
    const currentSoundtrack = document.getElementById(
      "currentSoundtrack"
    ) as HTMLAudioElement;
    currentSoundtrack.volume = 0.4;
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

  function toggleAudio() {
    const currentSoundtrack = document.getElementById(
      "currentSoundtrack"
    ) as HTMLAudioElement;

    currentSoundtrack?.paused ? playAudio() : pauseAudio();
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
    playSoundtrackOnce,
    setPlaySoundtrackOnce,
    playAudio,
    pauseAudio,
    toggleAudio,
    isPlaying,
  };

  return (
    <AudioContext.Provider value={context}>{children}</AudioContext.Provider>
  );
};

export default AudioContext;
