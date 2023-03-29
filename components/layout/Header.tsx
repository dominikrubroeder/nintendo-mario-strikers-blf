import Link from "next/link";
import { FC, useContext, useEffect, useRef } from "react";
import Logo from "../svg/Logo";
import { useRouter } from "next/router";
import { ArrowLongLeftIcon } from "@heroicons/react/24/solid";
import AudioContext from "../../store/audioContext";
import Item from "../img/Item";
import useIsInView from "../../hooks/useIsInView";
import AppContext from "../../store/appContext";
import PauseAudioButton from "../mini-audio-player/controls/PauseAudioButton";
import PlayAudioButton from "../mini-audio-player/controls/PlayAudioButton";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedSoundbarsIcon from "../AnimatedSoundbarsIcon";

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

      <div className="absolute left-1/2 top-1/2 z-[100] flex -translate-x-1/2 -translate-y-1/2 transition active:scale-95">
        <Link href="/">
          <a>
            <Logo variant="Mario Strikers" />
          </a>
        </Link>
      </div>

      <div className="flex items-center justify-end gap-2">
        {router.pathname !==
          "/discover-mario-strikers-battle-league-football" && (
          <div className="relative">
            <div className="interactive flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-accent text-xs text-white themed:bg-accent-dark lg:text-sm">
              {audioCtx?.isPlaying ? <PauseAudioButton /> : <PlayAudioButton />}
            </div>
            <AnimatePresence>
              {audioCtx?.isPlaying && (
                <motion.div
                  key="buyPageAnimatedSoundbars"
                  animate={{ x: [32, 0] }}
                  className="absolute -left-8 top-4"
                >
                  <AnimatedSoundbarsIcon />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        {router.pathname != "/" && (
          <div
            className="interactive flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-accent px-3 py-2 text-xs text-white themed:bg-accent-dark sm:h-auto sm:w-auto sm:justify-end sm:gap-1 lg:text-sm"
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
            <span className="hidden sm:inline-block">Interaktives Audio</span>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
