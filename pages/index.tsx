import { NextPage } from 'next';
import Layout from '../components/layout';
import Hero from '../components/Hero';
import PageSwitchAnimation from '../components/PageSwitchAnimation';

{
  /** Naming conventions: https://github.com/airbnb/javascript/tree/master/react#naming */
}

const Home: NextPage = () => {
  return (
    <Layout withFooter={false}>
      <PageSwitchAnimation />
      <Hero />
    </Layout>
  );
};

export default Home;
