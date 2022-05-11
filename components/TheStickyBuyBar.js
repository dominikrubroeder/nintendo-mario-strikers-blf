import Link from 'next/link';
import { useEffect, useState } from 'react';
import BaseButton from './base/BaseButton';
import TheCountdown from './TheCountdown';

export default function TheStickyBuyBar(props) {
  const [isVisible, setIsVisible] = useState(null);

  const { shouldBeVisible } = props;

  useEffect(() => {
    setIsVisible(shouldBeVisible);
  }, [shouldBeVisible]);

  return (
    <div
      className={`fixed bottom-0 w-full grid grid-cols-2 text-sm p-4 bg-slate-100 z-40 transition-all ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1/2'
      }`}
    >
      <div className="flex items-center gap-2">
        {props.team && (
          <img
            src={`/images/characters/${props.team}-sketch.jpg`}
            class="h-12"
          />
        )}
        <div className="grid">
          <h3 className="block">
            Mario Strikers: Battle League Football | Nintendo Switch
          </h3>
          {(props.edition || props.team) && (
            <div className="flex items-center">
              <span className="text-accent">
                {props.edition && props.edition} Edition
                {props.team && ` – ${props.team.toUpperCase()}`}
                {props.price && ` – ${props.price}€`}
              </span>
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center justify-between w-full md:justify-end gap-4">
        <TheCountdown />
        <BaseButton variant="contained">
          <Link
            href={props.href || '/buy-mario-strikers-battle-league-football'}
          >
            Jetzt vorbestellen
          </Link>
        </BaseButton>
      </div>
    </div>
  );
}
