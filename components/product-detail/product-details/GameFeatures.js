import SpringBounceWhenInView from '../../animation/SpringBounceWhenInView';
import FlippableCard from '../../FlippableCard';

const GameFeatures = () => {
  return (
    <>
      <section>
        <div className="max-w-7xl mx-auto">
          <SpringBounceWhenInView>
            <h3 className="mx-auto px-4 my-8 text-6xl md:text-9xl md:leading-tight font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-fill-color-transparent">
              Hier ist alles erlaubt!
            </h3>
          </SpringBounceWhenInView>

          <div className="grid gap-32">
            <SpringBounceWhenInView>
              <FlippableCard
                title="Das neueste Spiel der Mario Strikers-Reihe erscheint für Nintendo
    Switch!"
                titleSize="text-6xl"
                flippable={false}
                imgSrc="/images/characters/mario-sketch.png"
                imgAlt="Mario"
              ></FlippableCard>
            </SpringBounceWhenInView>

            <SpringBounceWhenInView>
              <FlippableCard title="5 gegen 5">
                Mach dich bereit für das 5-gegen-5-Spiel Strike – Wie Fußball,
                aber mit deutlich härterer Offensive! Schieß Tore, indem du
                dribbelst und deinen Teamkameraden die Bälle zuspielst.
              </FlippableCard>
            </SpringBounceWhenInView>

            <SpringBounceWhenInView>
              <FlippableCard title="Bis zu 8 Spieler">
                Bis zu acht Spieler, vier in jedem Team, können auf einer
                Nintendo Switch-Konsole* gegeneinander spielen. Zusätzlich zu
                den Einzelspielen wird es einen Online-Club-Modus** geben –
                Jedem Club können bis zu 20 Spieler beitreten. Versucht, zum
                besten Club der Welt aufzusteigen!
              </FlippableCard>
            </SpringBounceWhenInView>

            <SpringBounceWhenInView>
              <FlippableCard title="Tacklings, Items und einzigartige Fähigkeiten">
                Benutze Tacklings, Items und einzigartige Fähigkeiten zum
                Auslösen von Spezialschüssen. Sammle eine der Hyperkugeln auf
                dem Spielfeld ein und lade sie auf, während deine Gegner
                abgelenkt sind, um den Hyperschuss zu aktivieren – einen
                Spezialschuss, mit dem dir statt einem gleich zwei Tore
                angerechnet werden!
              </FlippableCard>
            </SpringBounceWhenInView>

            <SpringBounceWhenInView>
              <FlippableCard title="Individualisiere Dein Team!">
                Gestalte die Ausrüstung deines Teams ganz nach deinem Geschmack.
                Sie verändert nicht nur das Aussehen, sondern auch Werte wie
                Tempo, Kraft und die Genauigkeit beim Passen.
              </FlippableCard>
            </SpringBounceWhenInView>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center">
        <p className="max-w-md">
          *Für den Mehrspieler-Modus wird pro Spieler ein kompatibler Controller
          benötigt. Zusätzliche Controller (separat erhältlich) können
          erforderlich sein.
        </p>
        <p className="max-w-md">
          **Während des Online-Spiels wird eine Internetverbindung benötigt. Um
          Online-Services nutzen zu können, musst du einen Nintendo-Account
          erstellen und den Vertrag zum Nintendo-Account akzeptieren. Die
          Nintendo-Account-Datenschutzrichtlinie findet Anwendung. Manche
          Online-Services sind möglicherweise nicht in allen Ländern verfügbar.
          Das Online-Spiel erfordert die Mitgliedschaft bei einem
          kostenpflichtigen Service. Erfahre mehr über die kostenpflichtige
          Mitgliedschaft.
        </p>

        <div className="max-w-md">
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
      <section className="h-screen flex items-center justify-center">4</section>
    </>
  );
};

export default GameFeatures;
