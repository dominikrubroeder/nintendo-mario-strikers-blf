import { FC, useContext, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AudioContext from "../store/audioContext";
import PlayAudioButton from "./audio-controls/PlayAudioButton";
import PauseAudioButton from "./audio-controls/PauseAudioButton";
import { ArrowLongLeftIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import Image from "next/image";
import AppContext from "../store/appContext";
import teams from "../data/teams";
import Link from "next/link";
import Logo from "./svg/Logo";

const pages = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Discover",
    href: "/discover-mario-strikers-battle-league-football",
  },
  {
    name: "Buy",
    href: "/buy-mario-strikers-battle-league-football",
  },
  {
    name: "Team",
    href: "/teams",
  },
];

const FloatingActionBar: FC = () => {
  const appCtx = useContext(AppContext);
  const audioCtx = useContext(AudioContext);
  const router = useRouter();
  const [showNavigationMenu, setShowNavigationMenu] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const teamData =
    teams.find((team) => team.id === appCtx?.selectedTeam) ?? teams[0];

  useEffect(() => {
    if (showNavigationMenu && audioRef && audioCtx?.interactiveAudioisEnabled)
      audioRef.current?.play();
  }, [audioRef, showNavigationMenu, audioCtx?.interactiveAudioisEnabled]);

  return (
    <AnimatePresence>
      <audio ref={audioRef}>
        <source src="/audio/blib.wav" type="audio/wav" />
      </audio>

      {!appCtx?.headerIsInView && (
        <motion.div
          key="actionBarWrapper"
          className="fixed left-0 right-0 top-4 z-[100] mx-auto flex w-96 items-center justify-center gap-4 transition"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: [10, -100] }}
          transition={{
            ease: "easeInOut",
          }}
        >
          <motion.div
            key="actionBar"
            className="z-10 cursor-pointer rounded-full bg-accent p-4 drop-shadow-lg transition-all active:scale-95 themed:bg-signal"
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
                <motion.div
                  key="backButton"
                  className="absolute -z-10 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white drop-shadow-lg themed:bg-accent-dark"
                  animate={{ x: [0, -72], scale: [0.3, 1] }}
                  exit={{ x: 0, scale: 0.3 }}
                  transition={{
                    type: "spring",
                    damping: 16,
                    stiffness: 400,
                    delay: 1,
                  }}
                >
                  <div
                    className="flex items-center justify-center"
                    onClick={() => router.back()}
                  >
                    <ArrowLongLeftIcon className="h-4 w-4 text-white" />
                  </div>
                </motion.div>

                {!appCtx?.headerIsInView && (
                  <div className="flex h-10 w-10 items-center justify-center rounded-full drop-shadow-lg">
                    <Logo
                      variant="Mario Strikers"
                      size={56}
                      onClick={() =>
                        setShowNavigationMenu((previousState) => !previousState)
                      }
                    />

                    {showNavigationMenu && (
                      <motion.div
                        key="navigationMenu"
                        animate={{
                          opacity: [0, 1],
                          visibility: ["hidden", "visible"],
                          y: [0, 72],
                        }}
                        exit={{
                          opacity: 0,
                          height: 0,
                          overflow: "hidden",
                          scale: 0,
                          y: 0,
                        }}
                        className="absolute top-0 z-0 rounded-2xl bg-accent p-4 text-white themed:bg-accent-dark"
                      >
                        <ul className="grid h-64 gap-2 overflow-hidden overflow-y-auto">
                          {pages.map(({ name, href }, index) => {
                            return href === router.pathname ? (
                              <li
                                key={index}
                                className="flex items-center gap-2 rounded-full bg-accent p-2 pl-4 font-bold uppercase"
                              >
                                <Image
                                  src="/images/logos/mario-strikers-blf-logo.png"
                                  width="24"
                                  height="24"
                                  alt="Mario Strikers: Battle League Football Logo"
                                  className="object-contain"
                                />
                                {name}
                              </li>
                            ) : null;
                          })}

                          <li>
                            <hr className="border-accent px-4" />
                          </li>

                          {pages.map(({ name, href }, index) => {
                            return href === router.pathname ? null : (
                              <li
                                key={index}
                                className="flex w-full min-w-max cursor-pointer items-center gap-1 rounded-full p-2 pl-4 font-bold uppercase transition hover:bg-accent"
                              >
                                <Link href={href}>
                                  <a className="flex w-full items-center justify-between">
                                    <span className="flex items-center gap-1">
                                      <Logo
                                        variant="Mario Strikers"
                                        size={24}
                                      />
                                      {name}
                                    </span>

                                    <Image
                                      src="/images/backgrounds/CI_NSwitch_MarioStrikersBLF_AW_TheSquad_Button_Right.png"
                                      width="24"
                                      height="24"
                                      alt="Arrow right"
                                      draggable={false}
                                      className="object-contain"
                                    />
                                  </a>
                                </Link>
                              </li>
                            );
                          })}

                          <li>
                            <hr className="border-accent px-4" />
                          </li>

                          <li className="flex w-full min-w-max cursor-pointer items-center gap-1 rounded-full bg-accent p-2 font-bold uppercase transition">
                            <Image
                              src={`/images/teams/${teamData.id}.png`}
                              width="24"
                              height="24"
                              alt={`${teamData.name} thumbnail`}
                            />

                            <span>{teamData.name}</span>
                          </li>

                          {teams.map((team) => (
                            <li
                              key={team.id}
                              className="flex w-full min-w-max cursor-pointer items-center gap-1 rounded-full p-2 font-bold uppercase transition hover:bg-accent"
                              onClick={() => appCtx?.setTeam(team.id)}
                            >
                              <Image
                                src={`/images/teams/${team.id}.png`}
                                width="24"
                                height="24"
                                alt={`${team.name} thumbnail`}
                              />

                              <span>{team.name}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </div>
                )}

                <motion.div
                  key="audioControls"
                  className="absolute -z-10 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white drop-shadow-lg themed:bg-accent-dark"
                  animate={{ x: [0, 72], scale: [0.3, 1] }}
                  exit={{ x: 0, scale: 0.3 }}
                  transition={{
                    type: "spring",
                    damping: 16,
                    stiffness: 400,
                    delay: 1,
                  }}
                >
                  <PlayAudioButton />
                  <PauseAudioButton />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingActionBar;
