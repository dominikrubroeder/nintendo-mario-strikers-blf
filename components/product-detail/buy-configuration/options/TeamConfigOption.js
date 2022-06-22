import Image from 'next/image';
import { useContext, useRef } from 'react';
import AppContext from '../../../../store/app-context';

export default function TeamConfigOption(props) {
  const appCtx = useContext(AppContext);

  const computedTitle = (
    props.name.charAt(0).toUpperCase() + props.name.slice(1)
  ).replace('-', ' ');
  const audioRef = useRef();

  const onClickHandler = () => {
    if (localStorage.getItem('interactiveAudio') == 'true')
      audioRef.current.play();
    props.onClick();
  };

  return (
    <div
      className={`group relative flex items-center justify-center h-96 rounded-3xl cursor-pointer hover:border-gray-300 hover:bg-themed-dark hover:border-themed-dark transition-all ${
        appCtx.theme === props.name ? 'bg-themed-dark' : ''
      }`}
      onClick={onClickHandler}
    >
      <div className="grid gap-2 text-center">
        <audio src={props.sound} ref={audioRef}></audio>
        <div
          className="w-8 h-8 flex items-center justify-center absolute top-6 right-6 rounded-full opacity-0 bg-gray-100 bg-themed group-hover:opacity-100"
          onClick={() => props.setShowTheCharacterOverlay(props.name)}
        >
          i
        </div>
        <Image
          src={props.image}
          alt={props.name}
          className="z-10 transition-all group-hover:scale-125"
          width={256}
          height={256}
        />
        <h3 className="absolute w-full left-1/2 bottom-12 -translate-x-1/2 text-6xl tracking-normal uppercase font-bold transition-all group-hover:scale-125">
          {computedTitle}
        </h3>
      </div>
    </div>
  );
}
