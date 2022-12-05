import { PlayIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import CharacterSelection from '../../../components/character/CharacterSelection';
import Layout from '../../../components/layout';
import Heading from '../../../components/typography/Heading';
import Button from '../../../components/ui/Button';
import characters from '../../../data/characters';
import AppContext from '../../../store/appContext';

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
        <section className="m-auto w-full max-w-screen-xl px-4">
          <Heading className="headline--gradient">Wähle dein Team</Heading>

          <div className="animate--fadeUp mb-16 grid grid-cols-2 animation-delay-700"></div>

          <CharacterSelection className="sm:grid-cols-2 lg:grid-cols-3" />
        </section>
      </Layout>

      {character && (
        <div className="animate--fadeUp fixed bottom-4 z-50 flex w-full items-center justify-center">
          <div className="flex w-max items-center justify-center gap-2 rounded-full bg-accent-dark p-4">
            <Button variant="contained" onClick={initRedirect}>
              Weiter mit {character?.name}
            </Button>

            <Button variant="text" onClick={initRedirect}>
              Weiter ohne Team
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default SelectYourTeamPage;
