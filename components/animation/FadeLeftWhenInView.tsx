import React from "react";
import { AnimatePresence, motion } from "framer-motion";

interface FadeLeftWhenInViewProps {
  children: React.ReactNode;
}

const FadeLeftWhenInView: React.FC<FadeLeftWhenInViewProps> = ({
  children,
}) => {
  return (
    <AnimatePresence>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.6 }}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: 100 },
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default FadeLeftWhenInView;
