import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import AppContext from '../../store/appContext';
import AudioContext from '../../store/audioContext';

interface ButtonProps {
  children: React.ReactNode;
  variant:
    | 'contained'
    | 'outlined'
    | 'text'
    | 'icon-text'
    | 'icon'
    | 'unstyled';
  href?: string;
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
  const appCtx = useContext(AppContext);

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
      case 'character':
        console.log(
          `Set character sound... /audio/sound-${appCtx?.selectedCharacter}-0.mp3`
        );

        appCtx?.selectedCharacter
          ? audioCtx?.setSound(
              `/audio/sound-${appCtx?.selectedCharacter}-0.mp3`
            )
          : audioCtx?.setSound(`/audio/sound-mario-0.mp3`);
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
        'flex items-center justify-between gap-2 rounded-full px-4 py-2 text-white bg-accent hover:bg-accent-dark themed:bg-signal themed:text-white themed:hover:bg-signal-dark';
      break;
    case 'outlined':
      variantClassName =
        'flex items-center justify-between gap-2 rounded-full px-4 py-2 text-accent themed:text-signal border border-accent themed:border-signal hover:bg-accent themed:hover:bg-signal hover:text-white';
      break;
    case 'text':
      variantClassName =
        'rounded-full px-4 py-2 text-accent themed:text-white hover:bg-accent-soft themed:hover:bg-signal';
      break;
    case 'icon':
      variantClassName =
        'flex items-center justify-center text-accent fill-accent';
      break;
    case 'icon-text':
      variantClassName =
        'flex items-center justify-between gap-2 rounded-full px-4 py-2 text-accent themed:text-white hover:bg-accent-soft themed:hover:bg-signal';
      break;
    case 'unstyled':
      variantClassName = 'flex items-center justify-start';
    default:
      variantClassName = '';
      break;
  }

  return (
    <button
      className={`${variantClassName} interactive ${
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
