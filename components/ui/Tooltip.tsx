import { useState } from "react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import SpringBounceWhenInView from "../animation/SpringBounceWhenInView";
import Button from "./Button";
import Image from "next/image";

interface TooltipProps {
  title?: string | JSX.Element;
  children: React.ReactNode;
  className?: string;
  icon?: string | JSX.Element;
  boxPlacement?: "over" | "under";
}

const Tooltip: React.FC<TooltipProps> = ({
  title,
  children,
  className,
  icon,
  boxPlacement = "under",
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`relative inline-block ${className ? className : ""}`}>
      <Button
        variant="contained"
        onClick={() => setExpanded((previousState) => !previousState)}
      >
        {title}

        {icon ? (
          icon
        ) : (
          <ChevronUpIcon
            className={`icon ${expanded ? "-rotate-180" : "rotate-0"}`}
          ></ChevronUpIcon>
        )}
      </Button>

      {expanded && (
        <SpringBounceWhenInView
          className={`absolute right-0 z-50 w-[18.75rem] rounded-xl bg-gray-100 p-6 text-base themed:bg-white themed:text-accent ${
            boxPlacement === "under"
              ? "top-12"
              : boxPlacement === "over"
              ? "bottom-12"
              : ""
          }`}
        >
          {children}

          <Button
            variant="contained"
            className="mt-4 flex items-center justify-end gap-0.5 text-xs font-bold"
            onClick={() => setExpanded(false)}
          >
            <Image
              width={32}
              height={32}
              src="/images/items/CI_NSwitch_MarioStrikersBLF_AW_Items_Star.png"
              alt="Nintendo star item"
            />
            Verstanden
          </Button>
        </SpringBounceWhenInView>
      )}
    </div>
  );
};

export default Tooltip;
