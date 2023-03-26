import React, { useContext } from "react";
import AudioContext from "../store/audioContext";

interface AnimatedSoundbarsIconProps {
  className?: string;
}

const AnimatedSoundbarsIcon: React.FC<AnimatedSoundbarsIconProps> = ({
  className,
}) => {
  const audioCtx = useContext(AudioContext);

  return audioCtx?.isPlaying ? (
    <div className="grid grid-cols-3 gap-0.5">
      <span className="relative h-4 w-1 rounded-t-full">
        <span
          className={`absolute bottom-0 left-0 right-0 w-full rounded-t-full bg-accent themed:bg-white ${
            className ? className : ""
          } ${audioCtx?.isPlaying ? "animate-growthHeight" : ""}`}
        ></span>
      </span>
      <span className="relative h-4 w-1 rounded-t-full">
        <span
          className={`absolute bottom-0 left-0 right-0 w-full rounded-t-full bg-accent animation-delay-200 themed:bg-white ${
            className ? className : ""
          } ${audioCtx?.isPlaying ? "animate-growthHeight" : ""}`}
        ></span>
      </span>
      <span className="relative h-4 w-1 rounded-t-full">
        <span
          className={`absolute bottom-0 left-0 right-0 w-full rounded-t-full bg-accent animation-delay-300 themed:bg-white ${
            className ? className : ""
          } ${audioCtx?.isPlaying ? "animate-growthHeight" : ""}`}
        ></span>
      </span>
    </div>
  ) : null;
};

export default AnimatedSoundbarsIcon;
