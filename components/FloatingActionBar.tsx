import { FC, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "./ui/Button";
import AudioContext from "../store/audioContext";
import PlayAudioButton from "./mini-audio-player/controls/PlayAudioButton";
import PauseAudioButton from "./mini-audio-player/controls/PauseAudioButton";
import { ArrowLongLeftIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import Image from "next/image";

interface FloatingActionBarProps {
  shouldBeVisible?: boolean;
}

const FloatingActionBar: FC<FloatingActionBarProps> = ({ shouldBeVisible }) => {
  const audioCtx = useContext(AudioContext);
  const router = useRouter();

  return (
    <AnimatePresence>
      {shouldBeVisible && (
        <motion.div
          key="actionBarWrapper"
          className="fixed left-0 right-0 bottom-4 z-[100] flex w-full items-center justify-center gap-4 transition"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: [-10, 100] }}
          transition={{
            ease: "easeInOut",
          }}
        >
          <motion.div
            key="actionBar"
            className="z-10 cursor-pointer rounded-full bg-accent p-4 drop-shadow-lg transition-all active:scale-95 themed:bg-signal"
            onClick={() =>
              router.push("/buy-mario-strikers-battle-league-football")
            }
          >
            <motion.div
              key="actionBarContent"
              className="flex items-center justify-center"
              initial={{ opacity: 0, width: "0" }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: "0" }}
              transition={{
                type: "spring",
                damping: 20,
                stiffness: 400,
                delay: 0.6,
              }}
            >
              <div className="flex items-center justify-center">
                <AnimatePresence>
                  <motion.div
                    key="backButton"
                    className="absolute -z-10 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white drop-shadow-lg themed:bg-accent-dark"
                    initial={{ x: 0, scale: 0.3 }}
                    animate={{ x: -128, scale: 1 }}
                    exit={{ x: 0, scale: 0.3 }}
                    transition={{
                      type: "spring",
                      damping: 16,
                      stiffness: 400,
                      delay: 1,
                    }}
                  >
                    <div
                      className="interactive flex items-center justify-center"
                      onClick={() => router.back()}
                    >
                      <ArrowLongLeftIcon className="h-4 w-4 text-white" />
                    </div>
                  </motion.div>
                </AnimatePresence>

                <Button
                  variant="plain"
                  className="z-50 flex items-center gap-1 whitespace-nowrap bg-accent p-0 font-bold uppercase text-white themed:bg-signal"
                  sound="coin"
                >
                  <Image
                    width={24}
                    height={24}
                    alt="Nintendo Mario Coin"
                    src="/images/items/coin.png"
                    className="object-contain"
                  />
                  Vorbestellen
                </Button>

                <AnimatePresence>
                  <motion.div
                    key="audioControls"
                    className="absolute -z-10 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white drop-shadow-lg themed:bg-accent-dark"
                    initial={{ x: 0, scale: 0.3 }}
                    animate={{ x: 128, scale: 1 }}
                    exit={{ x: 0, scale: 0.3 }}
                    transition={{
                      type: "spring",
                      damping: 16,
                      stiffness: 400,
                      delay: 1,
                    }}
                  >
                    {!audioCtx?.isPlaying && <PlayAudioButton />}

                    {audioCtx?.isPlaying && <PauseAudioButton />}
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingActionBar;
