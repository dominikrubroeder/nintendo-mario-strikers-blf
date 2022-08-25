import { NextPage } from 'next';
import Head from 'next/head';
import { useContext, useState } from 'react';
import AppContext from '../../store/appContext';
import BuyConfiguration from '../../components/product-detail/buy-configuration/BuyConfiguration';
import TheStickyBuyBar from '../../components/TheStickyBuyBar';
import { Editions } from '../../data/editions';
import Image from 'next/image';

// https://mario.fandom.com/de/wiki/Mario_Smash_Football
// https://mario.fandom.com/de/wiki/Mario_Strikers_Charged_Football

const DetailPage: NextPage = () => {
  const appCtx = useContext(AppContext);
  const [showStickyBuyBar, setShowStickyBuyBar] = useState(false);

  return (
    <div>
      <Head>
        <title>Buy Mario Strikers: Battle League Football | Nintendo</title>
        <meta
          name="description"
          content="Nintendo's Mario Strikers: Battle League Football jetzt kaufen"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BuyConfiguration setShowStickyBuyBar={setShowStickyBuyBar} />

      <section className="mt-20">
        <div className="p-4">
          <Image
            src="/images/gallery/2x1_NSwitch_MarioStrikersBattleLeagueFootball_image1600w.jpeg"
            alt="Mario Strikers Battle League Football"
            layout="responsive"
            width={1600}
            height={800}
            className="rounded-3xl"
          />
        </div>
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
