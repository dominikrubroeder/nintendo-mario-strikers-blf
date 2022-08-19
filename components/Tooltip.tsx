import { useState } from 'react';
import { ChevronUpIcon, CheckCircleIcon } from '@heroicons/react/solid';
import SpringBounceWhenInView from './animation/SpringBounceWhenInView';

const Tooltip = (props) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative">
      <div
        className="flex items-center cursor-pointer"
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
          className="text-themed absolute right-0 top-8 w-max max-w-xs p-6 rounded-xl z-50 bg-slate-100 themed:bg-white"
        >
          {props.children}
          <p
            className="flex items-center justify-end gap-1 font-bold mt-4"
            onClick={() => setExpanded(false)}
          >
            <CheckCircleIcon className="w-4 h-4"></CheckCircleIcon>
            Verstanden
          </p>
        </SpringBounceWhenInView>
      )}
    </div>
  );
};

export default Tooltip;
