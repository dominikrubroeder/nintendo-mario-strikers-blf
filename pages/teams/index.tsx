import { NextPage } from "next";
import React, { useContext, useEffect, useRef } from "react";
import Layout from "../../components/layout";
import Heading from "../../components/Heading";
import teams from "../../data/teams";
import AppContext from "../../store/appContext";
import Image from "next/image";
import Card from "../../components/ui/Card";
import SpringBounceWhenInView from "../../components/animation/SpringBounceWhenInView";
import { TeamCarousel } from "../../components/TeamCarousel";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import FadeUpWhenInView from "../../components/animation/FadeUpWhenInView";
import AudioContext from "../../store/audioContext";
import { useRouter } from "next/router";
import { useAnimationControls } from "framer-motion";
import { motion } from "framer-motion";
import TeamStatsBar from "../../components/TeamStatsBar";

const TeamPage: NextPage = () => {
  const appCtx = useContext(AppContext);
  const audioCtx = useContext(AudioContext);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const router = useRouter();
  const controls = useAnimationControls();
  const teamData =
    teams.find((team) => team.id === appCtx?.selectedTeam) ?? teams[0];

  useEffect(() => {
    if (audioRef && audioCtx?.interactiveAudioisEnabled)
      audioRef.current?.play();
  }, [audioRef, audioCtx?.interactiveAudioisEnabled]);

  useEffect(() => {
    controls.start({ y: [-100, 0] });
  }, [controls, appCtx?.selectedTeam]);

  return (
    <Layout pageTitle="Teams">
      <audio ref={audioRef}>
        <source
          src={`/audio/sound-${appCtx?.selectedTeam}-0.mp3`}
          type="audio/mp3"
        />
      </audio>

      <section className="gap gap-4 px-8 sm:px-0">
        <div className="py-12">
          <TeamCarousel />
        </div>

        <div className="grid gap-16">
          <header className="grid gap-4">
            <div className="text-center">
              <span className="rounded-xl bg-accent py-2 px-3 text-center text-xs text-white themed:bg-accent-dark">
                Team
              </span>
            </div>

            <h1 className="text-center text-7xl font-bold uppercase sm:text-9xl">
              {teamData.name}
            </h1>

            <div className="mx-auto grid max-w-lg gap-16">
              <p className="text-center text-xl">
                &ldquo;{teamData.teamText}&rdquo;
              </p>
            </div>
          </header>

          <div className="grid gap-16">
            <Card className="mx-auto w-full max-w-lg p-8">
              <p>{teamData.baseText}</p>
            </Card>

            <section className="grid gap-6 sm:gap-12">
              <SpringBounceWhenInView>
                <Heading
                  as="h2"
                  className="headline--gradient sm: max-w-xs sm:max-w-none"
                >
                  Individualisiere Dein Team
                </Heading>
              </SpringBounceWhenInView>

              <div className="mx-auto grid gap-2 px-4 sm:max-w-md md:px-0">
                <Heading as="h2" className="font-bold uppercase">
                  {teamData.name}&apos;s Ausrüstung und Statistik
                </Heading>
                Gestalte die Ausrüstung deines Teams ganz nach deinem Geschmack.
                Sie verändert nicht nur das Aussehen, sondern auch Werte wie
                Tempo, Kraft und die Genauigkeit beim Passen.
              </div>

              <div className="mx-auto max-w-screen-xl sm:px-8">
                <SpringBounceWhenInView>
                  <Image
                    src={teamData.gear[0]}
                    alt={`${teamData.name}'s Ausrüstung und Statistik`}
                    className="rounded-3xl"
                    width="1920"
                    height="1080"
                    draggable={false}
                    priority
                  />
                </SpringBounceWhenInView>
              </div>
            </section>

            <section className="relative mx-auto grid w-full max-w-screen-lg gap-8 lg:gap-4">
              <div className="relative mx-4 overflow-hidden sm:mx-8 lg:mx-0">
                <div className="absolute left-0 top-0 z-10 h-full w-[1px] bg-accent-dark"></div>

                <div className="relative w-full max-w-screen-lg overflow-y-visible overflow-x-scroll whitespace-nowrap px-4">
                  {teams.map((team, i) => (
                    <div
                      key={i}
                      className="interactive relative mr-4 inline-flex items-center gap-2 rounded-full px-4 py-1"
                      onClick={() => appCtx?.setTeam(team.id)}
                    >
                      {teams.findIndex((team) => team.id === teamData?.id) ===
                        i && (
                        <motion.div
                          layoutId="active-tab--team-stats"
                          className="absolute inset-0 rounded-full bg-accent-dark"
                        ></motion.div>
                      )}
                      <div className="mt-2 shrink-0 z-10">
                        <Image
                          src={team.image}
                          alt={team.name}
                          width={48}
                          height={48}
                          className="object-contain"
                          draggable="false"
                        />
                      </div>

                      <div className="z-10 font-bold uppercase">
                        {team.name}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="absolute right-0 top-0 h-full w-[1px] bg-accent-dark"></div>
              </div>

              <div className="grid gap-4 px-4 sm:px-8 lg:px-0">
                {["Kraft", "Tempo", "Schuss", "Passen", "Technik"].map(
                  (stat) => (
                    <TeamStatsBar key={stat} label={stat} />
                  )
                )}
              </div>
            </section>

            <section className="relative grid gap-8 text-center">
              <SpringBounceWhenInView>
                <Heading as="h2" className="headline--gradient">
                  Team {teamData.name}
                </Heading>
                <div className="mx-auto flex items-center justify-center gap-1.5 text-center">
                  Hol dir dein
                  <Image
                    src={teamData?.image}
                    alt={teamData?.name}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                  <span className="relative inline-flex items-center gap-1 rounded-xl bg-accent-soft p-2 italic text-accent themed:bg-accent-dark themed:text-white">
                    Team-Shirt
                  </span>
                </div>
              </SpringBounceWhenInView>

              <div className="mx-auto">
                <FadeUpWhenInView>
                  <Image
                    src={teamData.merch[0]}
                    alt={teamData.name}
                    width="566"
                    height="680"
                    className="rounded-3xl"
                    priority
                  />
                </FadeUpWhenInView>
              </div>

              <div
                className="interactive sticky bottom-4 z-50 mx-auto flex w-max items-center justify-center gap-4 rounded-full bg-signal px-4 py-2 uppercase text-white drop-shadow-lg hover:px-6"
                onClick={() =>
                  router.push("/buy-mario-strikers-battle-league-football")
                }
              >
                <span className="flex items-center gap-1">
                  {appCtx?.hasTeam && (
                    <motion.div
                      key="preorderTeam"
                      animate={controls}
                      className="mt-1 mr-1"
                    >
                      <Image
                        src={teamData.image}
                        alt={teamData.name}
                        width="48"
                        height="48"
                        className="rounded-full bg-signal-dark object-contain"
                      />
                    </motion.div>
                  )}
                  <span className="font-bold">Team {teamData.name}</span>
                  vorbestellen
                </span>
                <ArrowLongRightIcon className="h-5 w-5 font-bold text-accent themed:text-white" />
              </div>
            </section>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TeamPage;
