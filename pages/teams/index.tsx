import { NextPage } from "next";
import React, { useContext } from "react";
import Layout from "../../components/layout";
import Heading from "../../components/Heading";
import Accordion from "../../components/ui/Accordion";
import teams from "../../data/teams";
import AppContext from "../../store/appContext";
import Image from "next/image";
import Card from "../../components/ui/Card";
import { motion } from "framer-motion";
import SpringBounceWhenInView from "../../components/animation/SpringBounceWhenInView";
import { TeamCardCarousel } from "../../components/TeamCardCarousel";
import FloatingActionBar from "../../components/FloatingActionBar";

const TeamPage: NextPage = () => {
  const appCtx = useContext(AppContext);
  const teamData =
    teams.find((team) => team.id === appCtx?.selectedTeam) ?? teams[0];

  return (
    <Layout pageTitle="Teams">
      {/**
       * Push, "lift" the state up of current team to url to make it sharable
       * Include team statistic, game insights
       *
       * When switching theme / team through carousel, play team Sound
       *
       * Move playing team sound to shared context when team / theme changed / is changing?
       */}

      <div className="min-h-screen">
        <section className="gap gap-4">
          <div className="py-12">
            <TeamCardCarousel />
          </div>

          <div className="grid gap-16">
            <header>
              <div className="text-center">
                <span className="rounded-xl bg-accent-dark py-2 px-3 text-center text-xs">
                  Team
                </span>
              </div>

              <h1 className="text-center text-9xl font-bold uppercase">
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

              <section className="grid gap-12">
                <SpringBounceWhenInView>
                  <Heading as="h2" className="headline--gradient">
                    Individualisiere Dein Team
                  </Heading>
                </SpringBounceWhenInView>

                <div className="mx-auto grid max-w-md gap-2 px-4 md:px-0">
                  <Heading as="h2" className="font-bold uppercase">
                    {teamData.name}&apos;s Ausrüstung und Statistik
                  </Heading>
                  Gestalte die Ausrüstung deines Teams ganz nach deinem
                  Geschmack. Sie verändert nicht nur das Aussehen, sondern auch
                  Werte wie Tempo, Kraft und die Genauigkeit beim Passen.
                </div>
              </section>

              <motion.section
                initial={{ paddingLeft: "16rem", paddingRight: "16rem" }}
                whileInView={{ paddingLeft: "3rem", paddingRight: "3rem" }}
                viewport={{ amount: 0.3 }}
                transition={{ ease: "easeOut", delay: 0.2 }}
                className="mx-auto max-w-screen-2xl"
              >
                <Image
                  src={teamData.gear[0]}
                  alt={`${teamData.name}'s Ausrüstung und Statistik`}
                  className="max-w-full rounded-3xl transition-all duration-300"
                  width="1920"
                  height="1080"
                  draggable={false}
                />
              </motion.section>

              <section className="relative grid justify-center gap-8">
                <SpringBounceWhenInView>
                  <Heading as="h2" className="headline--gradient">
                    Team {teamData.name}
                  </Heading>
                  <p className="mx-auto grid max-w-md gap-2 px-4 md:px-0">
                    Wähle {teamData.name} und du bekommst:
                  </p>
                </SpringBounceWhenInView>

                {teamData?.merch && (
                  <Image
                    src={teamData?.merch[0]}
                    alt={teamData?.name}
                    width={596}
                    height={718}
                    className="mx-auto rounded-3xl"
                  />
                )}
              </section>

              <div className="mx-auto w-full max-w-lg">
                <Heading as="h3" className="mb-4 font-bold uppercase">
                  {teamData.name}&apos;s Hyperstrike
                </Heading>

                <iframe
                  src={teamData.specialAbilityVideoURL}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-80 w-full rounded-xl"
                ></iframe>
              </div>

              <Image
                src="/gifs/mario-light-up-eyes-loop.gif"
                alt="Team Character Gif"
                width={1920}
                height={1080}
              />
            </div>
          </div>
        </section>
      </div>

      <FloatingActionBar shouldBeVisible={true} />
    </Layout>
  );
};

export default TeamPage;
