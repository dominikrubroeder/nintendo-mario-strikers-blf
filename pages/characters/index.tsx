import { NextPage } from 'next';
import React, { useContext, useState } from 'react';
import { SwipeCarousel } from '../../components/SwipeCarousel/SwipeCarousel';
import Layout from '../../components/layout';
import Heading from '../../components/typography/Heading';
import Accordion from '../../components/ui/Accordion/Accordion';
import characters from '../../data/characters';
import { defaultSwipeCarouselImageData } from '../../data/image-data';
import AppContext from '../../store/appContext';
import Image from 'next/image';
import Card from '../../components/ui/Card/Card';

const CharacterPage: NextPage = () => {
  const appCtx = useContext(AppContext);
  const character = appCtx?.selectedCharacter;
  const characterData =
    characters.find((curCharacter) => curCharacter.id === character) ??
    characters[0];
  const [zoomedIn, setZoomedIn] = useState(false);

  return (
    <Layout pageTitle="Character">
      {/**
       * Push, "lift" the state up of current character to url to make it sharable
       * Include character statistic, game insights
       *
       * When switching theme / character through carousel, play character Sound
       *
       * Move playing character sound to shared context when character / theme changed / is changing?
       */}

      <div className="min-h-screen">
        <section className="gap gap-4">
          <div className="py-12">
            <SwipeCarousel images={defaultSwipeCarouselImageData} />
          </div>

          <div className="grid gap-16">
            <header>
              <div className="text-center">
                <span className="rounded-xl bg-accent-dark py-2 px-3 text-center text-xs">
                  Team
                </span>
              </div>

              <h1 className="text-center text-9xl font-bold uppercase">
                {character}
              </h1>

              <div className="mx-auto grid max-w-lg gap-16">
                <p className="text-center text-xl">
                  &ldquo;{characterData.teamText}&rdquo;
                </p>
              </div>
            </header>

            <div className="grid gap-16">
              <Card className="mx-auto w-full max-w-lg p-8">
                <p>{characterData.baseText}</p>
              </Card>

              <div>
                <Heading
                  as="h2"
                  className="mx-auto mb-4 w-full max-w-lg font-bold uppercase"
                >
                  {characterData.name}&apos;s Ausrüstung und Statistik
                </Heading>

                <section
                  className={`interactive ${zoomedIn ? 'px-64' : 'px-12'}`}
                  onMouseUp={() =>
                    setZoomedIn((previousState) => !previousState)
                  }
                >
                  <Image
                    src="/images/in-game/CI_NSwitch_MarioStrikersBLF_Screen_GearSettings_deDE.png"
                    alt="NSwitch Mario Strikers Battle League Football gear setting preview"
                    className="max-w-full rounded-3xl transition-all duration-300 hover:cursor-pointer"
                    width="1920"
                    height="1080"
                    draggable={false}
                  />
                </section>
              </div>

              <div className="mx-auto w-full max-w-lg">
                <Heading as="h2" className="mb-4 font-bold uppercase">
                  Wähle {characterData.name} und du bekommst:
                </Heading>

                <div className="grid gap-2">
                  <Accordion
                    title={`${characterData.name.toUpperCase()} – Merchandise`}
                  >
                    <div className="grid grid-cols-2 gap-4">
                      {characterData.images.map((image, index) => (
                        <div
                          key={index}
                          className="interactive h-64 cursor-pointer rounded-3xl bg-gray-100 themed:bg-accent"
                        ></div>
                      ))}
                    </div>
                  </Accordion>

                  <Accordion title="Zusätzlicher Spiel-Content">
                    <ul className="list-disc pl-8">
                      <li>
                        Mehr Content: Schalte die legacy Arenen aus Mario
                        Strikers: Charged Football (Wii) und Mario Smash
                        Football (GameCube) frei
                      </li>
                      <li>Mehr Content: Schalte das Geheimcharacter frei</li>
                      <li>...</li>
                    </ul>
                  </Accordion>
                </div>
              </div>

              <div className="mx-auto w-full max-w-lg">
                <Heading as="h3" className="mb-4 font-bold uppercase">
                  {characterData.name}&apos;s Hyperstrike
                </Heading>

                <div className="rounded-xl bg-gray-100 p-8 themed:bg-accent-dark">
                  {/* All characters hyper strike https://www.youtube.com/watch?v=v2zQbRfwSVs */}
                  <iframe
                    className="w-full rounded-xl"
                    src={characterData.specialAbilityVideoURL}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CharacterPage;
