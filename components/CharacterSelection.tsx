import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import AppContext from '../store/appContext';
import teams from '../data/characters';
import CharacterCard from './CharacterCard';
import SpringBounceWhenInView from './animation/SpringBounceWhenInView';

interface CharacterSelectionProps {
  className?: string;
}

const CharacterSelection: React.FC<CharacterSelectionProps> = ({
  className,
}) => {
  const appCtx = useContext(AppContext);
  const router = useRouter();

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

  return (
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
            />
          </SpringBounceWhenInView>
        );
      })}
    </div>
  );
};

export default CharacterSelection;
