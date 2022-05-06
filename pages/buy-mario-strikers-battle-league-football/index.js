import { motion } from 'framer-motion';
import TheCountdown from '../../components/TheCountdown';

const DetailPage = () => {
  return (
    <div>
      <section className="grid grid-cols-2 max-w-7xl mx-auto mt-20 px-8">
        <motion.img
          animate={{ opacity: [0, 1], y: [10, 0] }}
          exit={{ opacity: [1, 0] }}
          transition={{ ease: 'easeOut' }}
          className="sticky top-20 mx-auto max-h-[65vh] pt-12 md:pt-0"
          src="/images/product/mario-strikers-battle-league-football-cover.jpg"
          alt="Nintendo Switch"
        />
        <div className="grid gap-4 mx-auto px-4 w-full">
          <div className="grid gap-1">
            <h2 className="flex items-center gap-2 flex-wrap text-red-500">
              Nintendo Switch | 10. Juni 2022{' '}
              <span className="hidden md:inline-block"> | </span>
              <span>
                <TheCountdown />
              </span>
            </h2>
            <h1 className="text-3xl">Mario Strikers: Battle League Football</h1>
          </div>
          <div className="w-full h-40 rounded-3xl bg-gray-100"></div>
          <div className="w-full h-40 rounded-3xl bg-gray-100"></div>
          <div className="w-full h-40 rounded-3xl bg-gray-100"></div>
          <div className="w-full h-40 rounded-3xl bg-gray-100"></div>
          <div className="w-full h-40 rounded-3xl bg-gray-100"></div>
          <div className="w-full h-40 rounded-3xl bg-gray-100"></div>
          <div className="w-full h-40 rounded-3xl bg-gray-100"></div>
          <div className="w-full h-40 rounded-3xl bg-gray-100"></div>
          <div className="w-full h-40 rounded-3xl bg-gray-100"></div>
          <div className="w-full h-40 rounded-3xl bg-gray-100"></div>
          <div className="w-full h-40 rounded-3xl bg-gray-100"></div>
          <div className="w-full h-40 rounded-3xl bg-gray-100"></div>
        </div>
      </section>

      <section className="h-screen flex items-center justify-center">2</section>
      <section className="h-screen flex items-center justify-center">3</section>
      <section className="h-screen flex items-center justify-center">4</section>
    </div>
  );
};

export default DetailPage;
