import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import GameFeatures from '../../components/GameFeatures';
import TeamSelection from '../../components/TeamSelection';
import TheCommunityQuotes from '../../components/TheCommunityQuotes';
import TheGallery from '../../components/TheGallery';
import TheStickyBuyBar from '../../components/TheStickyBuyBar';

const InfoPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>
          Discover Mario Strikers: Battle League Football | Nintendo
        </title>
        <meta
          name="description"
          content="Discover Nintendo's Mario Strikers: Battle League Football"
        />
      </Head>

      <div className="grid gap-32">
        <TheCommunityQuotes />

        <section className="max-w-screen-xl m-auto w-full">
          <h2 className="mx-auto px-4 text-6xl md:text-8xl md:leading-tight text-center break-all font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-fill-color-transparent">
            Wähle dein Team
          </h2>
          <TeamSelection className="grid-cols-3" />
        </section>

        <TheGallery />

        <GameFeatures />
      </div>

      <TheStickyBuyBar shouldBeVisible={true} />
    </div>
  );
};

export default InfoPage;
