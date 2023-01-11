import React, { useContext } from 'react';
import AudioContext from '../../../store/audioContext';
import { PlayIcon } from '@heroicons/react/24/solid';

const PlayAudioButton: React.FC = () => {
  const audioCtx = useContext(AudioContext);

  return (
    <button onClick={() => audioCtx?.playAudio()}>
      <PlayIcon className="icon relative text-white" />
    </button>
  );
};

export default PlayAudioButton;
