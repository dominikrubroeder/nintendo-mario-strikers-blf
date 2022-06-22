import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import useIsOnScreen from '../hooks/useIsOnScreen';
import BaseButton from './base/BaseButton';
import TheCountdown from './TheCountdown';
import TheGameTrailerOverlay from './TheGameTrailerOverlay';

export default function TheHero(props) {
  const overserableObject = useRef();
  const overserableObjectIsOnScreen = useIsOnScreen(overserableObject);
  const [showYouTubeGameTrailer, setShowYoutubeGameTrailer] = useState(false);

  useEffect(() => {
    if (overserableObjectIsOnScreen) {
      props.setShowStickyBuyBar(false);
    } else {
      props.setShowStickyBuyBar(true);
    }
  }, [overserableObjectIsOnScreen]);

  return (
    <section className="grid items-center justify-center h-[95vh] p-4 overflow-hidden">
      {showYouTubeGameTrailer && (
        <TheGameTrailerOverlay
          closeOverlay={() => setShowYoutubeGameTrailer(false)}
        />
      )}

      <div className="text-center grid gap-4 md:gap-8">
        <Link href="/buy-mario-strikers-battle-league-football">
          <motion.img
            animate={{ opacity: [0, 1], y: [-10, 0] }}
            exit={{ opacity: [1, 0] }}
            transition={{ delay: 1.5 }}
            className="m-auto max-h-[65vh] pt-12 md:pt-0 cursor-pointer"
            src="/images/product/mario-strikers-battle-league-football-cover.jpg"
            alt="Nintendo Switch"
          />
        </Link>
        <div className="grid gap-2 sticky top-0">
          <TheCountdown />
          <h1>Mario Strikers: Battle League Football | Nintendo Switch</h1>
          <div
            className="flex items-center justify-center gap-2"
            ref={overserableObject}
          >
            <BaseButton
              variant="contained"
              isLink
              href="/buy-mario-strikers-battle-league-football"
              playSound
              sound="coin"
            >
              Jetzt vorbestellen
            </BaseButton>

            <BaseButton
              variant="text"
              onClick={() => setShowYoutubeGameTrailer(true)}
              playSound
              sound="nintendo-woho"
            >
              <div className="flex items-center gap-1">
                <span>Trailer ansehen</span>
              </div>
            </BaseButton>
          </div>
        </div>
      </div>
    </section>
  );
}
