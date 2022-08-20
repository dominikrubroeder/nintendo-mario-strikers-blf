import React, { useContext } from 'react';
import { PlayIcon, VolumeOffIcon, VolumeUpIcon } from '@heroicons/react/solid';
import BaseToggle from './base/BaseToggle';
import AppContext from '../store/app-context';
import Accordion from './Accordion';
import SoundContext from '../store/soundContext';
import Button from './base/Button';

const InteractiveAudio: React.FC = () => {
  const appCtx = useContext(AppContext);
  const soundCtx = useContext(SoundContext);

  return (
    <Accordion
      title={
        <div className="flex items-center gap-2 justify-between text-xs cursor-pointer">
          <span className="w-max text-xs">Interaktives Audio</span>

          <BaseToggle
            enabled={appCtx.hasInteractiveAudio}
            enabledIcon={<VolumeUpIcon className="w-3 h-3"></VolumeUpIcon>}
            disabledIcon={<VolumeOffIcon className="w-3 h-3"></VolumeOffIcon>}
            onClick={appCtx.toggleInteractiveAudio}
          />
        </div>
      }
      className="w-48"
    >
      <p className="text-xs">
        Aktivierst du <b>interaktives Audio</b> so erhälst du eine bessere User
        Experience beim Interagieren mit dieser Website.
        <br />
        <br />
        Lasse beispielsweise einen&nbsp;
        <Button
          variant="unstyled"
          className="text-accent text-left"
          onClick={() => soundCtx?.setSound('/audio/soundtracks/main-menu.mp3')}
        >
          <PlayIcon className="w-4 h-4 inline-block mr-0.5" />
          Soundtrack im Hintergrund laufen
        </Button>
        oder
        <Button
          variant="unstyled"
          className=" text-accent text-left"
          onClick={() => soundCtx?.setSound('/audio/nintendo-woohoo.wav')}
        >
          <PlayIcon className="w-4 h-4 inline-block mr-0.5" />
          höre einen typischen Nintendo Sound
        </Button>
        bei Button-Klicks und weiteren Aktionen.
      </p>
    </Accordion>
  );
};

export default InteractiveAudio;
