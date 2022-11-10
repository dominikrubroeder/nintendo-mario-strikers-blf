import Link from 'next/link';
import React, { useContext } from 'react';
import Logo from '../svg/Logo';
import MiniAudioPlayer from '../audio/MiniAudioPlayer';
import CurrentSound from '../audio/CurrentSound';
import SpringBounceWhenInView from '../animation/SpringBounceWhenInView';
import InteractiveAudioSetting from '../audio/InteractiveAudioSetting';
import AudioContext from '../../store/audioContext';
import { useRouter } from 'next/router';

const Header: React.FC = () => {
  const router = useRouter();
  const audioCtx = useContext(AudioContext);

  return (
    <React.Fragment>
      <CurrentSound />

      <header className="relative z-40 flex h-20 w-full flex-wrap items-start justify-between p-4">
        <div className="hidden flex-1 lg:flex"></div>

        <div className="flex items-center justify-center transition active:scale-95">
          <div className="relative flex flex-1 items-center justify-center self-center rounded-full p-2 themed:bg-accent-dark themed:text-white">
            {router.pathname === '/auth' ? (
              <Logo />
            ) : (
              <Link href="/">
                <a>
                  <Logo />
                </a>
              </Link>
            )}
          </div>
        </div>

        <div className="flex flex-1 items-start justify-end gap-2">
          <div className="hidden md:inline-block">
            {audioCtx?.hasInteractiveAudio && (
              <SpringBounceWhenInView>
                <MiniAudioPlayer />
              </SpringBounceWhenInView>
            )}
          </div>

          <InteractiveAudioSetting />
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
