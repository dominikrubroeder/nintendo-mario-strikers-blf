import React, { useRef, useState, useContext } from 'react';
import { useRouter } from 'next/router';
import AppContext from '../store/app-context';
import teams from '../data/characters';
import CharacterCard from './CharacterCard';
import SpringBounceWhenInView from './animation/SpringBounceWhenInView';
import CharacterOverlay from './CharacterOverlay';
import Tooltip from './Tooltip';

interface CharacterSelectionProps {
  className?: string;
}

const CharacterSelection: React.FC<CharacterSelectionProps> = ({
  className,
}) => {
  const appCtx = useContext(AppContext);
  const router = useRouter();
  const teamSection = useRef<null | HTMLDivElement>(null);
  const [showCharacterOverlay, setShowCharacterOverlay] = useState(false);
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

  const onCloseHandler = () => {
    document.body.style.height = 'auto';
    document.body.style.overflow = 'visible';
    setShowCharacterOverlay(false);
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

        {showCharacterOverlay && (
          <CharacterOverlay onCloseOverlay={onCloseHandler} />
        )}

        <div className={`grid gap-2 ${className ? className : ''}`}>
          {teams.map((team) => {
            return (
              <SpringBounceWhenInView key={team.name}>
                <CharacterCard
                  name={team.name}
                  sound={team.sound}
                  image={team.image}
                  onClick={() => setTeam(team.name)}
                  setShowCharacterOverlay={setShowCharacterOverlay}
                />
              </SpringBounceWhenInView>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CharacterSelection;
