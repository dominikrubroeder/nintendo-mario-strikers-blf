import { NextPage } from 'next';
import Head from 'next/head';
import React, { useState } from 'react';
import TheCommunityQuotes from '../../components/TheCommunityQuotes';
import TheGallery from '../../components/TheGallery';
import TheStickyBuyBar from '../../components/TheStickyBuyBar';

const InfoPage: NextPage = () => {
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

      <TheCommunityQuotes />

      <TheGallery />

      <TheStickyBuyBar shouldBeVisible={true} />
    </div>
  );
};

export default InfoPage;
