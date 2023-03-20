import React, { useContext } from "react";
import { motion } from "framer-motion";
import AppContext from "../store/appContext";
import ReleaseCountdown from "./ReleaseCountdown";
import EditionSelection from "./EditionSelection";
import Heading from "./Heading";
import Image from "next/image";
import TheStickyBuyBar from "./TheStickyBuyBar";
import SpringBounceWhenInView from "./animation/SpringBounceWhenInView";
import { TeamCarousel } from "./TeamCarousel";

const BuyConfiguration: React.FC = () => {
  const appCtx = useContext(AppContext);

  return (
    <>
      <section className="mx-auto mt-4 grid max-w-7xl gap-4 px-4 md:mt-20 md:px-8 lg:grid-cols-2">
        <motion.div
          animate={{ opacity: [0, 1], y: [10, 0] }}
          exit={{ opacity: [1, 0] }}
          transition={{ ease: "easeOut" }}
          className="mx-auto"
        >
          <Image
            src="/images/product/nintendo-switch-mario-strikers-battle-league-football-cover.png"
            alt="Mario Strikers: Battle League Football | Nintendo Switch"
            className="m-auto max-h-[65vh] cursor-pointer pt-12 md:pt-0"
            width={320}
            height={518}
            priority
          />
        </motion.div>

        <div className="mx-auto grid w-full gap-4">
          <div className="hidden md:grid md:gap-1">
            <Heading
              as="h2"
              className="flex flex-wrap items-center gap-2 text-accent themed:text-white"
            >
              Nintendo Switch | 10. Juni 2022
              <span className="hidden md:inline-block"> | </span>
              <span>
                <ReleaseCountdown />
              </span>
            </Heading>

            <Heading as="h1">
              Mario Strikers: Battle League Football kaufen
            </Heading>
          </div>

          <EditionSelection />

          <SpringBounceWhenInView>
            <TheStickyBuyBar
              shouldBeVisible={true}
              fixed={false}
              href="/checkout"
            />
          </SpringBounceWhenInView>
        </div>
      </section>

      {appCtx?.selectedTeam && (
        <section className="mt-32">
          <h1 className="flex items-center justify-center gap-2 text-center text-xl font-bold uppercase">
            <Image
              src={`/images/teams/${appCtx?.selectedTeam}.png`}
              width={48}
              height={48}
              alt={`Team ${appCtx?.selectedTeam}`}
              className="object-contain"
            />
            <span className="rounded-xl bg-accent-dark py-2 px-3 text-center text-xs">
              Team
            </span>
            {appCtx.selectedTeam.toUpperCase()}
          </h1>
          <TeamCarousel />
        </section>
      )}
    </>
  );
};

export default BuyConfiguration;
