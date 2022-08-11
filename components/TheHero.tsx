import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Button from './base/Button';
import TheCountdown from './TheCountdown';
import TheGameTrailerOverlay from './TheGameTrailerOverlay';
import gameCover from '../public/images/product/mario-strikers-battle-league-football-cover.jpg';

const TheHero: React.FC = () => {
  const [showYouTubeGameTrailer, setShowYoutubeGameTrailer] = useState(false);

  return (
    <section className="grid items-center justify-center h-[95vh] p-4 overflow-hidden">
      {showYouTubeGameTrailer && (
        <TheGameTrailerOverlay
          closeOverlay={() => setShowYoutubeGameTrailer(false)}
        />
      )}

      <div className="text-center grid gap-4 md:gap-8">
        <motion.div
          animate={{ opacity: [0, 1], y: [-10, 0] }}
          exit={{ opacity: [1, 0] }}
          transition={{ delay: 1.5 }}
        >
          <Link href="/buy-mario-strikers-battle-league-football">
            <a>
              <Image
                src={gameCover}
                alt="Mario Strikers: Battle League Football | Nintendo Switch"
                className="m-auto max-h-[65vh] pt-12 md:pt-0 cursor-pointer"
                width={320}
                height={518}
              />
            </a>
          </Link>
        </motion.div>

        <div className="grid gap-2 sticky top-0">
          <TheCountdown />
          <h1>Mario Strikers: Battle League Football | Nintendo Switch</h1>

          <div className="flex items-center justify-center gap-2">
            <Button
              variant="contained"
              href="/buy-mario-strikers-battle-league-football"
              sound="coin"
            >
              Jetzt vorbestellen
            </Button>

            <Button
              variant="text"
              href="/mario-strikers-battle-league-football"
              sound="nintendo-woho"
            >
              Mehr infos
            </Button>

            <Button
              variant="text"
              onClick={() => setShowYoutubeGameTrailer(true)}
              sound="nintendo-woho"
            >
              <div className="flex items-center gap-1">
                <span>Trailer ansehen</span>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheHero;
