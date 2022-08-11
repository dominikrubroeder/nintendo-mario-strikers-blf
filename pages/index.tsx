import { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import TheHero from '../components/TheHero';
import TheLaunchScreen from '../components/TheLaunchScreen';

const Home: NextPage = () => {
  const [showStickyBuyBar, setShowStickyBuyBar] = useState(false);
  const [showLaunchScreen, setShowLaunchScreen] = useState(true);

  useEffect(() => {
    const launchScreenTimeout = setTimeout(hideLaunchScreen, 1500);

    function hideLaunchScreen() {
      setShowLaunchScreen(false);
      clearTimeout(launchScreenTimeout);
    }
  });

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

      {showLaunchScreen && <TheLaunchScreen />}

      <TheHero setShowStickyBuyBar={setShowStickyBuyBar} />
    </div>
  );
};

export default Home;
