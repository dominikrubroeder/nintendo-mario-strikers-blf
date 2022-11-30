import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';
import Image from 'next/image';

interface AccordionProps {
  title: string | JSX.Element;
  children: React.ReactNode;
  className?: string;
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
  className,
}) => {
  const [expanded, setExpanded] = useState(false);

  const onCloseHandler = () => {
    setExpanded(false);
  };

  return (
    <div
      className={`grid min-w-[12rem] gap-2 bg-accent-soft py-3 px-4 themed:bg-accent-dark ${
        expanded ? 'rounded-xl' : 'interactive rounded-full'
      } ${className ? className : ''}`}
    >
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

            <footer className="flex h-10 items-end justify-end">
              <Button
                variant="unstyled"
                className="flex items-center gap-0.5 text-xs font-bold"
                sound="character"
                onClick={onCloseHandler}
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
