import React from 'react';

const AnimatedSoundbarsIcon: React.FC = () => {
  return (
    <div className="grid gap-0.5   grid-cols-3">
      <span className="relative w-1 h-4 bg-accent bg-themed-dark rounded-t-full">
        <span className="absolute bottom-0 left-0 right-0 rounded-t-full w-full bg-accent bg-themed themed:bg-white animate-growthHeight"></span>
      </span>
      <span className="relative w-1 h-4 bg-accent bg-themed-dark rounded-t-full">
        <span className="absolute bottom-0 left-0 right-0 rounded-t-full w-full bg-accent bg-themed themed:bg-white animate-growthHeight animation-delay-200"></span>
      </span>
      <span className="relative w-1 h-4 bg-accent bg-themed-dark rounded-t-full">
        <span className="absolute bottom-0 left-0 right-0 rounded-t-full w-full bg-accent bg-themed themed:bg-white animate-growthHeight animation-delay-300"></span>
      </span>
    </div>
  );
};

export default AnimatedSoundbarsIcon;
