import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Button from "./ui/Button";
import AppContext from "../store/appContext";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/outline";
import Heading from "./Heading";

interface TheStickyBuyBarProps {
  price?: number;
  href?: string;
  shouldBeVisible: boolean | undefined;
  fixed?: boolean;
}

const TheStickyBuyBar: React.FC<TheStickyBuyBarProps> = ({
  price,
  href,
  shouldBeVisible,
  fixed = true,
}) => {
  const appCtx = useContext(AppContext);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(!!shouldBeVisible);
  }, [shouldBeVisible]);

  return (
    <>
      <div
        className={`${
          fixed ? "fixed bottom-0 z-50 m-4 w-[calc(100%-2rem)]" : ""
        } grid gap-1 rounded-3xl bg-gray-100 px-8 py-6 text-sm transition-all themed:bg-accent-dark md:grid-cols-2 md:gap-2 ${
          isVisible
            ? "visible translate-y-0 opacity-100"
            : "invisible translate-y-1/2 opacity-0"
        }`}
      >
        <div className="flex items-center gap-2">
          {appCtx?.selectedTeam && (
            <Image
              src={`/images/teams/${appCtx?.selectedTeam}.png`}
              width={48}
              height={48}
              alt={`${appCtx?.selectedTeam} sketch`}
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
                  {appCtx?.selectedTeam
                    ? ` – ${appCtx?.selectedTeam.toUpperCase()}`
                    : ""}
                  {price ? ` – ${price}€` : ""}
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-row items-center justify-between gap-1 pl-14 md:justify-end md:gap-4 md:pl-0">
          <div className={`${fixed ? "mr-16" : ""} flex gap-1`}>
            <Button
              variant="contained"
              href={href || "/buy-mario-strikers-battle-league-football"}
              sound="coin"
            >
              Jetzt vorbestellen
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TheStickyBuyBar;
