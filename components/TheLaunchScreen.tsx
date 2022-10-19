import React, { useState, useRef, useEffect } from 'react';

const TheLaunchScreen: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const audioRef = useRef<null | HTMLAudioElement>(null);

  useEffect(() => {
    setMounted(true);

    setTimeout(() => {
      setMounted(false);
    }, 1500);

    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (mounted && audioRef.current) audioRef.current.play();
  }, [mounted]);

  return mounted ? (
    <div className="fixed top-0 left-0 bottom-0 right-0 flex justify-center items-center z-50 bg-accent bg-themed">
      <audio src="/audio/nintendo-switch-click.mp3" ref={audioRef} />
      <video autoPlay muted className="animate-ping animation-delay-700">
        <source
          src="/videos/nintendo-switch-logo-animation-intro.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  ) : null;
};

export default TheLaunchScreen;
