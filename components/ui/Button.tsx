import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import AppContext from '../../store/appContext';
import AudioContext from '../../store/audioContext';

interface ButtonProps {
  variant: 'contained' | 'text';
  text?: string;
  children?: React.ReactNode | string;
  icon?: JSX.Element;
  hasIconLeft?: boolean;
  hasIconRight?: boolean;
  href?: string;
  className?: string;
  disabled?: boolean;
  sound?: 'coin' | 'nintendo-woho' | 'nintendo-switch-click' | 'character';
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'contained',
  text,
  children,
  icon,
  hasIconLeft,
  hasIconRight,
  href,
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
        appCtx?.selectedCharacter
          ? audioCtx?.setSound(
              `/audio/sound-${appCtx?.selectedCharacter}-0.mp3`
            )
          : audioCtx?.setSound(`/audio/sound-mario-0.mp3`);
      default:
        audioCtx?.setSound(null);
    }

    if (onClick) onClick();

    if (href) router.push(href);
  };

  let variantClassName =
    variant === 'contained'
      ? 'button--contained'
      : variant === 'text'
      ? 'button--text'
      : 'button--contained';

  return (
    <button
      className={`${variantClassName} ${className ? className : null}`}
      disabled={disabled}
      onClick={onClickHandler}
    >
      {hasIconLeft && icon ? icon : null}
      {text ? text : null}
      {children ? children : null}
      {hasIconRight && icon ? icon : null}
    </button>
  );
};

export default Button;
