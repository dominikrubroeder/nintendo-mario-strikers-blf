import Image from 'next/image';
import { useContext, useRef } from 'react';
import { Edition, Editions } from '../../../data/editions';
import AppContext from '../../../store/app-context';

interface EditionConfigOptionProps {
  edition: Edition;
  onClick: () => void;
  price: number;
  children: React.ReactNode;
}

const EditionConfigOption: React.FC<EditionConfigOptionProps> = ({
  edition,
  onClick,
  price,
  children,
}) => {
  const appCtx = useContext(AppContext);
  const audioRef = useRef<null | HTMLAudioElement>(null);

  const onClickHandler = () => {
    audioRef.current!.play();
    onClick();
  };

  return (
    <div
      className={`w-full border hover:border-gray-300 rounded-3xl p-8 cursor-pointer ${
        edition.id === appCtx.edition
          ? 'border-accent hover:border-accent bg-themed-dark hover:border-themed'
          : 'border-gray-200 border-themed-dark'
      }`}
      onClick={onClickHandler}
    >
      <div className="grid gap-4">
        <audio src="/audio/nintendo-switch-click.mp3" ref={audioRef}></audio>

        <header className="grid gap-2 md:flex md:justify-between md:align-top">
          <h3 className="text-xl font-bold leading-5">
            Mario Strikers: Battle League Football
            <small className="text-accent themed:text-white font-normal block">
              <span>{`${edition.title} Edition`}</span>
              {edition.id === Editions.nostalgiaId && appCtx.theme
                ? ` – ${appCtx.theme.toUpperCase()}`
                : ''}
            </small>
          </h3>

          <div>
            <h3 className="text-xl">{price} €</h3>
            <p className="text-sm">(inkl. MwSt.)</p>
          </div>
        </header>
        <div>
          {edition.id === Editions.nostalgiaId && appCtx.theme && (
            <Image
              width={80}
              height={80}
              src={`/images/characters/NSwitch-character-sketch-${appCtx.theme
                .replace(' ', '')
                .toLowerCase()}.png`}
              alt={appCtx.theme}
            />
          )}
          {appCtx.edition === edition.id && children}
        </div>
      </div>
    </div>
  );
};

export default EditionConfigOption;