import React, { Dispatch, SetStateAction, useContext } from "react";
import { motion } from "framer-motion";
import AppContext from "../store/appContext";
import ReleaseCountdown from "./ReleaseCountdown";
import EditionSelection from "./EditionSelection";
import TeamSelection from "./TeamSelection";
import BuyContainer from "./BuyContainer";
import Heading from "./Heading";
import { Editions } from "../data/editions";
import Image from "next/image";
import SelectYourTeamInfoBar from "./SelectYourTeamInfoBar";
import Accordion from "./ui/Accordion";

interface BuyConfigurationProps {
  setShowStickyBuyBar: Dispatch<SetStateAction<boolean>>;
}

const BuyConfiguration: React.FC<BuyConfigurationProps> = ({
  setShowStickyBuyBar,
}) => {
  const appCtx = useContext(AppContext);

  return (
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

      <div className="mx-auto grid w-full gap-12">
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

        {appCtx?.selectedEdition === Editions.teamId && (
          <Accordion
            title={<SelectYourTeamInfoBar />}
            initalState="opened"
            showFooter={false}
            className="bg-transparent themed:bg-transparent"
          >
            <TeamSelection />
          </Accordion>
        )}

        <BuyContainer setShowStickyBuyBar={setShowStickyBuyBar} />
      </div>
    </section>
  );
};

export default BuyConfiguration;
