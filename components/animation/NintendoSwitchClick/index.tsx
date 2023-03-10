import { AnimatePresence, motion } from "framer-motion";
import React, { useContext, useEffect, useRef } from "react";
import AppContext from "../../../store/appContext";
import AudioContext from "../../../store/audioContext";

const NintendoSwitchClick: React.FC = () => {
  const appCtx = useContext(AppContext);
  const audioCtx = useContext(AudioContext);
  const audioRef = useRef<null | HTMLAudioElement>(null);

  useEffect(() => {
    if ((audioCtx?.sound || audioCtx?.soundtrack) && audioRef.current)
      setTimeout(() => {
        audioRef.current?.play();
      }, 600);
  }, [audioRef, audioCtx?.soundtrack, audioCtx?.sound]);

  return (
    <div className="inline-flex gap-[.375rem]">
      <audio src="/audio/nintendo-switch-click.mp3" ref={audioRef} />

      <AnimatePresence>
        <motion.svg
          width="48"
          height="100"
          viewBox="0 0 48 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          initial={{ y: 64, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 0, opacity: 0 }}
          transition={{
            type: "spring",
            damping: 16,
            stiffness: 300,
            delay: 0.6,
          }}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 4H44V96H16C9.37258 96 4 90.6274 4 84V16C4 9.37259 9.37258 4 16 4ZM0 16C0 7.16345 7.16344 0 16 0H44C46.2091 0 48 1.79086 48 4V96C48 98.2091 46.2091 100 44 100H16C7.16344 100 0 92.8366 0 84V16ZM24 38C29.5228 38 34 33.5228 34 28C34 22.4772 29.5228 18 24 18C18.4772 18 14 22.4772 14 28C14 33.5228 18.4772 38 24 38Z"
            fill="white"
          />
        </motion.svg>
      </AnimatePresence>

      <AnimatePresence>
        <motion.svg
          width="48"
          height="100"
          viewBox="0 0 48 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          initial={{ y: -64, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 0, opacity: 0 }}
          transition={{
            type: "spring",
            damping: 12,
            stiffness: 300,
            delay: 0.6,
          }}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 0C1.79086 0 0 1.79086 0 4V96C0 98.2091 1.79086 100 4 100H32C40.8366 100 48 92.8366 48 84V16C48 7.16344 40.8366 0 32 0H4ZM26 82C31.5228 82 36 77.5229 36 72C36 66.4771 31.5228 62 26 62C20.4772 62 16 66.4771 16 72C16 77.5229 20.4772 82 26 82Z"
            fill="white"
          />
        </motion.svg>
      </AnimatePresence>
    </div>
  );
};

export default NintendoSwitchClick;
