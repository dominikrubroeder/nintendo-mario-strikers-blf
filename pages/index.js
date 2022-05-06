import Head from 'next/head';
import TheFooter from '../components/layout/TheFooter';
import TheHeader from '../components/layout/TheHeader';
import TheStickyBuyBar from '../components/TheStickyBuyBar';
import TheHero from '../components/TheHero';
import { useState } from 'react';
import TheGallery from '../components/TheGallery';

export default function Home() {
  const [showStickyBuyBar, setShowStickyBuyBar] = useState(false);

  return (
    <div>
      <Head>
        <title>Mario Strikers: Battle League Football | Nintendo</title>
        <meta
          name="description"
          content="Nintendo's Mario Strikers: Battle League Football jetzt kaufen"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TheHeader />

      <main>
        <TheHero setShowStickyBuyBar={setShowStickyBuyBar} />

        <TheStickyBuyBar shouldBeVisible={showStickyBuyBar} />

        <TheGallery />

        <section className="flex justify-center items-center h-screen">
          2
        </section>
        <section className="flex justify-center items-center h-screen">
          3
        </section>
      </main>

      <TheFooter />
    </div>
  );
}
