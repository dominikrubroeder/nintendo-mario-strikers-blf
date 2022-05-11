import { useRef } from 'react';

export default function BaseButton(props) {
  const variant = props.variant;
  const outterClasses = props.className;
  const audioRef = useRef();

  const onClickHandler = () => {
    if (props.playSound) audioRef.current.play();
    if (props.onClick) props.onClick();
  };

  return (
    <button
      className={`transition-all disabled:opacity-10 disabled:cursor-not-allowed ${
        variant === 'contained'
          ? `text-white px-4 py-2 rounded-full bg-accent hover:bg-red-700 ${outterClasses}`
          : ''
      } ${
        variant === 'outlined'
          ? `text-accent px-4 py-2 rounded-full bg-white border border-red-600 hover:bg-accent hover:text-white ${outterClasses}`
          : ''
      } ${
        variant === 'text'
          ? `text-accent px-4 py-2 rounded-full transition-all duration-300 hover:bg-accent/10 ${outterClasses}`
          : ''
      }`}
      disabled={props.disabled}
      onClick={onClickHandler}
    >
      {/* Add playing sounds when button is clicked (based on currently selected theme? Mario -> It'see me, Mario, or Nintendo Switch click sound */}
      {props.playSound && (
        <audio
          src="/audio/nintendo-super-mario-coin.wav"
          ref={audioRef}
        ></audio>
      )}
      {props.children}
    </button>
  );
}
