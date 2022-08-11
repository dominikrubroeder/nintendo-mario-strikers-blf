import { useContext, useRef } from 'react';
import AppContext from '../../../../store/app-context';

export default function EditionConfigOption(props) {
  const appCtx = useContext(AppContext);
  const audioRef = useRef();

  const onClickHandler = () => {
    audioRef.current.play();
    props.onClick();
  };

  return (
    <div
      className={`w-full border hover:border-gray-300 rounded-3xl p-8 cursor-pointer ${
        appCtx.edition === props.edition
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
            <small className="text-accent themed:text-white font-normal block">
              <span>
                {`${
                  props.edition.charAt(0).toUpperCase() + props.edition.slice(1)
                } Edition`}
              </span>
              {props.edition === 'nostalgie' && appCtx.theme
                ? ` – ${appCtx.theme.toUpperCase()}`
                : ''}
            </small>
          </h3>

          <div>
            <h3 className="text-xl">{props.price} €</h3>
            <p className="text-sm">(inkl. MwSt.)</p>
          </div>
        </header>
        <div>
          {props.edition === 'nostalgie' && appCtx.theme && (
            <img
              src={`/images/characters/NSwitch-character-sketch-${appCtx.theme
                .replace(' ', '')
                .toLowerCase()}.png`}
              alt={appCtx.theme}
              className="h-20 mb-4"
            />
          )}
          {appCtx.edition === props.edition && props.children}
        </div>
      </div>
    </div>
  );
}
