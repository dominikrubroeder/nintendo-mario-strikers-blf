import Image from 'next/image';
import { Dispatch, SetStateAction, useContext, useRef } from 'react';
import AppContext from '../store/appContext';
import AudioContext from '../store/audioContext';

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
      className={`group relative flex items-center justify-center h-96 rounded-3xl cursor-pointer hover:border-gray-300 hover:bg-accent-soft themed:hover:bg-accent-dark hover:border-accent-dark transition-all ${
        appCtx?.selectedCharacter === id
          ? 'bg-accent themed:bg-accent-dark'
          : ''
      }`}
      onClick={onClickHandler}
    >
      <div className="grid gap-2 text-center">
        <audio src={sound} ref={audioRef}></audio>

        <div
          className="w-8 h-8 flex items-center justify-center absolute top-6 right-6 rounded-full opacity-0 bg-gray-100 themed:bg-accent group-hover:opacity-100 interactive"
          onClick={() => setShowCharacterOverlay(true)}
        >
          i
        </div>
        <Image
          src={image}
          alt={name}
          className={`z-10 transition-all group-hover:scale-125 ${
            appCtx?.selectedCharacter === id ? 'scale-125' : 'scale-100'
          }`}
          width={256}
          height={256}
        />
        <h3 className="absolute left-1/2 bottom-12 -translate-x-1/2 text-5xl tracking-normal uppercase font-bold transition-all md:group-hover:scale-125 md:text-6xl">
          {name}
        </h3>
      </div>
    </div>
  );
};

export default CharacterCard;
