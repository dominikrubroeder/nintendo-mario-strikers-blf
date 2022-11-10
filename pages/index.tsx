import { NextPage } from 'next';
import Head from 'next/head';
import Hero from '../components/sections/home/Hero';
import TheLaunchScreen from '../components/TheLaunchScreen';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Mario Strikers: Battle League Football | Nintendo</title>
      </Head>

      <TheLaunchScreen />
      <Hero />
    </div>
  );
};

export default Home;
