import { useEffect, useState } from 'react';
import PulsingDots from '../../components/PulsingDots';

export default function checkout() {
  const [isLoading, setIsLoading] = useState(true);
  const [showLoadingVideo, setShowLoadingVideo] = useState(true);

  useEffect(() => {
    const checkoutScreenTimeout = setTimeout(hideLaunchScreen, 8000);

    function hideLaunchScreen() {
      setShowLoadingVideo(false);
      setIsLoading(false);
      clearTimeout(checkoutScreenTimeout);
    }
  });

  return (
    <section className="flex justify-center items-center min-h-screen">
      {!isLoading && <div>Show Checkout Screen</div>}

      {/* Load team cover full screen  ...*/}
      {isLoading && (
        <div className="grid gap-2 text-center">
          <h1>Checkout</h1> <PulsingDots size={8} />
        </div>
      )}

      {showLoadingVideo && (
        <video
          autoPlay
          muted
          className="fixed right-0 bottom-0 min-h-screen min-w-screen z-50"
        >
          <source
            src="/videos/nintendo-switch-mario-strikers-blf-mario-smash.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      )}
    </section>
  );
}