import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import CharacterSelection from '../../../components/character/CharacterSelection';
import Layout from '../../../components/layout';
import Heading from '../../../components/typography/Heading';
import Button from '../../../components/ui/Button';
import characters from '../../../data/characters';
import AppContext from '../../../store/appContext';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import FloatingActionBar from '../../../components/animation/FloatingActionBar';

const SelectYourTeamPage: React.FC = () => {
  const appCtx = useContext(AppContext);
  const router = useRouter();
  const character = characters.find(
    (character) => character.id === appCtx?.selectedCharacter
  );

  const initRedirect = () => {
    setTimeout(() => {
      router.push('/guided/discover-mario-strikers-battle-league-football');
    }, 1000);
  };

  return (
    <>
      <Layout>
        <section className="m-auto mb-28 w-full max-w-screen-xl px-4">
          <Heading as="h1" className="headline--gradient">
            Wähle dein Team
          </Heading>

          <div className="animate--fadeUp mb-16 grid grid-cols-2 animation-delay-700"></div>

          <CharacterSelection className="sm:grid-cols-2 lg:grid-cols-3" />
        </section>
      </Layout>

      {character && (
        <FloatingActionBar>
          <div className="flex items-center justify-center gap-4">
            <div
              className="flex items-center gap-2 whitespace-nowrap"
              onClick={initRedirect}
            >
              <AnimatePresence>
                <motion.div
                  className="absolute -z-10 flex h-12 w-12 items-center justify-center rounded-full bg-accent-dark"
                  initial={{ x: 0 }}
                  animate={{ x: -72 }}
                  exit={{ x: 0 }}
                  transition={{
                    type: 'spring',
                    damping: 20,
                    stiffness: 400,
                    delay: 0.6,
                  }}
                >
                  <Image
                    src={character.image}
                    width={24}
                    height={24}
                    alt={character.name}
                  />
                </motion.div>
              </AnimatePresence>

              <div className="relative pl-[3.5rem]">
                <div className="absolute top-0 left-0 flex h-12 w-12 items-center justify-center rounded-full bg-signal">
                  <Image
                    src={character.image}
                    width={32}
                    height={32}
                    alt={character.name}
                  />
                </div>
                Weiter mit {character?.name}
              </div>
            </div>

            <div className="whitespace-nowrap" onClick={initRedirect}>
              Weiter ohne Team
            </div>
          </div>
        </FloatingActionBar>
      )}
    </>
  );
};

export default SelectYourTeamPage;
