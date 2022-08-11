import { NextPage } from 'next';
import Head from 'next/head';
import TheHero from '../components/TheHero';
import TheLaunchScreen from '../components/TheLaunchScreen';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Mario Strikers: Battle League Football | Nintendo</title>
        <meta
          name="description"
          content="Nintendo's Mario Strikers: Battle League Football jetzt kaufen"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TheLaunchScreen />
      <TheHero />
    </div>
  );
};

export default Home;
