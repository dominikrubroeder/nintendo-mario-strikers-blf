import React, { useContext } from "react";
import SpringBounceWhenInView from "./animation/SpringBounceWhenInView";
import AppContext from "../store/appContext";
import Image from "next/image";
import Heading from "./Heading";
import { items } from "../data/items";
import Button from "./ui/Button";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { TeamCarousel } from "./TeamCarousel";
import { motion } from "framer-motion";

const Features: React.FC = () => {
  const appCtx = useContext(AppContext);

  return (
    <>
      {appCtx?.selectedTeam && (
        <section className="grid gap-6 sm:gap-12">
          <SpringBounceWhenInView>
            <Heading as="h2" className="headline--gradient">
              Dein aktuelles Team
            </Heading>
          </SpringBounceWhenInView>

          {/**
           * List all teams as selectable teams
           * Link to team detail page
           * When in view do/show "hover" interaction, scale up image
           */}

          <TeamCarousel />

          <Button
            variant="text"
            href="/teams"
            className="mx-auto justify-self-start"
            sound="team"
          >
            Erhalte Vorschau zur Ausrüstung
            <ArrowLongRightIcon className="h-5 w-5 font-bold text-accent group-hover:text-white themed:text-signal" />
          </Button>
        </section>
      )}

      <section className="grid gap-4 sm:gap-12">
        <SpringBounceWhenInView>
          <Heading as="h2" className="headline--gradient">
            5 gegen 5
          </Heading>
        </SpringBounceWhenInView>

        <p className="mx-auto max-w-xs sm:max-w-md">
          Mach dich bereit für das 5-gegen-5-Spiel Strike – Wie Fußball, aber
          mit deutlich härterer Offensive! Schieß Tore, indem du dribbelst und
          deinen Teamkameraden die Bälle zuspielst.
        </p>

        <div className="relative mx-auto h-64 w-64">
          <Image
            src="/images/teams/mario-bowser.png"
            alt="Mario Bowser duell in action"
            className="object-contain"
            layout="fill"
          />
        </div>
      </section>

      <section className="grid gap-4 sm:gap-12">
        <SpringBounceWhenInView>
          <Heading as="h2" className="headline--gradient">
            Bis zu 8 Spieler
          </Heading>
        </SpringBounceWhenInView>

        <p className="mx-auto max-w-xs sm:max-w-md">
          Bis zu acht Spieler, vier in jedem Team, können auf einer Nintendo
          Switch-Konsole gegeneinander spielen. Zusätzlich zu den Einzelspielen
          wird es einen Online-Club-Modus geben – Jedem Club können bis zu 20
          Spieler beitreten. Versucht, zum besten Club der Welt aufzusteigen!
        </p>
      </section>

      <section className="grid gap-4 sm:gap-12">
        <SpringBounceWhenInView>
          <Heading as="h2" className="headline--gradient">
            Tacklings, Items und einzigartige Fähigkeiten
          </Heading>
        </SpringBounceWhenInView>

        <div className="mx-auto flex flex-wrap gap-2">
          {/* Check for items audio sounds */}
          {items.map(({ title, src }, index) => (
            <motion.div
              key={title}
              initial="hidden"
              whileInView="visible"
              variants={{
                visible: { scale: 1 },
                hidden: { scale: 0 },
              }}
              transition={{
                duration: 0.6,
                type: "spring",
                stiffness: 400,
                delay: 0.1 * index,
                damping: 15,
              }}
              className="relative h-24 w-24 sm:h-32 sm:w-32"
            >
              <Image
                src={src}
                alt={`${title} item`}
                layout="fill"
                className="object-contain"
              />
            </motion.div>
          ))}
        </div>

        <p className="mx-auto max-w-xs sm:max-w-md">
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
