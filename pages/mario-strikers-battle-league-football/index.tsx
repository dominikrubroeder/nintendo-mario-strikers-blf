import { NextPage } from 'next';
import Head from 'next/head';
import React, { useContext, useEffect, useRef, useState } from 'react';
import GameFeatures from '../../components/GameFeatures';
import CharacterSelection from '../../components/CharacterSelection';
import TheCommunityQuotes from '../../components/TheCommunityQuotes';
import TheGallery from '../../components/TheGallery';
import TheStickyBuyBar from '../../components/TheStickyBuyBar';
import Heading from '../../components/typography/Heading';
import { PlayIcon } from '@heroicons/react/24/solid';
import Button from '../../components/base/Button';
import AudioContext from '../../store/audioContext';
import useIsOnScreen from '../../hooks/useIsOnScreen';

const InfoPage: NextPage = () => {
  const audioCtx = useContext(AudioContext);
  const [showStickyBuyBar, setShowStickyBuyBar] = useState(false);
  const playSoundButton = useRef<null | HTMLDivElement>(null);
  const playSoundButtonIsOnScreen = useIsOnScreen(playSoundButton);

  useEffect(() => {
    if (playSoundButtonIsOnScreen) {
      setShowStickyBuyBar(false);
    } else {
      setShowStickyBuyBar(true);
    }
  }, [playSoundButtonIsOnScreen]);

  return (
    <div>
      <Head>
        <title>
          Discover Mario Strikers: Battle League Football | Nintendo
        </title>
        <meta
          name="description"
          content="Discover Nintendo's Mario Strikers: Battle League Football"
        />
      </Head>

      <div className="grid gap-32">
        <section className="m-auto text-center min-h-screen flex items-center justify-center flex-col">
          <Heading className="mx-auto px-4 text-6xl md:text-8xl md:leading-tight text-center break-all font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-fill-color-transparent">
            Zuallererst...
          </Heading>

          <div
            className="flex flex-col gap-2 opacity-0 invisible animate-fadeUp animation-delay-700"
            ref={playSoundButton}
          >
            <Button
              variant="icon"
              onClick={() => {
                setShowStickyBuyBar(true);
                audioCtx?.setSound('/audio/soundtracks/main-menu.mp3');
              }}
            >
              <PlayIcon className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full p-4" />
            </Button>
            Spiele einen Soundtrack:
          </div>
        </section>

        <TheCommunityQuotes />

        <section className="max-w-screen-xl m-auto w-full">
          <Heading className="mx-auto px-4 text-6xl md:text-8xl md:leading-tight text-center break-all font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-fill-color-transparent">
            Wähle dein Team
          </Heading>

          <CharacterSelection className="grid-cols-3" />
        </section>

        <TheGallery />

        <GameFeatures />

        <section className="min-h-screen flex items-center justify-center">
          Show merch here?
        </section>
      </div>

      <TheStickyBuyBar shouldBeVisible={showStickyBuyBar} />
    </div>
  );
};

export default InfoPage;
