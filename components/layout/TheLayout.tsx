import React, { useContext } from "react";
import AudioContext from "../../store/audioContext";
import SpringBounceWhenInView from "../SpringBounceWhenInView";
import TheAudioPlayer from "../TheAudioPlayer";
import TheHeader from "./TheHeader";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const audioCtx = useContext(AudioContext);

  return (
    <>
      <TheHeader />
      <main>{children}</main>
      <div className="fixed bottom-4 right-4 z-40 md:hidden">
        {audioCtx?.hasInteractiveAudio && (
          <SpringBounceWhenInView>
            <TheAudioPlayer />
          </SpringBounceWhenInView>
        )}
      </div>
    </>
  );
};

export default Layout;
