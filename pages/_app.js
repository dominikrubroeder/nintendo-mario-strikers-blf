import '../styles/globals.css';
import TheLayout from '../components/layout/TheLayout';
import { ThemeContextProvider } from '../store/theme-context';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <TheLayout>
        <Component {...pageProps} />
      </TheLayout>
    </ThemeContextProvider>
  );
}

export default MyApp;
