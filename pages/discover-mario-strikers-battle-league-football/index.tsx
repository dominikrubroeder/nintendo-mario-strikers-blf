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
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import PauseAudioButton from "../../components/mini-audio-player/controls/PauseAudioButton";
import PlayAudioButton from "../../components/mini-audio-player/controls/PlayAudioButton";
import AudioContext from "../../store/audioContext";
import AmiiboLogo from "../../components/svg/AmiiboLogo";
import Features from "../../components/Features";
import AnimatedSoundbarsIcon from "../../components/AnimatedSoundbarsIcon";
import FadeUpWhenInView from "../../components/animation/FadeUpWhenInView";
import ThrillingStarAnimation from "../../components/animation/ThrillingStarAnimation";
import { items } from "../../data/items";
import { TeamCarousel } from "../../components/TeamCarousel";
import { useRouter } from "next/router";
import LightningShape from "../../components/svg/LightningShape";

const InfoPage: NextPage = () => {
  const router = useRouter();
  const appCtx = useContext(AppContext);
  const teamData =
    teams.find((team) => team.id === appCtx?.selectedTeam) ?? teams[0];
  const selectedTeam = appCtx?.selectedTeam?.toUpperCase();
  const audioCtx = useContext(AudioContext);
  const [showLoadingBar, setShowLoadingBar] = useState(false);
  const scrollToRef = useRef<HTMLDivElement | null>(null);
  const controls = useAnimationControls();

  const onClickHandler = () => {
    audioCtx?.toggleAudio();

    if (!audioCtx?.playSoundtrackOnce) {
      setShowLoadingBar(true);

      setTimeout(() => setShowLoadingBar(false), 3000);

      setTimeout(
        () =>
          scrollToRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          }),
        3200
      );
    }
  };

  useEffect(() => {
    controls.start({ y: [-100, 0] });
  }, [appCtx?.selectedTeam]);

  return (
    <Layout pageTitle="Discover">
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
                        className={`interactive relative z-50 mx-auto inline-flex cursor-pointer items-center gap-2 rounded-full bg-accent p-4 themed:bg-accent-dark ${
                          audioCtx?.playSoundtrackOnce ? "" : "animate-shake"
                        }`}
                      >
                        {audioCtx.isPlaying ? (
                          <PauseAudioButton />
                        ) : (
                          <PlayAudioButton />
                        )}
                        <div
                          className="z-50 flex items-center gap-1 text-white"
                          onClick={() => onClickHandler()}
                        >
                          <span>Soundtrack</span>
                          {audioCtx.isPlaying ? "stoppen" : "abspielen"}
                        </div>
                        <AnimatedSoundbarsIcon />
                      </motion.div>
                    )}

                    {audioCtx?.playSoundtrackOnce && showLoadingBar && (
                      <motion.div
                        key="loadingBar"
                        initial={{ y: 100 }}
                        animate={{ y: 0 }}
                        exit={{ opacity: 0, y: -100 }}
                        className="relative z-[60] mx-auto inline-flex cursor-pointer items-center gap-2 rounded-full bg-accent px-0 pt-1 before:absolute before:inset-0 before:-z-10 before:block before:h-full before:w-full before:animate-audioWave1 before:rounded-full before:bg-accent-dark before:content-[''] after:absolute after:inset-0 after:-z-10  after:block after:h-full after:w-full after:animate-audioWave2 after:rounded-full after:bg-accent-dark after:content-[''] themed:bg-accent-dark themed:before:bg-white/20 themed:after:bg-white/20"
                        transition={{
                          duration: 0.6,
                          type: "spring",
                          stiffness: 400,
                          damping: 15,
                        }}
                      >
                        <div className="relative -mb-3 flex items-center gap-2">
                          <ThrillingStarAnimation />
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
                    priority
                  />

                  <LightningShape className="absolute left-[84px] -z-10" />
                  <LightningShape className="absolute right-[84px] -z-10 rotate-12" />
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      <div
        className="mt-12 grid gap-32 px-4 sm:px-0"
        id="scrollTo"
        ref={scrollToRef}
      >
        {audioCtx?.playSoundtrackOnce && (
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

              <div
                className="interactive sticky bottom-4 z-50 mx-auto flex items-center gap-2 rounded-full bg-signal py-3 px-4 font-bold uppercase text-white drop-shadow-lg hover:px-6"
                onClick={() =>
                  router.push("/buy-mario-strikers-battle-league-football")
                }
              >
                {appCtx?.hasTeam && (
                  <motion.div key="preorderTeam" animate={controls}>
                    <Image
                      src={teamData.image}
                      alt={teamData.name}
                      width={48}
                      height={48}
                      className="rounded-full bg-signal-dark object-contain"
                    />
                  </motion.div>
                )}
                Jetzt vorbestellen
              </div>
            </section>

            <section>
              <div className="grid gap-2">
                <SpringBounceWhenInView>
                  <Heading as="h2" className="headline--gradient leading-1">
                    Hier ist alles erlaubt!
                  </Heading>
                </SpringBounceWhenInView>

                <p className="mx-auto rounded-2xl bg-accent p-4 themed:bg-accent-dark">
                  Das neueste Spiel der Mario Strikers-Reihe erscheint für
                  Nintendo Switch!
                </p>
              </div>

              <GameGallery />
            </section>

            {appCtx?.selectedTeam && (
              <section className="grid gap-6 sm:gap-12">
                <SpringBounceWhenInView>
                  <Heading as="h2" className="headline--gradient">
                    Dein aktuelles Team
                  </Heading>
                </SpringBounceWhenInView>

                <TeamCarousel />

                <Button
                  variant="text"
                  href="/teams"
                  className="mx-auto justify-self-start"
                  sound="team"
                >
                  {appCtx?.hasTeam && (
                    <motion.div key="previewTeamGear" animate={controls}>
                      <Image
                        src={teamData.image}
                        alt={teamData.name}
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </motion.div>
                  )}
                  Erhalte Vorschau zur Ausrüstung
                  <ArrowLongRightIcon className="h-5 w-5 font-bold text-accent group-hover:text-white themed:text-signal" />
                </Button>
              </section>
            )}

            <section className="mx-auto grid min-h-[50vh] max-w-screen-xl items-center justify-center gap-4 sm:gap-12">
              <FadeUpWhenInView>
                <div className="grid gap-8 rounded-2xl p-8 pb-16 themed:bg-accent-dark">
                  <Heading as="h2" className="headline--gradient">
                    5 gegen 5
                  </Heading>

                  <p className="mx-auto max-w-xs sm:max-w-md">
                    Mach dich bereit für das 5-gegen-5-Spiel Strike – Wie
                    Fußball, aber mit deutlich härterer Offensive! Schieß Tore,
                    indem du dribbelst und deinen Teamkameraden die Bälle
                    zuspielst.
                  </p>
                </div>
              </FadeUpWhenInView>
            </section>

            <section className="mx-auto grid min-h-[50vh] max-w-screen-xl items-center justify-center gap-4 sm:gap-12">
              <FadeUpWhenInView>
                <div className="grid gap-8 rounded-2xl p-8 pb-16 themed:bg-accent-dark">
                  <Heading as="h2" className="headline--gradient">
                    Bis zu 8 Spieler
                  </Heading>

                  <p className="mx-auto max-w-xs sm:max-w-md">
                    Bis zu acht Spieler, vier in jedem Team, können auf einer
                    Nintendo Switch-Konsole gegeneinander spielen. Zusätzlich zu
                    den Einzelspielen wird es einen Online-Club-Modus geben –
                    Jedem Club können bis zu 20 Spieler beitreten. Versucht, zum
                    besten Club der Welt aufzusteigen!
                  </p>
                </div>
              </FadeUpWhenInView>
            </section>

            <section className="grid gap-4 sm:gap-12">
              <SpringBounceWhenInView>
                <Heading as="h2" className="headline--gradient">
                  Tacklings, Items und einzigartige Fähigkeiten
                </Heading>
              </SpringBounceWhenInView>

              <div className="mx-auto flex flex-wrap gap-2">
                {/* Check for items audio sounds */}
                {items.map(({ title, src }, index) => (
                  <motion.div
                    key={title}
                    initial="hidden"
                    whileInView="visible"
                    variants={{
                      visible: { scale: 1 },
                      hidden: { scale: 0 },
                    }}
                    transition={{
                      duration: 0.6,
                      type: "spring",
                      stiffness: 400,
                      delay: 0.1 * index,
                      damping: 15,
                    }}
                    className="relative h-24 w-24 sm:h-32 sm:w-32"
                  >
                    <Image
                      src={src}
                      alt={`${title} item`}
                      layout="fill"
                      className="object-contain"
                    />
                  </motion.div>
                ))}
              </div>

              <p className="mx-auto max-w-xs sm:max-w-md">
                Benutze Tacklings, Items und einzigartige Fähigkeiten zum
                Auslösen von Spezialschüssen. Sammle eine der Hyperkugeln auf
                dem Spielfeld ein und lade sie auf, während deine Gegner
                abgelenkt sind, um den Hyperschuss zu aktivieren – einen
                Spezialschuss, mit dem dir statt einem gleich zwei Tore
                angerechnet werden!
              </p>
            </section>

            <CommunityQuotes />

            <motion.iframe
              src="https://www.youtube.com/embed/0uh01uQuPfk?autoplay=0&rel=0"
              title="YouTube video player"
              allowFullScreen
              className="mx-auto h-[10rem] w-[19rem] rounded-xl border-8 border-black sm:h-[21rem] sm:w-[37.5rem] md:w-[37.5rem]"
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

              <FadeUpWhenInView>
                <Image
                  src={teamData.merch[0]}
                  alt={teamData.name}
                  width="566"
                  height="680"
                  className="mx-auto rounded-3xl"
                />
              </FadeUpWhenInView>

              <Button
                variant="text"
                href="/teams"
                className="mx-auto justify-self-start"
                sound="team"
              >
                {appCtx?.hasTeam && (
                  <motion.div key="previewTeam" animate={controls}>
                    <Image
                      src={teamData.image}
                      alt={teamData.name}
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </motion.div>
                )}
                Mehr zu Team {teamData.name}
                <ArrowLongRightIcon className="h-5 w-5 font-bold text-accent themed:text-signal themed:group-hover:text-white" />
              </Button>
            </section>

            <section className="mb-16 px-4 lg:px-0">
              <SpringBounceWhenInView>
                <Heading as="h2" className="headline--gradient">
                  Kompatibel mit amiibo™
                </Heading>
              </SpringBounceWhenInView>

              <div className="mt-4 flex items-center justify-center gap-4 lg:mt-0">
                <AmiiboLogo className="inline-block h-8" />
                <Tooltip>
                  <p>
                    Diese Mario amiibo™-Figur wird zusammen mit dem Spiel am 10.
                    Mai erscheinen. Wenn du diesen amiibo antippst, kannst du
                    Arenen und Materialien sowie einen spezielles Ausrüstung für
                    Mario Gleitschirm erhalten.
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
                  <FadeUpWhenInView>
                    <Image
                      src="/images/amiibo-mario-promo.png"
                      width="1000"
                      height="500"
                      alt="amiibo mario"
                      className="rounded-xl"
                    />
                  </FadeUpWhenInView>
                </div>
              ) : (
                <div className="mx-auto my-16 text-center sm:px-8">
                  <FadeUpWhenInView>
                    <Image
                      src="/images/amiibo-lineup.png"
                      width="1280"
                      height="320"
                      alt="amiibo line-up"
                      className="rounded-xl"
                    />
                  </FadeUpWhenInView>
                </div>
              )}

              {!appCtx?.hasTeam && (
                <Button
                  variant="text"
                  href="/teams"
                  className="mx-auto justify-self-start"
                >
                  Mehr zu den Teams
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
                  {appCtx?.hasTeam && (
                    <motion.div key="previewTeamAmiibo" animate={controls}>
                      <Image
                        src={teamData.image}
                        alt={teamData.name}
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </motion.div>
                  )}
                  Mehr zu Team {teamData.name}
                  <ArrowLongRightIcon className="h-5 w-5 font-bold text-accent group-hover:text-white themed:text-signal" />
                </Button>
              )}
            </section>
          </>
        )}
      </div>

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

      <FloatingActionBar />
    </Layout>
  );
};

export default InfoPage;
