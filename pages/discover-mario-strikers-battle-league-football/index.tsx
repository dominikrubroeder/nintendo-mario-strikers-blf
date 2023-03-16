import { NextPage } from "next";
import React, { useContext } from "react";
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
import { InformationCircleIcon } from "@heroicons/react/24/outline";

const InfoPage: NextPage = () => {
  const appCtx = useContext(AppContext);
  const selectedTeam = appCtx?.selectedTeam?.toUpperCase();

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
              <span className="relative mx-2 inline-flex items-center gap-1 rounded-xl bg-accent-soft p-2 italic text-accent themed:bg-accent-dark themed:text-white">
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
                  <b className="ml-1">{selectedTeam}</b>, um einen Hoodie im
                  <b className="ml-1">{selectedTeam}</b> Design zu erhalten oder
                  deinen Schreibtisch mit der
                  <b className="mx-1">{selectedTeam}</b>
                  Tischfigar in der Sieger-Pose zu schmücken.
                  <br /> <br />
                  Klicke auf einen Charakter, um ihn als dein Team auszuwählen.
                </Tooltip>
              </div>
            </p>
          </header>

          <TeamSelection className="sm:grid-cols-2 lg:grid-cols-3" />
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
