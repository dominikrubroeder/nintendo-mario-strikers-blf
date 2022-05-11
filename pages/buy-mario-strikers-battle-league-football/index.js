import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import BaseButton from '../../components/base/BaseButton';
import BuyEditionConfigOption from '../../components/buyconfig/BuyEditionConfigOption';
import TeamConfigOption from '../../components/buyconfig/TeamConfigOption';
import TheCountdown from '../../components/TheCountdown';
import TheStickyBuyBar from '../../components/TheStickyBuyBar';
import useIsOnScreen from '../../hooks/useIsOnScreen';

// https://mario.fandom.com/de/wiki/Mario_Smash_Football
// https://mario.fandom.com/de/wiki/Mario_Strikers_Charged_Football

const editions = [
  {
    title: 'Mario Strikers: Battle League Football',
    edition: 'Standard',
    price: 59.99,
    details: ['Digitaler Download und Hardcover'],
  },
  {
    title: 'Mario Strikers: Battle League Football',
    edition: 'Nostalgie',
    price: 89.99,
    details: [
      'Digitaler Download und Hardcover',
      "Mehr Content: Schalte die legacy Arenen aus 'Mario Strikers: Charged Football (Wii)' und 'Mario Smash Football (GameCube)' frei",
      "Mehr Content: Schalte das 'Geheimteam' frei",
      'Merchandise Hoodie',
      'Merchandise T-Shirt',
      'Merchandise Tischfigur',
      'Mario Strikers: Charged Football (Wii)',
      'Mario Smash Football (GameCube)',
      '...',
    ],
  },
];

const teams = [
  {
    teamTitle: 'Mario',
  },
  {
    teamTitle: 'Luigi',
  },
  {
    teamTitle: 'Yoshi',
  },
  {
    teamTitle: 'Donkey Kong',
  },
  {
    teamTitle: 'Wario',
  },
  {
    teamTitle: 'Waluigi',
  },
  {
    teamTitle: 'Peach',
  },
  {
    teamTitle: 'Daisy',
  },
];

