import React, { useRef } from 'react';
import { motion } from 'framer-motion';

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

  return <motion.div>{children}</motion.div>;
};

export default SpringBounceWhenInView;
