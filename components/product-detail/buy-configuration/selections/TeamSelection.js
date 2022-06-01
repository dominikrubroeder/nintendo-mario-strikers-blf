import { useRef, useState, useContext } from 'react';
import { useRouter } from 'next/router';
import AppContext from '../../../../store/app-context';
import teams from '../../../../data/teams';
import TeamConfigOption from '../../buy-configuration/options/TeamConfigOption';
import SpringBounceWhenInView from '../../../animation/SpringBounceWhenInView';
import TheCharacterOverlay from '../../../overlays/TheCharacterOverlay';

const TeamSelection = () => {
  const appCtx = useContext(AppContext);
  const router = useRouter();
  const teamSection = useRef();
  const [showTheCharacterOverlay, setShowTheCharacterOverlay] = useState(false);

  // Set theme based on selected team (nintendo character)
  // Save selected theme to local storage
  const setTeam = (team) => {
    appCtx.setTheme(team);

    router.push(
      `${router.pathname}/?edition=${appCtx.edition}?team=${team}`,
      undefined,
      {
        shallow: true,
      }
    );
  };

  return (
    <div className="grid gap-4" ref={teamSection}>
      <div className="grid gap-4">
        <div className="flex justify-between items-center">
          <h4>Wähle dein Team:</h4>
          <p className="text-accent themed:text-white text-sm cursor-pointer">
            Warum?
          </p>
        </div>

        {showTheCharacterOverlay && <TheCharacterOverlay />}

        <div className="grid gap-2">
          {teams.map((team) => {
            return (
              <SpringBounceWhenInView key={team.name}>
                <TeamConfigOption
                  name={team.name}
                  sound={team.sound}
                  image={team.image}
                  onClick={() => setTeam(team.name)}
                  setShowTheCharacterOverlay={setShowTheCharacterOverlay}
                />
              </SpringBounceWhenInView>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TeamSelection;
