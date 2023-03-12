import React from "react";
import teams from "../data/characters";
import CharacterCard from "./CharacterCard";
import SpringBounceWhenInView from "./animation/SpringBounceWhenInView";

interface CharacterSelectionProps {
  className?: string;
}

const CharacterSelection: React.FC<CharacterSelectionProps> = ({
  className,
}) => {
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
            />
          </SpringBounceWhenInView>
        );
      })}
    </div>
  );
};

export default CharacterSelection;