const DetailPage = () => {
  const [selectedEdition, setSelectedEdition] = useState(null);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [buyable, setBuyable] = useState(false);
  const teamSection = useRef();
  const buyBox = useRef();
  const [showStickyBuyBar, setShowStickyBuyBar] = useState(false);
  const buyBoxIsOnScreen = useIsOnScreen(buyBox);

  const selectedEditionHandler = (edition) => {
    if (edition.toLowerCase() === 'standard') {
      document.body.className = '';
      setSelectedTeam(null);
      setBuyable(true);
    }

    if (edition.toLowerCase() === 'nostalgie') {
      setBuyable(false);
    }

    setSelectedEdition(edition);
  };

  // Set theme based on selected team (nintendo character)
  // Save selected theme to local storage
  const setTheme = (theme) => {
    document.body.className = `theme-${theme.toLowerCase()}`;

    // Play sound of character on click
    // Show fullscreen animated wallpaper of character on click

    setSelectedTeam(theme.toLowerCase());

    teamSection.current.scrollIntoView({
      behavior: 'smooth',
    });

    setBuyable(true);
  };

  useEffect(() => {
    if (buyBoxIsOnScreen) {
      setShowStickyBuyBar(false);
    } else {
      setShowStickyBuyBar(true);
    }
  }, [buyBoxIsOnScreen]);

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
                  <BuyEditionConfigOption
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
                  </BuyEditionConfigOption>
                );
              })}
            </div>
          </div>

          {/* Only show the following sections when 'nostalgie' edition is selected */}
          {selectedEdition === 'Nostalgie' && (
            <section className="grid gap-4" ref={teamSection}>
              <div className="grid gap-4">
                <div className="flex justify-between items-center">
                  <h4>Wähle dein Team:</h4>
                  <p className="text-accent text-sm cursor-pointer">Warum?</p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {teams.map((team) => {
                    return (
                      <TeamConfigOption
                        key={team.teamTitle}
                        teamTitle={team.teamTitle}
                        onClick={() => setTheme(team.teamTitle)}
                        selectedTeam={selectedTeam}
                      />
                    );
                  })}
                </div>
              </div>
            </section>
          )}

          <div className="grid gap-2 bg-gray-100 rounded-3xl p-8" ref={buyBox}>
            {buyable && (
              <p>
                Heute bestellen, Lieferung am
                <br />
                <b>Freitag, 10. Juni 2022</b>
              </p>
            )}
            <BaseButton variant="contained" disabled={buyable ? false : true}>
              <Link href="/checkout">Jetzt vorbestellen</Link>
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

      <section>
        <div className="max-w-7xl mx-auto">
          <h3 className="mx-auto px-4 my-8 text-6xl md:text-9xl md:leading-tight font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-fill-color-transparent">
            Hier ist alles erlaubt!
          </h3>
          <h3 className="mx-auto px-4 my-8 text-3xl md:text-6xl md:leading-tight font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-fill-color-transparent">
            Das neueste Spiel der Mario Strikers-Reihe erscheint für Nintendo
            Switch!
          </h3>
          <h3 className="mx-auto w-full px-4 my-8 text-6xl md:text-9xl md:leading-tight text-center font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-fill-color-transparent">
            Mach dich bereit für 5-gegen-5
          </h3>

          <p>
            Das neueste Spiel der Mario Strikers-Reihe erscheint für Nintendo
            Switch!
          </p>
          <p>
            Das neueste Spiel der Mario Strikers-Reihe erscheint für Nintendo
            Switch! Mach dich bereit für das 5-gegen-5-Spiel Strike – Wie
            Fußball, aber mit deutlich härterer Offensive! Schieß Tore, indem du
            dribbelst und deinen Teamkameraden die Bälle zuspielst. Benutze
            dabei Tacklings, Items und einzigartige Fähigkeiten zum Auslösen von
            Spezialschüssen. Sammle eine der Hyperkugeln auf dem Spielfeld ein
            und lade sie auf, während deine Gegner abgelenkt sind, um den
            Hyperschuss zu aktivieren – einen Spezialschuss, mit dem dir statt
            einem gleich zwei Tore angerechnet werden! Gestalte die Ausrüstung
            deines Teams ganz nach deinem Geschmack. Sie verändert nicht nur das
            Aussehen, sondern auch Werte wie Tempo, Kraft und die Genauigkeit
            beim Passen. Bis zu acht Spieler, vier in jedem Team, können auf
            einer Nintendo Switch-Konsole* gegeneinander spielen. Zusätzlich zu
            den Einzelspielen wird es einen Online-Club-Modus** geben – Jedem
            Club können bis zu 20 Spieler beitreten. Versucht, zum besten Club
            der Welt aufzusteigen!
          </p>
          <p>
            *Für den Mehrspieler-Modus wird pro Spieler ein kompatibler
            Controller benötigt. Zusätzliche Controller (separat erhältlich)
            können erforderlich sein.
          </p>
          <p>
            **Während des Online-Spiels wird eine Internetverbindung benötigt.
            Um Online-Services nutzen zu können, musst du einen Nintendo-Account
            erstellen und den Vertrag zum Nintendo-Account akzeptieren. Die
            Nintendo-Account-Datenschutzrichtlinie findet Anwendung. Manche
            Online-Services sind möglicherweise nicht in allen Ländern
            verfügbar. Das Online-Spiel erfordert die Mitgliedschaft bei einem
            kostenpflichtigen Service. Erfahre mehr über die kostenpflichtige
            Mitgliedschaft.
          </p>
          <div>
            <div>Was du wissen musst</div>
            <p>Dieser Inhalt wird von der Nintendo of Europe GmbH verkauft.</p>
            <p>
              Die Zahlung erfolgt mit Nintendo eShop-Guthaben, das über den
              Nintendo-Account nutzbar ist.
            </p>
            <p>
              Dieser Inhalt kann von Benutzern erworben werden, die einen
              Nintendo-Account registriert und die geltenden rechtlichen
              Bedingungen akzeptiert haben. Um Inhalte für Wii U oder Systeme
              der Nintendo 3DS-Familie kaufen zu können, wird zusätzlich eine
              Nintendo Network ID benötigt und das über den Nintendo-Account
              nutzbare Guthaben muss mit dem Guthaben deiner Nintendo Network ID
              zusammengefasst worden sein. Wurde das Guthaben noch nicht
              zusammengefasst, erhältst du während des Einkaufs die Option dazu.
              Zu Beginn des Kaufprozesses musst du dich mit dem Nintendo-Account
              und der Nintendo Network ID anmelden. Nach der Anmeldung kannst du
              die Angaben überprüfen und den Kauf tätigen. Die Details dieses
              Angebots gelten für Benutzer, die sich mit einem Nintendo-Account
              anmelden, dessen Ländereinstellung der Ländereinstellung dieser
              Website entspricht. Wenn die Ländereinstellung eines
              Nintendo-Accounts abweicht, werden die genauen Angaben dieses
              Angebots möglicherweise entsprechend angepasst (der Preis wird z.
              B. in der jeweiligen Landeswährung angezeigt). Nachdem die Zahlung
              bearbeitet wurde, werden die Inhalte auf die Konsole
              heruntergeladen, die mit deinem Nintendo-Account (oder, im Falle
              von Wii U und den Systemen der Nintendo 3DS-Familie, deiner
              Nintendo Network ID) verknüpft ist. Das System muss auf das
              neueste System-Update aktualisiert und mit dem Internet verbunden
              sein. Zudem müssen automatische Downloads aktiviert und
              ausreichend Speicherplatz für den Download verfügbar sein.
              Abhängig vom System-/Konsolen-/Hardware-Modell, das du besitzt,
              und deiner persönlichen Nutzung desselben, kann ein zusätzliches
              Speichermedium erforderlich sein, um Software aus dem Nintendo
              eShop herunterzuladen. In unserer Kundenservice-Rubrik findest du
              weitere Informationen. Bei Spielen, die
              Cloud-Streaming-Technologie verwenden, kann nur die kostenlose
              Starter-App heruntergeladen werden. Um den Download abschließen zu
              können, muss genügend Speicherplatz vorhanden sein. Für den Kauf
              dieser Inhalte gilt der Vertrag zum Nintendo-Account.
              Informationen zu Vorbestellungen Die Verwendung eines nicht
              autorisierten Geräts oder einer nicht autorisierten Software, die
              eine technische Modifikation der Nintendo-Konsole oder der
              Software ermöglichen, kann dazu führen, dass diese Software nicht
              mehr verwendbar ist. Dieses Produkt ist durch technische
              Schutzmaßnahmen kopiergeschützt. Der Inhalt kann vor dem
              offiziellen Erscheinungstermin nicht gespielt werden: 10.06.2022 .
              Bei Vorbestellungen wird der Kaufpreis automatisch innerhalb von
              sieben Tage vor dem Veröffentlichungsdatum abgebucht. Falls du die
              Software weniger als sieben Tage vor der Veröffentlichung
              vorbestellst, wird dein Guthaben sofort belastet. Um im Nintendo
              eShop auf der offiziellen Webseite Download-Spiele zu erwerben
              oder Demos und kostenlose Software herunterzuladen, benötigst du
              einen Nintendo-Account, der mit deiner Nintendo Switch-Konsole
              verknüpft ist. Außerdem muss deine Konsole als aktive Konsole für
              Downloads für deinen Nintendo-Account registriert werden. Dazu
              musst du mit der Konsole, auf die du herunterladen möchtest,
              mindestens einmal den Nintendo eShop besucht haben. Um einen Titel
              automatisch herunterzuladen, muss das System über die aktuellste
              Systemsoftware verfügen und mit dem Internet verbunden sein. Zudem
              müssen automatische Software-Downloads aktiviert und ausreichend
              Speicherplatz für den Download verfügbar sein. Mehr dazu erfährst
              du in unserer Kundenservice-Rubrik. Käufe und Demo-Downloads, die
              über die Nintendo-Webseite getätigt werden, werden über den
              Nintendo eShop abgewickelt. Diese Software enthält Modi oder
              Funktionen, für die eine Internetverbindung und eine
              kostenpflichtige Mitgliedschaft für Nintendo Switch Online
              benötigt werden. Mögliche Online-Spiel-Modi erfordern eine
              kostenpflichtige Mitgliedschaft für Nintendo Switch Online. Um
              Online-Services nutzen zu können, musst du einen Nintendo-Account
              erstellen und den Vertrag zum Nintendo-Account akzeptieren. Die
              Nintendo-Account-Datenschutzrichtlinie findet Anwendung. Manche
              Online-Services sind möglicherweise nicht in allen Ländern
              verfügbar. Hier findest du weitere Informationen zu
              kostenpflichtigen Nintendo Switch Online-Mitgliedschaften. Für den
              Mehrspieler-Modus wird pro Spieler ein kompatibler Controller
              benötigt. Zusätzliche Controller (separat erhältlich) können
              erforderlich sein. ©Nintendo
            </p>
          </div>
        </div>
      </section>
      <section className="h-screen flex items-center justify-center">3</section>
      <section className="h-screen flex items-center justify-center">4</section>

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
