import Link from "next/link";
import { FC, useContext, useEffect, useRef } from "react";
import Logo from "../svg/Logo";
import { useRouter } from "next/router";
import { ArrowLongLeftIcon } from "@heroicons/react/24/solid";
import AudioContext from "../../store/audioContext";
import Item from "../img/Item";
import useIsInView from "../../hooks/useIsInView";
import AppContext from "../../store/appContext";

interface HeaderProps {
  withBackButton?: boolean;
}

const Header: FC<HeaderProps> = ({ withBackButton = false }) => {
  const router = useRouter();
  const audioCtx = useContext(AudioContext);
  const headerRef = useRef<HTMLElement | null>(null);
  const headerIsInView = useIsInView(headerRef);
  const appCtx = useContext(AppContext);

  useEffect(
    () =>
      headerIsInView
        ? appCtx?.setHeaderIsInView(true)
        : appCtx?.setHeaderIsInView(false),
    [headerIsInView, appCtx]
  );

  return (
    <header
      ref={headerRef}
      className="relative z-40 flex h-32 w-full items-center justify-between gap-4 p-4"
    >
      {withBackButton && (
        <div
          className="interactive flex items-center justify-center rounded-full bg-accent p-2 themed:bg-accent-dark"
          onClick={() => router.back()}
        >
          <ArrowLongLeftIcon className="h-4 w-4 text-white" />
        </div>
      )}

      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transition active:scale-95">
        <Link href="/">
          <a>
            <Logo variant="Mario Strikers" />
          </a>
        </Link>
      </div>

      {router.pathname != "/" && (
        <div className="absolute right-4 flex gap-2">
          <div
            className="interactive flex cursor-pointer items-center gap-1 break-words rounded-full bg-accent px-3 py-2 text-xs text-white themed:bg-accent-dark lg:text-sm"
            onClick={() => audioCtx?.toggleInteractiveAudio()}
          >
            <Item
              item="Star"
              size={24}
              className={`transition ${
                audioCtx?.interactiveAudioisEnabled
                  ? "scale-100 opacity-100"
                  : "scale-90 opacity-20"
              }`}
            />
            <span>Interaktives Audio</span>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
