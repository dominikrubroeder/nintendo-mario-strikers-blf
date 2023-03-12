import React, { useContext } from "react";
import AppContext from "../store/appContext";
import teams from "../data/characters";
import CharacterCard from "./CharacterCard";
import SpringBounceWhenInView from "./animation/SpringBounceWhenInView";

interface CharacterSelectionProps {
  className?: string;
}

const CharacterSelection: React.FC<CharacterSelectionProps> = ({
  className,
}) => {
  const appCtx = useContext(AppContext);

  return (
    <div className={`grid gap-4 ${className ? className : ""}`}>
      {teams.map((character) => {
        return (
          <SpringBounceWhenInView key={character.id}>
            <CharacterCard
              id={character.id}
              name={character.name}
              sound={character.sound[0]}
              image={character.image}
              onClick={() => appCtx?.setCharacter(character.id)}
            />
          </SpringBounceWhenInView>
        );
      })}
    </div>
  );
};

export default CharacterSelection;
