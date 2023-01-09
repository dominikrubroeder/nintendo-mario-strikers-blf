import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import ReleaseCountdown from './ReleaseCountdown';
import GameTrailer from './GameTrailer';
import Heading from './typography/Heading';
import { ArrowRightIcon, PlayIcon } from '@heroicons/react/24/solid';

const Hero: React.FC = () => {
  const [showYouTubeGameTrailer, setShowYoutubeGameTrailer] = useState(false);

  return (
    <section className="min-h-screen-header grid items-center justify-center p-4">
      {showYouTubeGameTrailer && (
        <GameTrailer closeOverlay={() => setShowYoutubeGameTrailer(false)} />
      )}

      <div className="grid gap-4 text-center md:gap-8">
        <motion.div
          animate={{ opacity: [0, 1], y: [-10, 0] }}
          exit={{ opacity: [1, 0] }}
          transition={{ delay: 1.5 }}
        >
          <Link href="/buy-mario-strikers-battle-league-football">
            <a className="relative">
              <Image
                src="/images/product/nintendo-switch-mario-strikers-battle-league-football-cover.png"
                alt="Mario Strikers: Battle League Football | Nintendo Switch"
                className="m-auto max-h-[45vh] pt-12 md:max-h-[65vh] md:pt-0"
                width={320}
                height={518}
                priority
              />
            </a>
          </Link>
        </motion.div>

        <div className="sticky top-0 grid gap-2">
          <ReleaseCountdown />

          <Heading as="h1">
            Mario Strikers: Battle League Football | Nintendo Switch
          </Heading>

          <div className="grid items-center justify-center gap-2 md:flex">
            <div className="flex items-center gap-2">
              <Button
                variant="contained"
                href="/buy-mario-strikers-battle-league-football"
                sound="coin"
                icon={<ArrowRightIcon className="icon" />}
                hasIconRight={true}
                text="Jetzt vorbestellen"
              />

              <Button
                variant="text"
                href="/discover-mario-strikers-battle-league-football"
                sound="nintendo-woho"
                icon={<ArrowRightIcon className="icon" />}
                hasIconRight={true}
                text="Mehr Infos"
              />
            </div>

            <Button
              variant="text"
              onClick={() => setShowYoutubeGameTrailer(true)}
              sound="nintendo-woho"
              text="Trailer ansehen"
              icon={<PlayIcon className="icon" />}
              hasIconRight={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
