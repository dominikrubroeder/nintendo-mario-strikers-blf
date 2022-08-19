import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './base/Button';
import { CheckCircleIcon } from '@heroicons/react/solid';
import Image from 'next/image';

interface AccordionProps {
  title: any;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="grid gap-2 min-w-[12rem] bg-accent/10 bg-themed-dark py-3 px-4 rounded-xl transition hover:scale-105">
      <header
        className="cursor-pointer"
        onClick={() => setExpanded((previousState) => !previousState)}
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
            <div>{children}</div>

            <footer className="flex items-end justify-end h-10">
              <Button
                variant="unstyled"
                className="flex items-center gap-0.5 font-bold text-xs"
                onClick={() => setExpanded(false)}
              >
                <Image
                  width={32}
                  height={32}
                  src="/images/items/CI_NSwitch_MarioStrikersBLF_AW_Items_Star.png"
                  alt="Nintendo star item"
                />
                Verstanden
              </Button>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
