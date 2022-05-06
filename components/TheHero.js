import Link from 'next/link';
import { useEffect, useRef } from 'react';
import useIsOnScreen from '../hooks/useIsOnScreen';
import BaseButton from './base/BaseButton';
import TheCountdown from './TheCountdown';

export default function TheHero(props) {
  const overserableObject = useRef();
  const overserableObjectIsOnScreen = useIsOnScreen(overserableObject);
  const nintendoSwitchClickSound = useRef();

  useEffect(() => {
    if (overserableObjectIsOnScreen) {
      props.setShowStickyBuyBar(false);
    } else {
      props.setShowStickyBuyBar(true);
    }
  }, [overserableObjectIsOnScreen]);

  const playNintendoSwitchClickSound = () => {
    nintendoSwitchClickSound.play();
    console.log('Played..');
  };

  return (
    <section className="grid items-center justify-center h-screen p-4 overflow-hidden">
      <div className="text-center grid gap-8">
        <img
          className="m-auto max-h-[65vh]"
          src="/images/product/mario-strikers-battle-league-football-cover.jpg"
          alt="Nintendo Switch"
        />
        <div className="grid gap-2 sticky top-0">
          <TheCountdown />
          <h1>Mario Strikers: Battle League Football | Nintendo Switch</h1>
          <div
            className="flex items-center justify-center"
            ref={overserableObject}
          >
            <BaseButton
              variant="contained"
              onClick={playNintendoSwitchClickSound}
            >
              <Link href="/buy-mario-strikers-battle-league-football">
                Button primary
              </Link>
            </BaseButton>

            <BaseButton variant="text">Button primary</BaseButton>
          </div>
          <audio
            id="nintendo-switch-click-sound"
            ref={nintendoSwitchClickSound}
          >
            <source
              src="/audio/nintendo-switch-click-sound.mp3"
              type="audio/mpeg"
              autoPlay
            />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </section>
  );
}
