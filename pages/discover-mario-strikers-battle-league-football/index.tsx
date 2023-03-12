import { NextPage } from "next";
import React from "react";
import Features from "../../components/Features";
import CharacterSelection from "../../components/CharacterSelection";
import CommunityQuotes from "../../components/CommunityQuotes";
import GameGallery from "../../components/GameGallery";
import Heading from "../../components/Heading";
import Layout from "../../components/layout";
import FloatingActionBar from "../../components/FloatingActionBar";
import SpringBounceWhenInView from "../../components/animation/SpringBounceWhenInView";

const InfoPage: NextPage = () => {
  return (
    <Layout pageTitle="Discover">
      <section className="mt-8 grid gap-32">
        <section className="m-auto grid w-full max-w-screen-xl gap-12 px-4 text-center">
          <header className="grid gap-2">
            <Heading as="h2" className="headline--gradient">
              Wähle dein Team
            </Heading>

            <p>
              Und erhalte Vorbesteller-Boni beim Kauf der Striker&apos;s
              <span className="mx-2 rounded-xl bg-accent-soft p-2 italic text-accent themed:bg-accent-dark themed:text-white">
                Team-Edition
              </span>
            </p>
          </header>

          <CharacterSelection className="sm:grid-cols-2 lg:grid-cols-3" />
        </section>

        <GameGallery />

        <Features />

        <CommunityQuotes />

        <section>
          <SpringBounceWhenInView>
            <Heading as="h2" className="headline--gradient">
              Merch
            </Heading>
          </SpringBounceWhenInView>
        </section>

        <section>
          <SpringBounceWhenInView>
            <Heading as="h2" className="headline--gradient">
              Game trailer
            </Heading>
          </SpringBounceWhenInView>
        </section>
      </section>

      {/**
       * Hide on scroll down?
       * How to trigger animations when scroll direction changes
       * https://www.youtube.com/watch?v=SLOBjhSJCi0
       *
       * Audio needs to be shared app globally to function page wide when switching pages
       *
       * Move this component to shared layout?
       *
       * Integrate back button into action bar?
       */}
      <FloatingActionBar shouldBeVisible={true} />
    </Layout>
  );
};

export default InfoPage;
