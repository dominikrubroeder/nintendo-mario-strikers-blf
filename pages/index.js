import Head from 'next/head';
import TheFooter from '../components/layout/TheFooter';
import TheHeader from '../components/layout/TheHeader';
import TheHero from '../components/TheHero';

export default function Home() {
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

      <TheHeader />

      <main>
        <TheHero />
      </main>

      <TheFooter />
    </div>
  );
}
