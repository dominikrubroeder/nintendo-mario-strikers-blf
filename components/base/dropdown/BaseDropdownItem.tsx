import { useState } from 'react';
import { ChevronRightIcon } from '@heroicons/react/outline';

const BaseDropdownItem = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <h3
        className="flex items-top gap-1 cursor-pointer"
        onClick={() => {
          setIsOpen((previousState) => !previousState);
        }}
      >
        <ChevronRightIcon
          className={`w-4 h-4 shrink-0 mt-1 transition-all ${
            isOpen ? 'rotate-90' : 'rotate-0'
          }`}
        ></ChevronRightIcon>{' '}
        {props.headline}
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
