import React, { useContext, useEffect, useRef, useState } from "react";
import AudioContext from "../store/audioContext";

const CurrentSound: React.FC = () => {
  const audioRef = useRef<null | HTMLAudioElement>(null);
  const audioCtx = useContext(AudioContext);
  const [mounted, setMounted] = useState(false);

  // https://developer.chrome.com/blog/play-request-was-interrupted/

  useEffect(() => {
    setMounted(true);

    if (audioCtx?.sound && audioRef.current) {
      audioRef.current.play();
    }

    return () => setMounted(false);
  }, [audioCtx?.sound]);

  return mounted ? (
    <audio
      ref={audioRef}
      src={audioCtx?.sound ?? "/audio/nintendo-switch-click.mp3"}
    ></audio>
  ) : null;
};

export default CurrentSound;
