import { useContext } from 'react';
import { motion } from 'framer-motion';
import AppContext from '../../../store/app-context';
import TheCountdown from '../../TheCountdown';
import EditionSelection from './EditionSelection';
import TeamSelection from '../../TeamSelection';
import BuyContainer from './BuyContainer';
import Heading from '../../typography/Heading';

const BuyConfiguration = (props) => {
  const appCtx = useContext(AppContext);

  return (
    <section className="grid gap-4 md:grid-cols-2 max-w-7xl mx-auto mt-20 px-8">
      <motion.img
        animate={{ opacity: [0, 1], y: [10, 0] }}
        exit={{ opacity: [1, 0] }}
        transition={{ ease: 'easeOut' }}
        className="mx-auto max-h-[65vh] md:sticky md:top-20 md:pt-0"
        src="/images/product/mario-strikers-battle-league-football-cover.jpg"
        alt="Nintendo Switch"
      />
      <div className="grid gap-12 mx-auto px-4 w-full">
        <div className="grid gap-1">
          <Heading
            as="h2"
            className="flex items-center gap-2 flex-wrap text-accent themed:text-white"
          >
            Nintendo Switch | 10. Juni 2022
            <span className="hidden md:inline-block"> | </span>
            <span>
              <TheCountdown />
            </span>
          </Heading>
          <Heading as="h1">
            Mario Strikers: Battle League Football kaufen
          </Heading>
        </div>

        <EditionSelection />

        {appCtx.edition === 'nostalgie' && <TeamSelection />}

        <BuyContainer setShowStickyBuyBar={props.setShowStickyBuyBar} />
      </div>
    </section>
  );
};

export default BuyConfiguration;
