import { NextPage } from "next";
import React, { useContext, useEffect, useRef, useState } from "react";
import Features from "../../components/Features";
import CharacterSelection from "../../components/CharacterSelection";
import CommunityQuotes from "../../components/CommunityQuotes";
import TheGallery from "../../components/TheGallery";
import Heading from "../../components/Heading";
import useIsInView from "../../hooks/useIsInView";
import Layout from "../../components/layout";
import MiniAudioPlayer from "../../components/mini-audio-player";
import FloatingActionBar from "../../components/FloatingActionBar";
import SpringBounceWhenInView from "../../components/animation/SpringBounceWhenInView";
import Accordion from "../../components/ui/Accordion";
import { useScroll } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import AppContext from "../../store/appContext";
import characters from "../../data/characters";

const InfoPage: NextPage = () => {
  const appCtx = useContext(AppContext);
  const character = characters.find(
    (character) => character.id === appCtx?.selectedCharacter
  );
  let { scrollY } = useScroll();
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
  const miniAudioPlayerRef = useRef<null | HTMLDivElement>(null);
  const miniAudioPlayerIsOnScreen = useIsInView(miniAudioPlayerRef);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      if (latest < 0) return;

      let isScrollingDown = scrollY.getPrevious() - latest < 0;
      let currentScrollDirection: "down" | "up" = isScrollingDown
        ? "down"
        : "up";

      if (scrollDirection !== currentScrollDirection) {
        setScrollDirection(currentScrollDirection);
      }
    });
  }, [scrollY, scrollDirection]);

  return (
    <Layout pageTitle="Discover">
      <section className="mt-8 grid gap-32">
        <section className="m-auto grid w-full max-w-screen-xl gap-12 px-4 text-center">
          <header className="grid gap-2">
            <Heading as="h2" className="headline--gradient">
              Wähle dein Team
            </Heading>

            <p>
              Und erhalte Vorbesteller-Boni beim Kauf der Striker&apos;s
              <span className="mx-2 rounded-xl bg-accent-soft p-2 italic text-accent themed:bg-accent-dark themed:text-white">
                Team-Edition
              </span>
            </p>
          </header>

          <CharacterSelection className="sm:grid-cols-2 lg:grid-cols-3" />
        </section>

        <TheGallery />

        <Features />

        <CommunityQuotes />

        <section>
          <SpringBounceWhenInView>
            <Heading as="h2" className="headline--gradient">
              Merch
            </Heading>
          </SpringBounceWhenInView>

          <p className="mx-auto max-w-md text-center">...</p>
        </section>

        <section>
          <SpringBounceWhenInView>
            <Heading as="h2" className="headline--gradient">
              Game trailer
            </Heading>
          </SpringBounceWhenInView>

          <p className="mx-auto max-w-md text-center">...</p>
        </section>

        <section className="mx-auto grid w-full max-w-md gap-4 px-4 md:px-0">
          <Accordion title="A">
            <p>
              *Für den Mehrspieler-Modus wird pro Spieler ein kompatibler
              Controller benötigt. Zusätzliche Controller (separat erhältlich)
              können erforderlich sein.
            </p>
          </Accordion>

          <Accordion title="B">
            <p>
              **Während des Online-Spiels wird eine Internetverbindung benötigt.
              Um Online-Services nutzen zu können, musst du einen
              Nintendo-Account erstellen und den Vertrag zum Nintendo-Account
              akzeptieren. Die Nintendo-Account-Datenschutzrichtlinie findet
              Anwendung. Manche Online-Services sind möglicherweise nicht in
              allen Ländern verfügbar. Das Online-Spiel erfordert die
              Mitgliedschaft bei einem kostenpflichtigen Service. Erfahre mehr
              über die kostenpflichtige Mitgliedschaft.
            </p>
          </Accordion>

          <Accordion title="Was du wissen musst">
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
          </Accordion>
        </section>
      </section>

      {/**
       * Hide on scroll down?
       * How to trigger animations when scroll direction changes
       * https://www.youtube.com/watch?v=SLOBjhSJCi0
       *
       * Audio needs to be shared app globally to function page wide when switching pages
       *
       * Move this component to shared layout?
       *
       * Integrate back button into action bar?
       */}
      <FloatingActionBar shouldBeVisible={true} />
    </Layout>
  );
};

export default InfoPage;
