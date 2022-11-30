import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/router';

interface SelectProps {
  options: {
    option: string;
    value: string;
    disabled?: boolean;
    href?: string;
  }[];
}

const Select: React.FC<SelectProps> = ({ options }) => {
  const router = useRouter();
  const [selected, setSelected] = useState(options[0]);
  const [isExpanded, setIsExpanded] = useState(false);

  const onClickHandler = (index: number) => {
    setSelected(options[index]);

    if (options[index].href) router.push(options[index].href ?? '/');

    setIsExpanded(false);
  };

  return (
    <div className="relative">
      <header
        onClick={() => setIsExpanded((previousState) => !previousState)}
        className="group flex cursor-pointer items-center gap-4"
      >
        <div className="text-theme-contrary group-hover:text-theme-contrary transition">
          {selected.value}
        </div>

        <ChevronRightIcon
          className={`h-5 w-5 text-accent transition ${
            isExpanded ? 'rotate-90' : 'rotate-0'
          }`}
        />
      </header>

      <AnimatePresence>
        {isExpanded && (
          <div className="absolute top-8 left-0 grid gap-4">
            {options.map((option, index) => (
              <div
                key={option.value}
                onClick={() => setSelected(option)}
                className={`max-w hover:text-theme-contrary cursor-pointer text-xs transition ${
                  option.value === selected.value ? 'text-theme-contrary' : ''
                }`}
              >
                <div
                  className={`${
                    option.disabled ? 'opacity-25' : 'opacity-100'
                  }`}
                  onClick={() => onClickHandler(index)}
                >
                  {option.value}
                </div>
              </div>
            ))}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Select;
