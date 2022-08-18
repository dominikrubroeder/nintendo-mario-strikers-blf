import Link from 'next/link';
import React, { useContext } from 'react';
import BaseToggle from '../base/BaseToggle';
import AppContext from '../../store/app-context';
import { VolumeUpIcon, VolumeOffIcon } from '@heroicons/react/solid';
import Logo from '../svg/Logo';
import SelectASoundtrack from '../SelectASoundtrack';
import CurrentSound from '../audio/CurrentSound';

const TheHeader: React.FC = () => {
  const appCtx = useContext(AppContext);

  return (
    <React.Fragment>
      <CurrentSound />

      <header className="flex items-start justify-between p-4 w-full z-40 h-20 themed:border-b-transparent">
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
          <SelectASoundtrack />

          <div className="flex items-center justify-center relative bg-themed-dark themed:text-white p-2 rounded-full">
            <BaseToggle
              label="Interaktives Audio"
              enabledIcon={<VolumeUpIcon className="w-3 h-3"></VolumeUpIcon>}
              disabledIcon={<VolumeOffIcon className="w-3 h-3"></VolumeOffIcon>}
              onClick={appCtx.toggleInteractiveAudio}
            />
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default TheHeader;
