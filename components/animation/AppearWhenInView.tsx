import React from "react";
import { motion } from "framer-motion";

interface AppearWhenInViewProps {
  children: React.ReactNode;
  className?: string;
  delay?: number | undefined;
}

const AppearWhenInView: React.FC<AppearWhenInViewProps> = ({
  children,
  className,
  delay,
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{
        duration: 0.6,
        type: "spring",
        stiffness: 300,
        delay: delay === undefined ? 0 : delay,
        damping: 15,
      }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      className={className && className}
    >
      {children}
    </motion.div>
  );
};

export default AppearWhenInView;
