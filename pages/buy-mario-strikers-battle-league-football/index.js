import Head from 'next/head';
import { useEffect, useState } from 'react';
import BuyConfiguration from '../../components/product-detail/buy-configuration/BuyConfiguration';
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

      <BuyConfiguration
        selectedEdition={selectedEdition}
        selectedTeam={selectedTeam}
        buyable={buyable}
        setSelectedEdition={setSelectedEdition}
        setSelectedTeam={setSelectedTeam}
        setBuyable={setBuyable}
        setShowStickyBuyBar={setShowStickyBuyBar}
      />

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
