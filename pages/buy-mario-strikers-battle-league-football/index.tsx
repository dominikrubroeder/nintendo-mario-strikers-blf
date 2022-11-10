import { NextPage } from 'next';
import { useContext, useState } from 'react';
import AppContext from '../../store/appContext';
import BuyConfiguration from '../../components/product-detail/BuyConfiguration';
import TheStickyBuyBar from '../../components/TheStickyBuyBar';
import { Editions } from '../../data/editions';
import Image from 'next/image';
import Button from '../../components/ui/Button';
import GameFeatures from '../../components/sections/GameFeatures';
import Layout from '../../components/layout';

// https://mario.fandom.com/de/wiki/Mario_Smash_Football
// https://mario.fandom.com/de/wiki/Mario_Strikers_Charged_Football

const DetailPage: NextPage = () => {
  const appCtx = useContext(AppContext);
  const [showStickyBuyBar, setShowStickyBuyBar] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);

  return (
    <Layout pageTitle="Buy">
      <BuyConfiguration setShowStickyBuyBar={setShowStickyBuyBar} />

      <section className="mt-20">
        <div className="p-4">
          <Image
            src="/images/gallery/2x1_NSwitch_MarioStrikersBattleLeagueFootball_image1600w.jpeg"
            alt="Mario Strikers Battle League Football"
            layout="responsive"
            width={1000}
            height={500}
            className="rounded-3xl"
            priority
          />
        </div>
      </section>

      <section className="mt-20 mb-40 text-center">
        <Button
          variant="contained"
          onClick={() => setShowFeatures((previousState) => !previousState)}
        >
          Zeige mehr Features
        </Button>

        {showFeatures && <GameFeatures />}
      </section>

      <TheStickyBuyBar
        href="/checkout"
        shouldBeVisible={showStickyBuyBar && appCtx?.buyable}
        price={appCtx?.selectedEdition === Editions.standardId ? 59.99 : 89.99}
      />
    </Layout>
  );
};

export default DetailPage;
