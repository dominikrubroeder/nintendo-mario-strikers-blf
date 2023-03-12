import { NextPage } from "next";
import React from "react";
import BouncingItems from "../../components/BouncingItems";
import Layout from "../../components/layout";
import PageSwitchAnimation from "../../components/PageSwitchAnimation";

const Checkout: NextPage = () => {
  return (
    <Layout pageTitle="Checkout">
      <PageSwitchAnimation />

      <section className="h-ful flex min-h-screen items-center justify-center">
        <div className="mx-auto">
          <BouncingItems size={24} />
        </div>
      </section>
    </Layout>
  );
};

export default Checkout;
