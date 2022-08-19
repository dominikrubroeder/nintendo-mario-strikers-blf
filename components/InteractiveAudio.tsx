import React, { useContext } from 'react';
import { VolumeOffIcon, VolumeUpIcon } from '@heroicons/react/solid';
import BaseToggle from './base/BaseToggle';
import AppContext from '../store/app-context';
import Accordion from './Accordion';

const InteractiveAudio: React.FC = () => {
  const appCtx = useContext(AppContext);

  return (
    <Accordion
      title={
        <div className="flex items-center gap-1 justify-between text-xs cursor-pointer">
          <div className="flex items-center gap-2">
            <span className="w-max text-xs">Interaktives Audio</span>

            <BaseToggle
              enabled={appCtx.hasInteractiveAudio}
              enabledIcon={<VolumeUpIcon className="w-3 h-3"></VolumeUpIcon>}
              disabledIcon={<VolumeOffIcon className="w-3 h-3"></VolumeOffIcon>}
              onClick={appCtx.toggleInteractiveAudio}
            />
          </div>
        </div>
      }
    >
      <p className="text-xs">Mehr Infos zu interaktivem Audio</p>
    </Accordion>
  );
};

export default InteractiveAudio;
