import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import AudioContext from '../../store/audioContext';

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
  const audioCtx = useContext(AudioContext);

  const onClickHandler = () => {
    switch (sound) {
      case 'coin':
        audioCtx?.setSound('/audio/nintendo-super-mario-coin.wav');
        break;
      case 'nintendo-woho':
        audioCtx?.setSound('/audio/nintendo-woohoo.wav');
        break;
      case 'nintendo-switch-click':
        audioCtx?.setSound('/audio/nintendo-switch-click.mp3');
      default:
        audioCtx?.setSound(null);
    }

    if (href) {
      router.push(href);
    }

    if (onClick) onClick();
  };

  let variantClassName;

  switch (variant) {
    case 'contained':
      variantClassName =
        'text-white px-4 py-2 rounded-full bg-accent hover:bg-red-700 themed:bg-signal themed:text-white themed:hover:bg-signal-dark';
      break;
    case 'outlined':
      variantClassName =
        'text-accent themed:text-signal px-4 py-2 rounded-full border border-signal hover:scale-110 hover:bg-themed-dark hover:text-white';
      break;
    case 'text':
      variantClassName =
        'text-accent themed:text-white px-4 py-2 rounded-full transition-all duration-300 hover:scale-110 hover:bg-accent/10 themed:hover:bg-signal-dark/40';
      break;
    case 'icon':
      variantClassName = 'flex items-center justify-center';
      break;
    case 'unstyled':
      variantClassName = '';
    default:
      variantClassName = '';
      break;
  }

  return (
    <button
      className={`disabled:opacity-10 interactive ${variantClassName} ${
        className ? className : ''
      }`}
      disabled={disabled}
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
};

export default Button;
