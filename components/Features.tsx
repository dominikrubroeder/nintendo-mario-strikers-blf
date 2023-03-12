import React, { useContext, useState } from "react";
import SpringBounceWhenInView from "./animation/SpringBounceWhenInView";
import AppContext from "../store/appContext";
import Image from "next/image";
import Heading from "./Heading";
import CharacterCard from "./CharacterCard";
import characters from "../data/characters";
import { items } from "../data/items";
import Button from "./ui/Button";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { CharacterCardCarousel } from "./CharacterCardCarousel";

const Features: React.FC = () => {
  const appCtx = useContext(AppContext);
  const character =
    characters.find(
      (character) => character.id === appCtx?.selectedCharacter
    ) ?? characters[0];

  return (
    <>
      <section className="grid gap-12">
        <SpringBounceWhenInView>
          <Heading as="h2" className="headline--gradient">
            Hier ist alles erlaubt!
          </Heading>
        </SpringBounceWhenInView>

        <p className="mx-auto max-w-md px-4 md:px-0">
          Das neueste Spiel der Mario Strikers-Reihe erscheint für Nintendo
          Switch!
        </p>
      </section>

      {appCtx?.selectedCharacter && (
        <section className="grid gap-12">
          <SpringBounceWhenInView>
            <Heading as="h2" className="headline--gradient">
              Dein aktuelles Team
            </Heading>
          </SpringBounceWhenInView>

          {/**
           * List all characters as selectable teams
           * Link to character detail page
           * When in view do/show "hover" interaction, scale up image
           */}

          <CharacterCardCarousel />

          <Button
            variant="text"
            href={`/characters?character=${appCtx?.selectedCharacter}`}
            className="mx-auto justify-self-start"
          >
            Erhalte Vorschau zur Ausrüstung
            <ArrowLongRightIcon className="h-5 w-5 font-bold text-accent themed:text-signal" />
          </Button>
        </section>
      )}

      <section className="grid gap-12">
        <SpringBounceWhenInView>
          <Heading as="h2" className="headline--gradient">
            5 gegen 5
          </Heading>
        </SpringBounceWhenInView>

        <p className="mx-auto max-w-md px-4 md:px-0">
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

        <p className="mx-auto max-w-md px-4 md:px-0">
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

        <div className="mx-auto flex flex-wrap justify-center gap-4">
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

        <p className="mx-auto max-w-md px-4 md:px-0">
          Benutze Tacklings, Items und einzigartige Fähigkeiten zum Auslösen von
          Spezialschüssen. Sammle eine der Hyperkugeln auf dem Spielfeld ein und
          lade sie auf, während deine Gegner abgelenkt sind, um den Hyperschuss
          zu aktivieren – einen Spezialschuss, mit dem dir statt einem gleich
          zwei Tore angerechnet werden!
        </p>
      </section>
    </>
  );
};

export default Features;
