import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import Button from './ui/Button';
import AppContext from '../store/appContext';
import { ChevronDoubleDownIcon } from '@heroicons/react/24/outline';
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
  const appCtx = useContext(AppContext);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(!!shouldBeVisible);
  }, [shouldBeVisible]);

  return (
    <>
      <div
        className={`fixed bottom-0 z-50 grid w-full gap-1 bg-gray-100 p-4 text-sm transition-all themed:bg-accent md:grid-cols-2 md:gap-2 ${
          isVisible
            ? 'visible translate-y-0 opacity-100'
            : 'invisible translate-y-1/2 opacity-0'
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
                  className="cursor-pointer text-accent themed:text-white"
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
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-row items-center justify-between gap-1 pl-14 md:justify-end md:gap-4 md:pl-0">
          <div className="mr-16 flex gap-1">
            <Button
              variant="contained"
              href={href || '/buy-mario-strikers-battle-league-football'}
              sound="coin"
            >
              Jetzt vorbestellen
            </Button>
          </div>
        </div>
      </div>

      <Button
        variant="text"
        className={`interactive group fixed right-4 bottom-4 z-50 md:bottom-5 md:left-auto md:right-4 ${
          isVisible
            ? 'bg-transparent hover:text-accent'
            : 'bg-accent hover:bg-accent-dark themed:bg-signal themed:hover:bg-signal-dark'
        }`}
        onClick={() => setIsVisible((previousState) => !previousState)}
      >
        <ChevronDoubleDownIcon
          className={`icon text-white ${
            isVisible
              ? 'rotate-0 text-accent group-hover:text-accent themed:text-white themed:group-hover:text-white'
              : 'rotate-180'
          }`}
        />
      </Button>
    </>
  );
};

export default TheStickyBuyBar;
