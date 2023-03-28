import { XMarkIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import React from "react";
import Button from "./ui/Button";

interface GameTrailerProps {
  closeOverlay: () => void;
}

const GameTrailer: React.FC<GameTrailerProps> = ({ closeOverlay }) => {
  document.body.style.height = "100vh";
  document.body.style.overflow = "hidden";

  const closeOverlayHandler = () => {
    document.body.style.height = "auto";
    document.body.style.overflow = "visible";
    closeOverlay();
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex cursor-pointer items-start justify-center bg-black/80 px-8 pt-40 sm:items-center sm:px-0 sm:pt-0"
      onClick={closeOverlayHandler}
      animate={{ opacity: [0, 1] }}
    >
      <motion.iframe
        animate={{ y: [-100, 0] }}
        transition={{
          duration: 0.6,
          type: "spring",
          stiffness: 400,
          damping: 15,
        }}
        src="https://www.youtube-nocookie.com/embed/cZhDkYvGqZA"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="h-full max-h-[430px] w-full max-w-[768px] rounded-2xl border-8 border-black"
      ></motion.iframe>
    </motion.div>
  );
};

export default GameTrailer;
