import { NextPage } from "next";
import React from "react";
import ThrillingStarAnimation from "../../components/animation/ThrillingStarAnimation";
import Layout from "../../components/layout";
import PageSwitchAnimation from "../../components/PageSwitchAnimation";

const Checkout: NextPage = () => {
  return (
    <Layout pageTitle="Checkout">
      <PageSwitchAnimation />

      <section className="h-ful -mt-32 flex min-h-screen items-center justify-center">
        <div className="relative mx-auto inline-flex h-32 w-32 cursor-pointer items-center justify-center gap-2 rounded-full px-0 pt-1 before:absolute before:inset-0 before:-z-10 before:block before:h-full before:w-full before:animate-audioWave1 before:rounded-full before:bg-accent-soft before:content-[''] after:absolute after:inset-0 after:-z-10  after:block after:h-full after:w-full after:animate-audioWave2 after:rounded-full after:bg-accent-soft after:content-[''] themed:before:bg-white/20 themed:after:bg-white/20">
          <ThrillingStarAnimation />
        </div>
      </section>
    </Layout>
  );
};

export default Checkout;
