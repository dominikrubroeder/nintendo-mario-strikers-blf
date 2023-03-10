import React, { useContext, useEffect, useRef, useState } from "react";
import AudioContext from "../store/audioContext";
import { soundtracks } from "../data/audio";

const CurrentSoundtrack: React.FC = () => {
  const audioRef = useRef<null | HTMLAudioElement>(null);
  const audioCtx = useContext(AudioContext);
  const [mounted, setMounted] = useState(false);

  // https://developer.chrome.com/blog/play-request-was-interrupted/

  useEffect(() => {
    setMounted(true);

    if (audioCtx?.soundtrack && audioRef.current) {
      audioRef.current.play();
    }

    return () => setMounted(false);
  }, [audioCtx?.soundtrack]);

  return mounted ? (
    <audio
      id="currentSoundtrack"
      ref={audioRef}
      src={audioCtx?.soundtrack ?? soundtracks[0].src}
    ></audio>
  ) : null;
};

export default CurrentSoundtrack;
