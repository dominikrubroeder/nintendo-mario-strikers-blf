import { useState } from 'react';
import { ChevronUpIcon } from '@heroicons/react/24/solid';
import SpringBounceWhenInView from './animation/SpringBounceWhenInView';
import Button from './base/Button';
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
        variant="text"
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
          className="text-themed absolute right-0 top-12 w-max max-w-xs p-6 rounded-xl z-50 bg-slate-100 themed:bg-white"
        >
          {children}

          <Button
            variant="unstyled"
            className="flex items-center justify-end gap-0.5 font-bold mt-4 text-xs"
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
