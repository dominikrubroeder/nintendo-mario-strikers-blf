import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface SpringBounceWhenInViewProps {
  children: React.ReactNode;
  playSound?: boolean;
  delay?: number;
  className?: string;
}

const SpringBounceWhenInView: React.FC<SpringBounceWhenInViewProps> = ({
  children,
  playSound = false,
  delay = 0.3,
  className,
}) => {
  const audioRef = useRef<null | HTMLAudioElement>(null);

  // useEffect(() => {
  //   audioRef.current.play();
  // });

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{
        delay: delay,
        duration: 0.6,
        type: 'spring',
        stiffness: 300,
        damping: 15,
      }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0.8 },
      }}
      className={className ? className : ''}
    >
      {playSound && (
        <audio
          src="/audio/nintendo-super-mario-coin.wav"
          ref={audioRef}
        ></audio>
      )}
      {children}
    </motion.div>
  );
};

export default SpringBounceWhenInView;
