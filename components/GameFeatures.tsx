import React, { useContext, useState } from 'react';
import SpringBounceWhenInView from './SpringBounceWhenInView';
import AppContext from '../store/appContext';
import Image from 'next/image';
import Heading from './Heading';
import CharacterCard from './CharacterCard';
import characters from '../data/characters';
import CharacterOverlay from './CharacterOverlay';

const GameFeatures: React.FC = () => {
  const appCtx = useContext(AppContext);
  const character =
    characters.find(
      (character) => character.id === appCtx?.selectedCharacter
    ) ?? characters[0];
  const [showCharacterOverlay, setShowCharacterOverlay] = useState(false);

  return (
    <>
      <section className="m-auto text-center">
        <SpringBounceWhenInView>
          <Heading className="headline--gradient">
            Hier ist alles erlaubt!
          </Heading>
        </SpringBounceWhenInView>

        <Heading as="h2">
          Das neueste Spiel der Mario Strikers-Reihe erscheint für Nintendo
          Switch!
        </Heading>
      </section>

      <section>
        {showCharacterOverlay && (
          <CharacterOverlay
            onCloseOverlay={() => setShowCharacterOverlay(false)}
          />
        )}

        {appCtx?.selectedCharacter && (
          <div className="text-center">
            <SpringBounceWhenInView>
              <div className="max-w-xs m-auto">
                <CharacterCard
                  id={character.id}
                  name={character.name}
                  sound={character.sound[0]}
                  image={character.image}
                  setShowCharacterOverlay={setShowCharacterOverlay}
                />
              </div>
            </SpringBounceWhenInView>

            <SpringBounceWhenInView>
              <Heading as="h2" className="headline--gradient">
                Dein
                <br />
                aktuelles
                <br />
                Team
              </Heading>
            </SpringBounceWhenInView>
          </div>
        )}
      </section>

      <section className="grid gap-64">
        <SpringBounceWhenInView>
          <section className="relative min-h-[100vh] overflow-hidden flex items-center gap-64">
            <div className="grid px-4 max-w-screen-lg w-full m-auto">
              <Heading as="h2" className="headline--gradient">
                5 gegen 5
              </Heading>

              <p className="max-w-md">
                Mach dich bereit für das 5-gegen-5-Spiel Strike – Wie Fußball,
                aber mit deutlich härterer Offensive! Schieß Tore, indem du
                dribbelst und deinen Teamkameraden die Bälle zuspielst.
              </p>
            </div>

            <div className="absolute -right-48 bottom-0 w-auto h-full">
              <Image
                src="/images/characters/NSwitch-character-sketch-mario-bowser.png"
                width={772}
                height={745}
                alt="Mario Bowser duell in action"
              />
            </div>
          </section>
        </SpringBounceWhenInView>

        <SpringBounceWhenInView>
          <div className="grid">
            <Heading as="h2">Bis zu 8 Spieler</Heading>

            <p>
              Bis zu acht Spieler, vier in jedem Team, können auf einer Nintendo
              Switch-Konsole* gegeneinander spielen. Zusätzlich zu den
              Einzelspielen wird es einen Online-Club-Modus** geben – Jedem Club
              können bis zu 20 Spieler beitreten. Versucht, zum besten Club der
              Welt aufzusteigen!
            </p>
          </div>
        </SpringBounceWhenInView>

        <section>
          <SpringBounceWhenInView>
            <Heading as="h2" className="headline--gradient">
              Tacklings, Items und einzigartige Fähigkeiten
            </Heading>

            <p className="max-w-md">
              Benutze Tacklings, Items und einzigartige Fähigkeiten zum Auslösen
              von Spezialschüssen. Sammle eine der Hyperkugeln auf dem Spielfeld
              ein und lade sie auf, während deine Gegner abgelenkt sind, um den
              Hyperschuss zu aktivieren – einen Spezialschuss, mit dem dir statt
              einem gleich zwei Tore angerechnet werden!
            </p>
          </SpringBounceWhenInView>

          {/* Check for items audio sounds */}
          <Image
            width={700}
            height={640}
            src="/images/items/CI_NSwitch_MarioStrikersBLF_AW_Items_Banana.png"
            alt="Banana item"
          />
          <Image
            width={700}
            height={640}
            src="/images/items/CI_NSwitch_MarioStrikersBLF_AW_Items_BobOmb.png"
            alt="Bob0mb item"
          />
          <Image
            width={700}
            height={640}
            src="/images/items/CI_NSwitch_MarioStrikersBLF_AW_Items_GreenShell.png"
            alt="Green shell item"
          />
          <Image
            width={700}
            height={640}
            src="/images/items/CI_NSwitch_MarioStrikersBLF_AW_Items_Mushroom.png"
            alt="Mushroom item"
          />
          <Image
            width={700}
            height={640}
            src="/images/items/CI_NSwitch_MarioStrikersBLF_AW_Items_RedShell.png"
            alt="Red shell item"
          />
          <Image
            width={700}
            height={640}
            src="/images/items/CI_NSwitch_MarioStrikersBLF_AW_Items_Star.png"
            alt="Star item"
          />
        </section>

        <SpringBounceWhenInView>
          <div className="grid">
            <Heading as="h2">Individualisiere Dein Team!</Heading>

            <p>
              Gestalte die Ausrüstung deines Teams ganz nach deinem Geschmack.
              Sie verändert nicht nur das Aussehen, sondern auch Werte wie
              Tempo, Kraft und die Genauigkeit beim Passen.
            </p>
          </div>
        </SpringBounceWhenInView>
      </section>

      <section className="flex flex-col items-center justify-center p-8">
        <p>
          *Für den Mehrspieler-Modus wird pro Spieler ein kompatibler Controller
          benötigt. Zusätzliche Controller (separat erhältlich) können
          erforderlich sein.
        </p>
        <p>
          **Während des Online-Spiels wird eine Internetverbindung benötigt. Um
          Online-Services nutzen zu können, musst du einen Nintendo-Account
          erstellen und den Vertrag zum Nintendo-Account akzeptieren. Die
          Nintendo-Account-Datenschutzrichtlinie findet Anwendung. Manche
          Online-Services sind möglicherweise nicht in allen Ländern verfügbar.
          Das Online-Spiel erfordert die Mitgliedschaft bei einem
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
            Bedingungen akzeptiert haben. Um Inhalte für Wii U oder Systeme der
            Nintendo 3DS-Familie kaufen zu können, wird zusätzlich eine Nintendo
            Network ID benötigt und das über den Nintendo-Account nutzbare
            Guthaben muss mit dem Guthaben deiner Nintendo Network ID
            zusammengefasst worden sein. Wurde das Guthaben noch nicht
            zusammengefasst, erhältst du während des Einkaufs die Option dazu.
            Zu Beginn des Kaufprozesses musst du dich mit dem Nintendo-Account
            und der Nintendo Network ID anmelden. Nach der Anmeldung kannst du
            die Angaben überprüfen und den Kauf tätigen. Die Details dieses
            Angebots gelten für Benutzer, die sich mit einem Nintendo-Account
            anmelden, dessen Ländereinstellung der Ländereinstellung dieser
            Website entspricht. Wenn die Ländereinstellung eines
            Nintendo-Accounts abweicht, werden die genauen Angaben dieses
            Angebots möglicherweise entsprechend angepasst (der Preis wird z. B.
            in der jeweiligen Landeswährung angezeigt). Nachdem die Zahlung
            bearbeitet wurde, werden die Inhalte auf die Konsole
            heruntergeladen, die mit deinem Nintendo-Account (oder, im Falle von
            Wii U und den Systemen der Nintendo 3DS-Familie, deiner Nintendo
            Network ID) verknüpft ist. Das System muss auf das neueste
            System-Update aktualisiert und mit dem Internet verbunden sein.
            Zudem müssen automatische Downloads aktiviert und ausreichend
            Speicherplatz für den Download verfügbar sein. Abhängig vom
            System-/Konsolen-/Hardware-Modell, das du besitzt, und deiner
            persönlichen Nutzung desselben, kann ein zusätzliches Speichermedium
            erforderlich sein, um Software aus dem Nintendo eShop
            herunterzuladen. In unserer Kundenservice-Rubrik findest du weitere
            Informationen. Bei Spielen, die Cloud-Streaming-Technologie
            verwenden, kann nur die kostenlose Starter-App heruntergeladen
            werden. Um den Download abschließen zu können, muss genügend
            Speicherplatz vorhanden sein. Für den Kauf dieser Inhalte gilt der
            Vertrag zum Nintendo-Account. Informationen zu Vorbestellungen Die
            Verwendung eines nicht autorisierten Geräts oder einer nicht
            autorisierten Software, die eine technische Modifikation der
            Nintendo-Konsole oder der Software ermöglichen, kann dazu führen,
            dass diese Software nicht mehr verwendbar ist. Dieses Produkt ist
            durch technische Schutzmaßnahmen kopiergeschützt. Der Inhalt kann
            vor dem offiziellen Erscheinungstermin nicht gespielt werden:
            10.06.2022 . Bei Vorbestellungen wird der Kaufpreis automatisch
            innerhalb von sieben Tage vor dem Veröffentlichungsdatum abgebucht.
            Falls du die Software weniger als sieben Tage vor der
            Veröffentlichung vorbestellst, wird dein Guthaben sofort belastet.
            Um im Nintendo eShop auf der offiziellen Webseite Download-Spiele zu
            erwerben oder Demos und kostenlose Software herunterzuladen,
            benötigst du einen Nintendo-Account, der mit deiner Nintendo
            Switch-Konsole verknüpft ist. Außerdem muss deine Konsole als aktive
            Konsole für Downloads für deinen Nintendo-Account registriert
            werden. Dazu musst du mit der Konsole, auf die du herunterladen
            möchtest, mindestens einmal den Nintendo eShop besucht haben. Um
            einen Titel automatisch herunterzuladen, muss das System über die
            aktuellste Systemsoftware verfügen und mit dem Internet verbunden
            sein. Zudem müssen automatische Software-Downloads aktiviert und
            ausreichend Speicherplatz für den Download verfügbar sein. Mehr dazu
            erfährst du in unserer Kundenservice-Rubrik. Käufe und
            Demo-Downloads, die über die Nintendo-Webseite getätigt werden,
            werden über den Nintendo eShop abgewickelt. Diese Software enthält
            Modi oder Funktionen, für die eine Internetverbindung und eine
            kostenpflichtige Mitgliedschaft für Nintendo Switch Online benötigt
            werden. Mögliche Online-Spiel-Modi erfordern eine kostenpflichtige
            Mitgliedschaft für Nintendo Switch Online. Um Online-Services nutzen
            zu können, musst du einen Nintendo-Account erstellen und den Vertrag
            zum Nintendo-Account akzeptieren. Die
            Nintendo-Account-Datenschutzrichtlinie findet Anwendung. Manche
            Online-Services sind möglicherweise nicht in allen Ländern
            verfügbar. Hier findest du weitere Informationen zu
            kostenpflichtigen Nintendo Switch Online-Mitgliedschaften. Für den
            Mehrspieler-Modus wird pro Spieler ein kompatibler Controller
            benötigt. Zusätzliche Controller (separat erhältlich) können
            erforderlich sein. ©Nintendo
          </p>
        </div>
      </section>
    </>
  );
};

export default GameFeatures;
