import { motion } from "framer-motion";
import React from "react";

interface OverlayBackgroundProps {
  children: React.ReactNode;
  className?: string;
  onCloseOverlay?: () => void;
}

const OverlayBackground: React.FC<OverlayBackgroundProps> = ({
  children,
  className,
  onCloseOverlay,
}) => {
  document.body.style.height = "100vh";
  document.body.style.overflow = "hidden";

  const closeOverlay = () => {
    document.body.style.height = "auto";
    document.body.style.overflow = "visible";

    // Do something when overlay gets closed
    if (onCloseOverlay) onCloseOverlay();
  };

  return (
    <div
      className={`fixed inset-0 z-40 flex cursor-pointer bg-black/70 ${className}`}
      onClick={closeOverlay}
    >
      <motion.div
        animate={{ scale: [0.4, 1.3, 1], opacity: [0, 1] }}
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 300,
          damping: 15,
        }}
        className="cursor-default"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default OverlayBackground;
