import Link from 'next/link';
import { FC, useContext } from 'react';
import Logo from '../svg/Logo';
import MiniAudioPlayer from '../audio/MiniAudioPlayer';
import CurrentSound from '../audio/CurrentSound';
import SpringBounceWhenInView from '../animation/SpringBounceWhenInView';
import InteractiveAudioSetting from '../audio/InteractiveAudioSetting';
import AudioContext from '../../store/audioContext';
import { useRouter } from 'next/router';
import Select from '../ui/Select';

const Header: FC = () => {
  const router = useRouter();
  const audioCtx = useContext(AudioContext);

  return (
    <>
      <CurrentSound />

      <header className="relative z-40 flex h-20 w-full flex-wrap items-center justify-between p-4">
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

        <div className="flex flex-1 items-center justify-end">
          <Select
            options={[
              { option: 'Mario', value: 'mario' },
              { option: 'Luigi', value: 'luigi' },
            ]}
          />
        </div>
      </header>
    </>
  );
};

export default Header;
