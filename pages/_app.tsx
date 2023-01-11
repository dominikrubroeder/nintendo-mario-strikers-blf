import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { AppContextProvider } from '../store/appContext';
import { AudioContextProvider } from '../store/audioContext';
import { AnimatePresence } from 'framer-motion';
import CurrentSound from '../components/CurrentSound';
import CurrentSoundtrack from '../components/CurrentSoundtrack';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppContextProvider>
      <AudioContextProvider>
        <CurrentSound />
        <CurrentSoundtrack />
        <AnimatePresence
          mode="wait"
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Component {...pageProps} />
        </AnimatePresence>
      </AudioContextProvider>
    </AppContextProvider>
  );
}

export default MyApp;
