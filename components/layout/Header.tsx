import Link from "next/link";
import { FC, useContext } from "react";
import Logo from "../svg/Logo";
import { useRouter } from "next/router";
import { ArrowLongLeftIcon } from "@heroicons/react/24/solid";
import AudioContext from "../../store/audioContext";
import Item from "../img/Item";
import PauseAudioButton from "../mini-audio-player/controls/PauseAudioButton";
import PlayAudioButton from "../mini-audio-player/controls/PlayAudioButton";
import Image from "next/image";

interface HeaderProps {
  withBackButton?: boolean;
}

const Header: FC<HeaderProps> = ({ withBackButton = false }) => {
  const router = useRouter();
  const audioCtx = useContext(AudioContext);

  return (
    <header className="relative z-[100] flex h-32 w-full items-center justify-between gap-4 p-4">
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
            <Image
              src="/images/logos/mario-strikers-blf-logo.png"
              width={112}
              height={112}
              className="object-contain"
              alt="Mario Strikers: Battle League Football Logo"
            />
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
    </header>
  );
};

export default Header;
