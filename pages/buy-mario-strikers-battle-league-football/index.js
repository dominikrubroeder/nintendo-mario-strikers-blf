import { motion } from 'framer-motion';
import Head from 'next/head';
import { useState } from 'react';
import BuyEditionConfigOption from '../../components/buyconfig/BuyEditionConfigOption';
import TheCountdown from '../../components/TheCountdown';

const editions = [
  {
    title: 'Mario Strikers: Battle League Football',
    edition: 'Standard',
    price: 59.99,
    details: ['Digital Download and Hardcover'],
  },
  {
    title: 'Mario Strikers: Battle League Football',
    edition: 'Nostalgie',
    price: 89.99,
    details: ['Digital Download and Hardcover', '...', '...', '...'],
  },
];

const DetailPage = () => {
  const [selectedEdition, setSelectedEdition] = useState(null);

  return (
    <div>
      <Head>
        <title>Mario Strikers: Battle League Football kaufen | Nintendo</title>
        <meta
          name="description"
          content="Nintendo's Mario Strikers: Battle League Football jetzt kaufen"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="grid grid-cols-2 max-w-7xl mx-auto mt-20 px-8">
        <motion.img
          animate={{ opacity: [0, 1], y: [10, 0] }}
          exit={{ opacity: [1, 0] }}
          transition={{ ease: 'easeOut' }}
          className="sticky top-20 mx-auto max-h-[65vh] pt-12 md:pt-0"
          src="/images/product/mario-strikers-battle-league-football-cover.jpg"
          alt="Nintendo Switch"
        />
        <div className="grid gap-12 mx-auto px-4 w-full">
          <div className="grid gap-1">
            <h2 className="flex items-center gap-2 flex-wrap text-red-500">
              Nintendo Switch | 10. Juni 2022
              <span className="hidden md:inline-block"> | </span>
              <span>
                <TheCountdown />
              </span>
            </h2>
            <h1 className="text-3xl">Mario Strikers: Battle League Football</h1>
          </div>

          <div className="grid gap-4">
            <h4 className="text-xl font-bold">Wähle deine Edition:</h4>
            <div className="grid gap-2">
              {editions.map((edition) => {
                return (
                  <BuyEditionConfigOption
                    key={edition.edition}
                    edition={edition.edition}
                    price={edition.price}
                    onClick={() => setSelectedEdition(edition.edition)}
                    selectedEdition={selectedEdition}
                  >
                    <ul>
                      {edition.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  </BuyEditionConfigOption>
                );
              })}
            </div>
          </div>

          <div className="w-full h-40 rounded-3xl bg-gray-100"></div>
          <div className="w-full h-40 rounded-3xl bg-gray-100"></div>
          <div className="w-full h-40 rounded-3xl bg-gray-100"></div>
          <div className="w-full h-40 rounded-3xl bg-gray-100"></div>
          <div className="w-full h-40 rounded-3xl bg-gray-100"></div>
          <div className="w-full h-40 rounded-3xl bg-gray-100"></div>
          <div className="w-full h-40 rounded-3xl bg-gray-100"></div>
          <div className="w-full h-40 rounded-3xl bg-gray-100"></div>
          <div className="w-full h-40 rounded-3xl bg-gray-100"></div>
        </div>
      </section>

      <section className="mt-20">
        <img
          src="/images/gallery/2x1_NSwitch_MarioStrikersBattleLeagueFootball_image1600w.jpeg"
          alt="Mario Strikers Battle League Football"
          className="rounded-3xl max-w-full w-full p-4"
        />
      </section>

      <section>
        <div className="max-w-7xl">
          <h3 className="mx-auto px-4 my-8 text-6xl md:text-9xl md:leading-tight text-center break-all font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-fill-color-transparent">
            Hier ist alles erlaubt!
          </h3>
          <p>
            Das neueste Spiel der Mario Strikers-Reihe erscheint für Nintendo
            Switch!
          </p>
          <p>
            Mach dich bereit für das 5-gegen-5-Spiel Strike – Wie Fußball, aber
            mit deutlich härterer Offensive! Schieß Tore, indem du dribbelst und
            deinen Teamkameraden die Bälle zuspielst. Benutze dabei Tacklings,
            Items und einzigartige Fähigkeiten zum Auslösen von Spezialschüssen.
            Sammle eine der Hyperkugeln auf dem Spielfeld ein und lade sie auf,
            während deine Gegner abgelenkt sind, um den Hyperschuss zu
            aktivieren – einen Spezialschuss, mit dem dir statt einem gleich
            zwei Tore angerechnet werden! Gestalte die Ausrüstung deines Teams
            ganz nach deinem Geschmack. Sie verändert nicht nur das Aussehen,
            sondern auch Werte wie Tempo, Kraft und die Genauigkeit beim Passen.
            Bis zu acht Spieler, vier in jedem Team, können auf einer Nintendo
            Switch-Konsole* gegeneinander spielen. Zusätzlich zu den
            Einzelspielen wird es einen Online-Club-Modus** geben – Jedem Club
            können bis zu 20 Spieler beitreten. Versucht, zum besten Club der
            Welt aufzusteigen!
          </p>
        </div>
      </section>
      <section className="h-screen flex items-center justify-center">3</section>
      <section className="h-screen flex items-center justify-center">4</section>
    </div>
  );
};

export default DetailPage;
