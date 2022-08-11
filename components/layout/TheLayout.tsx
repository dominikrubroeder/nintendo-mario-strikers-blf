import React from 'react';
import TheHeader from './TheHeader';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <TheHeader />
      <main>{children}</main>
    </>
  );
};

export default Layout;
