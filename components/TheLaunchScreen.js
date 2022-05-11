import { useRef, useEffect } from 'react';

export default function TheLaunchScreen() {
  const audioRef = useRef();

  useEffect(() => {
    audioRef.current.play();
  });

  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 flex justify-center items-center z-50 bg-accent">
      <audio src="/audio/nintendo-switch-click.mp3" ref={audioRef} />
      <video autoPlay muted className="animate-ping animation-delay-700">
        <source
          src="/videos/nintendo-switch-logo-animation-intro.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
