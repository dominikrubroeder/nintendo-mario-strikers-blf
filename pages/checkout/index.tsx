import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import Layout from '../../components/layout';
import { AnimatePresence, motion } from 'framer-motion';

const Checkout: NextPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 6600);
  }, []);

  return (
    <Layout pageTitle="Checkout">
      <section className="fixed inset-0 flex min-h-screen items-center justify-center">
        {!isLoading && <div>Show Checkout Screen</div>}

        {isLoading && (
          <AnimatePresence>
            <motion.video
              autoPlay
              muted
              className="rounded-xl border-4 border-black"
              initial={{ y: 100, width: 480, opacity: 0 }}
              animate={{ y: 0, width: 768, opacity: 1 }}
              exit={{ y: 1000, width: 320, opacity: 0 }}
              transition={{ delay: 0.6 }}
            >
              <source
                src="/videos/nintendo-mario-strikers-blf-mario-superstrike.webm"
                type="video/webm"
              />
            </motion.video>
          </AnimatePresence>
        )}
      </section>
    </Layout>
  );
};

export default Checkout;
