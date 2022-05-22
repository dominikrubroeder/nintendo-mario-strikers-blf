import { motion } from 'framer-motion';
import TheCountdown from '../../TheCountdown';
import EditionSelection from './selections/EditionSelection';
import TeamSelection from './selections/TeamSelection';
import BuyContainer from './BuyContainer';

const BuyConfiguration = (props) => {
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
          <h2 className="flex items-center gap-2 flex-wrap text-accent">
            Nintendo Switch | 10. Juni 2022
            <span className="hidden md:inline-block"> | </span>
            <span>
              <TheCountdown />
            </span>
          </h2>
          <h1 className="text-3xl">
            Mario Strikers: Battle League Football kaufen
          </h1>
        </div>

        <EditionSelection
          setSelectedEdition={props.setSelectedEdition}
          setSelectedTeam={props.setSelectedTeam}
          setBuyable={props.setBuyable}
          edition={props.selectedEdition}
          team={props.selectedTeam}
        />

        {props.selectedEdition === 'nostalgie' && (
          <TeamSelection
            setSelectedEdition={props.setSelectedEdition}
            setSelectedTeam={props.setSelectedTeam}
            setBuyable={props.setBuyable}
            selectedEdition={props.selectedEdition}
            selectedTeam={props.selectedTeam}
          />
        )}

        <BuyContainer
          buyable={props.buyable}
          setShowStickyBuyBar={props.setShowStickyBuyBar}
        />
      </div>
    </section>
  );
};

export default BuyConfiguration;
