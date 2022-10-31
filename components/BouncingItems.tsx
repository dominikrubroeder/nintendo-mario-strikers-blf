import Image from 'next/image';
import React from 'react';

interface BouncingItemsProps {
  size?: number;
  withText?: string;
}

const BouncingItems: React.FC<BouncingItemsProps> = ({
  size,
  withText = '',
}) => {
  const sizing = withText ? 16 : size;

  return (
    <div
      className={`${withText ? 'inline-flex items-center justify-start' : ''}`}
    >
      {withText && <span className="italic">{withText}</span>}

      <div
        className={`m-4 flex items-center justify-center ${
          withText ? 'gap-1' : 'gap-2'
        }`}
      >
        <span className="animate-bounce">
          <Image
            src="/images/items/CI_NSwitch_MarioStrikersBLF_AW_Items_Mushroom.png"
            width={sizing}
            height={sizing}
            alt="Nintendo mushroom item"
          />
        </span>

        <span className="animate-bounce animation-delay-200">
          <Image
            src="/images/items/CI_NSwitch_MarioStrikersBLF_AW_Items_Mushroom.png"
            width={sizing}
            height={sizing}
            alt="Nintendo mushroom item"
          />
        </span>

        <span className="animate-bounce animation-delay-300">
          <Image
            src="/images/items/CI_NSwitch_MarioStrikersBLF_AW_Items_Mushroom.png"
            width={sizing}
            height={sizing}
            alt="Nintendo mushroom item"
          />
        </span>
      </div>
    </div>
  );
};

export default BouncingItems;
