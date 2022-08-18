import React, { useContext, useEffect, useRef, useState } from 'react';
import SoundContext from '../../store/soundContext';
import { createPortal } from 'react-dom';

const CurrentSound: React.FC = () => {
  const audioRef = useRef<null | HTMLAudioElement>(null);
  const soundCtx = useContext(SoundContext);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    if (soundCtx?.sound && audioRef.current) {
      audioRef.current.play();
    }

    return () => setMounted(false);
  }, [soundCtx?.sound]);

  return mounted
    ? createPortal(
        <audio ref={audioRef} src={soundCtx?.sound ?? undefined}></audio>,
        document.getElementById('sound')!
      )
    : null;
};

export default CurrentSound;
