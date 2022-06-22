import Head from 'next/head';
import { useContext, useEffect, useState } from 'react';
import AppContext from '../../store/app-context';
import BuyConfiguration from '../../components/product-detail/buy-configuration/BuyConfiguration';
import GameFeatures from '../../components/product-detail/product-details/GameFeatures';
import TheStickyBuyBar from '../../components/TheStickyBuyBar';

// https://mario.fandom.com/de/wiki/Mario_Smash_Football
// https://mario.fandom.com/de/wiki/Mario_Strikers_Charged_Football

const DetailPage = () => {
  const appCtx = useContext(AppContext);
  const [showStickyBuyBar, setShowStickyBuyBar] = useState(false);

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

      <BuyConfiguration setShowStickyBuyBar={setShowStickyBuyBar} />

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
        shouldBeVisible={showStickyBuyBar && appCtx.buyable}
        price={appCtx.edition === 'standard' ? 59.99 : 89.99}
      />
    </div>
  );
};

export default DetailPage;
