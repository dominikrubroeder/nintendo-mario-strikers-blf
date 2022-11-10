import React, { useContext } from 'react';
import AudioContext from '../../store/audioContext';
import SpringBounceWhenInView from '../animation/SpringBounceWhenInView';
import MiniAudioPlayer from '../audio/MiniAudioPlayer';
import TheHeader from './TheHeader';

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
            <MiniAudioPlayer />
          </SpringBounceWhenInView>
        )}
      </div>
    </>
  );
};

export default Layout;
