import Image from 'next/image';
import { Dispatch, SetStateAction, useContext, useRef } from 'react';
import AppContext from '../../store/appContext';
import AudioContext from '../../store/audioContext';

interface CharacterCardProps {
  id: string;
  name: string;
  sound: string;
  image: string;
  onClick?: () => void;
  setShowCharacterOverlay: Dispatch<SetStateAction<boolean>>;
}

const CharacterCard: React.FC<CharacterCardProps> = ({
  id,
  name,
  sound,
  image,
  onClick,
  setShowCharacterOverlay,
}) => {
  const appCtx = useContext(AppContext);
  const audioCtx = useContext(AudioContext);
  const audioRef = useRef<null | HTMLAudioElement>(null);

  const onClickHandler = () => {
    if (audioCtx?.hasInteractiveAudio) audioRef.current?.play();
    if (onClick) onClick();
  };

  return (
    <div
      className={`group relative flex h-96 cursor-pointer items-center justify-center rounded-3xl transition-all hover:border-gray-300 hover:border-accent-dark hover:bg-accent-soft themed:hover:bg-accent-dark ${
        appCtx?.selectedCharacter === id
          ? 'bg-accent themed:bg-accent-dark'
          : ''
      }`}
      onClick={onClickHandler}
    >
      <div className="grid gap-2 text-center">
        <audio src={sound} ref={audioRef}></audio>

        <div
          className="interactive absolute top-6 right-6 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 opacity-100 themed:bg-accent-dark lg:opacity-0 lg:group-hover:opacity-100"
          onClick={() => setShowCharacterOverlay(true)}
        >
          i
        </div>

        <Image
          src={image}
          alt={name}
          className="z-10 transition-all group-hover:scale-125"
          width={256}
          height={256}
          priority
        />

        <h3 className="absolute left-1/2 bottom-12 -translate-x-1/2 text-5xl font-bold uppercase tracking-normal text-orange-400 transition-all themed:text-white md:text-6xl md:group-hover:scale-125">
          {name}
        </h3>
      </div>
    </div>
  );
};

export default CharacterCard;
