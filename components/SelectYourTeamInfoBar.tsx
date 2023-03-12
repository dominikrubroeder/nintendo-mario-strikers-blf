import React, { useContext } from "react";
import Tooltip from "./ui/Tooltip";
import AppContext from "../store/appContext";
import teams from "../data/teams";

const SelectYourTeamInfoBar: React.FC = () => {
  const appCtx = useContext(AppContext);
  const currentTheme = appCtx?.selectedTeam
    ? appCtx?.selectedTeam.toUpperCase()
    : undefined;
  const team = teams.find((team) => team.id === appCtx?.selectedTeam);

  return (
    <div className="flex items-center justify-between">
      <h4>Wähle dein Team:</h4>

      <div className="flex items-center gap-4">
        <div className="font-bold">{team?.name.toUpperCase()}</div>
        <div className="cursor-pointer text-sm text-accent themed:text-white">
          <Tooltip title="Warum?">
            Wähle ein Team und erhalte <b>zusätzlichen Spiel-Content</b> wie
            neue Arenen, das Geheimteam und <b>inviduelle Merch-Artrikel</b>{" "}
            basierend auf deiner Team-Wahl! <br /> <br />
            Wähle also beispielsweise {currentTheme}, um einen Hoodie im
            {currentTheme} Design zu erhalten oder deinen Schreibtisch mit der
            {currentTheme}
            Tischfigar in der Sieger-Pose zu schmücken.
            <br /> <br />
            Klicke auf einen Charakter, um weitere Informationen zu erhalten.
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default SelectYourTeamInfoBar;
