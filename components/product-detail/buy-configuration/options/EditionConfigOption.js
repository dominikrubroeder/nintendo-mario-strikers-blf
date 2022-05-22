import { useRef } from 'react';

export default function EditionConfigOption(props) {
  const audioRef = useRef();

  const onClickHandler = () => {
    audioRef.current.play();
    props.onClick();
  };

  return (
    <div
      className={`w-full border hover:border-gray-300 rounded-3xl p-8 cursor-pointer ${
        props.selectedEdition === props.edition
          ? 'border-accent hover:border-accent bg-themed-dark hover:border-themed'
          : 'border-gray-200 border-themed-dark'
      }`}
      onClick={onClickHandler}
    >
      <div className="grid gap-4">
        <audio
          src="/audio/nintendo-switch-click.mp3"
          type="audio/mpeg"
          ref={audioRef}
        ></audio>
        <header className="grid gap-2 md:flex md:justify-between md:align-top">
          <h3 className="text-xl font-bold leading-5">
            Mario Strikers: Battle League Football
            <small className="text-accent font-normal block">
              {props.edition} Edition
              {props.edition === 'Nostalgie' && props.team
                ? ` – ${props.team.toUpperCase()}`
                : ''}
            </small>
          </h3>

          <div>
            <h3 className="text-xl">{props.price} €</h3>
            <p className="text-sm">(inkl. MwSt.)</p>
          </div>
        </header>
        <div>
          {props.edition === 'Nostalgie' && props.team && (
            <img
              src={`/images/characters/${props.team
                .replace(' ', '')
                .toLowerCase()}-sketch.jpg`}
              alt={props.team}
              className="h-20"
            />
          )}
          {props.selectedEdition === props.edition && props.children}
        </div>
      </div>
    </div>
  );
}
