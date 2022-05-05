import Link from 'next/link';
import { useEffect, useRef } from 'react';
import useIsOnScreen from '../hooks/useIsOnScreen';
import BaseButton from './base/BaseButton';
import TheCountdown from './TheCountdown';

export default function TheHero(props) {
  const overserableObject = useRef();
  const overserableObjectIsOnScreen = useIsOnScreen(overserableObject);

  useEffect(() => {
    if (overserableObjectIsOnScreen) {
      props.setShowStickyBuyBar(false);
    } else {
      props.setShowStickyBuyBar(true);
    }
  }, [overserableObjectIsOnScreen]);

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
            <BaseButton variant="contained">
              <Link href="/buy-mario-strikers-battle-league-football">
                Button primary
              </Link>
            </BaseButton>

            <BaseButton variant="text">Button primary</BaseButton>
          </div>
        </div>
      </div>
    </section>
  );
}
