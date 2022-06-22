import Link from 'next/link';
import { useContext, useEffect } from 'react';
import BaseToggle from '../base/BaseToggle';
import AppContext from '../../store/app-context';
import { VolumeUpIcon, VolumeOffIcon } from '@heroicons/react/solid';

export default function TheHeader() {
  const appCtx = useContext(AppContext);

  return (
    <header className="fixed top-0 flex items-center justify-between p-4 w-full z-40 themed:border-b-transparent">
      <div className="w-40"></div>
      <div className="flex items-center justify-center relative bg-white/50 backdrop-blur p-2 rounded-full">
        <Link href="/">
          <img
            src="/images/logos/nintendo-logo-red.svg"
            className="h-6 hover:cursor-pointer"
            alt="Nintendo logo"
          />
        </Link>
      </div>
      <div className="flex items-center justify-center relative bg-white/50 backdrop-blur p-2 rounded-full">
        <BaseToggle
          label="Interaktives Audio"
          enabledIcon={<VolumeUpIcon className="w-3 h-3"></VolumeUpIcon>}
          disabledIcon={<VolumeOffIcon className="w-3 h-3"></VolumeOffIcon>}
          onClick={appCtx.toggleInteractiveAudio}
        />
      </div>
    </header>
  );
}
