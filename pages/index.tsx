import { NextPage } from 'next';
import Layout from '../components/layout';
import Hero from '../components/Hero';
import PageSwitchAnimation from '../components/PageSwitchAnimation';

const Home: NextPage = () => {
  return (
    <Layout withFooter={false}>
      <PageSwitchAnimation />
      <Hero />
    </Layout>
  );
};

export default Home;
