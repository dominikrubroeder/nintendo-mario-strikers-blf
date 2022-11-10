import React, { useContext } from 'react';
import {
  PlayIcon,
  SpeakerXMarkIcon,
  SpeakerWaveIcon,
} from '@heroicons/react/24/solid';
import Toggle from '../ui/Toggle';
import Accordion from '../ui/Accordion';
import AudioContext from '../../store/audioContext';
import Button from '../ui/Button';

const InteractiveAudioSetting: React.FC = () => {
  const audioCtx = useContext(AudioContext);

  return (
    <Accordion
      title={
        <div className="flex cursor-pointer items-center justify-between gap-2 text-xs">
          <span className="w-max text-xs">Interaktives Audio</span>

          <Toggle
            enabled={audioCtx?.hasInteractiveAudio ?? true}
            enabledIcon={
              <SpeakerWaveIcon className="h-3 w-3"></SpeakerWaveIcon>
            }
            disabledIcon={
              <SpeakerXMarkIcon className="h-3 w-3"></SpeakerXMarkIcon>
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
          className="text-left text-accent themed:text-white"
          onClick={() => audioCtx?.setSound('/audio/soundtracks/main-menu.mp3')}
        >
          <PlayIcon className="mr-0.5 inline-block h-4 w-4" />
          Soundtrack im Hintergrund laufen
        </Button>
        oder
        <Button
          variant="unstyled"
          className=" text-left text-accent themed:text-white"
          onClick={() => audioCtx?.setSound('/audio/nintendo-woohoo.wav')}
        >
          <PlayIcon className="mr-0.5 inline-block h-4 w-4" />
          höre einen typischen Nintendo Sound
        </Button>
        bei Button-Klicks und weiteren Aktionen.
      </p>
    </Accordion>
  );
};

export default InteractiveAudioSetting;