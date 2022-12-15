import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import Layout from '../../components/layout';

const TestingPage: React.FC = () => {
  const controls1 = useAnimation();
  const controls2 = useAnimation();

  const onClickHandler = () => {
    controls1.start({
      height: ['0%', '80%', '100%', '0%'],
    });

    controls2.start({
      scale: [0.7, 0.9, 2, 1],
    });
  };

  return (
    <Layout>
      <section className="min-h-screen-header flex items-center justify-center p-4">
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
              exit={{ height: '100%' }}
              transition={{
                type: 'spring',
                delay: 0.2,
                duration: 2,
              }}
            ></motion.div>

            <img
              src="/images/characters/NSwitch-character-sketch-mario.png"
              alt="Character image animation"
              className="h-64"
            />
          </motion.div>
        </AnimatePresence>
      </section>
    </Layout>
  );
};

export default TestingPage;
