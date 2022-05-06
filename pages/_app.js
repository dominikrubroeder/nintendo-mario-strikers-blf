import '../styles/globals.css';
import TheLayout from '../components/layout/TheLayout';

function MyApp({ Component, pageProps }) {
  return (
    <TheLayout>
      <Component {...pageProps} />
    </TheLayout>
  );
}

export default MyApp;
