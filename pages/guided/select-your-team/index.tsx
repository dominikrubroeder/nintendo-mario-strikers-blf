import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react';
import CharacterSelection from '../../../components/character/CharacterSelection';
import Layout from '../../../components/layout';
import Heading from '../../../components/typography/Heading';
import characters from '../../../data/characters';
import AppContext from '../../../store/appContext';
import Image from 'next/image';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import FloatingActionBar from '../../../components/animation/FloatingActionBar';

const SelectYourTeamPage: React.FC = () => {
  const appCtx = useContext(AppContext);
  const router = useRouter();
  const character = characters.find(
    (character) => character.id === appCtx?.selectedCharacter
  );
  const controls = useAnimation();

  const initRedirect = () => {
    setTimeout(() => {
      router.push('/guided/discover-mario-strikers-battle-league-football');
    }, 1000);
  };

  useEffect(() => {
    if (character) controls.start({ x: -72, scale: 1 });
  }, [character, controls]);

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
                  className="absolute -z-10 flex h-12 w-12 items-center justify-center rounded-full bg-signal"
                  initial={{ x: 0, scale: 0.3 }}
                  animate={controls}
                  exit={{ x: 0, scale: 0.3 }}
                  transition={{
                    type: 'spring',
                    damping: 20,
                    stiffness: 400,
                    delay: 1,
                  }}
                >
                  <Image
                    src={character.image}
                    width={56}
                    height={56}
                    alt={character.name}
                  />
                </motion.div>
              </AnimatePresence>

              <div>Weiter mit {character?.name}</div>
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
