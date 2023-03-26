import { NextPage } from "next";
import React, { useContext, useEffect, useRef, useState } from "react";
import TeamSelection from "../../components/TeamSelection";
import CommunityQuotes from "../../components/CommunityQuotes";
import GameGallery from "../../components/GameGallery";
import Heading from "../../components/Heading";
import Layout from "../../components/layout";
import FloatingActionBar from "../../components/FloatingActionBar";
import SpringBounceWhenInView from "../../components/animation/SpringBounceWhenInView";
import Tooltip from "../../components/ui/Tooltip";
import AppContext from "../../store/appContext";
import Image from "next/image";
import teams from "../../data/teams";
import {
  ArrowLeftIcon,
  ArrowLongRightIcon,
  ArrowRightIcon,
  SpeakerXMarkIcon,
} from "@heroicons/react/24/solid";
import Button from "../../components/ui/Button";
import QuestionBlock from "../../components/img/QuestionBlock";
import { AnimatePresence, useScroll, motion } from "framer-motion";
import PauseAudioButton from "../../components/mini-audio-player/controls/PauseAudioButton";
import PlayAudioButton from "../../components/mini-audio-player/controls/PlayAudioButton";
import AudioContext from "../../store/audioContext";
import AmiiboLogo from "../../components/svg/AmiiboLogo";
import Features from "../../components/Features";
import BouncingItems from "../../components/BouncingItems";
import Accordion from "../../components/ui/Accordion";
import AnimatedSoundbarsIcon from "../../components/AnimatedSoundbarsIcon";

