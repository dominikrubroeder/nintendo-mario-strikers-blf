import React, { useContext } from 'react';
import AppContext from '../store/appContext';
import OverlayBackground from './OverlayBackground';
import characters from '../data/characters';
import Button from './Button';
import Heading from './Heading';
import Image from 'next/image';
import Accordion from './Accordion';

interface CharacterOverlayProps {
  onCloseOverlay: () => void;
}

// Consider using https://headlessui.com/react/dialog
const CharacterOverlay: React.FC<CharacterOverlayProps> = ({
  onCloseOverlay,
}) => {
  const appCtx = useContext(AppContext);
  const character = characters.find(
    (character) => character.id === appCtx?.selectedCharacter
  );

  const handleChildElementClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    // Do other stuff here
  };

  return (
    <OverlayBackground
      className="items-start justify-start md:justify-center md:items-center"
      onCloseOverlay={onCloseOverlay}
    >
      <div
        className="relative max-w-5xl h-[75vh] rounded-3xl bg-accent grid gap-4 p-6 m-4 z-50 overflow-y-scroll md:overflow-hidden md:p-8 md:pb-0 md:grid-cols-2"
        onClick={(e) => handleChildElementClick(e)}
      >
        <div
          className="w-8 h-8 flex items-center justify-center absolute top-6 right-6 rounded-full cursor-pointer bg-gray-100 themed:bg-accent-dark interactive"
          onClick={onCloseOverlay}
        >
          x
        </div>
        <div className="flex items-center justify-center">
          <div className="w-full max-h-[35vh] md:max-h-[none]">
            <Image
              width={512}
              height={512}
              layout="responsive"
              src={
                character?.image ??
                '/images/characters/NSwitch-character-sketch-mario.png'
              }
              alt={character?.name}
            />
          </div>
        </div>
        <div className="md:overflow-y-scroll md:p-8">
          <Heading
            as="h2"
            className="text-6xl uppercase font-bold w-full text-center mb-8"
          >
            {character?.name}
          </Heading>

          <div className="grid gap-16">
            <div>
              <p className="text-xl">&ldquo;{character?.teamText}&rdquo;</p>
            </div>

            <div>
              <Heading className="uppercase font-bold mb-4">
                Das bekommst du
              </Heading>

              <div className="grid gap-2">
                <Image
                  width={367}
                  height={183.5}
                  src="/images/gallery/2x1_NSwitch_MarioStrikersBattleLeagueFootball_image1600w.jpeg"
                  alt="Mario Strikers Battle League Football"
                  priority
                  className="rounded-xl max-w-full"
                />

                <Image
                  width={200}
                  height={324}
                  src="/images/product/nintendo-switch-mario-strikers-battle-league-football-cover.png"
                  alt="Mario Strikers Battle League Football"
                  priority
                />

                <Accordion
                  title={`${character?.name.toUpperCase()} – Merchandise`}
                >
                  <div className="grid gap-4 grid-cols-2">
                    {character?.imageGallery.map((image, index) => (
                      <div
                        key={index}
                        className="h-64 rounded-3xl cursor-pointer bg-gray-100 themed:bg-accent interactive"
                      ></div>
                    ))}
                  </div>
                </Accordion>

                <Accordion title="Zusätzlicher Spiel-Content">
                  <ul className="list-disc pl-8">
                    <li>
                      Mehr Content: Schalte die legacy Arenen aus Mario
                      Strikers: Charged Football (Wii) und Mario Smash Football
                      (GameCube) frei
                    </li>
                    <li>Mehr Content: Schalte das Geheimcharacter frei</li>
                    <li>...</li>
                  </ul>
                </Accordion>
              </div>
            </div>

            <div>
              <Heading as="h3" className="uppercase font-bold mb-4">
                {character?.name}&apos;s Hyperstrike
              </Heading>

              <div className="bg-gray-100 themed:bg-accent-dark p-8 rounded-xl">
                {/* All characters hyper strike https://www.youtube.com/watch?v=v2zQbRfwSVs */}
                <iframe
                  className="w-full"
                  src={character?.specialAbilityVideoURL}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div>
              <Heading as="h3" className="uppercase font-bold mb-4">
                Wer ist {character?.name}
              </Heading>

              <div className="bg-gray-100 themed:bg-accent-dark p-8 rounded-xl">
                <p>{character?.baseText}</p>
              </div>
            </div>

            <div>
              <Button variant="outlined" onClick={onCloseOverlay}>
                Schließen
              </Button>
            </div>
          </div>
        </div>
      </div>
    </OverlayBackground>
  );
};

export default CharacterOverlay;
