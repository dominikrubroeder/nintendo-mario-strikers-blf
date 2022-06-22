import { useState } from 'react';
import { ChevronUpIcon } from '@heroicons/react/solid';
import SpringBounceWhenInView from './animation/SpringBounceWhenInView';

const Tooltip = (props) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative">
      <div
        className="flex items-center"
        onClick={() => setExpanded((previousState) => !previousState)}
      >
        {props.title}
        <ChevronUpIcon
          className={`h-5 w-5 transition-all ${
            expanded ? 'rotate-180' : 'rotate-0'
          }`}
        ></ChevronUpIcon>
      </div>

      {expanded && (
        <SpringBounceWhenInView
          delay={0}
          className="text-themed absolute right-0 top-8 w-max p-4 rounded-xl z-50 before:w-8 before:h-8 themed:bg-white"
        >
          {props.children}
        </SpringBounceWhenInView>
      )}
    </div>
  );
};

export default Tooltip;
