import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Button from './base/Button';
import ReleaseCountdown from './ReleaseCountdown';
import TheGameTrailerOverlay from './TheGameTrailerOverlay';
import gameCover from '../public/images/product/mario-strikers-battle-league-football-cover.jpg';
import Heading from './typography/Heading';
import { ArrowRightIcon, PlayIcon } from '@heroicons/react/solid';

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
          <ReleaseCountdown />
          <Heading as="h1">
            Mario Strikers: Battle League Football | Nintendo Switch
          </Heading>

          <div className="flex items-center justify-center gap-2">
            <Button
              variant="contained"
              href="/buy-mario-strikers-battle-league-football"
              sound="coin"
            >
              <span className="flex items-center gap-1">
                Jetzt vorbestellen
                <ArrowRightIcon className="w-4 h-4 text-themed" />
              </span>
            </Button>

            <Button
              variant="text"
              href="/mario-strikers-battle-league-football"
              sound="nintendo-woho"
            >
              <span className="flex items-center gap-1">
                Mehr infos <ArrowRightIcon className="w-4 h-4 text-themed" />
              </span>
            </Button>

            <Button
              variant="text"
              onClick={() => setShowYoutubeGameTrailer(true)}
              sound="nintendo-woho"
            >
              <span className="flex items-center gap-1">
                Trailer ansehen <PlayIcon className="w-4 h-4 text-themed" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheHero;
