import React, { createContext, useContext, useEffect, useState } from 'react';
import { Constants } from '../data/constants';
import { soundtracks } from '../data/audio';
import AppContext from './appContext';
import characters from '../data/characters';

type AudioContextType = {
  interactiveAudioisEnabled: boolean | null;
  toggleInteractiveAudio: () => void;
  sound: string | null;
  setSound: (soundURL: string) => void;
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
  const [interactiveAudioisEnabled, setinteractiveAudioisEnabled] = useState<
    boolean | null
  >(null);
  const [sound, setSound] = useState('/audio/nintendo-switch-click.mp3');
  const [soundtrack, setSoundtrack] = useState(soundtracks[0].src);
  const [isPlaying, setIsPlaying] = useState(false);
  const appCtx = useContext(AppContext);

  useEffect(() => console.log(isPlaying), [isPlaying]);

  useEffect(() => {
    const selectedCharacterData = characters.find(
      (character) => character.id === appCtx?.selectedCharacter
    );
    setSound(selectedCharacterData?.sound[0] ?? '/audio/sound-mario-0.mp3');
  }, [appCtx?.selectedCharacter]);

  const initInteractiveAudio = () => {
    if (
      localStorage.getItem(Constants.InteractiveAudio) === null ||
      localStorage.getItem(Constants.InteractiveAudio) === 'true'
    ) {
      setinteractiveAudioisEnabled(true);
      return;
    }

    if (localStorage.getItem(Constants.InteractiveAudio) === 'false') {
      setinteractiveAudioisEnabled(false);
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
    setinteractiveAudioisEnabled((previousState) => !previousState);
  }

  // Initial page load instructions
  useEffect(() => {
    initInteractiveAudio();
  }, []);

  useEffect(() => {
    localStorage.setItem(
      Constants.InteractiveAudio,
      String(interactiveAudioisEnabled) ?? 'true'
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
