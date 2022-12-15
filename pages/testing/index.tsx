import React from 'react';
import LoadingCharacter from '../../components/animation/LoadingCharacter';
import Layout from '../../components/layout';

const TestingPage: React.FC = () => {
  return (
    <Layout>
      <section className="min-h-screen-header flex items-center justify-center p-4">
        <LoadingCharacter />
      </section>
    </Layout>
  );
};

export default TestingPage;
