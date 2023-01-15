import { FC, useContext, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { soundtracks } from '../data/audio';
import AudioContext from '../store/audioContext';
import characters from '../data/characters';
import AppContext from '../store/appContext';
import Image from 'next/image';
import AnimatedSoundbarsIcon from './AnimatedSoundbarsIcon';
import { SpeakerWaveIcon } from '@heroicons/react/24/solid';
import PauseAudioButton from './mini-audio-player/controls/PauseAudioButton';
import PlayAudioButton from './mini-audio-player/controls/PlayAudioButton';
import Button from './ui/Button';

interface FloatingActionBarProps {
  shouldBeVisible?: boolean;
}

const FloatingActionBar: FC<FloatingActionBarProps> = ({ shouldBeVisible }) => {
  const audioCtx = useContext(AudioContext);
  const appCtx = useContext(AppContext);
  const [showCharacterMenu, setShowCharacterMenu] = useState(false);
  const [showSoundtracksMenu, setShowSoundtracksMenu] = useState(false);
  const character = characters.find(
    (character) => character.id === appCtx?.selectedCharacter
  );

  const currentSoundtrack = soundtracks.find(
    (soundtrack) => soundtrack.src === audioCtx?.soundtrack
  );

  return (
    <AnimatePresence>
      {shouldBeVisible && (
        <motion.div
          key="actionBarWrapper"
          className="fixed left-0 right-0 bottom-4 z-50 flex w-full items-center justify-center gap-4 transition"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: [-10, 100] }}
          transition={{
            ease: 'easeInOut',
          }}
        >
          <motion.div
            key="actionBar"
            className="cursor-pointer rounded-full bg-accent p-4 transition-all active:scale-95 themed:bg-signal"
          >
            <motion.div
              key="actionBarContent"
              className="flex items-center justify-center"
              initial={{ opacity: 0, width: '0' }}
              animate={{ opacity: 1, width: 'auto' }}
              exit={{ opacity: 0, width: '0' }}
              transition={{
                type: 'spring',
                damping: 20,
                stiffness: 400,
                delay: 0.6,
              }}
            >
              <div className="flex items-center justify-center gap-4">
                {character && (
                  <AnimatePresence>
                    <motion.div
                      key="characterControl"
                      className="leading-1 absolute z-10 flex h-12 w-12 items-center justify-center rounded-full bg-accent-dark"
                      initial={{ x: 0, scale: 0.3 }}
                      animate={{ x: -156, scale: 1 }}
                      exit={{ x: 0, scale: 0.3 }}
                      transition={{
                        type: 'spring',
                        damping: 20,
                        stiffness: 400,
                        delay: 1,
                      }}
                      onClick={() =>
                        setShowCharacterMenu((previousState) => !previousState)
                      }
                    >
                      <Image
                        src={`/images/characters/NSwitch-character-sketch-${character?.id}.png`}
                        alt={`${character?.name} team thumbnail`}
                        width="32"
                        height="32"
                        draggable={false}
                        className="relative z-10"
                      />

                      <AnimatePresence>
                        {showCharacterMenu && (
                          <motion.div
                            key="characterMenu"
                            initial={{
                              opacity: 0,
                              visibility: 'hidden',
                              y: 0,
                            }}
                            animate={{
                              opacity: 1,
                              visibility: 'visible',
                              y: -64,
                            }}
                            exit={{
                              opacity: 0,
                              height: 0,
                              overflow: 'hidden',
                              scale: 0,
                              y: 0,
                            }}
                            className="absolute bottom-0 z-0 rounded-2xl bg-accent-dark p-4"
                          >
                            <ul className="grid h-64 gap-2 overflow-hidden overflow-y-auto">
                              <li className="flex w-full min-w-max cursor-pointer items-center gap-1 rounded-full bg-accent p-2 font-bold uppercase transition">
                                <Image
                                  src={`/images/characters/NSwitch-character-sketch-${character?.id}.png`}
                                  width="24"
                                  height="24"
                                  alt={`${character?.name} thumbnail`}
                                />

                                <span>{character?.name}</span>
                              </li>

                              <li>
                                <hr className="border-accent px-4" />
                              </li>

                              {characters.map((character) => (
                                <li
                                  key={character.id}
                                  className="flex w-full min-w-max cursor-pointer items-center gap-1 rounded-full p-2 font-bold uppercase transition hover:bg-accent"
                                  onClick={() =>
                                    appCtx?.setCharacter(character.id)
                                  }
                                >
                                  <Image
                                    src={`/images/characters/NSwitch-character-sketch-${character?.id}.png`}
                                    width="24"
                                    height="24"
                                    alt={`${character.name} thumbnail`}
                                  />

                                  <span>{character.name}</span>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </AnimatePresence>
                )}

                <AnimatePresence>
                  <motion.div
                    key="soundtracksControl"
                    className="absolute -z-10 flex h-12 w-12 items-center justify-center rounded-full bg-accent themed:bg-accent-dark"
                    initial={{ x: 0, scale: 0.3 }}
                    animate={{ x: -96, scale: 1 }}
                    exit={{ x: 0, scale: 0.3 }}
                    transition={{
                      type: 'spring',
                      damping: 20,
                      stiffness: 400,
                      delay: 1,
                    }}
                    onClick={() =>
                      setShowSoundtracksMenu((previousState) => !previousState)
                    }
                  >
                    <AnimatedSoundbarsIcon className="bg-white" />

                    <AnimatePresence>
                      {showSoundtracksMenu && (
                        <motion.div
                          key="soundtracksMenu"
                          initial={{
                            opacity: 0,
                            visibility: 'hidden',
                            y: 0,
                          }}
                          animate={{
                            opacity: 1,
                            visibility: 'visible',
                            y: -64,
                          }}
                          exit={{
                            opacity: 0,
                            height: 0,
                            overflow: 'hidden',
                            scale: 0,
                            y: 0,
                            zIndex: -1,
                          }}
                          className="absolute bottom-0 rounded-3xl bg-accent-dark p-4"
                        >
                          <ul className="min-h-64 grid gap-2 overflow-hidden overflow-y-auto text-white">
                            <li className="flex w-full min-w-max cursor-pointer items-center gap-4 rounded-full bg-accent p-2 font-bold uppercase transition">
                              <span className="group flex items-center gap-2">
                                <SpeakerWaveIcon className="h-4 w-4 text-white" />
                                <span>
                                  {currentSoundtrack?.title ?? 'Title screen'}
                                </span>
                              </span>
                              <AnimatedSoundbarsIcon />
                            </li>

                            <li>
                              <hr className="border-accent px-4" />
                            </li>

                            {soundtracks.map(({ title, src }) => (
                              <li
                                key={title}
                                className="group relative flex w-full min-w-max cursor-pointer items-center justify-between gap-1 overflow-hidden rounded-full p-2 font-bold uppercase transition hover:bg-accent"
                                onClick={() => audioCtx?.setSoundtrack(src)}
                              >
                                <span className="z-10">{title}</span>
                                <span className="relative z-20">
                                  {currentSoundtrack?.title === title ? (
                                    <PauseAudioButton />
                                  ) : (
                                    <PlayAudioButton />
                                  )}
                                </span>
                                <span className="absolute left-0 bottom-0 z-0 h-full w-0 bg-accent transition-all duration-300 group-hover:w-full"></span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </AnimatePresence>

                <Button
                  variant="plain"
                  href="/buy-mario-strikers-battle-league-football"
                  className="z-50 whitespace-nowrap bg-accent p-0 text-white themed:bg-signal"
                  sound="coin"
                >
                  Vorbestellen
                </Button>

                <AnimatePresence>
                  <motion.div
                    key="audioControls"
                    className="absolute -z-10 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white themed:bg-accent-dark"
                    initial={{ x: 0, scale: 0.3 }}
                    animate={{ x: 96, scale: 1 }}
                    exit={{ x: 0, scale: 0.3 }}
                    transition={{
                      type: 'spring',
                      damping: 20,
                      stiffness: 400,
                      delay: 1,
                    }}
                  >
                    {!audioCtx?.isPlaying && <PlayAudioButton />}

                    {audioCtx?.isPlaying && <PauseAudioButton />}
                  </motion.div>
                </AnimatePresence>

                <AnimatePresence>
                  <motion.div
                    key="interactiveAudioControl"
                    className="absolute -z-10 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white themed:bg-accent-dark"
                    initial={{ x: 0, scale: 0.3 }}
                    animate={{ x: 156, scale: 1 }}
                    exit={{ x: 0, scale: 0.3 }}
                    transition={{
                      type: 'spring',
                      damping: 20,
                      stiffness: 400,
                      delay: 1,
                    }}
                  >
                    <SpeakerWaveIcon className="h-4 w-4 text-white" />
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingActionBar;
