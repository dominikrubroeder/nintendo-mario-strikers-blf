import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import BouncingItems from "../../components/BouncingItems";
import Layout from "../../components/layout";
import Heading from "../../components/typography/Heading";

const Checkout: NextPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showLoadingVideo, setShowLoadingVideo] = useState(true);

  useEffect(() => {
    const checkoutScreenTimeout = setTimeout(hideLaunchScreen, 8000);

    function hideLaunchScreen() {
      setShowLoadingVideo(false);
      setIsLoading(false);
      clearTimeout(checkoutScreenTimeout);
    }
  });

  return (
    <Layout pageTitle="Checkout">
      <section className="flex min-h-screen items-center justify-center">
        {!isLoading && <div>Show Checkout Screen</div>}

        {/* Load team cover full screen  ...*/}
        {isLoading && (
          <div className="grid gap-2 text-center">
            <Heading as="h1">Checkout</Heading>
            <BouncingItems size={32} />
          </div>
        )}

        {showLoadingVideo && (
          <video
            autoPlay
            muted
            className="min-w-screen fixed right-0 bottom-0 z-50 min-h-screen"
          >
            <source
              src="/videos/nintendo-switch-mario-strikers-blf-mario-smash.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        )}
      </section>
    </Layout>
  );
};

export default Checkout;
