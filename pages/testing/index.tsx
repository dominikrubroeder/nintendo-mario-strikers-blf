import React from 'react';
import Layout from '../../components/layout';
import MiniAudioPlayer from '../../components/mini-audio-player';

const TestingPage: React.FC = () => {
  return (
    <Layout>
      <section className="min-h-screen-header flex items-center justify-center p-4">
        <MiniAudioPlayer />
      </section>
    </Layout>
  );
};

export default TestingPage;
