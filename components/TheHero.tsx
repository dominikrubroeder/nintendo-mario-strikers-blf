import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "./Button";
import ReleaseCountdown from "./ReleaseCountdown";
import TheGameTrailerOverlay from "./TheGameTrailerOverlay";
import Heading from "./Heading";
import { ArrowRightIcon, PlayIcon } from "@heroicons/react/24/solid";

const TheHero: React.FC = () => {
  const [showYouTubeGameTrailer, setShowYoutubeGameTrailer] = useState(false);

  return (
    <section className="grid items-center justify-center p-4 md:h-[95vh] md:overflow-hidden">
      {showYouTubeGameTrailer && (
        <TheGameTrailerOverlay
          closeOverlay={() => setShowYoutubeGameTrailer(false)}
        />
      )}

      <div className="grid gap-4 text-center md:gap-8">
        <motion.div
          animate={{ opacity: [0, 1], y: [-10, 0] }}
          exit={{ opacity: [1, 0] }}
          transition={{ delay: 1.5 }}
        >
          <Link href="/buy-mario-strikers-battle-league-football">
            <a>
              <Image
                src="/images/product/nintendo-switch-mario-strikers-battle-league-football-cover.png"
                alt="Mario Strikers: Battle League Football | Nintendo Switch"
                className="interactive m-auto max-h-[45vh] pt-12 md:max-h-[65vh] md:pt-0"
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
              >
                Jetzt vorbestellen
                <ArrowRightIcon className="icon" />
              </Button>

              <Button
                variant="icon-text"
                href="/mario-strikers-battle-league-football"
                sound="nintendo-woho"
              >
                Mehr infos
                <ArrowRightIcon className="icon" />
              </Button>
            </div>

            <Button
              variant="icon-text"
              onClick={() => setShowYoutubeGameTrailer(true)}
              sound="nintendo-woho"
            >
              Trailer ansehen <PlayIcon className="icon" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheHero;
