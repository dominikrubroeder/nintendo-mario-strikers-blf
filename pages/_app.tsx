import "../styles/globals.css";
import type { AppProps } from "next/app";
import TheLayout from "../components/layout/TheLayout";
import { AppContextProvider } from "../store/appContext";
import { AudioContextProvider } from "../store/audioContext";
import { AuthContextProvider } from "../store/authContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <AppContextProvider>
        <AudioContextProvider>
          <TheLayout>
            <Component {...pageProps} />
          </TheLayout>
        </AudioContextProvider>
      </AppContextProvider>
    </AuthContextProvider>
  );
}

export default MyApp;
