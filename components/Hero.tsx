import React, { useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import GameTrailer from "./GameTrailer";
import AppContext from "../store/appContext";
import teams from "../data/teams";

const Hero: React.FC = () => {
  const [showYouTubeGameTrailer, setShowYoutubeGameTrailer] = useState(false);
  const appCtx = useContext(AppContext);
  const teamData =
    teams.find((team) => team.id === appCtx?.selectedTeam) ?? teams[0];

  return (
    <>
      {showYouTubeGameTrailer && (
        <GameTrailer closeOverlay={() => setShowYoutubeGameTrailer(false)} />
      )}

      <motion.section
        animate={{ opacity: [0, 1, 1], y: [-10, 0, 0], scale: [1, 1, 1.05] }}
        exit={{ opacity: [1, 0] }}
        transition={{ delay: 1.5 }}
        className="absolute inset-0 z-40"
      >
        <Link href="/buy-mario-strikers-battle-league-football">
          <a className="relative inline-block h-full w-full">
            <Image
              src="/images/gallery/2x1_NSwitch_MarioStrikersBattleLeagueFootball_image1600w.jpeg"
              alt="Mario Strikers: Battle League Football Wallpaper"
              layout="fill"
              priority
              className="cursor-pointer object-cover"
            />
          </a>
        </Link>
      </motion.section>

      <motion.div
        animate={{ opacity: [0, 1], y: ["100%", "0%"] }}
        transition={{ delay: 2.6 }}
        className="absolute bottom-[20rem] left-12 z-50 cursor-pointer hover:left-16"
      >
        <Link href="/buy-mario-strikers-battle-league-football">
          <div className="relative">
            <div className="interactive relative">
              <p className="absolute left-1/2 top-1/2 z-50 w-max -translate-x-1/2 -translate-y-1/2 -rotate-[3.5deg] font-bold uppercase text-white">
                Jetzt vorbestellen
              </p>

              <Image
                src="/images/backgrounds/CI_NSwitch_MarioStrikersBLF_BG_Introducing_Header.png"
                alt="Mario Strikers: Battle League Football Button Background"
                width="250"
                height="92"
                className="skew-x-12"
                priority
              />

              <div className="absolute bottom-[1.75rem] -right-8 translate-x-8 transition-all">
                <Image
                  src="/images/backgrounds/CI_NSwitch_MarioStrikersBLF_AW_TheSquad_Button_Right.png"
                  width={90}
                  height={60}
                  alt="Button right"
                  className="-rotate-6"
                  priority
                />
              </div>
            </div>
          </div>
        </Link>
      </motion.div>

      <motion.div
        animate={{ opacity: [0, 1], y: ["100%", "0%"] }}
        transition={{ ease: "easeOut", delay: 2.3 }}
        className="absolute bottom-[14rem] left-12 z-50 cursor-pointer hover:left-16"
      >
        <Link href="/discover-mario-strikers-battle-league-football">
          <div className="interactive group relative">
            <p className="absolute left-1/2 top-1/2 z-50 w-max -translate-x-1/2 -translate-y-1/2 -rotate-3 font-bold uppercase text-white">
              Mehr Infos
            </p>

            <Image
              src="/images/backgrounds/CI_NSwitch_MarioStrikersBLF_BG_Introducing_Header.png"
              alt="Mario Strikers: Battle League Football Button Background"
              width="250"
              height="92"
              className="skew-x-12"
              priority
            />

            <div className="invisible absolute bottom-6 right-4 z-50 translate-x-8 opacity-0 transition-all group-hover:visible group-hover:translate-x-0 group-hover:opacity-100">
              <Image
                src={teamData.image}
                alt={teamData.name}
                width={48}
                height={48}
                className="object-contain"
                priority
              />
            </div>

            <div className="invisible absolute bottom-6 -right-14 translate-x-8 opacity-0 transition-all group-hover:visible group-hover:translate-x-0 group-hover:opacity-100">
              <Image
                src="/images/backgrounds/CI_NSwitch_MarioStrikersBLF_AW_TheSquad_Button_Right.png"
                width={90}
                height={60}
                alt="Button right"
                className="-rotate-6"
                priority
              />
            </div>
          </div>
        </Link>
      </motion.div>

      <motion.div
        animate={{ opacity: [0, 1], y: ["100%", "0%"] }}
        transition={{ ease: "easeOut", delay: 2.2 }}
        className="absolute bottom-[8rem] left-12 z-50 cursor-pointer hover:left-16"
      >
        <div
          className="interactive group relative"
          onMouseUp={() => setShowYoutubeGameTrailer(true)}
        >
          <p className="absolute left-1/2 top-1/2 z-50 w-max -translate-x-1/2 -translate-y-1/2 -rotate-3 font-bold uppercase text-white">
            Trailer ansehen
          </p>

          <Image
            src="/images/backgrounds/CI_NSwitch_MarioStrikersBLF_BG_Introducing_Header.png"
            alt="Mario Strikers: Battle League Football Button Background"
            width="250"
            height="92"
            className="skew-x-12"
            draggable={false}
            priority
          />

          <div className="invisible absolute bottom-6 -right-14 translate-x-8 opacity-0 transition-all group-hover:visible group-hover:translate-x-0 group-hover:opacity-100">
            <Image
              src="/images/backgrounds/CI_NSwitch_MarioStrikersBLF_AW_TheSquad_Button_Right.png"
              width={90}
              height={60}
              alt="Button right"
              className="-rotate-6"
              priority
            />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Hero;
