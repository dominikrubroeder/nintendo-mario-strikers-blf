import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import Layout from '../../../components/layout';
import Heading from '../../../components/typography/Heading';
import AudioContext from '../../../store/audioContext';
import InteractiveAudioSetting from '../../../components/audio/InteractiveAudioSetting';

const GuidedKickoffPage: React.FC = () => {
  const audioCtx = useContext(AudioContext);
  const router = useRouter();

  const initRedirect = () => {
    audioCtx?.setSoundtrack('/audio/soundtracks/main-menu.mp3');

    setTimeout(() => {
      router.push('/guided/select-your-team');
    }, 400);
  };

  return (
    <Layout>
      <section className="min-h-screen-header m-auto flex flex-col items-center justify-center gap-8 text-center">
        <div className="grid gap-8">
          <div className="grid max-w-2xl gap-2 text-left">
            <Heading as="h1">Es ist Anpfiff!</Heading>

            <p>
              Aktivierst du diese Option, kannst du für die optimale Experience
              während des browsens Original Mario Soundtracks im Hintergrund
              abspielen lassen!
            </p>
          </div>

          <div className="animate--fadeUp text-left animation-delay-700">
            <InteractiveAudioSetting />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GuidedKickoffPage;
