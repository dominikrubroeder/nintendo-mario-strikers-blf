import { useState, useEffect } from 'react';

const BaseToggle = (props) => {
  const [enabled, setEnabled] = useState(props.enabled || true);

  const toggle = () => {
    setEnabled((previousState) => !previousState);
  };

  useEffect(() => {
    if (enabled) {
      localStorage.setItem('interactiveAudio', true);
    } else {
      localStorage.setItem('interactiveAudio', false);
    }
  }, [enabled]);

  return (
    <div
      className={`flex items-center gap-1 text-xs w-40 ${
        enabled ? 'text-accent' : 'text-gray-400'
      }`}
    >
      <span>{props.label}</span>
      <div
        className={`flex w-10 p-1 rounded-full bg-gray-100 transition-all ${
          enabled ? 'bg-accent' : ''
        }`}
        onClick={toggle}
      >
        <span
          className={`h-4 w-4 rounded-full  transition-all ${
            enabled ? 'bg-white translate-x-full' : 'bg-gray-300'
          }`}
        ></span>
      </div>
    </div>
  );
};

export default BaseToggle;
