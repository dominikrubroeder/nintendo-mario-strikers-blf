import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import Button from './Button';
import ReleaseCountdown from './ReleaseCountdown';
import AppContext from '../store/appContext';
import {
  ArrowUpIcon,
  ChevronDoubleDownIcon,
} from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';
import Heading from './typography/Heading';

interface TheStickyBuyBarProps {
  price?: number;
  href?: string;
  shouldBeVisible: boolean;
}

const TheStickyBuyBar: React.FC<TheStickyBuyBarProps> = ({
  price,
  href,
  shouldBeVisible,
}) => {
  const router = useRouter();
  const appCtx = useContext(AppContext);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(shouldBeVisible);
  }, [shouldBeVisible]);

  return (
    <>
      <div
        className={`fixed bottom-0 w-full grid gap-2 md:grid-cols-2 text-sm p-4 bg-slate-100 themed:bg-accent z-40 transition-all md:pr-20 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1/2'
        }`}
      >
        <div className="flex items-center gap-2">
          {appCtx?.selectedCharacter && (
            <Image
              src={`/images/characters/NSwitch-character-sketch-${appCtx?.selectedCharacter}.png`}
              width={48}
              height={48}
              alt={`${appCtx?.selectedCharacter} sketch`}
            />
          )}
          <div className="grid">
            <Heading as="h3" className="block font-bold themed:text-white">
              Mario Strikers: Battle League Football | Nintendo Switch
            </Heading>

            {appCtx?.selectedEdition && (
              <div className="flex items-center gap-1">
                <span
                  className="text-accent themed:text-white cursor-pointer"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }
                >
                  {appCtx?.selectedEdition
                    ? `${appCtx?.selectedEdition
                        .charAt(0)
                        .toUpperCase()}${appCtx?.selectedEdition.slice(
                        1
                      )} Edition`
                    : ''}
                  {appCtx?.selectedCharacter
                    ? ` – ${appCtx?.selectedCharacter.toUpperCase()}`
                    : ''}
                  {price ? ` – ${price}€` : ''}
                </span>
                {router.pathname ===
                  '/buy-mario-strikers-battle-league-football' && (
                  <ArrowUpIcon className="w-4 h-4 cursor-pointer text-accent themed:text-white"></ArrowUpIcon>
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
              href={href || '/buy-mario-strikers-battle-league-football'}
              sound={href ? 'nintendo-switch-click' : 'coin'}
            >
              Jetzt vorbestellen
            </Button>
          </div>
        </div>
      </div>

      <Button
        variant="text"
        className={`fixed bottom-6 right-4 interactive z-50 ${
          isVisible ? 'bg-transparent' : 'bg-accent themed:bg-signal'
        }`}
        onClick={() => setIsVisible((previousState) => !previousState)}
      >
        <ChevronDoubleDownIcon
          className={`icon ${isVisible ? 'rotate-0' : 'rotate-180'}`}
        />
      </Button>
    </>
  );
};

export default TheStickyBuyBar;
