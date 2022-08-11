import Head from 'next/head';
import React, { useState } from 'react';
import TheCommunityQuotes from '../../components/TheCommunityQuotes';
import TheGallery from '../../components/TheGallery';
import TheStickyBuyBar from '../../components/TheStickyBuyBar';

const InfoPage = () => {
  const [showStickyBuyBar, setShowStickyBuyBar] = useState(false);

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

      <h1>Info page (storytelling)</h1>

      <TheGallery />

      <TheCommunityQuotes />

      <TheStickyBuyBar shouldBeVisible={showStickyBuyBar} />
    </div>
  );
};

export default InfoPage;
