import { NextPage } from 'next';
import React, { useContext, useEffect, useRef, useState } from 'react';
import GameFeatures from '../../components/sections/GameFeatures';
import CharacterSelection from '../../components/character/CharacterSelection';
import CommunityQuotes from '../../components/sections/CommunityQuotes';
import TheGallery from '../../components/TheGallery';
import Heading from '../../components/typography/Heading';
import useIsInView from '../../hooks/useIsInView';
import Layout from '../../components/layout';
import MiniAudioPlayer from '../../components/audio/MiniAudioPlayer';
import FloatingActionBar from '../../components/floating-action-bar';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import AppContext from '../../store/appContext';
import { useRouter } from 'next/router';
import characters from '../../data/characters';
import AnimatedSoundbarsIcon from '../../components/AnimatedSoundbarsIcon';
import { PlayIcon, SpeakerWaveIcon } from '@heroicons/react/24/solid';
import AudioContext from '../../store/audioContext';
import Image from 'next/image';

const InfoPage: NextPage = () => {
  const appCtx = useContext(AppContext);
  const audioCtx = useContext(AudioContext);
  const router = useRouter();
  const character = characters.find(
    (character) => character.id === appCtx?.selectedCharacter
  );
  const miniAudioPlayerRef = useRef<null | HTMLDivElement>(null);
  const miniAudioPlayerIsOnScreen = useIsInView(miniAudioPlayerRef);
  const [showCharacterMenu, setShowCharacterMenu] = useState(false);

  return (
    <Layout pageTitle="Discover">
      <div className="grid gap-32">
        <section className="m-auto w-full max-w-screen-xl px-4">
          <Heading as="h2" className="headline--gradient">
            Wähle dein Team
          </Heading>

          <CharacterSelection className="sm:grid-cols-2 lg:grid-cols-3" />
        </section>

        <section className="flex min-h-screen items-center justify-center">
          <div className="grid items-center justify-center gap-2">
            <Heading as="h2" className="headline--gradient">
              Mach dich bereit
            </Heading>

            <div className="mx-auto" ref={miniAudioPlayerRef}>
              <MiniAudioPlayer />
            </div>
          </div>
        </section>

        <TheGallery />

        <GameFeatures />

        <CommunityQuotes />

        <section className="flex items-center justify-center">
          <p>Show game trailer here</p>
        </section>

        <section className="flex min-h-screen items-center justify-center">
          Show merch here?
        </section>
      </div>

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

      {!miniAudioPlayerIsOnScreen && (
        <FloatingActionBar>
          <div className="flex items-center justify-center gap-4">
            <AnimatePresence>
              <motion.div
                className="leading-1 absolute -z-10 flex h-12 w-12 items-center justify-center rounded-full bg-accent-dark"
                initial={{ x: 0, scale: 0.3 }}
                animate={{ x: -156, scale: 1 }}
                exit={{ x: 0, scale: 0.3 }}
                transition={{
                  type: 'spring',
                  damping: 20,
                  stiffness: 400,
                  delay: 1,
                }}
                onClick={() =>
                  setShowCharacterMenu((previousState) => !previousState)
                }
              >
                <Image
                  src={`/images/characters/NSwitch-character-sketch-${character?.id}.png`}
                  alt={`${character?.name} team thumbnail`}
                  width="32"
                  height="32"
                />

                <AnimatePresence>
                  {showCharacterMenu && !miniAudioPlayerIsOnScreen && (
                    <motion.div
                      initial={{
                        borderRadius: '50%',
                        opacity: 0,
                        visibility: 'hidden',
                        y: 0,
                      }}
                      animate={{
                        borderRadius: '1rem',
                        opacity: 1,
                        visibility: 'visible',
                        y: -64,
                      }}
                      exit={{
                        borderRadius: '50%',
                        opacity: 0,
                        visibility: 'hidden',
                        y: 0,
                      }}
                      className="absolute bottom-0 bg-accent-dark p-4"
                    >
                      <ul className="grid h-64 gap-4 overflow-hidden overflow-y-auto">
                        <li className="flex w-full min-w-max cursor-pointer items-center gap-1 rounded-full bg-accent p-2 font-bold uppercase transition">
                          <Image
                            src={`/images/characters/NSwitch-character-sketch-${character?.id}.png`}
                            width="24"
                            height="24"
                            alt={`${character?.name} thumbnail`}
                          />

                          <span>{character?.name}</span>
                        </li>

                        <li>
                          <hr className="border-accent px-4" />
                        </li>

                        {characters.map((character) => (
                          <li
                            key={character.id}
                            className="flex w-full min-w-max cursor-pointer items-center gap-1 rounded-full p-2 font-bold uppercase transition hover:bg-accent"
                            onClick={() => appCtx?.setCharacter(character.id)}
                          >
                            <Image
                              src={`/images/characters/NSwitch-character-sketch-${character?.id}.png`}
                              width="24"
                              height="24"
                              alt={`${character.name} thumbnail`}
                            />

                            <span>{character.name}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence>
              <motion.div
                className="absolute -z-10 flex h-12 w-12 items-center justify-center rounded-full bg-accent-dark"
                initial={{ x: 0, scale: 0.3 }}
                animate={{ x: -96, scale: 1 }}
                exit={{ x: 0, scale: 0.3 }}
                transition={{
                  type: 'spring',
                  damping: 20,
                  stiffness: 400,
                  delay: 1,
                }}
              >
                <AnimatedSoundbarsIcon />
              </motion.div>
            </AnimatePresence>

            <div
              className="whitespace-nowrap"
              onClick={() =>
                router.push('/buy-mario-strikers-battle-league-football')
              }
            >
              Vorbestellen
            </div>

            <AnimatePresence>
              <motion.div
                className="absolute -z-10 flex h-12 w-12 items-center justify-center rounded-full bg-accent-dark"
                initial={{ x: 0, scale: 0.3 }}
                animate={{ x: 96, scale: 1 }}
                exit={{ x: 0, scale: 0.3 }}
                transition={{
                  type: 'spring',
                  damping: 20,
                  stiffness: 400,
                  delay: 1,
                }}
              >
                <PlayIcon className="h-4 w-4 text-white" />
              </motion.div>
            </AnimatePresence>

            <AnimatePresence>
              <motion.div
                className="absolute -z-10 flex h-12 w-12 items-center justify-center rounded-full bg-accent-dark"
                initial={{ x: 0, scale: 0.3 }}
                animate={{ x: 156, scale: 1 }}
                exit={{ x: 0, scale: 0.3 }}
                transition={{
                  type: 'spring',
                  damping: 20,
                  stiffness: 400,
                  delay: 1,
                }}
              >
                <SpeakerWaveIcon className="h-4 w-4 text-white" />
              </motion.div>
            </AnimatePresence>
          </div>
        </FloatingActionBar>
      )}
    </Layout>
  );
};

export default InfoPage;
