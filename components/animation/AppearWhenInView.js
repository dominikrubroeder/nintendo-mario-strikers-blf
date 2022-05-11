import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function AppearWhenInView({ children }) {
  const audioRef = useRef();

  // useEffect(() => {
  //   audioRef.current.play();
  // });

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{
        delay: 0.3,
        duration: 0.6,
        type: 'spring',
        stiffness: 300,
        damping: 15,
      }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0.8 },
      }}
    >
      <audio src="/audio/nintendo-super-mario-coin.wav" ref={audioRef}></audio>
      {children}
    </motion.div>
  );
}
