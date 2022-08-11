import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

const BaseButton = ({
  children,
  isLink,
  href,
  variant,
  className,
  disabled,
  playSound,
  sound,
  onClick,
}) => {
  const router = useRouter();
  const audioRef = useRef();
  const [soundFile, setSoundFile] = useState('');

  const onClickHandler = () => {
    if (playSound) audioRef.current.play();

    if (isLink) {
      setTimeout(() => {
        router.push(href);
      }, 650);
    }

    if (onClick) onClick();
  };

  useEffect(() => {
    if (playSound) {
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
  }, [playSound, sound]);

  return (
    <button
      className={`transition-all disabled:opacity-10 disabled:cursor-not-allowed ${
        variant === 'contained'
          ? `text-white px-4 py-2 rounded-full bg-accent hover:bg-red-700 themed:bg-signal themed:hover:bg-signal-dark ${className}`
          : ''
      } ${
        variant === 'outlined'
          ? `text-accent themed:text-signal px-4 py-2 rounded-full border border-red-600 hover:bg-accent hover:text-white ${className}`
          : ''
      } ${
        variant === 'text'
          ? `text-accent themed:text-signal px-4 py-2 rounded-full transition-all duration-300 hover:bg-accent/10 themed:hover:bg-signal-dark/40 ${className}`
          : ''
      }`}
      disabled={disabled}
      onClick={onClickHandler}
    >
      {/* Add playing sounds when button is clicked (based on currently selected theme? Mario -> It'see me, Mario, or Nintendo Switch click sound */}
      {playSound && <audio src={soundFile} ref={audioRef}></audio>}
      {children}
    </button>
  );
};

export default BaseButton;
