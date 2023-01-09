import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

const LoadingCharacter: React.FC = () => {
  const controls1 = useAnimation();
  const controls2 = useAnimation();

  const onClickHandler = () => {
    controls1.start({
      height: ['0%', '80%', '100%', '0%'],
      transition: {
        type: 'spring',
        duration: 1.6,
      },
    });

    controls2.start({
      scale: [0.7, 0.9, 2, 1],
      transition: {
        type: 'spring',
        duration: 1.6,
      },
    });
  };

  return (
    <AnimatePresence>
      <motion.div
        className="interactive relative"
        animate={controls2}
        onMouseUp={onClickHandler}
      >
        <motion.div
          className="absolute left-0 bottom-0 z-10 w-full rounded-xl bg-cover bg-bottom"
          style={{
            backgroundImage: `url(/images/characters/NSwitch-character-sketch-mario-desaturated.png)`,
          }}
          initial={{ height: '0' }}
          animate={controls1}
        ></motion.div>

        <Image
          src="/images/characters/NSwitch-character-sketch-mario.png"
          alt="Character image animation"
          width="256"
          height="256"
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingCharacter;
