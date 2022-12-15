import { NextPage } from 'next';
import Layout from '../components/layout';
import Hero from '../components/sections/home/Hero';
import TheLaunchScreen from '../components/TheLaunchScreen';

const Home: NextPage = () => {
  return (
    <Layout>
      <TheLaunchScreen />
      <Hero />
    </Layout>
  );
};

export default Home;
