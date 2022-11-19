import React, { useContext } from 'react';
import AppContext from '../../store/appContext';
import OverlayBackground from '../OverlayBackground';
import characters from '../../data/characters';
import Button from '../ui/Button';
import Heading from '../typography/Heading';
import Image from 'next/image';
import Accordion from '../ui/Accordion';

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
      className="items-start justify-start md:items-center md:justify-center"
      onCloseOverlay={onCloseOverlay}
    >
      <div
        className="relative z-50 m-4 grid h-[75vh] max-w-5xl gap-4 overflow-y-scroll rounded-3xl bg-accent p-6 md:grid-cols-2 md:overflow-hidden md:p-8 md:pb-0"
        onClick={(e) => handleChildElementClick(e)}
      >
        <div
          className="interactive absolute top-6 right-6 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-gray-100 themed:bg-accent-dark"
          onClick={onCloseOverlay}
        >
          x
        </div>
        <div className="flex items-center justify-center">
          <div className="max-h-[35vh] w-full md:max-h-[none]">
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
            className="mb-8 w-full text-center text-6xl font-bold uppercase"
          >
            {character?.name}
          </Heading>

          <div className="grid gap-16">
            <div>
              <p className="text-xl">&ldquo;{character?.teamText}&rdquo;</p>
            </div>

            <div>
              <Heading className="mb-4 font-bold uppercase">
                Das bekommst du
              </Heading>

              <div className="grid gap-2">
                <Image
                  width={367}
                  height={183.5}
                  src="/images/gallery/2x1_NSwitch_MarioStrikersBattleLeagueFootball_image1600w.jpeg"
                  alt="Mario Strikers Battle League Football"
                  priority
                  className="max-w-full rounded-xl"
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
                  <div className="grid grid-cols-2 gap-4">
                    {character?.images.map((image, index) => (
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
              <Heading as="h3" className="mb-4 font-bold uppercase">
                {character?.name}&apos;s Hyperstrike
              </Heading>

              <div className="rounded-xl bg-gray-100 p-8 themed:bg-accent-dark">
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
              <Heading as="h3" className="mb-4 font-bold uppercase">
                Wer ist {character?.name}
              </Heading>

              <div className="rounded-xl bg-gray-100 p-8 themed:bg-accent-dark">
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
