import React from 'react';

interface ToggleProps {
  enabled?: boolean;
  label?: string;
  onClick?: () => void;
  enabledIcon?: JSX.Element;
  disabledIcon?: JSX.Element;
  className?: string;
}

const Toggle: React.FC<ToggleProps> = ({
  label,
  enabled = false,
  onClick,
  enabledIcon,
  disabledIcon,
  className,
}) => {
  return (
    <div
      className={`flex cursor-pointer items-center gap-1 text-xs text-accent ${
        className ? className : ''
      }`}
      onClick={onClick}
    >
      {label && <span className="themed:text-white">{label}</span>}

      <div
        className={`flex w-10 rounded-full p-1 transition-all ${
          enabled ? 'bg-accent' : 'bg-accent themed:bg-accent'
        }`}
      >
        <span
          className={`flex h-4 w-4 items-center justify-center rounded-full bg-white transition-all ${
            enabled ? 'translate-x-full' : ''
          }`}
        >
          {enabledIcon && disabledIcon && (
            <span className="text-accent">
              {enabled ? enabledIcon : disabledIcon}
            </span>
          )}
        </span>
      </div>
    </div>
  );
};

export default Toggle;
