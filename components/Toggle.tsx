import React from 'react';

interface ToggleProps {
  label?: string;
  enabled: boolean;
  onClick: (() => void) | undefined;
  enabledIcon: any;
  disabledIcon: any;
}

const Toggle: React.FC<ToggleProps> = ({
  label,
  enabled = false,
  onClick,
  enabledIcon,
  disabledIcon,
}) => {
  return (
    <div
      className="flex items-center gap-1 text-xs cursor-pointer text-accent"
      onClick={onClick}
    >
      {label && <span className="themed:text-white">{label}</span>}

      <div
        className={`flex w-10 p-1 rounded-full transition-all ${
          enabled ? 'bg-accent' : 'bg-gray-100 themed:bg-accent'
        }`}
      >
        <span
          className={`h-4 w-4 rounded-full flex items-center justify-center transition-all ${
            enabled ? 'bg-white translate-x-full' : 'bg-white'
          }`}
        >
          {enabled ? enabledIcon : disabledIcon}
        </span>
      </div>
    </div>
  );
};

export default Toggle;
