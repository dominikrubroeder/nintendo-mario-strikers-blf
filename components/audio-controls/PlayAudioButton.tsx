import React, { useContext } from "react";
import AudioContext from "../../store/audioContext";
import { PlayIcon } from "@heroicons/react/24/solid";

const PlayAudioButton: React.FC = () => {
  const audioCtx = useContext(AudioContext);

  return !audioCtx?.isPlaying ? (
    <button onClick={() => audioCtx?.playAudio()}>
      <PlayIcon className="icon relative text-white" />
    </button>
  ) : null;
};

export default PlayAudioButton;
