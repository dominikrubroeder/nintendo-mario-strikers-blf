import { useState } from 'react';
import { ChevronUpIcon } from '@heroicons/react/24/solid';
import SpringBounceWhenInView from '../animation/SpringBounceWhenInView';
import Button from './Button';
import Image from 'next/image';

interface TooltipProps {
  title: any;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ title, children }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative">
      <Button
        variant="icon-text"
        onClick={() => setExpanded((previousState) => !previousState)}
      >
        {title}
        <ChevronUpIcon
          className={`icon ${expanded ? '-rotate-180' : 'rotate-0'}`}
        ></ChevronUpIcon>
      </Button>

      {expanded && (
        <SpringBounceWhenInView
          delay={0}
          className="absolute right-0 top-12 z-50 w-max max-w-xs rounded-xl bg-gray-100 p-6 text-base themed:bg-white themed:text-accent"
        >
          {children}

          <Button
            variant="unstyled"
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
