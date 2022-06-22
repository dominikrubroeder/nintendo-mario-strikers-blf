import { useState, useEffect } from 'react';
import { VolumeUpIcon, VolumeOffIcon } from '@heroicons/react/solid';

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
      className={`flex items-center gap-1 text-xs cursor-pointer ${
        enabled ? 'text-accent' : 'text-gray-400'
      }`}
      onClick={toggle}
    >
      <span>{props.label}</span>
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
          {enabled ? (
            <VolumeUpIcon className="w-3 h-3"></VolumeUpIcon>
          ) : (
            <VolumeOffIcon className="w-3 h-3"></VolumeOffIcon>
          )}
        </span>
      </div>
    </div>
  );
};

export default BaseToggle;
