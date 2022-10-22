import Link from 'next/link';
import React, { useContext } from 'react';
import Logo from '../Logo';
import TheAudioPlayer from '../TheAudioPlayer';
import CurrentSound from '../CurrentSound';
import SpringBounceWhenInView from '../SpringBounceWhenInView';
import InteractiveAudio from '../InteractiveAudio';
import AudioContext from '../../store/audioContext';

const TheHeader: React.FC = () => {
  const audioCtx = useContext(AudioContext);

  return (
    <React.Fragment>
      <CurrentSound />

      <header className="relative flex items-start justify-between p-4 flex-wrap w-full h-20 z-40">
        <div className="flex-1"></div>

        <div className="flex items-center justify-center transition active:scale-95">
          <div className="flex-1 flex items-center justify-center relative themed:bg-accent-dark themed:text-white p-2 rounded-full">
            <Link href="/">
              <a>
                <Logo />
              </a>
            </Link>
          </div>
        </div>

        <div className="flex-1 flex items-start justify-end gap-2">
          {audioCtx?.hasInteractiveAudio && (
            <SpringBounceWhenInView>
              <TheAudioPlayer />
            </SpringBounceWhenInView>
          )}

          <InteractiveAudio />
        </div>
      </header>
    </React.Fragment>
  );
};

export default TheHeader;
