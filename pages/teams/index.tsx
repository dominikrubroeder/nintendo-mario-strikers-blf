import { NextPage } from "next";
import React, { useContext, useRef } from "react";
import Layout from "../../components/layout";
import Heading from "../../components/Heading";
import teams from "../../data/teams";
import AppContext from "../../store/appContext";
import Image from "next/image";
import Card from "../../components/ui/Card";
import SpringBounceWhenInView from "../../components/animation/SpringBounceWhenInView";
import { TeamCarousel } from "../../components/TeamCarousel";
import FloatingActionBar from "../../components/FloatingActionBar";
import Button from "../../components/ui/Button";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import FadeUpWhenInView from "../../components/animation/FadeUpWhenInView";

const TeamPage: NextPage = () => {
  const appCtx = useContext(AppContext);
  const teamData =
    teams.find((team) => team.id === appCtx?.selectedTeam) ?? teams[0];

  return (
    <Layout pageTitle="Teams">
      <section className="gap gap-4 px-8 sm:px-0">
        <div className="py-12">
          <TeamCarousel />
        </div>

        <div className="grid gap-16">
          <header className="grid gap-4">
            <div className="text-center">
              <span className="rounded-xl bg-accent-dark py-2 px-3 text-center text-xs text-white">
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
                    width={514}
                    height={620}
                    className="rounded-3xl"
                    priority
                  />
                </FadeUpWhenInView>
              </div>

              <SpringBounceWhenInView>
                <Button
                  variant="text"
                  href="/buy-mario-strikers-battle-league-football"
                  className="mx-auto justify-self-start"
                >
                  Team {teamData.name} Edition vorbestellen
                  <ArrowLongRightIcon className="h-5 w-5 font-bold text-accent group-hover:text-white themed:text-signal" />
                </Button>
              </SpringBounceWhenInView>
            </section>
          </div>
        </div>
      </section>

      <FloatingActionBar shouldBeVisible />
    </Layout>
  );
};

export default TeamPage;
