import '../styles/globals.css';
import type { AppProps } from 'next/app';
import TheLayout from '../components/layout/TheLayout';
import { AppContextProvider } from '../store/app-context';
import { SoundContextProvider } from '../store/soundContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppContextProvider>
      <SoundContextProvider>
        <TheLayout>
          <Component {...pageProps} />
        </TheLayout>
      </SoundContextProvider>
    </AppContextProvider>
  );
}

export default MyApp;
