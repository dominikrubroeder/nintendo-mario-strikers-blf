import { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import Button from './base/Button';
import ReleaseCountdown from './ReleaseCountdown';
import AppContext from '../store/app-context';
import { ArrowSmUpIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';
import Heading from './typography/Heading';

export default function TheStickyBuyBar(props) {
  const router = useRouter();
  const appCtx = useContext(AppContext);
  const [isVisible, setIsVisible] = useState(null);

  const { shouldBeVisible } = props;

  useEffect(() => {
    setIsVisible(shouldBeVisible);
  }, [shouldBeVisible]);

  return (
    <div
      className={`fixed bottom-0 w-full grid gap-2 md:grid-cols-2 text-sm p-4 bg-slate-100 bg-themed z-40 transition-all ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1/2'
      }`}
    >
      <div className="flex items-center gap-2">
        {appCtx.theme && (
          <Image
            src={`/images/characters/NSwitch-character-sketch-${appCtx.theme}.png`}
            width={48}
            height={48}
            alt={`${appCtx.theme} sketch`}
          />
        )}
        <div className="grid">
          <Heading as="h3" className="block font-bold themed:text-white">
            Mario Strikers: Battle League Football | Nintendo Switch
          </Heading>

          {appCtx.edition && (
            <div className="flex items-center gap-1">
              <span
                className="text-accent cursor-pointer themed:text-white"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                {appCtx.edition
                  ? `${appCtx.edition
                      .charAt(0)
                      .toUpperCase()}${appCtx.edition.slice(1)} Edition`
                  : ''}
                {appCtx.theme ? ` – ${appCtx.theme.toUpperCase()}` : ''}
                {props.price ? ` – ${props.price}€` : ''}
              </span>
              {router.pathname ===
                '/buy-mario-strikers-battle-league-football' && (
                <ArrowSmUpIcon className="w-4 h-4 cursor-pointer text-accent themed:text-white"></ArrowSmUpIcon>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-end md:gap-4">
        <ReleaseCountdown />
        <div className="flex gap-1">
          <Button
            variant="contained"
            isLink
            href={props.href || '/buy-mario-strikers-battle-league-football'}
            playSound
          >
            Jetzt vorbestellen
          </Button>
          <Button
            variant="text"
            className="text-xs"
            onClick={() => setIsVisible(false)}
          >
            Hide
          </Button>
        </div>
      </div>
    </div>
  );
}
