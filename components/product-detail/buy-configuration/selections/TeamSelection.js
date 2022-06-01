import { useRef, useState, useContext } from 'react';
import { useRouter } from 'next/router';
import ThemeContext from '../../store/theme-context';
import teams from '../../../../data/teams';
import TeamConfigOption from '../../buy-configuration/options/TeamConfigOption';
import SpringBounceWhenInView from '../../../animation/SpringBounceWhenInView';
import TheCharacterOverlay from '../../../overlays/TheCharacterOverlay';

const TeamSelection = (props) => {
  const themeCtx = useContext(ThemeContext);
  const router = useRouter();
  const teamSection = useRef();
  const [showTheCharacterOverlay, setShowTheCharacterOverlay] = useState(false);

  // Set theme based on selected team (nintendo character)
  // Save selected theme to local storage
  const setTeam = (team) => {
    document.body.className = `themed theme-${team} bg-themed text-white`;

    localStorage.setItem('themed', true);
    localStorage.setItem('theme', team);

    // Play sound of character on click
    // Show fullscreen animated wallpaper of character on click

    props.setSelectedTeam(team);

    // teamSection.current.scrollIntoView({
    //   behavior: 'smooth',
    //   block: 'center',
    //   inline: 'center',
    // });

    props.setBuyable(true);

    router.push(
      `${router.pathname}/?edition=${props.selectedEdition}?team=${team}`,
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

        {showTheCharacterOverlay && (
          <TheCharacterOverlay
            character={props.selectedTeam}
            onCloseOverlay={() => setShowTheCharacterOverlay(false)}
          />
        )}

        <div className="grid gap-2">
          {teams.map((team) => {
            return (
              <SpringBounceWhenInView key={team.name}>
                <TeamConfigOption
                  name={team.name}
                  sound={team.sound}
                  image={team.image}
                  onClick={() => setTeam(team.name)}
                  selectedTeam={props.selectedTeam}
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
