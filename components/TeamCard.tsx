import Image from "next/image";
import { useContext } from "react";
import AppContext from "../store/appContext";
import SharpShape from "./svg/SharpShape";

interface TeamCardProps {
  id: string;
  name: string;
  sound: string;
  image: string;
  selectable?: boolean;
}

const TeamCard: React.FC<TeamCardProps> = ({
  id,
  name,
  image,
  selectable = true,
}) => {
  const appCtx = useContext(AppContext);
  const isSelectedTeam = appCtx?.selectedTeam === id;

  const onMouseUpHandler = () => {
    if (selectable) appCtx?.setTeam(id);
  };

  return (
    <div
      className="interactive group relative flex h-96 cursor-pointer items-center justify-center rounded-3xl transition-all"
      onMouseUp={onMouseUpHandler}
    >
      {isSelectedTeam && (
        <>
          <div className="absolute -right-4 bottom-1/4 z-10 rotate-[61deg] rounded-xl p-2 text-xl font-bold uppercase italic text-signal">
            Team Edition
          </div>

          <div className="absolute -left-8 top-1/4 z-10 -rotate-[64deg] rounded-xl p-2 text-xl font-bold uppercase italic text-signal">
            Team Edition
          </div>
        </>
      )}

      <div className="z-10 grid gap-2 text-center">
        <div className="z-10 transition-all group-hover:scale-125">
          <Image src={image} alt={name} width={256} height={256} priority />
        </div>

        <h3 className="absolute left-1/2 bottom-12 z-0 -translate-x-1/2 text-5xl font-bold uppercase tracking-normal text-orange-400 transition-all themed:text-white md:text-6xl md:group-hover:scale-125">
          {name}
        </h3>
      </div>

      <SharpShape
        className={`absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 transition duration-200 ${
          isSelectedTeam
            ? "scale-100 opacity-100"
            : "scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100"
        }`}
      />
    </div>
  );
};

export default TeamCard;
