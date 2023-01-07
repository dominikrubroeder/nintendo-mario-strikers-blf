import React, { useContext, useState } from 'react';
import SpringBounceWhenInView from '../animation/SpringBounceWhenInView';
import AppContext from '../../store/appContext';
import Image from 'next/image';
import Heading from '../typography/Heading';
import CharacterCard from '../character/CharacterCard';
import characters from '../../data/characters';
import CharacterOverlay from '../character/CharacterOverlay';

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
          <Heading as="h2" className="headline--gradient">
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
              <div className="m-auto max-w-xs">
                <CharacterCard
                  id={character.id}
                  name={character.name}
                  sound={character.sound[0]}
                  image={character.image}
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
          <section className="relative flex min-h-[100vh] items-center gap-64 overflow-hidden">
            <div className="m-auto grid w-full max-w-screen-lg px-4">
              <Heading as="h2" className="headline--gradient">
                5 gegen 5
              </Heading>

              <p className="max-w-md">
                Mach dich bereit für das 5-gegen-5-Spiel Strike – Wie Fußball,
                aber mit deutlich härterer Offensive! Schieß Tore, indem du
                dribbelst und deinen Teamkameraden die Bälle zuspielst.
              </p>
            </div>

            <div className="absolute -right-48 bottom-0 h-full w-auto">
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
    </>
  );
};

export default GameFeatures;
