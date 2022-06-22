import { useState } from 'react';
import SpringBounceWhenInView from './animation/SpringBounceWhenInView';

const Tooltip = (props) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative">
      <div onClick={() => setExpanded((previousState) => !previousState)}>
        {props.title}
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
