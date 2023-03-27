import React from "react";
import { motion } from "framer-motion";

interface FadeUpWhenInViewProps {
  children: React.ReactNode;
}

const FadeUpWhenInView: React.FC<FadeUpWhenInViewProps> = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.6 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 100 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeUpWhenInView;
