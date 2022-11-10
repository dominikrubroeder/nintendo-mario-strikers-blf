import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import AudioContext from '../../store/audioContext';
import SpringBounceWhenInView from '../animation/SpringBounceWhenInView';
import MiniAudioPlayer from '../audio/MiniAudioPlayer';
import Header from './Header';
import Head from 'next/head';

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

interface LayoutProps {
  children: React.ReactNode;
  pageTitle?: string;
  withHeader?: boolean;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  pageTitle,
  withHeader = true,
}) => {
  const audioCtx = useContext(AudioContext);

  return (
    <>
      <Head>
        <title>
          {pageTitle
            ? `${pageTitle} | Mario Strikers: Battle League Football | Nintendo`
            : `Mario Strikers: Battle League Football | Nintendo`}
        </title>
        <meta
          name="description"
          content="Mario Strikers: Battle League Football | Nintendo"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {withHeader && <Header />}

      <motion.main
        variants={variants} // Pass the variant object into Framer Motion
        initial="hidden" // Set the initial state to variants.hidden
        animate="enter" // Animated state to variants.enter
        exit="exit" // Exit state (used later) to variants.exit
        transition={{ type: 'linear' }} // Set the transition to linear
        className=""
      >
        {children}
      </motion.main>

      <div className="fixed bottom-4 right-4 z-40 md:hidden">
        {audioCtx?.hasInteractiveAudio && (
          <SpringBounceWhenInView>
            <MiniAudioPlayer />
          </SpringBounceWhenInView>
        )}
      </div>
    </>
  );
};

export default Layout;
