import { NextPage } from 'next';
import React, { useContext, useEffect, useRef, useState } from 'react';
import GameFeatures from '../../components/sections/GameFeatures';
import CharacterSelection from '../../components/character/CharacterSelection';
import CommunityQuotes from '../../components/sections/CommunityQuotes';
import TheGallery from '../../components/TheGallery';
import TheStickyBuyBar from '../../components/TheStickyBuyBar';
import Heading from '../../components/typography/Heading';
import useIsInView from '../../hooks/useIsInView';
import Layout from '../../components/layout';

const InfoPage: NextPage = () => {
  const [showStickyBuyBar, setShowStickyBuyBar] = useState(false);
  const playSoundButton = useRef<null | HTMLDivElement>(null);
  const playSoundButtonIsOnScreen = useIsInView(playSoundButton);

  useEffect(() => {
    playSoundButtonIsOnScreen
      ? setShowStickyBuyBar(false)
      : setShowStickyBuyBar(true);
  }, [playSoundButtonIsOnScreen]);

  return (
    <Layout pageTitle="Discover">
      <div className="grid gap-32">
        <section className="min-h-screen-header m-auto flex flex-col items-center justify-center text-center">
          <Heading as="h2" className="headline--gradient">
            Es ist Anpfiff!
          </Heading>
        </section>

        <CommunityQuotes />

        <section className="m-auto w-full max-w-screen-xl px-4">
          <Heading as="h2" className="headline--gradient">
            Wähle dein Team
          </Heading>

          <CharacterSelection className="sm:grid-cols-2 lg:grid-cols-3" />
        </section>

        <TheGallery />

        <GameFeatures />

        <section className="flex items-center justify-center">
          <p>Show game trailer here</p>
        </section>

        <section className="flex min-h-screen items-center justify-center">
          Show merch here?
        </section>
      </div>

      <TheStickyBuyBar shouldBeVisible={showStickyBuyBar} />
    </Layout>
  );
};

export default InfoPage;
