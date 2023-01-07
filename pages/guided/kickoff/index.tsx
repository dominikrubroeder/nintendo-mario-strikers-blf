import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import Layout from '../../../components/layout';
import Heading from '../../../components/typography/Heading';
import AudioContext from '../../../store/audioContext';
import Toggle from '../../../components/ui/Toggle/Toggle';
import {
  ArrowRightCircleIcon,
  SpeakerWaveIcon,
  SpeakerXMarkIcon,
} from '@heroicons/react/24/solid';
import Card from '../../../components/ui/Card/Card';
import Button from '../../../components/ui/Button';
import AnimateAppearance from '../../../components/animation/AnimateAppearance';
import FloatingActionBar from '../../../components/floating-action-bar';

const GuidedKickoffPage: React.FC = () => {
  const audioCtx = useContext(AudioContext);
  const [showMore, setShowMore] = useState(false);
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
        <div className="grid w-full max-w-3xl gap-8 text-left">
          <div className="grid max-w-2xl gap-2 text-left">
            <Heading as="h1">Es ist Anpfiff!</Heading>

            <p>
              Aktivierst du interaktives Audio, kannst du beispielsweise während
              des browsens Original Mario Soundtracks im Hintergrund laufen
              lassen!
            </p>
          </div>

          <div className="flex items-center gap-4">
            <AnimateAppearance
              animationType="fadeUp"
              animationDelay="400"
              className="text-left"
            >
              <Card className="w-max">
                <div className="flex justify-between gap-8">
                  Interaktives Audio
                  <Toggle
                    enabled={audioCtx?.hasInteractiveAudio ?? true}
                    enabledIcon={
                      <SpeakerWaveIcon className="h-3 w-3 fill-current"></SpeakerWaveIcon>
                    }
                    disabledIcon={
                      <SpeakerXMarkIcon className="h-3 w-3 fill-current"></SpeakerXMarkIcon>
                    }
                    onClick={audioCtx?.toggleInteractiveAudio}
                    className="interactive"
                  />
                </div>
              </Card>
            </AnimateAppearance>

            <AnimateAppearance animationType="fadeUp">
              <Button
                variant="text"
                isInline
                className="text-xs"
                onClick={() => setShowMore((previousState) => !previousState)}
              >
                Mehr Infos
              </Button>
            </AnimateAppearance>
          </div>

          {showMore && (
            <AnimateAppearance animationType="fadeUp" animationDelay="0">
              <p>
                <span>
                  Aktivierst du <b>interaktives Audio</b> so erhälst du eine
                  bessere User Experience beim Interagieren mit dieser
                  Website.&nbsp;
                </span>
                Lasse beispielsweise einen&nbsp;
                <Button
                  variant="text"
                  onClick={() =>
                    audioCtx?.setSound('/audio/soundtracks/main-menu.mp3')
                  }
                  isInline
                >
                  <SpeakerWaveIcon className="mr-0.5 inline-block h-4 w-4" />
                  Soundtrack im Hintergrund laufen
                </Button>
                &nbsp;oder
                <Button
                  variant="text"
                  onClick={() =>
                    audioCtx?.setSound('/audio/nintendo-woohoo.wav')
                  }
                  isInline
                >
                  <SpeakerWaveIcon className="mr-0.5 inline-block h-4 w-4" />
                  höre einen typischen Nintendo Sound
                </Button>
                &nbsp;bei Button-Klicks und weiteren Aktionen.
              </p>
            </AnimateAppearance>
          )}

          {showMore && (
            <FloatingActionBar>
              <ArrowRightCircleIcon
                className="interactive h-8 w-8 fill-signal"
                onClick={initRedirect}
              />
            </FloatingActionBar>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default GuidedKickoffPage;
