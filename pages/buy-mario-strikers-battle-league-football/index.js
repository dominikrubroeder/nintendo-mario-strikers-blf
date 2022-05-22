import Head from 'next/head';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import TheCountdown from '../../components/TheCountdown';
import EditionSelection from '../../components/product-detail/buy-configuration/selections/EditionSelection';
import TeamSelection from '../../components/product-detail/buy-configuration/selections/TeamSelection';
import BuyContainer from '../../components/product-detail/buy-configuration/BuyContainer';
import GameFeatures from '../../components/product-detail/product-details/GameFeatures';
import TheStickyBuyBar from '../../components/TheStickyBuyBar';

// https://mario.fandom.com/de/wiki/Mario_Smash_Football
// https://mario.fandom.com/de/wiki/Mario_Strikers_Charged_Football

const DetailPage = () => {
  const [selectedEdition, setSelectedEdition] = useState(null);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [buyable, setBuyable] = useState(false);
  const [showStickyBuyBar, setShowStickyBuyBar] = useState(false);

  // Initial page load instructions
  useEffect(() => {
    if (localStorage.getItem('themed') && localStorage.getItem('theme')) {
      const localStorageTheme = localStorage.getItem('theme');
      setSelectedTeam(localStorageTheme);
      setSelectedEdition('nostalgie');
      setBuyable(true);
      document.body.className = `themed theme-${localStorageTheme} bg-accent text-white`;
    }
  });

  return (
    <div>
      <Head>
        <title>Mario Strikers: Battle League Football kaufen | Nintendo</title>
        <meta
          name="description"
          content="Nintendo's Mario Strikers: Battle League Football jetzt kaufen"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
            setSelectedEdition={setSelectedEdition}
            setSelectedTeam={setSelectedTeam}
            setBuyable={setBuyable}
            edition={selectedEdition}
            team={selectedTeam}
          />

          {selectedEdition === 'nostalgie' && (
            <TeamSelection
              setSelectedEdition={setSelectedEdition}
              setSelectedTeam={setSelectedTeam}
              setBuyable={setBuyable}
              selectedEdition={selectedEdition}
              selectedTeam={selectedTeam}
            />
          )}

          <BuyContainer
            buyable={buyable}
            setShowStickyBuyBar={setShowStickyBuyBar}
          />
        </div>
      </section>

      <section className="mt-20">
        <img
          src="/images/gallery/2x1_NSwitch_MarioStrikersBattleLeagueFootball_image1600w.jpeg"
          alt="Mario Strikers Battle League Football"
          className="rounded-3xl max-w-full w-full p-4"
        />
      </section>

      <section className="grid gap-64">
        <GameFeatures />
      </section>

      <TheStickyBuyBar
        href="/checkout"
        shouldBeVisible={showStickyBuyBar && buyable}
        edition={selectedEdition}
        team={selectedTeam}
        price={selectedEdition === 'standard' ? 59.99 : 89.99}
      />
    </div>
  );
};

export default DetailPage;
