import { motion } from 'framer-motion';
import React from 'react';

interface TheGameTrailerOverlayProps {
  closeOverlay: () => void;
}

const TheGameTrailerOverlay: React.FC<TheGameTrailerOverlayProps> = ({
  closeOverlay,
}) => {
  document.body.style.height = '100vh';
  document.body.style.overflow = 'hidden';

  const closeOverlayHandler = () => {
    document.body.style.height = 'auto';
    document.body.style.overflow = 'visible';
    closeOverlay();
  };

  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
      onClick={closeOverlayHandler}
    >
      <motion.iframe
        animate={{ scale: [0.4, 1.3, 1], opacity: [0, 1] }}
        transition={{
          duration: 0.5,
          type: 'spring',
          stiffness: 300,
          damping: 15,
          delay: 2.5,
        }}
        src="https://www.youtube-nocookie.com/embed/cZhDkYvGqZA"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="rounded-xl max-w-[768px] max-h-[430px] w-full h-full"
      ></motion.iframe>
    </div>
  );
};

export default TheGameTrailerOverlay;
