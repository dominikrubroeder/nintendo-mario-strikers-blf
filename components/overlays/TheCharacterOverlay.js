import OverlayBackground from './OverlayBackground';
import teams from '../../data/teams';

const TheCharacterOverlay = (props) => {
  const team = teams.find((team) => team.name === props.character);

  return (
    <OverlayBackground
      className="items-start justify-start md:justify-center md:items-center"
      onCloseOverlay={props.onCloseOverlay}
    >
      <div className="relative max-w-5xl h-[75vh] rounded-3xl bg-themed grid gap-4 p-6 m-4 z-50 overflow-y-scroll md::p-8 md:grid-cols-2">
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
        <div className="md:p-8">
          <h2 className="text-6xl uppercase font-bold w-full text-center mb-8">
            {team.name}
          </h2>

          <div className="grid gap-4">
            <div>
              <p className="text-xl">"{team.teamText}"</p>
            </div>

            <div>Das erhälst du:</div>

            <div>
              <p className="uppercase">
                Wer ist <span className="uppercase">{team.name}</span>
              </p>
              <p>{team.baseText}</p>
            </div>
          </div>
        </div>
      </div>
    </OverlayBackground>
  );
};

export default TheCharacterOverlay;
