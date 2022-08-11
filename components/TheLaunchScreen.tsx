import { useState, useRef, useEffect } from 'react';

export default function TheLaunchScreen() {
  const [pageLoaded, setPageLoaded] = useState(false);
  const audioRef = useRef();

  useEffect(() => {
    if (pageLoaded) audioRef.current.play();

    setPageLoaded(true);
  });

  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 flex justify-center items-center z-50 bg-accent">
      {pageLoaded && (
        <audio src="/audio/nintendo-switch-click.mp3" ref={audioRef} />
      )}
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
