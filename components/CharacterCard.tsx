import Image from "next/image";
import { useContext } from "react";
import AppContext from "../store/appContext";

interface CharacterCardProps {
  id: string;
  name: string;
  sound: string;
  image: string;
  onClick?: () => void;
}

const CharacterCard: React.FC<CharacterCardProps> = ({
  id,
  name,
  image,
  onClick,
}) => {
  const appCtx = useContext(AppContext);
  const isSelectedCharacter = appCtx?.selectedCharacter === id;

  return (
    <div
      className={`interactive group relative flex h-96 cursor-pointer items-center justify-center rounded-3xl transition-all hover:border-gray-300 hover:border-accent-dark hover:bg-gray-100 themed:hover:bg-accent-dark ${
        isSelectedCharacter ? "bg-accent themed:bg-accent-dark" : ""
      }`}
      onMouseUp={onClick}
    >
      {isSelectedCharacter && (
        <div className="absolute -right-4 top-0 z-50 -translate-y-1/2 rounded-xl bg-signal p-2 italic">
          <span className="mr-1 uppercase">
            {appCtx.selectedCharacter && appCtx.selectedCharacter}
          </span>
          Team-Edition
        </div>
      )}

      <div className="grid gap-2 text-center">
        <div className="z-10 transition-all group-hover:scale-125">
          <Image src={image} alt={name} width={256} height={256} priority />
        </div>

        <h3 className="absolute left-1/2 bottom-12 z-0 -translate-x-1/2 text-5xl font-bold uppercase tracking-normal text-orange-400 transition-all themed:text-white md:text-6xl md:group-hover:scale-125">
          {name}
        </h3>
      </div>
    </div>
  );
};

export default CharacterCard;
