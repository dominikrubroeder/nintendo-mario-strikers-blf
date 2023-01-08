import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type FloatingActionBarProps = {
  children: React.ReactNode;
};

const FloatingActionBar: React.FC<FloatingActionBarProps> = ({ children }) => {
  return (
    <AnimatePresence>
      <div className="fixed left-0 bottom-4 z-50 flex w-full items-center justify-center gap-4 transition">
        <motion.div
          key="actionBar"
          className="cursor-pointer rounded-full bg-accent-dark p-4 themed:bg-signal"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{
            ease: 'easeOut',
            delay: 0.2,
          }}
        >
          <motion.div
            key="actionBarW"
            className="flex items-center justify-center"
            initial={{ opacity: 0, width: '0' }}
            animate={{ opacity: 1, width: 'auto' }}
            exit={{ opacity: 0, width: '0' }}
            transition={{
              type: 'spring',
              damping: 20,
              stiffness: 400,
              delay: 0.6,
            }}
          >
            {children}
          </motion.div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default FloatingActionBar;
