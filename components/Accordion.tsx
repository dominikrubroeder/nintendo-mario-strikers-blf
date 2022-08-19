import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AccordionProps {
  title: any;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [expanded, setExpaned] = useState(false);

  return (
    <div className="grid gap-2 bg-themed-dark py-3 px-4 rounded-xl transition hover:scale-105">
      <header
        className="cursor-pointer min-w-[8.25rem]"
        onClick={() => setExpaned((previousState) => !previousState)}
      >
        {title}
      </header>

      <AnimatePresence>
        {expanded && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: 1,
              height: 'auto',
            }}
            exit={{
              opacity: 1,
            }}
            transition={{
              type: 'spring',
              stiffness: 400,
            }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
