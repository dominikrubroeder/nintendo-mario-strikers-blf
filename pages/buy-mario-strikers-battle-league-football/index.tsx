import { NextPage } from "next";
import BuyConfiguration from "../../components/BuyConfiguration";
import Image from "next/image";
import Layout from "../../components/layout";
import { motion } from "framer-motion";
import { useContext, useEffect, useRef } from "react";
import AudioContext from "../../store/audioContext";

const BuyPage: NextPage = () => {
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
      </motion.section>
    </Layout>
  );
};

export default BuyPage;
