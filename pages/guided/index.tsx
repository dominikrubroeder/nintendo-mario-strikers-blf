import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import BouncingItems from '../../components/BouncingItems';
import Layout from '../../components/layout';

const GuidedPage: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.replace('/guided/kickoff');
    }, 1600);
  });

  return (
    <Layout>
      <section className="min-h-screen-header flex items-center justify-center">
        <BouncingItems size={32} />
      </section>
    </Layout>
  );
};

export default GuidedPage;
