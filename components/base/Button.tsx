import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant: string;
  className?: string;
  disabled?: boolean;
  sound?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  variant,
  className,
  disabled = false,
  sound,
  onClick,
}) => {
  const router = useRouter();
  const audioRef = useRef<null | HTMLAudioElement>(null);
  const [soundFile, setSoundFile] = useState<null | string>(null);

  const onClickHandler = () => {
    if (sound) audioRef.current!.play();

    if (href) {
      setTimeout(() => {
        router.push(href);
      }, 650);
    }

    if (onClick) onClick();
  };

  useEffect(() => {
    if (sound) {
      switch (sound) {
        case 'coin':
          setSoundFile('/audio/nintendo-super-mario-coin.wav');
          break;
        case 'nintendo-woho':
          setSoundFile('/audio/nintendo-woohoo.wav');
          break;
        default:
          '';
      }
    }
  }, [sound]);

  return (
    <button
      className={`transition-all disabled:opacity-10 disabled:cursor-not-allowed ${
        variant === 'contained'
          ? `text-white px-4 py-2 rounded-full bg-accent hover:bg-red-700 themed:bg-signal text-themed themed:hover:bg-signal-dark ${
              className ? className : ''
            }`
          : ''
      } ${
        variant === 'outlined'
          ? `text-accent themed:text-signal px-4 py-2 rounded-full border border-red-600 hover:bg-accent hover:text-white ${
              className ? className : ''
            }`
          : ''
      } ${
        variant === 'text'
          ? `text-accent themed:text-signal px-4 py-2 rounded-full transition-all duration-300 hover:bg-accent/10 themed:hover:bg-signal-dark/40 ${
              className ? className : ''
            }`
          : ''
      }`}
      disabled={disabled}
      onClick={onClickHandler}
    >
      {/* Add playing sounds when button is clicked (based on currently selected theme? Mario -> It'see me, Mario, or Nintendo Switch click sound */}
      {sound && <audio src={soundFile!} ref={audioRef}></audio>}
      {children}
    </button>
  );
};

export default Button;
