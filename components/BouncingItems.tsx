import Image from "next/image";
import React from "react";

interface BouncingItemsProps {
  size: number;
}

const BouncingItems: React.FC<BouncingItemsProps> = ({ size }) => {
  return (
    <div className="m-4 flex items-center justify-center gap-2">
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

export default BouncingItems;
