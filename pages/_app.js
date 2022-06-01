import '../styles/globals.css';
import TheLayout from '../components/layout/TheLayout';
import { AppContextProvider } from '../store/app-context';

function MyApp({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <TheLayout>
        <Component {...pageProps} />
      </TheLayout>
    </AppContextProvider>
  );
}

export default MyApp;
