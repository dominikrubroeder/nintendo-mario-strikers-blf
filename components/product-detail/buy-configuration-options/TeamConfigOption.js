import { useRef } from 'react';

export default function TeamConfigOption(props) {
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
      className={`flex items-center justify-center h-56 rounded-3xl cursor-pointer hover:border-gray-300 hover:bg-themed-dark hover:border-themed-dark transition-all ${
        props.selectedTeam === props.name ? 'bg-themed-dark' : ''
      }`}
      onClick={onClickHandler}
    >
      <div className="grid gap-2 text-center">
        <audio src={props.sound} ref={audioRef}></audio>
        <img
          src={`/images/characters/${props.name}-sketch.png`}
          alt={props.name}
          className="h-40"
        />
        <p>{computedTitle}</p>
      </div>
    </div>
  );
}
