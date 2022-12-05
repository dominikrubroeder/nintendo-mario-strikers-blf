import { PlayIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import Layout from '../../../components/layout';
import Heading from '../../../components/typography/Heading';
import Button from '../../../components/ui/Button';
import AudioContext from '../../../store/audioContext';

const GuidedKickoffPage: React.FC = () => {
  const audioCtx = useContext(AudioContext);
  const router = useRouter();

  const initRedirect = () => {
    audioCtx?.setSoundtrack('/audio/soundtracks/main-menu.mp3');

    setTimeout(() => {
      router.push('/guided/select-your-team');
    }, 1000);
  };

  return (
    <Layout>
      <section className="min-h-screen-header m-auto flex flex-col items-center justify-center text-center">
        <Heading className="headline--gradient">Es ist Anpfiff!</Heading>

        <div className="animate--fadeUp grid grid-cols-2 flex-col gap-2 animation-delay-700">
          {/**
           * Aktivierst du diese Option, kannst du für die optimale Experience während des browsens Original Mario Soundtracks im Hintergrund abspielen lassen!
           */}
          <Button variant="contained" onClick={initRedirect}>
            Spiele einen Soundtrack
            <PlayIcon className="h-4 w-4" />
          </Button>

          <Button variant="text" onClick={initRedirect}>
            Weiter ohne Soundtrack
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default GuidedKickoffPage;
