import React from "react";
import Layout from "../../../components/layout";
import Accordion from "../../../components/ui/Accordion";

const DiscoverMarioStrikersBattleLeagueFootballPage: React.FC = () => {
  return (
    <Layout pageTitle="Discover | Mario Strikers: Battle League Football">
      <section className="m-auto w-full max-w-screen-xl px-4">
        <div className="grid gap-2">
          <Accordion
            title={
              <div className="flex items-center gap-1">
                <span className="text-white/20 ">Kickoff</span>
                <span>Spiele einen Soundtrack</span>
              </div>
            }
          >
            Checked
          </Accordion>

          <Accordion
            title={
              <div className="flex items-center gap-1">
                <span className="text-white/20 ">Wähle dein Team</span>
                <span>Spiele einen Soundtrack</span>
              </div>
            }
          >
            Checked
          </Accordion>
        </div>
      </section>
    </Layout>
  );
};

export default DiscoverMarioStrikersBattleLeagueFootballPage;
