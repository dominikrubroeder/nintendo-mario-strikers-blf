import Link from 'next/link';
import React, { useContext } from 'react';
import BaseToggle from '../base/BaseToggle';
import AppContext from '../../store/app-context';
import { VolumeUpIcon, VolumeOffIcon } from '@heroicons/react/solid';
import Logo from '../svg/Logo';
import SelectASoundtrack from '../SelectASoundtrack';
import CurrentSound from '../audio/CurrentSound';
import SpringBounceWhenInView from '../animation/SpringBounceWhenInView';
import Tooltip from '../Tooltip';
import InteractiveAudio from '../InteractiveAudio';

const TheHeader: React.FC = () => {
  const appCtx = useContext(AppContext);

  return (
    <React.Fragment>
      <CurrentSound />

      <header className="relative flex items-start justify-between p-4 w-full h-20 z-40">
        <div className="flex-1"></div>

        <div className="flex-1 flex items-center justify-center">
          <div className="flex items-center justify-center relative bg-themed-dark themed:text-white p-2 rounded-full">
            <Link href="/">
              <a>
                <Logo />
              </a>
            </Link>
          </div>
        </div>

        <div className="flex-1 flex items-start justify-end gap-2">
          {appCtx.hasInteractiveAudio && (
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
