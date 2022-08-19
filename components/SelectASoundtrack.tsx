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
import AnimatedSoundbarsIcon from './animation/svg/AnimatedSoundbarsIcon';

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
  const [currentTitle, setCurrentTitle] = useState('Spiele einen Soundtrack');
  const [showSoundtracks, setShowSoundtracks] = useState(false);
  const [currentSoundtrack, setCurrentSoundtrack] = useState<null | Soundtrack>(
    null
  );
  const [playing, setPlaying] = useState(false);

  const playPauseSoundtrackHandler = (
    e: React.MouseEvent,
    soundtrack: Soundtrack
  ) => {
    e.stopPropagation();

    // if (soundtrack.title !== currentSoundtrack?.title)
    //   setCurrentSoundtrack(soundtrack);
    // if (soundtrack.title === currentSoundtrack?.title)
    //   setCurrentSoundtrack(null);

    setCurrentSoundtrack(soundtrack);
    setShowSoundtracks(false);
  };

  const playSoundtrackHandler = () => {
    if (currentSoundtrack) {
      audioRef.current?.play();
      setPlaying(true);
      return;
    }

    setCurrentSoundtrack(soundtracksData[0]);
  };

  const pauseSoundtrackHandler = () => {
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
      setCurrentTitle('Spiele einen Soundtrack');
      setPlaying(false);
    }
  }, [currentSoundtrack]);

  const playPauseButtonClasses = `relative h-4 w-4 text-accent themed:text-white before:content-[''] before:w-4 before:h-4 before:bg-accent/20 before:themed:bg-white/20 before:rounded-full before:block before:absolute before:inset-0 before:w-[1rem] before:z-0 before:h-[1rem] after:content-[''] after:w-4 after:h-4 after:bg-accent/20 after:themed:bg-white/20 after:rounded-full after:block after:absolute after:inset-0 after:w-[1rem] after:z-0 after:h-[1rem] ${
    playing ? 'before:animate-audioWave1 after:animate-audioWave2' : ''
  }`;

  return (
    <div className="bg-themed-dark px-4 py-3 rounded-xl transition z-10 hover:scale-105">
      <Heading className="flex items-center gap-1 justify-between text-xs cursor-pointer w-44">
        {currentSoundtrack && (
          <audio src={currentSoundtrack.src} ref={audioRef}></audio>
        )}

        <div
          className="flex-1 flex items-center justify-start gap-1"
          onClick={() => setShowSoundtracks((previousState) => !previousState)}
        >
          <SelectorIcon className="w-5 h-5" />

          <span className="text-left w-max">{currentTitle}</span>
        </div>

        <div className="flex items-center gap-3 h-6">
          {playing && !showSoundtracks && <AnimatedSoundbarsIcon />}

          {!playing && (
            <Button
              variant="icon"
              className={playPauseButtonClasses}
              onClick={playSoundtrackHandler}
            >
              <PlayIcon className="w-5 h-5" />
            </Button>
          )}

          {playing && (
            <Button
              variant="icon"
              className={playPauseButtonClasses}
              onClick={pauseSoundtrackHandler}
            >
              <PauseIcon className="w-5 h-5" />
            </Button>
          )}
        </div>
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
                    className="flex items-center justify-between gap-1 cursor-pointer"
                    onClick={(e) => playPauseSoundtrackHandler(e, soundtrack)}
                  >
                    <span className="flex items-center gap-1">
                      <VolumeUpIcon className="w-3 h-3 text-accent themed:text-white" />
                      {soundtrack.title}
                    </span>

                    {soundtrack.title === currentSoundtrack?.title &&
                      playing && <AnimatedSoundbarsIcon />}
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
