import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import GameTrailer from './GameTrailer';

const Hero: React.FC = () => {
  const [showYouTubeGameTrailer, setShowYoutubeGameTrailer] = useState(false);

  return (
    <>
      {showYouTubeGameTrailer && (
        <GameTrailer closeOverlay={() => setShowYoutubeGameTrailer(false)} />
      )}

<motion.section
          animate={{ opacity: [0, 1], y: [-10, 0] }}
          exit={{ opacity: [1, 0] }}
          transition={{ delay: 1.5 }}
          className='absolute inset-0 z-40'
        >
          <Link href="/buy-mario-strikers-battle-league-football">
            <a className="relative inline-block w-full h-full">
             <Image src="/images/gallery/2x1_NSwitch_MarioStrikersBattleLeagueFootball_image1600w.jpeg" alt="Mario Strikers: Battle League Football Wallpaper" layout="fill" priority className='object-fit cursor-pointer'/> 
            </a>
          </Link>
        </motion.section>

        <motion.div animate={{ opacity: [0, 1], y: ['100%', '2%'] }} transition={{ delay: 1.75 }} className="absolute bottom-0 left-0 right-0 z-50 w-full">
         <Image src="/images/backgrounds/CI_NSwitch_MarioStrikersBLF_BG_StrikersClub_Top_image950w.png" alt="Mario Strikers: Battle League Football Background" width="1920" height="454" /> 
        </motion.div>

        <motion.div animate={{ x: ['100%', '8%'] }} transition={{ ease: 'easeOut', delay: 2 }} className="absolute bottom-32 -right-12 z-50 w-[56rem] h-[56rem]">
         <Image src="/images/logos/mario-strikers-blf-logo.png" alt="Mario Strikers: Battle League Football Background" layout='fill' className='object-fit' /> 
        </motion.div>

        <motion.div animate={{ opacity: [0, 1], y: ['100%', '0%'] }} transition={{ ease: 'easeOut', delay: 2.625 }} className="absolute bottom-[20rem] left-12 z-50 cursor-pointer hover:left-16">
          <Image src="/images/backgrounds/CI_NSwitch_MarioStrikersBLF_BG_Introducing_Header.png" alt="Mario Strikers: Battle League Football Button Background" width="250" height="92" className='skew-x-12' /> 
        </motion.div>

        <motion.div animate={{ opacity: [0, 1], y: ['100%', '0%'] }} transition={{ ease: 'easeOut', delay: 2.1 }} className="absolute bottom-[14rem] left-12 z-50 cursor-pointer hover:left-16">
          <Image src="/images/backgrounds/CI_NSwitch_MarioStrikersBLF_BG_Introducing_Header.png" alt="Mario Strikers: Battle League Football Button Background" width="250" height="92" className='skew-x-12' /> 
        </motion.div>

        <motion.div animate={{ opacity: [0, 1], y: ['100%', '0%'] }} transition={{ ease: 'easeOut', delay: 2 }} className="absolute bottom-[8rem] left-12 z-50 cursor-pointer hover:left-16">
          <Image src="/images/backgrounds/CI_NSwitch_MarioStrikersBLF_BG_Introducing_Header.png" alt="Mario Strikers: Battle League Football Button Background" width="250" height="92" className='skew-x-12' /> 
        </motion.div>
    </>
  );
};

export default Hero;
