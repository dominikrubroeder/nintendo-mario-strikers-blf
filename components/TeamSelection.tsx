import React, { useRef, useState, useContext } from 'react';
import { useRouter } from 'next/router';
import AppContext from '../store/app-context';
import teams from '../data/teams';
import TeamConfigOption from './product-detail/buy-configuration/options/TeamConfigOption';
import SpringBounceWhenInView from './animation/SpringBounceWhenInView';
import TheCharacterOverlay from './overlays/TheCharacterOverlay';
import Tooltip from './Tooltip';

interface TeamSelectionProps {
  className?: string;
}

const TeamSelection: React.FC<TeamSelectionProps> = ({ className }) => {
  const appCtx = useContext(AppContext);
  const router = useRouter();
  const teamSection = useRef<null | HTMLDivElement>(null);
  const [showTheCharacterOverlay, setShowTheCharacterOverlay] = useState(false);
  const currentTheme = appCtx.theme ? appCtx.theme.toUpperCase() : undefined;

  // Set theme based on selected team (nintendo character)
  // Save selected theme to local storage
  const setTeam = (team: string) => {
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
          <div className="text-accent themed:text-white text-sm cursor-pointer">
            <Tooltip title="Warum?">
              Erhalte <b>zusätzlichen Spiel-Content</b> wie erweitere Arenen,
              das Geheimteam und <b>inviduelle Merch-Artrikel</b> basierend auf
              deiner Team-Wahl! <br /> <br />
              Wähle also beispielsweise {currentTheme}, um einen Hoodie im{' '}
              {currentTheme} Design zu erhalten oder deinen Schreibtisch mit der{' '}
              {currentTheme}
              Tischfigar in der Sieger-Pose zu schmücken.
              <br /> <br />
              Klicke auf einen Charakter, um weitere Informationen zu erhalten.
            </Tooltip>
          </div>
        </div>

        {showTheCharacterOverlay && (
          <TheCharacterOverlay
            onCloseOverlay={() => setShowTheCharacterOverlay(false)}
          />
        )}

        <div className={`grid gap-2 ${className ? className : ''}`}>
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
