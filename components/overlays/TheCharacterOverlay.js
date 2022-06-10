import { useContext } from 'react';
import AppContext from '../../store/app-context';
import OverlayBackground from './OverlayBackground';
import teams from '../../data/teams';
import BaseButton from '../base/BaseButton';

const TheCharacterOverlay = (props) => {
  const appCtx = useContext(AppContext);
  const team = teams.find((team) => team.name === appCtx.theme);

  return (
    <OverlayBackground
      className="items-start justify-start md:justify-center md:items-center"
      onCloseOverlay={props.onCloseOverlay}
    >
      <div className="relative max-w-5xl h-[75vh] rounded-3xl bg-themed grid gap-4 p-6 m-4 z-50 overflow-hidden md:p-8 md:grid-cols-2">
        <div
          className="w-8 h-8 flex items-center justify-center absolute top-6 right-6 rounded-full cursor-pointer bg-themed-dark"
          onClick={() => props.onCloseOverlay}
        >
          x
        </div>
        <div className="flex items-center justify-center">
          <img
            src={team.image}
            alt={team.name}
            className="max-h-[35vh] md:max-h-[none]"
          />
        </div>
        <div className="overflow-y-scroll md:p-8">
          <h2 className="text-6xl uppercase font-bold w-full text-center mb-8">
            {team.name}
          </h2>

          <div className="grid gap-16">
            <div>
              <p className="text-xl">"{team.teamText}"</p>
            </div>

            <div className="grid gap-2">
              <h3 className="uppercase font-bold">Das bekommst du</h3>
              <div>
                Mario Strikers: Battle League Football | Nintendo Switch
                <p>
                  Nostalgie Edition{' '}
                  <span className="uppercase"> {team.name}</span>
                </p>
              </div>
              <p>
                <span className="uppercase">
                  {team.name} merchandise Artikel
                </span>
              </p>
              <div className="grid gap-4 grid-cols-2">
                {team.imageGallery.map((image, index) => (
                  <img
                    src={image}
                    className="cursor-pointer"
                    alt={`${team.name} ${index}`}
                    title={`Detailansicht öffnen`}
                  />
                ))}
              </div>
            </div>

            <div className="grid gap-2">
              <h3 className="uppercase font-bold">{team.name}'s Hyperstrike</h3>
              <iframe
                className="w-full"
                src={team.specialAbilityVideoURL}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>

            <div>
              <h3 className="uppercase font-bold">Wer ist {team.name}</h3>
              <p>{team.baseText}</p>
            </div>

            <div>
              <BaseButton variant="outlined">Schließen</BaseButton>
            </div>
          </div>
        </div>
      </div>
    </OverlayBackground>
  );
};

export default TheCharacterOverlay;
