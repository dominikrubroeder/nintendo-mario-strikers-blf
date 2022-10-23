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
import Heading from './Heading';

interface TheStickyBuyBarProps {
  price?: number;
  href?: string;
  shouldBeVisible: boolean | undefined;
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
    setIsVisible(!!shouldBeVisible);
  }, [shouldBeVisible]);

  return (
    <>
      <div
        className={`fixed bottom-0 w-full grid gap-1 md:gap-2 md:grid-cols-2 text-sm p-4 bg-slate-100 themed:bg-accent z-50 transition-all md:pr-20 ${
          isVisible
            ? 'opacity-100 visible translate-y-0'
            : 'opacity-0 invisible translate-y-1/2'
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
        <div className="flex gap-1 flex-row items-center justify-between pl-14 md:pl-0 md:justify-end md:gap-4">
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
        className={`fixed left-4 bottom-4 interactive z-50 md:bottom-6 md:left-auto md:right-4 ${
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
