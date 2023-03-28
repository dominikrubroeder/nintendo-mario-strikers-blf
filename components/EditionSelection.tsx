import { useContext } from "react";
import AppContext from "../store/appContext";
import editions from "../data/editions";
import EditionConfigOption from "./EditionConfigOption";
import SpringBounceWhenInView from "./animation/SpringBounceWhenInView";
import Image from "next/image";
import Logo from "./svg/Logo";
import { motion } from "framer-motion";

const EditionSelection: React.FC = () => {
  const appCtx = useContext(AppContext);

  return (
    <div className="grid gap-4">
      <div className="flex items-center justify-between gap-2">
        <h4 className="font-bold uppercase">Wähle deine Edition</h4>
        <div className="flex items-center justify-center gap-2 text-center text-xl font-bold uppercase">
          {appCtx?.selectedEdition === "team" ? (
            <motion.div key="teamLabel" animate={{ x: [100, 0] }}>
              <span className="rounded-xl bg-accent py-2 px-3 text-center text-xs text-white themed:bg-accent-dark">
                {appCtx?.selectedEdition}
              </span>
            </motion.div>
          ) : (
            <motion.div key="standardLabel" animate={{ x: [100, 0] }}>
              <span className="rounded-xl bg-accent py-2 px-3 text-center text-xs text-white themed:bg-accent-dark">
                {appCtx?.selectedEdition}
              </span>
            </motion.div>
          )}

          {appCtx?.hasTeam ? (
            <motion.div key="team" animate={{ y: [-100, 0] }}>
              <Image
                src={`/images/teams/${appCtx?.selectedTeam}.png`}
                width={48}
                height={48}
                alt={`Team ${appCtx?.selectedTeam}`}
                className="object-contain"
              />
            </motion.div>
          ) : (
            <motion.div key="logo" animate={{ y: [-100, 0] }}>
              <Logo variant="Mario Strikers" size={48} />
            </motion.div>
          )}
        </div>
      </div>

      <div className="grid gap-2">
        {editions.map((edition) => {
          return (
            <SpringBounceWhenInView key={edition.name}>
              <div>
                <EditionConfigOption
                  edition={edition}
                  price={edition.price}
                  onClick={() => appCtx?.setTeam(edition.team)}
                >
                  <ul>
                    {edition.details.map((detail) => (
                      <li key={detail} className="star">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </EditionConfigOption>
              </div>
            </SpringBounceWhenInView>
          );
        })}
      </div>
    </div>
  );
};

export default EditionSelection;
