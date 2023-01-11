import React, { useContext, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  SpeakerWaveIcon,
  PlayIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/solid';
import AnimatedSoundbarsIcon from '../AnimatedSoundbarsIcon';
import AudioContext from '../../store/audioContext';
import { soundtracks } from '../../data/audio';
import PauseAudioButton from './controls/PauseAudioButton';
import PlayAudioButton from './controls/PlayAudioButton';

const MiniAudioPlayer: React.FC = () => {
  const audioCtx = useContext(AudioContext);
  const [showSoundtracks, setShowSoundtracks] = useState(false);
  const currentSoundtrack = soundtracks.find(
    ({ src }) => src === audioCtx?.soundtrack
  );

  return (
    <div
      className={`z-40 w-56 bg-gray-100 themed:bg-accent-dark ${
        showSoundtracks ? 'rounded-xl' : 'interactive rounded-3xl'
      }`}
    >
      <header className="flex cursor-pointer items-center justify-between gap-2 px-4 py-3 text-xs">
        <div
          onClick={() => setShowSoundtracks((previousState) => !previousState)}
          className="flex flex-1 gap-1 "
        >
          <ChevronDownIcon className="icon" />

          <span className="w-max text-left">{currentSoundtrack?.title}</span>
        </div>

        <div className="flex h-6 items-center gap-3">
          {audioCtx?.isPlaying && !showSoundtracks && <AnimatedSoundbarsIcon />}

          {!audioCtx?.isPlaying && <PlayAudioButton />}

          {audioCtx?.isPlaying && <PauseAudioButton />}
        </div>
      </header>

      <AnimatePresence>
        {showSoundtracks && (
          <motion.div
            key="soundtrack"
            initial={{ opacity: 0, height: '0' }}
            animate={{
              opacity: 1,
              height: 'auto',
            }}
            exit={{
              opacity: 1,
              height: '0',
              overflow: 'hidden',
            }}
          >
            <div className="grid gap-4">
              <div className="px-4 text-xs">
                <header className="mb-2">Mario Strikers: BLF</header>

                <ul className="grid gap-2">
                  {soundtracks.map(({ title, src }) => (
                    <li
                      key={title}
                      className="flex cursor-pointer items-center justify-between gap-1"
                      onClick={() => audioCtx?.setSoundtrack(src)}
                    >
                      <span className="flex items-center gap-1">
                        <SpeakerWaveIcon className="h-3 w-3 text-accent themed:text-white" />
                        {title}
                      </span>

                      {title === audioCtx?.soundtrack &&
                        audioCtx?.isPlaying && <AnimatedSoundbarsIcon />}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-4 px-4 text-xs">
                <header className="mb-2">Nintendo classic</header>

                <ul className="grid gap-2">
                  <li className="flex cursor-pointer items-center gap-1">
                    <SpeakerWaveIcon className="h-3 w-3 text-accent themed:text-white" />
                    Mario theme
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MiniAudioPlayer;
