import Head from 'next/head';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import useIsOnScreen from '../../hooks/useIsOnScreen';
import editions from '../../data/editions';
import teams from '../../data/teams';
import BaseButton from '../../components/base/BaseButton';
import FlippableCard from '../../components/FlippableCard';
import EditionConfigOption from '../../components/product-detail/buy-configuration-options/EditionConfigOption';
import TeamConfigOption from '../../components/product-detail/buy-configuration-options/TeamConfigOption';
import TheCountdown from '../../components/TheCountdown';
import TheStickyBuyBar from '../../components/TheStickyBuyBar';
import GameFeatures from '../../components/product-detail/product-details/GameFeatures';

// https://mario.fandom.com/de/wiki/Mario_Smash_Football
// https://mario.fandom.com/de/wiki/Mario_Strikers_Charged_Football

const DetailPage = () => {
  const router = useRouter();
  const [selectedEdition, setSelectedEdition] = useState(null);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [buyable, setBuyable] = useState(false);
  const teamSection = useRef();
  const buyBox = useRef();
  const [showStickyBuyBar, setShowStickyBuyBar] = useState(false);
  const buyBoxIsOnScreen = useIsOnScreen(buyBox);

  const selectedEditionHandler = (edition) => {
    if (edition === 'standard') {
      document.body.className = '';
      setSelectedTeam(null);
      setBuyable(true);
      localStorage.removeItem('themed');
      localStorage.removeItem('theme');
    }

    if (edition === 'nostalgie') {
      setBuyable(false);
    }

    setSelectedEdition(edition);

    router.push(`${router.pathname}/?edition=${edition}`, undefined, {
      shallow: true,
    });
  };

  // Set theme based on selected team (nintendo character)
  // Save selected theme to local storage
  const setTeam = (team) => {
    document.body.className = `themed theme-${team} bg-themed text-white`;

    localStorage.setItem('themed', true);
    localStorage.setItem('theme', team);

    // Play sound of character on click
    // Show fullscreen animated wallpaper of character on click

    setSelectedTeam(team);

    teamSection.current.scrollIntoView({
      behavior: 'smooth',
    });

    setBuyable(true);

    router.push(
      `${router.pathname}/?edition=${selectedEdition}?team=${team}`,
      undefined,
      {
        shallow: true,
      }
    );
  };

  // Buy box instructions on observer status changes
  useEffect(() => {
    if (buyBoxIsOnScreen) {
      setShowStickyBuyBar(false);
    } else {
      setShowStickyBuyBar(true);
    }
  }, [buyBoxIsOnScreen]);

  // Initial page load instructions
  useEffect(() => {
    if (localStorage.getItem('themed') && localStorage.getItem('theme')) {
      const localStorageTheme = localStorage.getItem('theme');
      setSelectedTeam(localStorageTheme);
      setSelectedEdition('nostalgie');
      setBuyable(true);
      document.body.className = `themed theme-${localStorageTheme} bg-accent text-white`;
    }
  });

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

      <section className="grid gap-4 md:grid-cols-2 max-w-7xl mx-auto mt-20 px-8">
        <motion.img
          animate={{ opacity: [0, 1], y: [10, 0] }}
          exit={{ opacity: [1, 0] }}
          transition={{ ease: 'easeOut' }}
          className="mx-auto max-h-[65vh] md:sticky md:top-20 md:pt-0"
          src="/images/product/mario-strikers-battle-league-football-cover.jpg"
          alt="Nintendo Switch"
        />
        <div className="grid gap-12 mx-auto px-4 w-full">
          <div className="grid gap-1">
            <h2 className="flex items-center gap-2 flex-wrap text-accent">
              Nintendo Switch | 10. Juni 2022
              <span className="hidden md:inline-block"> | </span>
              <span>
                <TheCountdown />
              </span>
            </h2>
            <h1 className="text-3xl">
              Mario Strikers: Battle League Football kaufen
            </h1>
          </div>

          <div className="grid gap-4">
            <h4>Wähle deine Edition:</h4>
            <div className="grid gap-2">
              {editions.map((edition) => {
                return (
                  <EditionConfigOption
                    key={edition.edition}
                    edition={edition.edition}
                    team={selectedTeam}
                    price={edition.price}
                    onClick={() => selectedEditionHandler(edition.edition)}
                    selectedEdition={selectedEdition}
                  >
                    <ul className="list-disc pl-4">
                      {edition.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  </EditionConfigOption>
                );
              })}
            </div>
          </div>

          {/* Only show the following sections when 'nostalgie' edition is selected */}
          {selectedEdition === 'nostalgie' && (
            <section className="grid gap-4" ref={teamSection}>
              <div className="grid gap-4">
                <div className="flex justify-between items-center">
                  <h4>Wähle dein Team:</h4>
                  <p className="text-accent themed:text-white text-sm cursor-pointer">
                    Warum?
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {teams.map((team) => {
                    return (
                      <TeamConfigOption
                        key={team.name}
                        name={team.name}
                        sound={team.sound}
                        onClick={() => setTeam(team.name)}
                        selectedTeam={selectedTeam}
                      />
                    );
                  })}
                </div>
              </div>
            </section>
          )}

          <div
            className="grid gap-2 bg-gray-100 bg-themed-dark rounded-3xl p-8"
            ref={buyBox}
          >
            {buyable && (
              <p>
                Heute bestellen, Lieferung am
                <br />
                <b>Freitag, 10. Juni 2022</b>
              </p>
            )}
            <BaseButton
              variant="contained"
              disabled={buyable ? false : true}
              isLink
              href="/checkout"
              playSound
              sound="coin"
            >
              Jetzt vorbestellen
            </BaseButton>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <img
          src="/images/gallery/2x1_NSwitch_MarioStrikersBattleLeagueFootball_image1600w.jpeg"
          alt="Mario Strikers Battle League Football"
          className="rounded-3xl max-w-full w-full p-4"
        />
      </section>

      <section className="grid gap-64">
        <GameFeatures />
      </section>

      <TheStickyBuyBar
        href="/checkout"
        shouldBeVisible={showStickyBuyBar && buyable}
        edition={selectedEdition}
        team={selectedTeam}
        price={selectedEdition === 'Standard' ? 59.99 : 89.99}
      />
    </div>
  );
};

export default DetailPage;
