import React from "react";
import teams from "../data/teams";
import TeamCard from "./TeamCard";
import SpringBounceWhenInView from "./animation/SpringBounceWhenInView";

interface TeamSelectionProps {
  className?: string;
}

const TeamSelection: React.FC<TeamSelectionProps> = ({ className }) => {
  return (
    <div className={`grid gap-4 ${className ? className : ""}`}>
      {teams.map((team) => {
        return (
          <SpringBounceWhenInView key={team.id}>
            <TeamCard
              id={team.id}
              name={team.name}
              sound={team.sound[0]}
              image={team.image}
            />
          </SpringBounceWhenInView>
        );
      })}
    </div>
  );
};

export default TeamSelection;
