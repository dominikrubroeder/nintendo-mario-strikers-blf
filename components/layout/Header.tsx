import Link from 'next/link';
import { FC, useContext } from 'react';
import Logo from '../svg/Logo';
import MiniAudioPlayer from '../audio/MiniAudioPlayer';
import CurrentSound from '../audio/CurrentSound';
import SpringBounceWhenInView from '../animation/SpringBounceWhenInView';
import InteractiveAudioSetting from '../audio/InteractiveAudioSetting';
import AudioContext from '../../store/audioContext';

const Header: FC = () => {
  const audioCtx = useContext(AudioContext);

  return (
    <>
      <CurrentSound />

      <header className="relative z-40 flex h-20 w-full flex-wrap items-center justify-between p-4">
        {audioCtx?.soundtrack !== null && (
          <div className="flex flex-1 items-start justify-start gap-2">
            <InteractiveAudioSetting />

            <div className="hidden md:inline-block">
              {audioCtx?.hasInteractiveAudio && (
                <SpringBounceWhenInView>
                  <MiniAudioPlayer />
                </SpringBounceWhenInView>
              )}
            </div>
          </div>
        )}

        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center transition active:scale-95">
          <div className="relative flex flex-1 items-center justify-center self-center rounded-full p-2 themed:bg-accent-dark themed:text-white">
            <Link href="/">
              <a>
                <Logo />
              </a>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
