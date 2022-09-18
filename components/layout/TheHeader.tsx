import Link from 'next/link';
import React, { useContext } from 'react';
import Logo from '../svg/Logo';
import SelectASoundtrack from '../SelectASoundtrack';
import CurrentSound from '../audio/CurrentSound';
import SpringBounceWhenInView from '../animation/SpringBounceWhenInView';
import InteractiveAudio from '../InteractiveAudio';
import AudioContext from '../../store/audioContext';

const TheHeader: React.FC = () => {
  const audioCtx = useContext(AudioContext);

  return (
    <React.Fragment>
      <CurrentSound />

      <header className="relative flex items-start justify-between p-4 w-full h-20 z-40">
        <div className="flex-1"></div>

        <div className="flex items-center justify-center transition active:scale-95">
          <div className="flex-1 flex items-center justify-center relative bg-themed-dark themed:text-white p-2 rounded-full">
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
              <SelectASoundtrack />
            </SpringBounceWhenInView>
          )}

          <InteractiveAudio />
        </div>
      </header>
    </React.Fragment>
  );
};

export default TheHeader;
