import React, { createContext, useEffect, useState } from 'react';
import { Constants } from '../data/constants';

type AudioContextType = {
  hasInteractiveAudio: boolean | null;
  toggleInteractiveAudio: () => void;
  sound: string | null;
  setSound: (soundURL: string | null) => void;
  soundtrack: string | null;
  setSoundtrack: (soundtrackURL: string | null) => void;
};

const AudioContext = createContext<null | AudioContextType>(null);

interface AudioContextProviderProps {
  children: React.ReactNode;
}

export const AudioContextProvider: React.FC<AudioContextProviderProps> = ({
  children,
}) => {
  const [hasInteractiveAudio, setHasInteractiveAudio] = useState<
    boolean | null
  >(null);
  const [sound, setSound] = useState<null | string>(null);
  const [soundtrack, setSoundtrack] = useState<null | string>(null);

  const setSoundHandler = (soundURL: string | null) => {
    setSound(soundURL);
  };

  const initInteractiveAudio = () => {
    if (
      localStorage.getItem(Constants.InteractiveAudio) === null ||
      localStorage.getItem(Constants.InteractiveAudio) === 'true'
    ) {
      setHasInteractiveAudio(true);
      return;
    }

    if (localStorage.getItem(Constants.InteractiveAudio) === 'false') {
      setHasInteractiveAudio(false);
      return;
    }
  };

  function toggleInteractiveAudio() {
    setHasInteractiveAudio((previousState) => !previousState);
  }

  // Initial page load instructions
  useEffect(() => {
    initInteractiveAudio();
  }, []);

  useEffect(() => {
    localStorage.setItem(
      Constants.InteractiveAudio,
      String(hasInteractiveAudio) ?? 'true'
    );
  }, [hasInteractiveAudio]);

  const context = {
    hasInteractiveAudio,
    toggleInteractiveAudio,
    sound,
    setSound: setSoundHandler,
    soundtrack,
    setSoundtrack,
  };

  return (
    <AudioContext.Provider value={context}>{children}</AudioContext.Provider>
  );
};

export default AudioContext;
