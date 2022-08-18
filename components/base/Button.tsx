import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import SoundContext from '../../store/soundContext';

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
  const soundCtx = useContext(SoundContext);

  const onClickHandler = () => {
    switch (sound) {
      case 'coin':
        soundCtx?.setSound('/audio/nintendo-super-mario-coin.wav');
        break;
      case 'nintendo-woho':
        soundCtx?.setSound('/audio/nintendo-woohoo.wav');
        break;
      case 'nintendo-switch-click':
        soundCtx?.setSound('/audio/nintendo-switch-click.mp3');
      default:
        soundCtx?.setSound(null);
    }

    if (href) {
      router.push(href);
    }

    if (onClick) onClick();
  };

  return (
    <button
      className={`transition-all disabled:opacity-10 disabled:cursor-not-allowed hover:scale-110 ${
        variant === 'contained'
          ? `text-white px-4 py-2 rounded-full bg-accent hover:bg-red-700 themed:bg-signal themed:text-white themed:hover:bg-signal-dark ${
              className ? className : ''
            }`
          : ''
      } ${
        variant === 'outlined'
          ? `text-accent themed:text-signal px-4 py-2 rounded-full border border-signal hover:scale-110 hover:bg-themed-dark hover:text-white ${
              className ? className : ''
            }`
          : ''
      } ${
        variant === 'text'
          ? `text-accent themed:text-white px-4 py-2 rounded-full transition-all duration-300 hover:scale-110 hover:bg-accent/10 themed:hover:bg-signal-dark/40 ${
              className ? className : ''
            }`
          : ''
      } ${
        variant === 'icon'
          ? `flex items-center justify-center hover:scale-110 ${
              className ? className : ''
            }`
          : ''
      } ${variant === 'unstyled' ? `${className ? className : ''}` : ''}`}
      disabled={disabled}
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
};

export default Button;
