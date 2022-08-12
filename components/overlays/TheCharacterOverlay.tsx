import React, { useContext } from 'react';
import AppContext from '../../store/app-context';
import OverlayBackground from './OverlayBackground';
import teams from '../../data/teams';
import Button from '../base/Button';
import BaseDropdownItem from '../base/dropdown/BaseDropdownItem';
import Heading from '../typography/Heading';
import Image from 'next/image';

interface TheCharacterOverlayProps {
  onCloseOverlay: () => void;
}

const TheCharacterOverlay: React.FC<TheCharacterOverlayProps> = ({
  onCloseOverlay,
}) => {
  const appCtx = useContext(AppContext);
  const team = teams.find((team) => team.name === appCtx.theme);

  const handleChildElementClick = (e) => {
    e.stopPropagation();
    // Do other stuff here
  };

  return (
    <OverlayBackground
      className="items-start justify-start md:justify-center md:items-center"
      onCloseOverlay={onCloseOverlay}
    >
      <div
        className="relative max-w-5xl h-[75vh] rounded-3xl bg-themed grid gap-4 p-6 m-4 z-50 overflow-y-scroll md:overflow-hidden md:p-8 md:pb-0 md:grid-cols-2"
        onClick={(e) => handleChildElementClick(e)}
      >
        <div
          className="w-8 h-8 flex items-center justify-center absolute top-6 right-6 rounded-full cursor-pointer bg-themed-dark"
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
              src={team.image}
              alt={team.name}
            />
          </div>
        </div>
        <div className="md:overflow-y-scroll md:p-8">
          <Heading
            as="h2"
            className="text-6xl uppercase font-bold w-full text-center mb-8"
          >
            {team.name}
          </Heading>

          <div className="grid gap-16">
            <div>
              <p className="text-xl">"{team.teamText}"</p>
            </div>

            <div className="grid gap-2">
              <Heading className="uppercase font-bold">Das bekommst du</Heading>

              <div className="grid gap-1">
                <BaseDropdownItem
                  headline={`${team.name.toUpperCase()} – Mario Strikers: Battle League Football | Nintendo Switch`}
                >
                  <img
                    src="/images/gallery/2x1_NSwitch_MarioStrikersBattleLeagueFootball_image1600w.jpeg"
                    alt="Mario Strikers Battle League Football"
                  />
                </BaseDropdownItem>

                <BaseDropdownItem
                  headline={`${team.name.toUpperCase()} – Merchandise`}
                >
                  <div className="grid gap-4 grid-cols-2">
                    {team.imageGallery.map((image, index) => (
                      <div
                        key={index}
                        className="h-64 rounded-3xl cursor-pointer bg-themed-dark transition-all hover:scale-105"
                      ></div>
                    ))}
                  </div>
                </BaseDropdownItem>

                <BaseDropdownItem headline="Zusätzlicher Spiel-Content">
                  <ul className="list-disc pl-8">
                    <li>
                      Mehr Content: Schalte die legacy Arenen aus Mario
                      Strikers: Charged Football (Wii) und Mario Smash Football
                      (GameCube) frei
                    </li>
                    <li>Mehr Content: Schalte das Geheimteam frei</li>
                    <li>...</li>
                  </ul>
                </BaseDropdownItem>
              </div>
            </div>

            <div className="grid gap-2">
              <Heading as="h3" className="uppercase font-bold">
                {team.name}'s Hyperstrike
              </Heading>

              <iframe
                className="w-full"
                src={team.specialAbilityVideoURL}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div>
              <Heading as="h3" className="uppercase font-bold">
                Wer ist {team.name}
              </Heading>

              <p>{team.baseText}</p>
            </div>

            <div>
              <Button variant="outlined">Schließen</Button>
            </div>
          </div>
        </div>
      </div>
    </OverlayBackground>
  );
};

export default TheCharacterOverlay;
