import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Button from "./ui/Button";
import AppContext from "../store/appContext";
import Heading from "./Heading";
import Logo from "./svg/Logo";

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
        <div className="flex items-center gap-2 lg:items-start">
          {appCtx?.selectedTeam ? (
            <Image
              src={`/images/teams/${appCtx?.selectedTeam}.png`}
              width={48}
              height={48}
              alt={`${appCtx?.selectedTeam} sketch`}
            />
          ) : (
            <Logo variant="Mario Strikers" size={48} />
          )}
          <div
            className="grid cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <Heading as="h3" className="block font-bold themed:text-white">
              Mario Strikers: Battle League Football | Nintendo Switch
            </Heading>

            <div className="flex items-center gap-1">
              <span className=" text-accent themed:text-white">
                <span>
                  <span className="mr-1 uppercase">
                    {appCtx?.selectedEdition}
                  </span>
                  Edition
                </span>
                {appCtx?.selectedTeam
                  ? ` – ${appCtx?.selectedTeam.toUpperCase()}`
                  : ""}
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between gap-1 pl-14 font-bold uppercase md:justify-end md:gap-4 md:pl-0">
          <div className={`${fixed ? "mr-16" : ""}`}>
            <Button
              variant="contained"
              href={href || "/buy-mario-strikers-battle-league-football"}
              sound="coin"
              className="py-4 uppercase"
            >
              Jetzt vorbestellen
              <Image
                src="/images/items/coin.png"
                alt="Nintendo coin"
                width="24"
                height="24"
              />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TheStickyBuyBar;
