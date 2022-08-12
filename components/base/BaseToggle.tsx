import { useState } from 'react';

const BaseToggle = (props) => {
  const [enabled, setEnabled] = useState(props.enabled || true);

  const toggle = () => {
    setEnabled((previousState) => !previousState);

    // If there are actions onClick controlled by the outter component
    if (props.onClick) props.onClick();
  };

  return (
    <div
      className={`flex items-center gap-1 text-xs cursor-pointer ${
        enabled ? 'text-accent' : 'text-gray-400'
      }`}
      onClick={toggle}
    >
      <span className="themed:text-white">{props.label}</span>

      <div
        className={`flex w-10 p-1 rounded-full bg-gray-100 transition-all ${
          enabled ? 'bg-accent' : ''
        }`}
      >
        <span
          className={`h-4 w-4 rounded-full flex items-center justify-center transition-all ${
            enabled ? 'bg-white translate-x-full' : 'bg-gray-300'
          }`}
        >
          {enabled ? props.enabledIcon : props.disabledIcon}
        </span>
      </div>
    </div>
  );
};

export default BaseToggle;
