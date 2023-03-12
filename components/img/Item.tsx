import React from "react";
import Image from "next/image";

interface Props {
  item: "Banana" | "Bomb" | "Green Shell" | "Mushroom" | "Red Shell" | "Star";
  size: number;
  className?: string;
  onClick?: () => void;
}

export default function Item({ item = "Star", size = 32, className }: Props) {
  switch (item) {
    case "Banana":
      return (
        <Image
          src="/images/items/CI_NSwitch_MarioStrikersBLF_AW_Items_Banana.png"
          alt="Banana Item"
          width={size}
          height={size}
          className={className ? className : ""}
        />
      );

    case "Bomb":
      return (
        <Image
          src="/images/items/CI_NSwitch_MarioStrikersBLF_AW_Items_BobOmb.png"
          alt="BobOmb Item"
          width={size}
          height={size}
          className={className ? className : ""}
        />
      );

    case "Green Shell":
      return (
        <Image
          src="/images/items/CI_NSwitch_MarioStrikersBLF_AW_Items_GreenShell.png"
          alt="Green Shell Item"
          width={size}
          height={size}
          className={className ? className : ""}
        />
      );

    case "Mushroom":
      return (
        <Image
          src="/images/items/CI_NSwitch_MarioStrikersBLF_AW_Items_Mushrooms.png"
          alt="Mushroom Item"
          width={size}
          height={size}
          className={className ? className : ""}
        />
      );

    case "Red Shell":
      return (
        <Image
          src="/images/items/CI_NSwitch_MarioStrikersBLF_AW_Items_RedShell.png"
          alt="Red Shell Item"
          width={size}
          height={size}
          className={className ? className : ""}
        />
      );

    case "Star":
      return (
        <Image
          src="/images/items/CI_NSwitch_MarioStrikersBLF_AW_Items_Star.png"
          alt="Star Item"
          width={size}
          height={size}
          className={className ? className : ""}
        />
      );

    default:
      return (
        <Image
          src="/images/items/CI_NSwitch_MarioStrikersBLF_AW_Items_Banana.png"
          alt="Banana Item"
          width={size}
          height={size}
          className={className ? className : ""}
        />
      );
  }
}
