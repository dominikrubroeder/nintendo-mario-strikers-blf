import React, { Dispatch, SetStateAction, useContext } from 'react';
import { motion } from 'framer-motion';
import AppContext from '../../../store/appContext';
import ReleaseCountdown from '../../ReleaseCountdown';
import EditionSelection from './EditionSelection';
import CharacterSelection from '../../CharacterSelection';
import BuyContainer from './BuyContainer';
import Heading from '../../typography/Heading';
import { Editions } from '../../../data/editions';

interface BuyConfigurationProps {
  setShowStickyBuyBar: Dispatch<SetStateAction<boolean>>;
}

const BuyConfiguration: React.FC<BuyConfigurationProps> = ({
  setShowStickyBuyBar,
}) => {
  const appCtx = useContext(AppContext);

  return (
    <section className="grid gap-4 md:grid-cols-2 max-w-7xl mx-auto mt-20 px-8">
      <motion.img
        animate={{ opacity: [0, 1], y: [10, 0] }}
        exit={{ opacity: [1, 0] }}
        transition={{ ease: 'easeOut' }}
        className="mx-auto max-h-[65vh] md:sticky md:top-20 md:pt-0"
        src="/images/product/nintendo-switch-mario-strikers-battle-league-football-cover.png"
        alt="Nintendo Switch"
      />

      <div className="grid gap-12 mx-auto px-4 w-full">
        <div className="grid gap-1">
          <Heading
            as="h2"
            className="flex items-center gap-2 flex-wrap text-themed themed:text-white"
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

        {appCtx?.selectedEdition === Editions.nostalgiaId && (
          <CharacterSelection />
        )}

        <BuyContainer setShowStickyBuyBar={setShowStickyBuyBar} />
      </div>
    </section>
  );
};

export default BuyConfiguration;
