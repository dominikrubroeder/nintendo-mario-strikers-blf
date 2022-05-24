import OverlayBackground from './OverlayBackground';
import teams from '../../data/teams';

const TheCharacterOverlay = (props) => {
  const team = teams.find((team) => team.name === props.character);

  return (
    <OverlayBackground onCloseOverlay={props.onCloseOverlay}>
      <div className="max-w-5xl w-full rounded-3xl bg-themed grid grid-cols-2 gap-4 p-8 z-50">
        <div className="flex items-center justify-center">
          <img src={team.image} alt={team.name} />
        </div>
        <div className="p-8">
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
