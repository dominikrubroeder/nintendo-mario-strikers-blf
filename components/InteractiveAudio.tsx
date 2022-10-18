import React, { useContext } from 'react';
import {
  PlayIcon,
  SpeakerXMarkIcon,
  SpeakerWaveIcon,
} from '@heroicons/react/24/solid';
import BaseToggle from './base/BaseToggle';
import Accordion from './Accordion';
import AudioContext from '../store/audioContext';
import Button from './base/Button';

const InteractiveAudio: React.FC = () => {
  const audioCtx = useContext(AudioContext);

  return (
    <Accordion
      title={
        <div className="flex items-center gap-2 justify-between text-xs cursor-pointer">
          <span className="w-max text-xs">Interaktives Audio</span>

          <BaseToggle
            enabled={audioCtx?.hasInteractiveAudio ?? true}
            enabledIcon={
              <SpeakerWaveIcon className="w-3 h-3"></SpeakerWaveIcon>
            }
            disabledIcon={
              <SpeakerXMarkIcon className="w-3 h-3"></SpeakerXMarkIcon>
            }
            onClick={audioCtx?.toggleInteractiveAudio}
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
          className="text-themed text-left"
          onClick={() => audioCtx?.setSound('/audio/soundtracks/main-menu.mp3')}
        >
          <PlayIcon className="w-4 h-4 inline-block mr-0.5" />
          Soundtrack im Hintergrund laufen
        </Button>
        oder
        <Button
          variant="unstyled"
          className=" text-themed text-left"
          onClick={() => audioCtx?.setSound('/audio/nintendo-woohoo.wav')}
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
