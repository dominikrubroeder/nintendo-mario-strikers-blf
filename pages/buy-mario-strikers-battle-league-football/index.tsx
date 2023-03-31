import { NextPage } from "next";
import BuyConfiguration from "../../components/BuyConfiguration";
import Image from "next/image";
import Layout from "../../components/layout";
import { motion } from "framer-motion";
import { useContext, useEffect, useRef } from "react";
import AudioContext from "../../store/audioContext";
import Button from "../../components/ui/Button";
import Logo from "../../components/svg/Logo";
import AppContext from "../../store/appContext";

const BuyPage: NextPage = () => {
  const appCtx = useContext(AppContext);
  const audioCtx = useContext(AudioContext);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef && audioCtx?.interactiveAudioisEnabled)
      audioRef.current?.play();
  }, [audioRef, audioCtx?.interactiveAudioisEnabled]);

  return (
    <Layout pageTitle="Buy">
      <audio ref={audioRef}>
        <source src="/audio/nintendo-super-mario-coin.wav" type="audio/wav" />
      </audio>

      <BuyConfiguration />

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.4 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 100 },
        }}
      >
        <div className="mt-8 px-4">
          <Image
            src="/images/gallery/2x1_NSwitch_MarioStrikersBattleLeagueFootball_image1600w.jpeg"
            alt="Mario Strikers Battle League Football"
            layout="responsive"
            width={1000}
            height={500}
            className="rounded-3xl"
          />
        </div>

        <Button
          variant="contained"
          href="/checkout"
          sound="coin"
          className="z-100 sticky bottom-4 mx-auto mt-8 py-4 px-4 font-bold uppercase drop-shadow-lg"
        >
          {appCtx?.selectedTeam ? (
            <Image
              src={`/images/teams/${appCtx?.selectedTeam}.png`}
              width="32"
              height="32"
              alt={`${appCtx?.selectedTeam} sketch`}
            />
          ) : (
            <Logo variant="Mario Strikers" size={48} />
          )}
          Jetzt vorbestellen
          <Image
            src="/images/items/coin.png"
            alt="Nintendo coin"
            width="24"
            height="24"
          />
        </Button>
      </motion.section>
    </Layout>
  );
};

export default BuyPage;
