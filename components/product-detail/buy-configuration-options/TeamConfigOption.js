import { useRef } from 'react';

export default function TeamConfigOption(props) {
  const audioRef = useRef();

  const onClickHandler = () => {
    if (props.sound && localStorage.getItem('interactiveAudio') == 'true')
      if (props.onClick) audioRef.current.play();
    props.onClick();
  };

  return (
    <div
      className={`flex items-center justify-center h-56 rounded-3xl cursor-pointer border hover:border-gray-300 ${
        props.selectedTeam === props.teamTitle.toLowerCase()
          ? 'border-accent hover:border-accent theme-mario:hover:border-white theme-luigi:hover:border-white'
          : 'border-gray-200 border-themed-dark hover:border-white'
      }`}
      onClick={onClickHandler}
    >
      {/* Add character image: https://mario.fandom.com/de/wiki/Mario_Smash_Football */}
      {/* Make sound optional */}
      <div className="grid gap-2 text-center">
        {props.sound && <audio src={props.sound} ref={audioRef}></audio>}
        <img
          src={`/images/characters/${props.teamTitle
            .replace(' ', '')
            .toLowerCase()}-sketch.jpg`}
          alt={props.teamTitle}
          className="h-40"
        />
        <p>{props.teamTitle}</p>
      </div>
    </div>
  );
}
