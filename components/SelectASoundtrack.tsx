import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  SpeakerWaveIcon,
  PlayIcon,
  PauseIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/solid';
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

  const playPauseButtonClasses = `relative text-white before:content-[''] before:w-5 before:h-5 before:bg-white/20 themed:bg-accent-dark themed:before:bg-white/20 before:rounded-full before:block before:absolute before:inset-0 before:w-[1rem] before:z-0 before:h-[1rem] after:content-[''] after:w-5 after:h-5 after:bg-white/20 themed:after:bg-white/20 after:rounded-full after:block after:absolute after:inset-0 after:w-[1rem] after:z-0 after:h-[1rem] ${
    playing ? 'before:animate-audioWave1 after:animate-audioWave2' : ''
  }`;

  return (
    <div
      className={`bg-accent themed:bg-accent-dark px-4 py-3 rounded-xl transition z-10 w-56 ${
        showSoundtracks ? '' : 'interactive'
      }`}
    >
      <header className="flex items-center gap-2 justify-between text-xs cursor-pointer">
        {currentSoundtrack && (
          <audio src={currentSoundtrack.src} ref={audioRef}></audio>
        )}

        <Button
          variant="icon"
          onClick={() => setShowSoundtracks((previousState) => !previousState)}
          className="flex-1"
        >
          <ChevronDownIcon className="icon" />

          <span className="text-left w-max">{currentTitle}t</span>
        </Button>

        <div className="flex items-center gap-3 h-6">
          {playing && !showSoundtracks && <AnimatedSoundbarsIcon />}

          {!playing && (
            <Button
              variant="icon"
              className={playPauseButtonClasses}
              onClick={playSoundtrackHandler}
            >
              <PlayIcon className="icon" />
            </Button>
          )}

          {playing && (
            <Button
              variant="icon"
              className={playPauseButtonClasses}
              onClick={pauseSoundtrackHandler}
            >
              <PauseIcon className="icon" />
            </Button>
          )}
        </div>
      </header>

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
                      <SpeakerWaveIcon className="w-3 h-3 text-accent themed:text-white" />
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
                  <SpeakerWaveIcon className="w-3 h-3 text-accent themed:text-white" />
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
