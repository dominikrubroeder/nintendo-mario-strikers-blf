import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  VolumeUpIcon,
  SelectorIcon,
  PlayIcon,
  PauseIcon,
} from '@heroicons/react/solid';
import Heading from './typography/Heading';
import Button from './base/Button';

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
  const audioRef = useRef<null | HTMLAudioElement>(null);
  const [currentTitle, setCurrentTitle] = useState(soundtracksData[0].title);
  const [showSoundtracks, setShowSoundtracks] = useState(false);
  const [currentSoundtrack, setCurrentSoundtrack] = useState<null | Soundtrack>(
    null
  );
  const [playing, setPlaying] = useState(false);

  const playPauseSoundtrackHandler = (soundtrack: Soundtrack) => {
    if (soundtrack.title !== currentSoundtrack?.title)
      setCurrentSoundtrack(soundtrack);
    if (soundtrack.title === currentSoundtrack?.title)
      setCurrentSoundtrack(null);
  };

  const playSoundtrackHandler = (e: React.MouseEvent<HTMLOrSVGElement>) => {
    e.stopPropagation();

    if (currentSoundtrack) {
      audioRef.current?.play();
      setPlaying(true);
      return;
    }

    setCurrentSoundtrack(soundtracksData[0]);
  };

  const pauseSoundtrackHandler = (e: React.MouseEvent<HTMLOrSVGElement>) => {
    e.stopPropagation();

    if (currentSoundtrack) {
      audioRef.current?.pause();
      setPlaying(false);
    }
  };

  useEffect(() => {
    if (currentSoundtrack) {
      audioRef.current?.play();
      setPlaying(true);
      setCurrentTitle(currentSoundtrack?.title);
    }

    if (!currentSoundtrack) {
      setCurrentTitle(soundtracksData[0].title);
      setPlaying(false);
    }
  }, [currentSoundtrack]);

  return (
    <div className="bg-themed-dark px-4 py-3 rounded-xl transition">
      <Heading
        className="flex items-center gap-1 justify-between text-xs cursor-pointer w-44"
        onClick={() => setShowSoundtracks((previousState) => !previousState)}
      >
        {currentSoundtrack && (
          <audio src={currentSoundtrack.src} ref={audioRef}></audio>
        )}

        <span className="flex items-center gap-1">
          <SelectorIcon className="w-5 h-5" /> {currentTitle}
        </span>

        <Button
          variant="icon"
          className={`relative h-4 w-4 before:content-[''] before:rounded-full before:block before:absolute before:inset-0 before:w-[1rem] before:z-0 before:h-[1rem] after:content-[''] after:rounded-full after:block after:absolute after:inset-0 after:w-[1rem] after:z-0 after:h-[1rem] ${
            playing ? 'before:animate-audioWave1 after:animate-audioWave2' : ''
          }`}
        >
          {!playing && (
            <PlayIcon className="w-5 h-5" onClick={playSoundtrackHandler} />
          )}
          {playing && (
            <PauseIcon className="w-5 h-5" onClick={pauseSoundtrackHandler} />
          )}
        </Button>
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
                    onClick={() => playPauseSoundtrackHandler(soundtrack)}
                  >
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
