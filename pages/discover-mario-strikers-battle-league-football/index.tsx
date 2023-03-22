import { NextPage } from "next";
import React, { useContext, useEffect, useRef, useState } from "react";
import Features from "../../components/Features";
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
} from "@heroicons/react/24/solid";
import Button from "../../components/ui/Button";
import QuestionBlock from "../../components/img/QuestionBlock";
import { AnimatePresence, useScroll, motion } from "framer-motion";
import PauseAudioButton from "../../components/mini-audio-player/controls/PauseAudioButton";
import PlayAudioButton from "../../components/mini-audio-player/controls/PlayAudioButton";
import AudioContext from "../../store/audioContext";

const InfoPage: NextPage = () => {
  const appCtx = useContext(AppContext);
  const teamData =
    teams.find((team) => team.id === appCtx?.selectedTeam) ?? teams[0];
  const selectedTeam = appCtx?.selectedTeam?.toUpperCase();
  const audioCtx = useContext(AudioContext);
  const [showCharacterMenu, setShowCharacterMenu] = useState(false);

  let { scrollY } = useScroll();
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");

  useEffect(() => {
    return scrollY.onChange((latest) => {
      if (latest < 0) return;

      let isScrollingDown = scrollY.getPrevious() - latest < 0;
      let currentScrollDirection: "down" | "up" = isScrollingDown
        ? "down"
        : "up";

      if (scrollDirection !== currentScrollDirection) {
        setScrollDirection(currentScrollDirection);
      }
    });
  }, [scrollY, scrollDirection]);

  return (
    <Layout pageTitle="Discover">
      <section className="mt-8 grid gap-32">
        <section className="m-auto grid w-full max-w-screen-xl gap-12 px-4 text-center">
          <header className="grid gap-2">
            <Heading as="h2" className="headline--gradient">
              Wähle dein Team
            </Heading>

            <div className="grid gap-1.5 lg:flex lg:items-center lg:justify-center">
              Und erhalte Vorbesteller-Boni beim Kauf der Striker&apos;s
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
                    <b className="ml-1">{selectedTeam}</b>, um ein T-Shirt im
                    <b className="ml-1">{selectedTeam}</b> Design zu erhalten
                    oder deinen Schreibtisch und Spielinhalte mit der
                    <b className="mx-1">{selectedTeam}</b>-amiibo™ Tischfigur zu
                    bereichern.
                    <br /> <br />
                    Klicke auf einen Charakter, um dein Team zu wählen.
                  </Tooltip>
                </div>
              </div>
            </div>
          </header>

          <TeamSelection className="sm:grid-cols-2 lg:grid-cols-3" />
        </section>

        <GameGallery />

        <Features />

        <CommunityQuotes />

        <section className="mx-4 grid justify-center gap-8 lg:mx-0">
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
          >
            Mehr zu Team {teamData.name}
            <ArrowLongRightIcon className="h-5 w-5 font-bold text-accent themed:text-signal" />
          </Button>
        </section>

        <section>
          <SpringBounceWhenInView>
            <Heading as="h2" className="headline--gradient">
              Schau dir den Trailer an
            </Heading>
          </SpringBounceWhenInView>
        </section>
      </section>

      <div
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
            className="interactive mr-2 flex h-10 w-10 items-center justify-center rounded-full bg-accent-dark"
            onClick={() =>
              setShowCharacterMenu((previousState) => !previousState)
            }
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
              {showCharacterMenu && (
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
      </div>

      <FloatingActionBar
        shouldBeVisible={scrollDirection === "up" ? true : false}
      />
    </Layout>
  );
};

export default InfoPage;
