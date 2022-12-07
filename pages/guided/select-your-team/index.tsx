import { PlayIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import CharacterSelection from "../../../components/character/CharacterSelection";
import Layout from "../../../components/layout";
import Heading from "../../../components/typography/Heading";
import Button from "../../../components/ui/Button";
import characters from "../../../data/characters";
import AppContext from "../../../store/appContext";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const SelectYourTeamPage: React.FC = () => {
  const appCtx = useContext(AppContext);
  const router = useRouter();
  const character = characters.find(
    (character) => character.id === appCtx?.selectedCharacter
  );

  const initRedirect = () => {
    setTimeout(() => {
      router.push("/guided/discover-mario-strikers-battle-league-football");
    }, 1000);
  };

  return (
    <>
      <Layout>
        <section className="m-auto mb-28 w-full max-w-screen-xl px-4">
          <Heading className="headline--gradient">Wähle dein Team</Heading>

          <div className="animate--fadeUp mb-16 grid grid-cols-2 animation-delay-700"></div>

          <CharacterSelection className="sm:grid-cols-2 lg:grid-cols-3" />
        </section>
      </Layout>

      {character && (
        <AnimatePresence>
          <div className="fixed bottom-4 z-50 flex w-full items-center justify-center gap-4 transition">
            <motion.div
              className="flex w-max items-center justify-center gap-2 rounded-full bg-accent-dark p-4"
              initial={{ opacity: 0, width: "0" }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: "0" }}
              transition={{ delay: 0.6 }}
            >
              <Button variant="contained" onClick={initRedirect}>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent">
                  <Image
                    src={character.image}
                    width={24}
                    height={24}
                    alt={character.name}
                  />
                </div>
                <span>Weiter mit {character?.name}</span>
              </Button>

              <Button variant="text" onClick={initRedirect}>
                Weiter ohne Team
              </Button>
            </motion.div>
          </div>
        </AnimatePresence>
      )}
    </>
  );
};

export default SelectYourTeamPage;
