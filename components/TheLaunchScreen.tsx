import React, { useState, useEffect } from 'react';
import NintendoSwitchClick from './animation/NintendoSwitchClick/NintendoSwitchClick';

const TheLaunchScreen: React.FC = () => {
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
      <NintendoSwitchClick />
    </div>
  ) : null;
};

export default TheLaunchScreen;
