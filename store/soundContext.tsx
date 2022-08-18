import { createContext, useEffect, useState } from 'react';

type SoundContextType = {
  sound: string | null;
  setSound: (soundURL: string | null) => void;
};

const SoundContext = createContext<null | SoundContextType>(null);

interface SoundContextProviderProps {
  children: React.ReactNode;
}

export const SoundContextProvider: React.FC<SoundContextProviderProps> = ({
  children,
}) => {
  const [sound, setSound] = useState<null | string>(null);

  const setSoundHandler = (soundURL: string | null) => {
    setSound(soundURL);
  };

  const context = {
    sound,
    setSound: setSoundHandler,
  };

  return (
    <SoundContext.Provider value={context}>{children}</SoundContext.Provider>
  );
};

export default SoundContext;
