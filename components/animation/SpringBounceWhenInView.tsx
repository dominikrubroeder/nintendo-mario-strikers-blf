import React, { useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface SpringBounceWhenInViewProps {
  children: React.ReactNode;
  playSound?: boolean;
  delay?: number | undefined;
  className?: string;
}

const SpringBounceWhenInView: React.FC<SpringBounceWhenInViewProps> = ({
  children,
  playSound = false,
  delay = undefined,
  className,
}) => {
  const audioRef = useRef<null | HTMLAudioElement>(null);

  // useEffect(() => {
  //   audioRef.current.play();
  // });

  return (
    <AnimatePresence>
      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{
          duration: 0.6,
          type: "spring",
          stiffness: 400,
          delay: delay === undefined ? 0 : delay,
          damping: 15,
        }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0.7 },
        }}
        viewport={{ amount: 0.4 }}
        className={className && className}
      >
        {playSound && (
          <audio
            src="/audio/nintendo-super-mario-coin.wav"
            ref={audioRef}
          ></audio>
        )}
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default SpringBounceWhenInView;
