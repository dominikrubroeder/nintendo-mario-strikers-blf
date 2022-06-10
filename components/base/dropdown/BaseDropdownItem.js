import { useState } from 'react';
import ArrowRight from '../../icons/ArrowRight';

const BaseDropdownItem = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <h3
        className="flex gap-1 cursor-pointer"
        onClick={() => {
          setIsOpen((previousState) => !previousState);
        }}
      >
        <ArrowRight className="shrink-0" /> {props.headline}
      </h3>
      <div
        className={
          isOpen
            ? 'mt-2 opacity-100 h-full visible'
            : 'mt-0 opacity-0 h-0 invisible'
        }
      >
        {props.children}
      </div>
    </div>
  );
};
export default BaseDropdownItem;
