import { motion } from "framer-motion";
import teams from "../data/teams";
import { useContext } from "react";
import AppContext from "../store/appContext";

interface TeamStatsBar {
  label: string;
}

export default function TeamStatsBar({ label }: TeamStatsBar) {
  const appCtx = useContext(AppContext);
  const teamData =
    teams.find((team) => team.id === appCtx?.selectedTeam) ?? teams[0];
  const stat =
    label === "Kraft"
      ? teamData.stats.Kraft
      : label === "Tempo"
      ? teamData.stats.Tempo
      : label === "Schuss"
      ? teamData.stats.Schuss
      : label === "Passen"
      ? teamData.stats.Passen
      : label === "Technik"
      ? teamData.stats.Technik
      : teamData.stats.Kraft;

  return (
    <div>
      <header className="flex justify-between gap-4">
        <h3 className="font-bold uppercase drop-shadow">{label}</h3>
        <div className="font-bold uppercase tracking-widest">
          <span className="text-lg">{(stat * 25).toFixed(0)}</span>/25
        </div>
      </header>

      <div className="relative h-8 w-full skew-x-12 overflow-hidden border-4 border-accent-dark bg-accent-dark">
        <div className="absolute left-[20%] z-10 h-full w-1 bg-accent-dark"></div>
        <div className="absolute left-[40%] z-10 h-full w-1 bg-accent-dark"></div>
        <div className="absolute left-[60%] z-10 h-full w-1 bg-accent-dark"></div>
        <div className="absolute left-[80%] z-10 h-full w-1 bg-accent-dark"></div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          className="absolute left-0 h-full bg-accent-gradient"
          variants={{
            visible: { width: `${stat * 100}%` },
            hidden: { width: "0%" },
          }}
          transition={{
            delay: 0.2,
            ease: "easeOut",
            duration: 0.6,
          }}
        ></motion.div>
      </div>
    </div>
  );
}
