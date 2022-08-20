import '../styles/globals.css';
import type { AppProps } from 'next/app';
import TheLayout from '../components/layout/TheLayout';
import { AppContextProvider } from '../store/appContext';
import { AudioContextProvider } from '../store/audioContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppContextProvider>
      <AudioContextProvider>
        <TheLayout>
          <Component {...pageProps} />
        </TheLayout>
      </AudioContextProvider>
    </AppContextProvider>
  );
}

export default MyApp;