const InfoPage: NextPage = () => {
  const appCtx = useContext(AppContext);
  const teamData =
    teams.find((team) => team.id === appCtx?.selectedTeam) ?? teams[0];
  const selectedTeam = appCtx?.selectedTeam?.toUpperCase();
  const audioCtx = useContext(AudioContext);
  const [showTeamMenu, setshowTeamMenu] = useState(false);
  const [playSoundtrackOnce, setPlaySoundtrackOnce] = useState(false);
  const [showLoadingBar, setShowLoadingBar] = useState(false);
  const scrollToRef = useRef<HTMLDivElement | null>(null);

  const onClickSoundtrackHandler = () => {
    setPlaySoundtrackOnce(true);
  };

  useEffect(() => {
    console.log("run...");
    if (playSoundtrackOnce && scrollToRef) {
      setShowLoadingBar(true);

      setTimeout(() => setShowLoadingBar(false), 3000);

      setTimeout(() => {
        // smooth scroll to element and align it at the bottom
        scrollToRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 3200);
      console.log("run true...");
    }
  }, [scrollToRef, playSoundtrackOnce]);

  return (
    <Layout pageTitle="Discover" withFooter={false}>
      {audioCtx?.interactiveAudioisEnabled && (
        <>
          <section className="relative mx-auto min-h-[calc(100vh-8rem)] w-full max-w-screen-lg overflow-hidden border-b-2 border-accent-dark">
            <div className="mx-auto flex flex-col items-center justify-center">
              <SpringBounceWhenInView>
                <div className="z-50 text-center">
                  <Heading as="h2" className="headline--gradient mb-8 sm:mb-2">
                    Starte den Soundtrack
                  </Heading>

                  <AnimatePresence mode="popLayout">
                    {!showLoadingBar && (
                      <motion.div
                        key="playSoundtrack"
                        initial={{ y: 100 }}
                        animate={{ y: 0 }}
                        exit={{ y: 0 }}
                        className={`interactive relative z-50 mx-auto inline-flex cursor-pointer items-center gap-2 rounded-full bg-accent-dark p-4 ${
                          playSoundtrackOnce ? "" : "animate-shake"
                        }`}
                        onClick={() => onClickSoundtrackHandler()}
                      >
                        {audioCtx.isPlaying ? (
                          <PauseAudioButton />
                        ) : (
                          <PlayAudioButton />
                        )}
                        <div
                          className="flex items-center gap-1"
                          onClick={() => audioCtx?.toggleAudio()}
                        >
                          <span>Soundtrack</span>
                          {audioCtx.isPlaying ? "stoppen" : "abspielen"}
                        </div>
                        <AnimatedSoundbarsIcon />
                      </motion.div>
                    )}

                    {playSoundtrackOnce && showLoadingBar && (
                      <motion.div
                        key="loadingBar"
                        initial={{ y: 100 }}
                        animate={{ y: 0 }}
                        exit={{ opacity: 0, y: -100 }}
                        className="relative z-[60] mx-auto inline-flex cursor-pointer items-center gap-2 rounded-full bg-accent-dark px-0 pt-1 before:absolute before:inset-0 before:-z-10 before:block before:h-full before:w-full before:animate-audioWave1 before:rounded-full before:bg-accent-dark before:content-[''] after:absolute after:inset-0  after:-z-10 after:block after:h-full after:w-full after:animate-audioWave2 after:rounded-full after:bg-accent-dark after:content-[''] themed:before:bg-white/20 themed:after:bg-white/20"
                        transition={{
                          duration: 0.6,
                          type: "spring",
                          stiffness: 400,
                          damping: 15,
                        }}
                      >
                        <div className="relative -mb-2 flex items-center gap-2">
                          <BouncingItems size={24} />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </SpringBounceWhenInView>

              <div className="absolute bottom-0 z-0 translate-y-1/4">
                <div className="relative h-[48rem] w-[48rem]">
                  <Image
                    src="/images/teams/mario-bowser.png"
                    alt="Mario Bowser duell in action"
                    className="object-contain"
                    layout="fill"
                    draggable="false"
                  />

                  <svg
                    width="206"
                    height="614"
                    viewBox="0 0 206 614"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`absolute left-[84px] -z-10 ${
                      playSoundtrackOnce ? "animate-shakeScale" : ""
                    }`}
                  >
                    <g filter="url(#filter0_d_669_1198)">
                      <path
                        d="M117.42 137.613L127.97 105.961L100.714 82.2221L105.11 62L112.144 71.6714V82.2221L141.159 105.961L127.97 137.613C126.212 138.346 121.64 149.922 117.42 190.366C113.199 230.811 112.144 257.627 112.144 265.979L109.507 284.883L115.222 343.79C111.705 343.79 106.429 349.945 104.231 353.022L79.1734 387.752V392.587L75.2169 418.524V442.703L79.1734 545.572L70.8208 442.703L65.1059 418.524H68.1832L70.8208 429.515L73.0189 431.713V397.423L70.8208 392.587L75.2169 387.752V383.795V375.003H79.1734V383.795L107.309 343.79L104.231 336.757V265.979L107.309 268.177L115.222 190.366L112.144 183.772V162.671L117.42 137.613Z"
                        fill="#FBF7AD"
                      />
                      <path
                        d="M117.42 137.613L127.97 105.961L100.714 82.2221L105.11 62L112.144 71.6714V82.2221L141.159 105.961L127.97 137.613M117.42 137.613H127.97M117.42 137.613L112.144 162.671V183.772L115.222 190.366L107.309 268.177L104.231 265.979V336.757L107.309 343.79L79.1734 383.795V375.003H75.2169V383.795V387.752L70.8208 392.587L73.0189 397.423V431.713L70.8208 429.515L68.1832 418.524H65.1059L70.8208 442.703L79.1734 545.572L75.2169 442.703V418.524L79.1734 392.587V387.752L104.231 353.022C106.429 349.945 111.705 343.79 115.222 343.79L109.507 284.883L112.144 265.979C112.144 257.627 113.199 230.811 117.42 190.366C121.64 149.922 126.212 138.346 127.97 137.613"
                        stroke="#FBF7AD"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_669_1198"
                        x="0.473938"
                        y="0.803711"
                        width="205.289"
                        height="612.809"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="32" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 1 0 0 0 0 0.960784 0 0 0 0 0.65098 0 0 0 1 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_669_1198"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_669_1198"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>

                  <svg
                    width="206"
                    height="614"
                    viewBox="0 0 206 614"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`absolute right-[84px] -z-10 rotate-12 ${
                      playSoundtrackOnce ? "animate-shakeScale" : ""
                    }`}
                  >
                    <g filter="url(#filter0_d_669_1198)">
                      <path
                        d="M117.42 137.613L127.97 105.961L100.714 82.2221L105.11 62L112.144 71.6714V82.2221L141.159 105.961L127.97 137.613C126.212 138.346 121.64 149.922 117.42 190.366C113.199 230.811 112.144 257.627 112.144 265.979L109.507 284.883L115.222 343.79C111.705 343.79 106.429 349.945 104.231 353.022L79.1734 387.752V392.587L75.2169 418.524V442.703L79.1734 545.572L70.8208 442.703L65.1059 418.524H68.1832L70.8208 429.515L73.0189 431.713V397.423L70.8208 392.587L75.2169 387.752V383.795V375.003H79.1734V383.795L107.309 343.79L104.231 336.757V265.979L107.309 268.177L115.222 190.366L112.144 183.772V162.671L117.42 137.613Z"
                        fill="#FBF7AD"
                      />
                      <path
                        d="M117.42 137.613L127.97 105.961L100.714 82.2221L105.11 62L112.144 71.6714V82.2221L141.159 105.961L127.97 137.613M117.42 137.613H127.97M117.42 137.613L112.144 162.671V183.772L115.222 190.366L107.309 268.177L104.231 265.979V336.757L107.309 343.79L79.1734 383.795V375.003H75.2169V383.795V387.752L70.8208 392.587L73.0189 397.423V431.713L70.8208 429.515L68.1832 418.524H65.1059L70.8208 442.703L79.1734 545.572L75.2169 442.703V418.524L79.1734 392.587V387.752L104.231 353.022C106.429 349.945 111.705 343.79 115.222 343.79L109.507 284.883L112.144 265.979C112.144 257.627 113.199 230.811 117.42 190.366C121.64 149.922 126.212 138.346 127.97 137.613"
                        stroke="#FBF7AD"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_669_1198"
                        x="0.473938"
                        y="0.803711"
                        width="205.289"
                        height="612.809"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="32" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 1 0 0 0 0 0.960784 0 0 0 0 0.65098 0 0 0 1 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_669_1198"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_669_1198"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      <section className="mt-8 grid gap-32 px-4 sm:px-0">
        <div id="scrollTo" ref={scrollToRef}>
          {playSoundtrackOnce && (
            <>
              <section className="m-auto mt-8 grid w-full max-w-screen-xl gap-12 px-4 text-center">
                <header className="grid gap-2">
                  <Heading as="h2" className="headline--gradient mt-8">
                    Und wähle dein Team
                  </Heading>

                  <div className="grid gap-1.5 lg:flex lg:items-center lg:justify-center">
                    Erhalte Vorbesteller-Boni beim Kauf der Striker&apos;s
                    <div className="flex items-center justify-center gap-1.5">
                      <Image
                        src={teamData.image}
                        alt={teamData.name}
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                      <span className="relative inline-flex items-center gap-1 rounded-xl bg-accent-soft p-2 italic text-accent themed:bg-accent-dark themed:text-white">
                        Team-Edition
                      </span>
                      <div className="inline-block cursor-pointer text-left text-sm text-accent themed:text-white">
                        <Tooltip>
                          Wähle ein Team und erhalte
                          <b className="mx-1">zusätzlichen Spiel-Content</b>
                          wie neue Arenen, das Geheimteam und
                          <b className="mx-1">inviduelle Merch-Artrikel</b>
                          basierend auf deiner Team-Wahl! <br /> <br />
                          Wähle also beispielsweise
                          <b className="ml-1">{selectedTeam}</b>, um ein T-Shirt
                          im
                          <b className="ml-1">{selectedTeam}</b> Design zu
                          erhalten oder deinen Schreibtisch und Spielinhalte mit
                          der
                          <b className="mx-1">{selectedTeam}</b>-amiibo™
                          Tischfigur zu bereichern.
                          <br /> <br />
                          Klicke auf einen Charakter, um dein Team zu wählen.
                        </Tooltip>
                      </div>
                    </div>
                  </div>
                </header>

                <TeamSelection className="sm:grid-cols-2 lg:grid-cols-3" />
              </section>

              <section className="grid gap-4 sm:gap-12">
                <SpringBounceWhenInView>
                  <Heading as="h2" className="headline--gradient">
                    Hier ist alles erlaubt!
                  </Heading>
                </SpringBounceWhenInView>

                <p className="mx-auto max-w-xs sm:max-w-md">
                  Das neueste Spiel der Mario Strikers-Reihe erscheint für
                  Nintendo Switch!
                </p>
              </section>

              <section>
                <GameGallery />
              </section>

              <Features />

              <CommunityQuotes />

              <motion.iframe
                width="916"
                height="515"
                src="https://www.youtube.com/embed/0uh01uQuPfk?autoplay=0&rel=0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                allowFullScreen
                className="mx-auto rounded-xl border-8 border-black"
                initial="hidden"
                whileInView="visible"
                transition={{
                  duration: 0.6,
                  type: "spring",
                  stiffness: 400,
                  damping: 15,
                }}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 160 },
                }}
                viewport={{ amount: 0.7, once: true }}
              ></motion.iframe>

              <section className="grid justify-center gap-8">
                <SpringBounceWhenInView>
                  <Heading as="h2" className="headline--gradient">
                    Merch
                  </Heading>

                  <div className="mx-auto flex items-center justify-center gap-1.5 text-center">
                    Hol dir dein
                    <Image
                      src={teamData.image}
                      alt={teamData.name}
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                    <span className="relative inline-flex items-center gap-1 rounded-xl bg-accent-soft p-2 italic text-accent themed:bg-accent-dark themed:text-white">
                      Team-Shirt
                    </span>
                  </div>
                </SpringBounceWhenInView>

                <Image
                  src={teamData.merch[0]}
                  alt={teamData.name}
                  width={596}
                  height={718}
                  className="mx-auto rounded-3xl"
                />

                <Button
                  variant="text"
                  href="/teams"
                  className="mx-auto justify-self-start"
                  sound="team"
                >
                  Mehr zu Team {teamData.name}
                  <ArrowLongRightIcon className="h-5 w-5 font-bold text-accent group-hover:text-white themed:text-signal" />
                </Button>
              </section>

              <section className="px-4 lg:px-0">
                <SpringBounceWhenInView>
                  <Heading as="h2" className="headline--gradient">
                    Kompatibel mit amiibo™
                  </Heading>
                </SpringBounceWhenInView>

                <div className="mt-4 flex items-center justify-center gap-4 lg:mt-0">
                  <AmiiboLogo className="inline-block h-8" />
                  <Tooltip>
                    <p>
                      Diese Mario amiibo™-Figur wird zusammen mit dem Spiel am
                      10. Mai erscheinen. Wenn du diesen amiibo antippst, kannst
                      du Arenen und Materialien sowie einen spezielles
                      Ausrüstung für Mario Gleitschirm erhalten.
                      <br />
                      Wenn du ein amiibo aus der Mario Strikers-Serie scannst,
                      kannst du hilfreiche Materialien, Arenen oder einen
                      Gleitschirmstoff erhalten, der auf dem gescannten amiibo
                      basiert.
                    </p>
                  </Tooltip>
                </div>

                {appCtx?.selectedTeam === "mario" ? (
                  <div className="relative mx-auto my-16 text-center">
                    <Image
                      src="/images/amiibo-mario-promo.png"
                      width="1000"
                      height="500"
                      alt="amiibo mario"
                      className="rounded-xl"
                    />
                  </div>
                ) : (
                  <div className="mx-auto my-16 text-center sm:px-8">
                    <Image
                      src="/images/amiibo-lineup.png"
                      width="1280"
                      height="320"
                      alt="amiibo line-up"
                      className="rounded-xl"
                    />
                  </div>
                )}

                {!appCtx?.hasTeam && (
                  <Button
                    variant="text"
                    href="/teams"
                    className="mx-auto justify-self-start"
                  >
                    Mehr zu Teams
                    <ArrowLongRightIcon className="h-5 w-5 font-bold text-accent group-hover:text-white themed:text-signal" />
                  </Button>
                )}

                {appCtx?.hasTeam && (
                  <Button
                    variant="text"
                    href="/teams"
                    className="mx-auto justify-self-start"
                    sound="team"
                  >
                    Mehr zu Team {teamData.name}
                    <ArrowLongRightIcon className="h-5 w-5 font-bold text-accent group-hover:text-white themed:text-signal" />
                  </Button>
                )}
              </section>

              <section className="my-12 mx-auto">
                <Button variant="text" className="mx-auto">
                  <SpeakerXMarkIcon className="h-4 w-4 text-white" /> Ohne
                  Soundtrack starten
                </Button>
              </section>

              <section className="my-12 mx-auto">
                <AnimatedSoundbarsIcon />
              </section>

              <section className="my-12 mx-auto">
                <BouncingItems size={48} />
              </section>
            </>
          )}
        </div>
      </section>

      {/** <div
        className={`left-1/2 -translate-x-1/2 rounded-full px-6 pt-4 text-sm transition-all themed:bg-accent-dark ${
          showLoadingBar ? "fixed bottom-4 z-50" : ""
        }  ${
          showLoadingBar
            ? "visible translate-y-0 opacity-100"
            : "invisible translate-y-1/2 opacity-0"
        }`}
      >
        <div className="flex items-center gap-2">
          <BouncingItems size={32} />
        </div>
      </div> */}

      {/** <div
        className={`fixed bottom-4 right-4 z-[100] inline-flex justify-end text-left transition-all delay-700 duration-300 ${
          scrollDirection === "up"
            ? "invisible translate-y-full opacity-0"
            : "visible translate-y-0 opacity-100"
        } `}
      >
        <div className="interactive mr-2 flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white drop-shadow-lg themed:bg-accent-dark">
          {!audioCtx?.isPlaying && <PlayAudioButton />}
          {audioCtx?.isPlaying && <PauseAudioButton />}
        </div>

        {appCtx?.selectedTeam && (
          <div
            className="interactive mr-2 flex h-10 w-10 items-center justify-center rounded-full bg-accent-dark drop-shadow-lg"
            onClick={() => setshowTeamMenu((previousState) => !previousState)}
          >
            <Image
              src={`/images/teams/${teamData.id}.png`}
              alt={`${teamData.name} team thumbnail`}
              width="32"
              height="32"
              draggable={false}
              className="relative z-10"
            />

            <AnimatePresence>
              {showTeamMenu && (
                <motion.div
                  key="characterMenu"
                  initial={{
                    opacity: 0,
                    visibility: "hidden",
                    y: 0,
                  }}
                  animate={{
                    opacity: 1,
                    visibility: "visible",
                    y: -64,
                  }}
                  exit={{
                    opacity: 0,
                    height: 0,
                    overflow: "hidden",
                    scale: 0,
                    y: 0,
                  }}
                  className="absolute bottom-0 z-0 rounded-2xl bg-accent-dark p-4"
                >
                  <ul className="grid h-64 gap-2 overflow-hidden overflow-y-auto">
                    <li className="flex w-full min-w-max cursor-pointer items-center gap-1 rounded-full bg-accent p-2 font-bold uppercase transition">
                      <Image
                        src={`/images/teams/${teamData.id}.png`}
                        width="24"
                        height="24"
                        alt={`${teamData.name} thumbnail`}
                      />

                      <span>{teamData.name}</span>
                    </li>

                    <li>
                      <hr className="border-accent px-4" />
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
            </AnimatePresence>
          </div>
        )}

        <Button
          variant="plain"
          href="/buy-mario-strikers-battle-league-football"
          className="interactive mr-2 flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white drop-shadow-lg themed:bg-accent-dark"
          sound="coin"
        >
          <Image
            width={24}
            height={24}
            alt="Nintendo Mario Coin"
            src="/images/items/coin.png"
            className="object-contain"
          />
        </Button>

        {appCtx?.selectedTeam && (
          <Tooltip
            title={<QuestionBlock size={24} />}
            boxPlacement="over"
            className="drop-shadow-lg"
          >
            PSSSST...
            <br />
            <div className="inline-flex flex-wrap items-center gap-1.5 text-xs">
              Drücke deine Pfeiltasten
              <span className="relative inline-flex items-center gap-1 rounded-xl bg-accent-soft p-2 italic text-accent themed:bg-accent-soft themed:text-accent">
                <ArrowLeftIcon className="h-4 w-4 text-accent" />
              </span>
              oder
              <span className="relative inline-flex items-center gap-1 rounded-xl bg-accent-soft p-2 italic text-accent themed:bg-accent-soft themed:text-white">
                <ArrowRightIcon className="h-4 w-4 text-accent" />
              </span>
              !
            </div>
          </Tooltip>
        )}
        </div> */}

      {
        <FloatingActionBar
          shouldBeVisible={!showLoadingBar && playSoundtrackOnce}
        />
      }
    </Layout>
  );
};

export default InfoPage;
