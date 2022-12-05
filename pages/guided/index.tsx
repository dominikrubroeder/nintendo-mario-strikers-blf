import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import BouncingItems from '../../components/BouncingItems';
import Layout from '../../components/layout';

const GuidedPage: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.replace('/guided/kickoff');
    }, 2400);
  });

  return (
    <Layout>
      <BouncingItems size={24} />
    </Layout>
  );
};

export default GuidedPage;
