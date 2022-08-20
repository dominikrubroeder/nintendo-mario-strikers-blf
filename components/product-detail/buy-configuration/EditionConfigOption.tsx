import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useContext } from 'react';
import { Edition, Editions } from '../../../data/editions';
import AppContext from '../../../store/app-context';
import AudioContext from '../../../store/audioContext';

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
  const audioCtx = useContext(AudioContext);

  const onClickHandler = () => {
    audioCtx?.setSound('/audio/nintendo-switch-click.mp3');
    onClick();
  };

  return (
    <div
      className={`w-full border hover:border-gray-300 rounded-3xl p-8 cursor-pointer ${
        edition.id === appCtx.selectedEdition
          ? 'border-accent hover:border-accent bg-themed-dark hover:border-themed'
          : 'border-gray-200 border-themed-dark'
      }`}
      onClick={onClickHandler}
    >
      <div className="grid gap-4">
        <header className="grid gap-2 md:flex md:justify-between md:align-top">
          <h3 className="text-xl font-bold leading-5">
            Mario Strikers: Battle League Football
            <small className="text-accent themed:text-white font-normal block">
              <span>{`${edition.title} Edition`}</span>
              {edition.id === Editions.nostalgiaId && appCtx.selectedCharacter
                ? ` – ${appCtx.selectedCharacter.toUpperCase()}`
                : ''}
            </small>
          </h3>

          <div>
            <h3 className="text-xl">{price} €</h3>
            <p className="text-sm">(inkl. MwSt.)</p>
          </div>
        </header>

        <AnimatePresence>
          {appCtx.selectedEdition === edition.id && (
            <motion.div
              key="description"
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: 1,
                height: 'auto',
              }}
              exit={{
                opacity: 1,
              }}
              transition={{
                type: 'spring',
                stiffness: 400,
              }}
            >
              {edition.id === Editions.nostalgiaId &&
                appCtx.selectedCharacter && (
                  <Image
                    width={80}
                    height={80}
                    src={`/images/characters/NSwitch-character-sketch-${appCtx.selectedCharacter
                      .replace(' ', '')
                      .toLowerCase()}.png`}
                    alt={appCtx.selectedCharacter}
                  />
                )}

              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default EditionConfigOption;
