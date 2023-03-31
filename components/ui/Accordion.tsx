import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";
import Image from "next/image";

interface AccordionProps {
  title: string | JSX.Element;
  children: React.ReactNode;
  className?: string;
  initalState?: "opened" | "closed";
  showFooter?: boolean;
  onClick?: () => void;
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
  className,
  initalState = "closed",
  showFooter = true,
  onClick,
}) => {
  const isExpanded = initalState === "closed" ? false : true;
  const [expanded, setExpanded] = useState(isExpanded);

  const onCloseHandler = () => {
    setExpanded(false);
    if (onClick) onClick();
  };

  return (
    <div
      className={`min-w-[12rem] themed:bg-accent-dark ${
        expanded ? "rounded-xl" : "interactive--suttle rounded-3xl"
      } ${className ? className : ""}`}
    >
      <header
        className="cursor-pointer py-3 px-4 themed:text-white"
        onClick={() => setExpanded((previousState) => !previousState)}
      >
        {title}
      </header>

      <AnimatePresence>
        {expanded && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: "0" }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 1,
              height: "0",
              overflow: "hidden",
            }}
          >
            <div className="grid gap-4 py-3 px-4">
              <div>{children}</div>

              {showFooter && (
                <footer className="flex h-10 items-end justify-end">
                  <Button
                    variant="text"
                    className="flex items-center gap-0.5 text-xs font-bold"
                    sound="team"
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
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
