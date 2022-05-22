import { useRef } from 'react';
import { useRouter } from 'next/router';
import teams from '../../../data/teams';
import TeamConfigOption from '../buy-configuration-options/TeamConfigOption';

const TeamSelection = (props) => {
  const router = useRouter();
  const teamSection = useRef();

  // Set theme based on selected team (nintendo character)
  // Save selected theme to local storage
  const setTeam = (team) => {
    document.body.className = `themed theme-${team} bg-themed text-white`;

    localStorage.setItem('themed', true);
    localStorage.setItem('theme', team);

    // Play sound of character on click
    // Show fullscreen animated wallpaper of character on click

    props.setSelectedTeam(team);

    teamSection.current.scrollIntoView({
      behavior: 'smooth',
    });

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
        <div className="grid grid-cols-2 gap-2">
          {teams.map((team) => {
            return (
              <TeamConfigOption
                key={team.name}
                name={team.name}
                sound={team.sound}
                onClick={() => setTeam(team.name)}
                selectedTeam={props.selectedTeam}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TeamSelection;
