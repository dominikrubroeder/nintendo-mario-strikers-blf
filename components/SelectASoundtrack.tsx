import React, { useEffect, useRef, useState } from 'react';
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
    if (currentSoundtrack) audioRef.current?.play();
  }, [currentSoundtrack]);

  return (
    <div>
      <Heading
        className="flex items-center gap-1"
        onClick={() => setShowSoundtracks((previousState) => !previousState)}
      >
        Select a soundtrack: <SelectorIcon className="w-5 h-5" />
      </Heading>

      {showSoundtracks && (
        <div>
          <div>
            <header>Mario Strikers: BLF</header>
            <ul>
              {soundtracksData.map((soundtrack) => (
                <li
                  key={soundtrack.title}
                  className="flex items-center gap-1 cursor-pointer p-2"
                  onClick={() => playSoundtrackHandler(soundtrack)}
                >
                  {soundtrack &&
                    soundtrack.title === currentSoundtrack?.title && (
                      <audio src={soundtrack!.src} ref={audioRef}></audio>
                    )}
                  <VolumeUpIcon className="w-5 h-5 text-accent" />
                  {soundtrack.title}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <header>Nintendo classic</header>
            <ul>
              <li className="flex items-center gap-1">
                <VolumeUpIcon className="w-5 h-5 text-accent" />
                Mario theme
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectASoundtrack;
