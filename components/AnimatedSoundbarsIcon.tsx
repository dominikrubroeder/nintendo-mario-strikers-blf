import React from "react";

const AnimatedSoundbarsIcon: React.FC = () => {
  return (
    <div className="grid grid-cols-3   gap-0.5">
      <span className="relative h-4 w-1 rounded-t-full">
        <span className="absolute bottom-0 left-0 right-0 w-full animate-growthHeight rounded-t-full bg-accent themed:bg-white"></span>
      </span>
      <span className="relative h-4 w-1 rounded-t-full">
        <span className="absolute bottom-0 left-0 right-0 w-full animate-growthHeight rounded-t-full bg-accent animation-delay-200 themed:bg-white"></span>
      </span>
      <span className="relative h-4 w-1 rounded-t-full">
        <span className="absolute bottom-0 left-0 right-0 w-full animate-growthHeight rounded-t-full bg-accent animation-delay-300 themed:bg-white"></span>
      </span>
    </div>
  );
};

export default AnimatedSoundbarsIcon;
