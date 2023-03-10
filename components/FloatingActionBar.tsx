import { FC } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "./ui/Button";

interface FloatingActionBarProps {
  shouldBeVisible?: boolean;
}

const FloatingActionBar: FC<FloatingActionBarProps> = ({ shouldBeVisible }) => {
  return (
    <AnimatePresence>
      {shouldBeVisible && (
        <motion.div
          key="actionBarWrapper"
          className="fixed left-0 right-0 bottom-4 z-[100] flex w-full items-center justify-center gap-4 transition"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: [-10, 100] }}
          transition={{
            ease: "easeInOut",
          }}
        >
          <motion.div
            key="actionBar"
            className="cursor-pointer rounded-full bg-accent p-4 transition-all active:scale-95 themed:bg-signal"
          >
            <motion.div
              key="actionBarContent"
              className="flex items-center justify-center"
              initial={{ opacity: 0, width: "0" }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: "0" }}
              transition={{
                type: "spring",
                damping: 20,
                stiffness: 400,
                delay: 0.6,
              }}
            >
              <div className="flex items-center justify-center gap-4">
                <Button
                  variant="plain"
                  href="/buy-mario-strikers-battle-league-football"
                  className="z-50 whitespace-nowrap bg-accent p-0 text-white themed:bg-signal"
                  sound="coin"
                >
                  Vorbestellen
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingActionBar;
