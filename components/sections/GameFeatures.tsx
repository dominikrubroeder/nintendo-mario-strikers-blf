import React, { useContext, useState } from 'react';
import SpringBounceWhenInView from '../animation/SpringBounceWhenInView';
import AppContext from '../../store/appContext';
import Image from 'next/image';
import Heading from '../typography/Heading';
import CharacterCard from '../character/CharacterCard';
import characters from '../../data/characters';
import CharacterOverlay from '../character/CharacterOverlay';
import { items } from '../../data/items';

const GameFeatures: React.FC = () => {
  const appCtx = useContext(AppContext);
  const character =
    characters.find(
      (character) => character.id === appCtx?.selectedCharacter
    ) ?? characters[0];
  const [showCharacterOverlay, setShowCharacterOverlay] = useState(false);

  return (
    <>
      <section className="grid gap-12">
        <SpringBounceWhenInView>
          <Heading as="h2" className="headline--gradient">
            Hier ist alles erlaubt!
          </Heading>
        </SpringBounceWhenInView>

        <p className="mx-auto max-w-md">
          Das neueste Spiel der Mario Strikers-Reihe erscheint für Nintendo
          Switch!
        </p>
      </section>

      {appCtx?.selectedCharacter && (
        <>
          {showCharacterOverlay && (
            <CharacterOverlay
              onCloseOverlay={() => setShowCharacterOverlay(false)}
            />
          )}

          <section className="grid gap-12">
            <SpringBounceWhenInView>
              <Heading as="h2" className="headline--gradient">
                Dein aktuelles Team
              </Heading>
            </SpringBounceWhenInView>

            <div className="m-auto max-w-md">
              <CharacterCard
                id={character.id}
                name={character.name}
                sound={character.sound[0]}
                image={character.image}
              />
            </div>
          </section>
        </>
      )}

      <section className="grid gap-12">
        <SpringBounceWhenInView>
          <Heading as="h2" className="headline--gradient">
            5 gegen 5
          </Heading>
        </SpringBounceWhenInView>

        <p className="mx-auto max-w-md">
          Mach dich bereit für das 5-gegen-5-Spiel Strike – Wie Fußball, aber
          mit deutlich härterer Offensive! Schieß Tore, indem du dribbelst und
          deinen Teamkameraden die Bälle zuspielst.
        </p>

        <div className="relative mx-auto h-64 w-64">
          <Image
            src="/images/characters/NSwitch-character-sketch-mario-bowser.png"
            alt="Mario Bowser duell in action"
            className="object-contain"
            layout="fill"
          />
        </div>
      </section>

      <section className="grid gap-12">
        <SpringBounceWhenInView>
          <Heading as="h2" className="headline--gradient">
            Bis zu 8 Spieler
          </Heading>
        </SpringBounceWhenInView>

        <p className="mx-auto max-w-md">
          Bis zu acht Spieler, vier in jedem Team, können auf einer Nintendo
          Switch-Konsole* gegeneinander spielen. Zusätzlich zu den Einzelspielen
          wird es einen Online-Club-Modus** geben – Jedem Club können bis zu 20
          Spieler beitreten. Versucht, zum besten Club der Welt aufzusteigen!
        </p>
      </section>

      <section className="grid gap-12">
        <SpringBounceWhenInView>
          <Heading as="h2" className="headline--gradient">
            Tacklings, Items und einzigartige Fähigkeiten
          </Heading>
        </SpringBounceWhenInView>

        <div className="mx-auto flex justify-center gap-4">
          {/* Check for items audio sounds */}
          {items.map(({ title, src }) => (
            <div key={title} className="relative h-32 w-32">
              <Image
                src={src}
                alt={`${title} item`}
                layout="fill"
                className="object-contain"
              />
            </div>
          ))}
        </div>

        <p className="mx-auto max-w-md">
          Benutze Tacklings, Items und einzigartige Fähigkeiten zum Auslösen von
          Spezialschüssen. Sammle eine der Hyperkugeln auf dem Spielfeld ein und
          lade sie auf, während deine Gegner abgelenkt sind, um den Hyperschuss
          zu aktivieren – einen Spezialschuss, mit dem dir statt einem gleich
          zwei Tore angerechnet werden!
        </p>
      </section>

      <section className="grid gap-12">
        <SpringBounceWhenInView>
          <Heading as="h2" className="headline--gradient">
            Individualisiere Dein Team
          </Heading>
        </SpringBounceWhenInView>

        <p className="mx-auto max-w-md">
          Gestalte die Ausrüstung deines Teams ganz nach deinem Geschmack. Sie
          verändert nicht nur das Aussehen, sondern auch Werte wie Tempo, Kraft
          und die Genauigkeit beim Passen.
        </p>
      </section>
    </>
  );
};

export default GameFeatures;
