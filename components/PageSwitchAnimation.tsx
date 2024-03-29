import React, { useState, useEffect } from "react";
import NintendoSwitchClickAnimation from "./animation/NintendoSwitchClickAnimation";

const PageSwitchAnimation: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    setTimeout(() => {
      setMounted(false);
    }, 1500);

    return () => setMounted(false);
  }, []);

  return mounted ? (
    <div className="fixed top-0 left-0 bottom-0 right-0 z-50 flex items-center justify-center bg-accent">
      <NintendoSwitchClickAnimation />
    </div>
  ) : null;
};

export default PageSwitchAnimation;
