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
        <div className="mx-auto">
          <ThrillingStarAnimation />
        </div>
      </section>
    </Layout>
  );
};

export default Checkout;
