import Head from 'next/head';
import AppContext from '../store/app-context';
import TheStickyBuyBar from '../components/TheStickyBuyBar';
import TheHero from '../components/TheHero';
import { useContext, useEffect, useState } from 'react';
import TheGallery from '../components/TheGallery';
import TheCommunityQuotes from '../components/TheCommunityQuotes';
import TheLaunchScreen from '../components/TheLaunchScreen';

export default function Home() {
  const appCtx = useContext(AppContext);
  const [showStickyBuyBar, setShowStickyBuyBar] = useState(false);
  const [showLaunchScreen, setShowLaunchScreen] = useState(true);

  // Initial page load instructions
  useEffect(() => {
    appCtx.init();
  });

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

      <TheStickyBuyBar shouldBeVisible={showStickyBuyBar} />

      <TheGallery />

      <TheCommunityQuotes />
    </div>
  );
}
