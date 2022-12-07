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
      className="flex cursor-pointer items-center gap-1 text-xs text-accent"
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
          <span className="text-accent">
            {enabled ? enabledIcon : disabledIcon}
          </span>
        </span>
      </div>
    </div>
  );
};

export default Toggle;
