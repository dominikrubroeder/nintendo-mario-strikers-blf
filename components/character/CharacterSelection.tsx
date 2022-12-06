import React, { useRef, useState, useContext } from 'react';
import { useRouter } from 'next/router';
import AppContext from '../../store/appContext';
import teams from '../../data/characters';
import CharacterCard from './CharacterCard';
import SpringBounceWhenInView from '../animation/SpringBounceWhenInView';
import CharacterOverlay from './CharacterOverlay';
import Tooltip from '../ui/Tooltip';

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
  const currentTheme = appCtx?.selectedCharacter
    ? appCtx?.selectedCharacter.toUpperCase()
    : undefined;

  // Set theme based on selected team (nintendo character)
  // Save selected theme to local storage
  const setTeam = (team: string) => {
    appCtx?.setCharacter(team);

    router.pathname !== '/guided/select-your-team'
      ? router.push(
          `${router.pathname}/?edition=${appCtx?.selectedEdition}?team=${team}`,
          undefined,
          {
            shallow: true,
          }
        )
      : null;
  };

  const onCloseHandler = () => {
    document.body.style.height = 'auto';
    document.body.style.overflow = 'visible';
    setShowCharacterOverlay(false);
  };

  return (
    <div className="grid gap-4" ref={teamSection}>
      <div className="grid gap-4">
        {router.pathname !== '/guided/select-your-team' && (
          <div className="flex items-center justify-between">
            <h4>Wähle dein Team:</h4>

            <div className="cursor-pointer text-sm text-accent themed:text-white">
              <Tooltip title="Warum?">
                Wähle ein Team und erhalte <b>zusätzlichen Spiel-Content</b> wie
                neue Arenen, das Geheimteam und <b>inviduelle Merch-Artrikel</b>{' '}
                basierend auf deiner Team-Wahl! <br /> <br />
                Wähle also beispielsweise {currentTheme}, um einen Hoodie im{' '}
                {currentTheme} Design zu erhalten oder deinen Schreibtisch mit
                der {currentTheme}
                Tischfigar in der Sieger-Pose zu schmücken.
                <br /> <br />
                Klicke auf einen Charakter, um weitere Informationen zu
                erhalten.
              </Tooltip>
            </div>
          </div>
        )}

        {showCharacterOverlay && (
          <CharacterOverlay onCloseOverlay={onCloseHandler} />
        )}

        <div className={`grid gap-4 ${className ? className : ''}`}>
          {teams.map((character) => {
            return (
              <SpringBounceWhenInView key={character.id}>
                <CharacterCard
                  id={character.id}
                  name={character.name}
                  sound={character.sound[0]}
                  image={character.image}
                  onClick={() => setTeam(character.id)}
                  setShowCharacterOverlay={() => setShowCharacterOverlay(true)}
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
