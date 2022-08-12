import Image from 'next/image';
import React from 'react';

interface PulsingDotsProps {
  size: number;
}

const PulsingDots: React.FC<PulsingDotsProps> = ({ size }) => {
  return (
    <div className="flex items-center justify-center gap-2 m-4">
      <span className="animate-bounce">
        <Image
          src="/images/items/CI_NSwitch_MarioStrikersBLF_AW_Items_Mushroom.png"
          width={size}
          height={size}
          alt="Nintendo mushroom item"
        />
      </span>

      <span className="animate-bounce animation-delay-200">
        <Image
          src="/images/items/CI_NSwitch_MarioStrikersBLF_AW_Items_Mushroom.png"
          width={size}
          height={size}
          alt="Nintendo mushroom item"
        />
      </span>

      <span className="animate-bounce animation-delay-300">
        <Image
          src="/images/items/CI_NSwitch_MarioStrikersBLF_AW_Items_Mushroom.png"
          width={size}
          height={size}
          alt="Nintendo mushroom item"
        />
      </span>
    </div>
  );
};

export default PulsingDots;
