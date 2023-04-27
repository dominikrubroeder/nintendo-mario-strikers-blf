import { motion } from 'framer-motion';
import Image from 'next/image';
import { useContext } from 'react';
import { Edition } from '../data/editions';
import AppContext from '../store/appContext';
import AudioContext from '../store/audioContext';
import QuestionBlock from './img/QuestionBlock';

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
    if (onClick) onClick();
  };

  return (
    <div
      className={`w-full rounded-3xl border p-8 hover:border-gray-300 ${
        edition.name === appCtx?.selectedEdition
          ? 'border-accent bg-accent text-white hover:border-accent themed:bg-accent-dark'
          : 'interactive border-gray-300 themed:border-accent-dark themed:hover:border-white'
      }`}
      onClick={onClickHandler}
    >
      <div className='grid gap-4'>
        <header className='grid gap-2 md:flex md:justify-between md:align-top'>
          <h3 className='text-xl font-bold leading-5'>
            Mario Strikers: Battle League Football
            <small
              className={`font-normal block ${
                edition.team === appCtx?.selectedTeam
                  ? 'text-current'
                  : 'text-accent themed:text-white'
              }`}
            >
              <span>{`${edition.nameUppercase} Edition`}</span>
              {edition.team && appCtx?.selectedTeam
                ? ` – ${appCtx?.selectedTeam.toUpperCase()}`
                : ''}
            </small>
          </h3>

          <div>
            <h3 className='text-right text-xl'>
              {appCtx?.showPromo && edition.team ? (
                <div className='flex items-center justify-end gap-1'>
                  <span className='text-xs line-through'>{price}</span>
                  <span>79.99 €</span>
                </div>
              ) : (
                price
              )}
            </h3>
            <p className='text-right text-sm'>(inkl. MwSt.)</p>
            {appCtx?.showPromo && edition.team && (
              <p className='mt-2 flex w-max items-center justify-end gap-1 text-right text-sm'>
                Easter Egg Promo -10% <QuestionBlock size={24} />
              </p>
            )}
          </div>
        </header>

        {appCtx?.hasTeam && edition.name === 'team' && (
          <motion.div
            key='editionDescription'
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: 1,
              height: 'auto',
            }}
            exit={{
              opacity: 1,
              overflow: 'hidden',
            }}
            transition={{
              type: 'spring',
              stiffness: 400,
            }}
          >
            <div className='flex flex-wrap items-center gap-2'>
              <Image
                width={64}
                height={64}
                src={`/images/teams/${appCtx.selectedTeam}.png`}
                alt='Team image'
              />

              <div className='flex flex-wrap items-center gap-2'>
                <Image
                  width={53}
                  height={64}
                  src={`/images/teams/tshirt/${appCtx.selectedTeam}.jpg`}
                  alt='Team image'
                  className='rounded-xl'
                />

                <span>+</span>

                <Image
                  width={120}
                  height={80}
                  src='/images/logos/CI_NSwicth_Online_Logo.png'
                  alt='Nintendo Switch Online Logo – 3 months'
                  className='object-contain'
                />
              </div>
            </div>

            {children}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default EditionConfigOption;
