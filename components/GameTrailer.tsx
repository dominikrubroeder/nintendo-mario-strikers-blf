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
    <div
      className="fixed inset-0 z-50 flex cursor-pointer items-center justify-center bg-black/70"
      onClick={closeOverlayHandler}
    >
      <motion.iframe
        animate={{ scale: [0.4, 1.3, 1] }}
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

      <motion.div animate={{}}>
        <Button variant="text">
          <XMarkIcon className="h-5 w-5 text-white" />
        </Button>
      </motion.div>
    </div>
  );
};

export default GameTrailer;
