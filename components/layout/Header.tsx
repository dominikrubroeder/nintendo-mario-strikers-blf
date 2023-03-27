import Link from "next/link";
import { FC, useContext } from "react";
import Logo from "../svg/Logo";
import { useRouter } from "next/router";
import { ArrowLongLeftIcon } from "@heroicons/react/24/solid";
import AudioContext from "../../store/audioContext";
import Item from "../img/Item";
import { motion } from "framer-motion";

interface HeaderProps {
  withBackButton?: boolean;
}

const Header: FC<HeaderProps> = ({ withBackButton = false }) => {
  const router = useRouter();
  const audioCtx = useContext(AudioContext);

  return (
    <motion.header
      key="pageHeader"
      animate={{ x: [100, 0] }}
      className="relative z-[100] flex h-32 w-full items-center justify-between gap-4 p-4"
    >
      {withBackButton && (
        <div
          className="interactive flex items-center justify-center rounded-full bg-accent-dark p-2"
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
            className="interactive flex cursor-pointer items-center gap-1 break-words rounded-full bg-accent-dark px-3 py-2 text-xs text-white lg:text-sm"
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
            Interaktives Audio
          </div>
        </div>
      )}
    </motion.header>
  );
};

export default Header;
