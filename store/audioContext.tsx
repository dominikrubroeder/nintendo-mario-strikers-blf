import React, { createContext, useEffect, useState } from 'react';
import { Constants } from '../data/constants';
import { soundtracks } from '../data/audio';

type AudioContextType = {
  hasInteractiveAudio: boolean | null;
  toggleInteractiveAudio: () => void;
  sound: string | null;
  setSound: (soundURL: string | null) => void;
  soundtrack: string;
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
  const [hasInteractiveAudio, setHasInteractiveAudio] = useState<
    boolean | null
  >(null);
  const [sound, setSound] = useState<null | string>(null);
  const [soundtrack, setSoundtrack] = useState<string>(soundtracks[0].src);
  const [isPlaying, setIsPlaying] = useState(false);

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

  function playAudio() {
    const currentSoundtrack = document.getElementById(
      'currentSoundtrack'
    ) as HTMLAudioElement;
    currentSoundtrack?.play();
    setIsPlaying(true);
  }

  function pauseAudio() {
    const currentSoundtrack = document.getElementById(
      'currentSoundtrack'
    ) as HTMLAudioElement;
    currentSoundtrack?.pause();
    setIsPlaying(false);
  }

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
    playAudio,
    pauseAudio,
    isPlaying,
  };

  return (
    <AudioContext.Provider value={context}>{children}</AudioContext.Provider>
  );
};

export default AudioContext;
