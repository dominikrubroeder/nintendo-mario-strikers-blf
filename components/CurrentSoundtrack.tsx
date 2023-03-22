import React, { useContext } from "react";
import AudioContext from "../store/audioContext";
import { soundtracks } from "../data/audio";

const CurrentSoundtrack: React.FC = () => {
  const audioCtx = useContext(AudioContext);

  return (
    <audio
      id="currentSoundtrack"
      src={audioCtx?.soundtrack ?? soundtracks[0].src}
      loop
    ></audio>
  );
};

export default CurrentSoundtrack;
