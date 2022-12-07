import { ArrowLongLeftIcon } from "@heroicons/react/24/solid";
import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { SwipeCarousel } from "../../components/carousel/SwipeCarousel/SwipeCarousel";
import CharacterGallery from "../../components/character/CharacterGallery";
import Layout from "../../components/layout";
import Heading from "../../components/typography/Heading";
import Accordion from "../../components/ui/Accordion";
import Button from "../../components/ui/Button";
import characters from "../../data/characters";

const CharacterPage: NextPage = () => {
  const router = useRouter();
  const { character } = router.query;
  const characterData =
    characters.find((curCharacter) => curCharacter.id === character) ??
    characters[0];

  console.log(characterData);

  return (
    <Layout pageTitle="Character" withHeader={false}>
      <div className="min-h-screen">
        <header className="sticky top-0 w-full p-4">
          <Button variant="text" onClick={() => router.back()}>
            <ArrowLongLeftIcon className="h-5 text-white" />
          </Button>
        </header>

        <section className="gap gap-4">
          <CharacterGallery images={characterData.images} />

          <div className="grid gap-2">
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

            <section className="relative my-16 h-[32rem] w-full">
              <SwipeCarousel />
            </section>

            <div className="mx-auto grid max-w-lg gap-16">
              <div>
                <Heading className="mb-4 font-bold uppercase">
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

              <div>
                <Heading as="h3" className="mb-4 font-bold uppercase">
                  {characterData.name}&apos;s Hyperstrike
                </Heading>

                <div className="rounded-xl bg-gray-100 p-8 themed:bg-accent-dark">
                  {/* All characters hyper strike https://www.youtube.com/watch?v=v2zQbRfwSVs */}
                  <iframe
                    className="w-full"
                    src={characterData.specialAbilityVideoURL}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              <div>
                <Heading as="h3" className="mb-4 font-bold uppercase">
                  Wer ist {characterData.name}
                </Heading>

                <div className="rounded-xl bg-gray-100 p-8 themed:bg-accent-dark">
                  <p>{characterData.baseText}</p>
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
