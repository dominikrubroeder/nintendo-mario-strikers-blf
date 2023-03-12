import Link from "next/link";
import { FC, useContext } from "react";
import Logo from "../svg/Logo";
import { useRouter } from "next/router";
import { ArrowLongLeftIcon } from "@heroicons/react/24/solid";
import AudioContext from "../../store/audioContext";
import Item from "../img/Item";

interface HeaderProps {
  withBackButton?: boolean;
}

const Header: FC<HeaderProps> = ({ withBackButton = false }) => {
  const router = useRouter();
  const audioCtx = useContext(AudioContext);

  return (
    <header className="relative z-[100] flex h-20 w-full items-center justify-between gap-4 p-4">
      {withBackButton && (
        <button onClick={() => router.back()}>
          <ArrowLongLeftIcon className="h-4 w-4 text-accent themed:text-white" />
        </button>
      )}

      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transition active:scale-95">
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
      </div>

      {router.pathname != "/" && (
        <div
          className="interactive absolute right-4 flex cursor-pointer items-center gap-1 rounded-xl bg-accent-dark px-3 py-2 text-sm"
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
      )}
    </header>
  );
};

export default Header;
