import '../styles/globals.css';
import type { AppProps } from 'next/app';
import TheLayout from '../components/layout/TheLayout';
import { AppContextProvider } from '../store/app-context';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppContextProvider>
      <TheLayout>
        <Component {...pageProps} />
      </TheLayout>
    </AppContextProvider>
  );
}

export default MyApp;
