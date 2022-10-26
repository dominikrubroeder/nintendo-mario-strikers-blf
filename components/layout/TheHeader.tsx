import Link from "next/link";
import React, { useContext } from "react";
import TheLogo from "../TheLogo";
import TheAudioPlayer from "../TheAudioPlayer";
import CurrentSound from "../CurrentSound";
import SpringBounceWhenInView from "../SpringBounceWhenInView";
import TheInteractiveAudioSetting from "../TheInteractiveAudioSetting";
import AudioContext from "../../store/audioContext";
import { useRouter } from "next/router";

const TheHeader: React.FC = () => {
  const router = useRouter();
  const audioCtx = useContext(AudioContext);

  return (
    <React.Fragment>
      <CurrentSound />

      <header className="relative z-40 flex h-20 w-full flex-wrap items-start justify-between p-4">
        <div className="hidden flex-1 lg:flex"></div>

        <div className="flex items-center justify-center transition active:scale-95">
          <div className="relative flex flex-1 items-center justify-center self-center rounded-full p-2 themed:bg-accent-dark themed:text-white">
            {router.pathname === "/auth" ? (
              <TheLogo />
            ) : (
              <Link href="/">
                <a>
                  <TheLogo />
                </a>
              </Link>
            )}
          </div>
        </div>

        <div className="flex flex-1 items-start justify-end gap-2">
          <div className="hidden md:inline-block">
            {audioCtx?.hasInteractiveAudio && (
              <SpringBounceWhenInView>
                <TheAudioPlayer />
              </SpringBounceWhenInView>
            )}
          </div>

          <TheInteractiveAudioSetting />
        </div>
      </header>
    </React.Fragment>
  );
};

export default TheHeader;
