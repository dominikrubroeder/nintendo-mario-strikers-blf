import { NextPage } from 'next';
import Head from 'next/head';
import { useContext, useState } from 'react';
import AppContext from '../../store/appContext';
import BuyConfiguration from '../../components/product-detail/buy-configuration/BuyConfiguration';
import TheStickyBuyBar from '../../components/TheStickyBuyBar';
import { Editions } from '../../data/editions';

// https://mario.fandom.com/de/wiki/Mario_Smash_Football
// https://mario.fandom.com/de/wiki/Mario_Strikers_Charged_Football

const DetailPage: NextPage = () => {
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

      <TheStickyBuyBar
        href="/checkout"
        shouldBeVisible={showStickyBuyBar && appCtx?.buyable}
        price={appCtx?.selectedEdition === Editions.standardId ? 59.99 : 89.99}
      />
    </div>
  );
};

export default DetailPage;
