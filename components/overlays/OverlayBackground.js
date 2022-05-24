import { motion } from 'framer-motion';

const OverlayBackground = (props) => {
  document.body.style.height = '100vh';
  document.body.style.overflow = 'hidden';

  const closeOverlay = () => {
    document.body.style.height = 'auto';
    document.body.style.overflow = 'visible';

    // Do something when overlay gets closed
    if (props.onCloseOverlay) props.onCloseOverlay();
  };

  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-40"
      onClick={closeOverlay}
    >
      <motion.div
        animate={{ scale: [0.4, 1.3, 1], opacity: [0, 1] }}
        transition={{
          duration: 0.5,
          type: 'spring',
          stiffness: 300,
          damping: 15,
        }}
        className=""
      >
        {props.children}
      </motion.div>
    </div>
  );
};

export default OverlayBackground;
