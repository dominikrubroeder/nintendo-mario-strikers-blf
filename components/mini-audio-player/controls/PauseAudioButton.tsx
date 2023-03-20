import React, { useContext } from "react";
import AudioContext from "../../../store/audioContext";
import { PauseIcon } from "@heroicons/react/24/solid";

const PauseAudioButton: React.FC = () => {
  const audioCtx = useContext(AudioContext);

  const className = `relative before:content-[''] before:w-5 before:h-5 before:bg-accent-dark themed:before:bg-white/20 themed:bg-accent-dark themed:before:bg-white/20 before:rounded-full before:block before:absolute before:inset-0 before:w-[1rem] before:z-0 before:h-[1rem] after:content-[''] after:w-5 after:h-5 after:bg-accent-dark themed:after:bg-white/20 themed:after:bg-white/20 after:rounded-full after:block after:absolute after:inset-0 after:w-[1rem] after:z-0 after:h-[1rem] ${
    audioCtx?.isPlaying
      ? "before:animate-audioWave1 after:animate-audioWave2"
      : "after:content-none before:content-none"
  }`;

  return (
    <button className={className} onClick={() => audioCtx?.pauseAudio()}>
      <PauseIcon className="icon relative text-white" />
    </button>
  );
};

export default PauseAudioButton;
