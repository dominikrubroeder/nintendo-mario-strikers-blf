import { useRef } from 'react';

export default function TeamConfigOption(props) {
  const computedTitle = (
    props.name.charAt(0).toUpperCase() + props.name.slice(1)
  ).replace('-', ' ');
  const audioRef = useRef();

  const setTheme = () => {
    if (localStorage.getItem('interactiveAudio') == 'true')
      audioRef.current.play();
    props.onClick();
  };

  return (
    <div
      className={`group relative flex items-center justify-center h-96 rounded-3xl cursor-pointer hover:border-gray-300 hover:bg-themed-dark hover:border-themed-dark transition-all ${
        props.selectedTeam === props.name ? 'bg-themed-dark' : ''
      }`}
      onClick={setTheme}
    >
      <div className="grid gap-2 text-center">
        <audio src={props.sound} ref={audioRef}></audio>
        <div
          className="w-8 h-8 flex items-center justify-center absolute top-6 right-6 rounded-full opacity-0 bg-gray-100 bg-themed group-hover:opacity-100"
          onClick={() => props.setShowTheCharacterOverlay(props.name)}
        >
          i
        </div>
        <img src={props.image} alt={props.name} className="h-64 z-10" />
        <h3 className="absolute w-full left-1/2 bottom-12 -translate-x-1/2 text-6xl tracking-normal uppercase font-bold">
          {computedTitle}
        </h3>
      </div>
    </div>
  );
}
