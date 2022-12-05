import { PlayIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import CharacterSelection from '../../../components/character/CharacterSelection';
import Layout from '../../../components/layout';
import Heading from '../../../components/typography/Heading';
import Button from '../../../components/ui/Button';
import AppContext from '../../../store/appContext';

const SelectYourTeamPage: React.FC = () => {
  const appCtx = useContext(AppContext);
  const router = useRouter();

  const initRedirect = () => {
    setTimeout(() => {
      router.push('/guided/discover-mario-strikers-battle-league-football');
    }, 1000);
  };

  return (
    <Layout>
      <section className="m-auto w-full max-w-screen-xl px-4">
        <Heading className="headline--gradient">Wähle dein Team</Heading>

        <div className="mb-16 grid grid-cols-2">
          <Button variant="contained" onClick={initRedirect}>
            Weiter mit {appCtx?.selectedCharacter}
          </Button>

          <Button variant="text" onClick={initRedirect}>
            Weiter ohne Team
          </Button>
        </div>

        <CharacterSelection className="sm:grid-cols-2 lg:grid-cols-3" />
      </section>
    </Layout>
  );
};

export default SelectYourTeamPage;
