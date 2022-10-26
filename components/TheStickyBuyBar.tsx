import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Button from "./Button";
import ReleaseCountdown from "./ReleaseCountdown";
import AppContext from "../store/appContext";
import {
  ArrowUpIcon,
  ChevronDoubleDownIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import Heading from "./Heading";

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
        className={`fixed bottom-0 z-50 grid w-full gap-1 bg-slate-100 p-4 text-sm transition-all themed:bg-accent md:grid-cols-2 md:gap-2 md:pr-20 ${
          isVisible
            ? "visible translate-y-0 opacity-100"
            : "invisible translate-y-1/2 opacity-0"
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
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  {appCtx?.selectedEdition
                    ? `${appCtx?.selectedEdition
                        .charAt(0)
                        .toUpperCase()}${appCtx?.selectedEdition.slice(
                        1
                      )} Edition`
                    : ""}
                  {appCtx?.selectedCharacter
                    ? ` – ${appCtx?.selectedCharacter.toUpperCase()}`
                    : ""}
                  {price ? ` – ${price}€` : ""}
                </span>
                {router.pathname ===
                  "/buy-mario-strikers-battle-league-football" && (
                  <ArrowUpIcon className="h-4 w-4 cursor-pointer text-accent themed:text-white"></ArrowUpIcon>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-row items-center justify-between gap-1 pl-14 md:justify-end md:gap-4 md:pl-0">
          <ReleaseCountdown />

          <div className="flex gap-1">
            <Button
              variant="contained"
              href={href || "/buy-mario-strikers-battle-league-football"}
              sound={href ? "nintendo-switch-click" : "coin"}
            >
              Jetzt vorbestellen
            </Button>
          </div>
        </div>
      </div>

      <Button
        variant="text"
        className={`interactive fixed left-4 bottom-4 z-50 md:bottom-6 md:left-auto md:right-4 ${
          isVisible ? "bg-transparent" : "bg-accent themed:bg-signal"
        }`}
        onClick={() => setIsVisible((previousState) => !previousState)}
      >
        <ChevronDoubleDownIcon
          className={`icon ${isVisible ? "rotate-0" : "rotate-180"}`}
        />
      </Button>
    </>
  );
};

export default TheStickyBuyBar;
