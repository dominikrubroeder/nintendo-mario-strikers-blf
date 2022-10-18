import React from 'react';

interface BaseToggleProps {
  label?: string;
  enabled: boolean;
  onClick: (() => void) | undefined;
  enabledIcon: any;
  disabledIcon: any;
}

const BaseToggle: React.FC<BaseToggleProps> = ({
  label,
  enabled = false,
  onClick,
  enabledIcon,
  disabledIcon,
}) => {
  return (
    <div
      className={`flex items-center gap-1 text-xs cursor-pointer ${
        enabled ? 'text-themed' : 'text-gray-400'
      }`}
      onClick={onClick}
    >
      {label && <span className="themed:text-white">{label}</span>}

      <div
        className={`flex w-10 p-1 rounded-full bg-gray-100 transition-all ${
          enabled ? 'bg-themed' : ''
        }`}
      >
        <span
          className={`h-4 w-4 rounded-full flex items-center justify-center transition-all ${
            enabled ? 'bg-white translate-x-full' : 'bg-gray-300'
          }`}
        >
          {enabled ? enabledIcon : disabledIcon}
        </span>
      </div>
    </div>
  );
};

export default BaseToggle;
