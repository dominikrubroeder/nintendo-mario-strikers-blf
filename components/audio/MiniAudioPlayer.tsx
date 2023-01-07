import React, { useContext, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  SpeakerWaveIcon,
  PlayIcon,
  PauseIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/solid';
import AnimatedSoundbarsIcon from '../AnimatedSoundbarsIcon';
import AudioContext from '../../store/audioContext';
import { Soundtrack, soundtracks } from '../../data/audio';

const MiniAudioPlayer: React.FC = () => {
  const audioCtx = useContext(AudioContext);
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

    setCurrentSoundtrack(soundtrack);
    setShowSoundtracks(false);
  };

  const playSoundtrackHandler = () => {
    if (currentSoundtrack) {
      audioRef.current?.play();
      setPlaying(true);
      return;
    }

    setCurrentSoundtrack(soundtracks[0]);
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

  const playPauseButtonClasses = `relative before:content-[''] before:w-5 before:h-5 before:bg-accent themed:before:bg-white/20 themed:bg-accent-dark themed:before:bg-white/20 before:rounded-full before:block before:absolute before:inset-0 before:w-[1rem] before:z-0 before:h-[1rem] after:content-[''] after:w-5 after:h-5 after:bg-accent themed:after:bg-white/20 themed:after:bg-white/20 after:rounded-full after:block after:absolute after:inset-0 after:w-[1rem] after:z-0 after:h-[1rem] ${
    playing
      ? 'before:animate-audioWave1 after:animate-audioWave2'
      : 'after:content-none before:content-none'
  }`;

  return (
    <div
      className={`z-40 w-56 bg-accent-soft px-4 py-3 transition themed:bg-accent-dark ${
        showSoundtracks ? 'rounded-xl' : 'interactive rounded-3xl'
      }`}
    >
      <header className="flex cursor-pointer items-center justify-between gap-2 text-xs">
        {currentSoundtrack && (
          <audio src={currentSoundtrack.src} ref={audioRef}></audio>
        )}

        <div
          onClick={() => setShowSoundtracks((previousState) => !previousState)}
          className="flex flex-1 gap-1 "
        >
          <ChevronDownIcon className="icon" />

          <span className="w-max text-left">{currentTitle}</span>
        </div>

        <div className="flex h-6 items-center gap-3">
          {playing && !showSoundtracks && <AnimatedSoundbarsIcon />}

          {!playing && (
            <div
              className={playPauseButtonClasses}
              onClick={playSoundtrackHandler}
            >
              <PlayIcon className="icon text-accent themed:text-white" />
            </div>
          )}

          {playing && (
            <div
              className={playPauseButtonClasses}
              onClick={pauseSoundtrackHandler}
            >
              <PauseIcon className="icon relative text-white" />
            </div>
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
            <div className="mt-4 mb-4 text-xs">
              <header className="mb-2">Mario Strikers: BLF</header>

              <ul className="grid gap-2">
                {soundtracks.map((soundtrack) => (
                  <li
                    key={soundtrack.title}
                    className="flex cursor-pointer items-center justify-between gap-1"
                    onClick={(e) => playPauseSoundtrackHandler(e, soundtrack)}
                  >
                    <span className="flex items-center gap-1">
                      <SpeakerWaveIcon className="h-3 w-3 text-accent themed:text-white" />
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
                <li className="flex cursor-pointer items-center gap-1">
                  <SpeakerWaveIcon className="h-3 w-3 text-accent themed:text-white" />
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

export default MiniAudioPlayer;
