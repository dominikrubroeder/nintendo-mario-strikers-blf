import React, { useContext } from "react";
import AudioContext from "../../../store/audioContext";
import { PauseIcon } from "@heroicons/react/24/solid";

const PauseAudioButton: React.FC = () => {
  const audioCtx = useContext(AudioContext);

  return (
    <button
      className={`relative before:absolute before:z-0 before:block before:h-[1rem] before:w-[1rem] before:rounded-full before:bg-accent-dark before:content-[''] after:absolute after:inset-0 after:z-0 after:block after:h-[1rem] after:w-[1rem] after:rounded-full after:bg-accent-dark after:content-[''] themed:before:bg-white/20 themed:after:bg-white/20 ${
        audioCtx?.isPlaying
          ? "before:animate-audioWave1 after:animate-audioWave2"
          : "before:content-none after:content-none"
      }`}
      onClick={() => audioCtx?.pauseAudio()}
    >
      <PauseIcon className="icon relative text-white" />
    </button>
  );
};

export default PauseAudioButton;
