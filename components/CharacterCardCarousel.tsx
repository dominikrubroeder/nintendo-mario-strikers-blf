import * as React from "react";
import { useState, FC, useEffect, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import Image from "next/image";
import AppContext from "../store/appContext";
import characters, { characterImages } from "../data/characters";

/** https://codesandbox.io/s/framer-motion-image-gallery-pqvx3?file=/src/index.tsx:106-128 */

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;

const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export const CharacterCardCarousel: FC = () => {
  const appCtx = useContext(AppContext);
  const [[page, direction], setPage] = useState([0, 0]);

  useEffect(() => {
    appCtx?.setCharacter(characters[page].id);
  }, [page, appCtx]);

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const imageIndex = wrap(0, characterImages.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className="relative h-[50vh]">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          className="absolute h-[50vh] w-full"
        >
          <motion.img
            src={characterImages[imageIndex]}
            width={480}
            height={480}
            alt="Character carousel test"
            className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
            draggable={false}
          />
        </motion.div>
      </AnimatePresence>

      <div
        className="interactive absolute right-4 top-1/2 z-50 cursor-pointer"
        onClick={() => paginate(1)}
      >
        <Image
          src="/images/backgrounds/CI_NSwitch_MarioStrikersBLF_AW_TheSquad_Button_Right.png"
          width={90}
          height={60}
          alt="Carousel arrow right"
          draggable={false}
        />
      </div>

      <div
        className="interactive absolute left-4 top-1/2 z-50 cursor-pointer"
        onClick={() => paginate(-1)}
      >
        <Image
          src="/images/backgrounds/CI_NSwitch_MarioStrikersBLF_AW_TheSquad_Button_Left.png"
          width={90}
          height={60}
          alt="Carousel arrow right"
          draggable={false}
        />
      </div>
    </div>
  );
};