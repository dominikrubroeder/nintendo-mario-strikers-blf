import { NextPage } from 'next';
import React from 'react';
import Layout from '../../components/layout';
import TheLaunchScreen from '../../components/TheLaunchScreen';

const Checkout: NextPage = () => {
  return (
    <Layout pageTitle="Checkout">
      <TheLaunchScreen />
    </Layout>
  );
};

export default Checkout;
