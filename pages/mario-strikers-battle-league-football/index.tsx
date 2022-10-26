import { NextPage } from "next";
import Head from "next/head";
import React, { useContext, useEffect, useRef, useState } from "react";
import GameFeatures from "../../components/GameFeatures";
import CharacterSelection from "../../components/CharacterSelection";
import TheCommunityQuotes from "../../components/TheCommunityQuotes";
import TheGallery from "../../components/TheGallery";
import TheStickyBuyBar from "../../components/TheStickyBuyBar";
import Heading from "../../components/Heading";
import { PlayIcon } from "@heroicons/react/24/solid";
import Button from "../../components/Button";
import AudioContext from "../../store/audioContext";
import useIsOnScreen from "../../hooks/useIsOnScreen";
import TheGameTrailerOverlay from "../../components/TheGameTrailerOverlay";

const InfoPage: NextPage = () => {
  const audioCtx = useContext(AudioContext);
  const [showStickyBuyBar, setShowStickyBuyBar] = useState(false);
  const playSoundButton = useRef<null | HTMLDivElement>(null);
  // @ts-ignore: Unreachable code error
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
        <section className="min-h-screen-header m-auto flex flex-col items-center justify-center text-center">
          <Heading className="headline--gradient">Zuallererst...</Heading>

          <div
            className="invisible flex animate-fadeUp flex-col gap-2 opacity-0 animation-delay-700"
            ref={playSoundButton}
          >
            <Button
              variant="icon-text"
              onClick={() => {
                setShowStickyBuyBar(true);
                audioCtx?.setSound("/audio/soundtracks/main-menu.mp3");
              }}
            >
              <PlayIcon className="h-16 w-16 rounded-full bg-accent-gradient p-4" />
              Spiele einen Soundtrack
            </Button>
          </div>
        </section>

        <TheCommunityQuotes />

        <section className="m-auto w-full max-w-screen-xl px-4">
          <Heading className="headline--gradient">Wähle dein Team</Heading>

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
    </div>
  );
};

export default InfoPage;
