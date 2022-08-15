import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { VolumeUpIcon, SelectorIcon } from '@heroicons/react/solid';
import Heading from './typography/Heading';

type Soundtrack = {
  title: string;
  src: string;
};

const soundtracksData: Soundtrack[] = [
  {
    title: 'Title screen',
    src: '/audio/soundtracks/title-screen.mp3',
  },
  {
    title: 'Main menu',
    src: '/audio/soundtracks/main-menu.mp3',
  },
];

const SelectASoundtrack: React.FC = () => {
  const [currentTitle, setCurrentTitle] = useState('Wähle deinen Soundtrack:');
  const [showSoundtracks, setShowSoundtracks] = useState(false);
  const [currentSoundtrack, setCurrentSoundtrack] = useState<null | Soundtrack>(
    null
  );
  const audioRef = useRef<null | HTMLAudioElement>(null);

  const playSoundtrackHandler = (soundtrack: Soundtrack) => {
    if (soundtrack.title !== currentSoundtrack?.title)
      setCurrentSoundtrack(soundtrack);
    if (soundtrack.title === currentSoundtrack?.title)
      setCurrentSoundtrack(null);
  };

  useEffect(() => {
    if (currentSoundtrack) {
      audioRef.current?.play();
      setCurrentTitle(currentSoundtrack?.title);
    }

    if (!currentSoundtrack) {
      setCurrentTitle('Wähle deinen Soundtrack:');
    }
  }, [currentSoundtrack]);

  return (
    <div className="bg-themed-dark px-4 py-3 rounded-xl transition">
      <Heading
        className="flex items-center gap-1 justify-between text-xs cursor-pointer w-44"
        onClick={() => setShowSoundtracks((previousState) => !previousState)}
      >
        {currentTitle} <SelectorIcon className="w-5 h-5" />
      </Heading>

      <AnimatePresence>
        {showSoundtracks && (
          <motion.div
            key="soundtrack"
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: 1,
              height: 'auto',
            }}
            exit={{
              opacity: 1,
            }}
            transition={{
              type: 'spring',
              stiffness: 400,
            }}
          >
            <div className="text-xs mt-4 mb-4">
              <header className="mb-2">Mario Strikers: BLF</header>

              <ul className="grid gap-2">
                {soundtracksData.map((soundtrack) => (
                  <li
                    key={soundtrack.title}
                    className="flex items-center gap-1 cursor-pointer opacity-70 hover:opacity-100 transition"
                    onClick={() => playSoundtrackHandler(soundtrack)}
                  >
                    {soundtrack &&
                      soundtrack.title === currentSoundtrack?.title && (
                        <audio src={soundtrack!.src} ref={audioRef}></audio>
                      )}
                    <VolumeUpIcon className="w-3 h-3 text-accent themed:text-white" />
                    {soundtrack.title}
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-xs">
              <header className="mb-2">Nintendo classic</header>

              <ul className="grid gap-2">
                <li className="flex items-center gap-1 cursor-pointer">
                  <VolumeUpIcon className="w-3 h-3 text-accent themed:text-white" />
                  Mario theme
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SelectASoundtrack;
