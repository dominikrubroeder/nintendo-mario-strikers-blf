import TheHeader from './TheHeader';
import TheFooter from './TheFooter';

export default function Layout({ children }) {
  return (
    <>
      <TheHeader />
      <main>{children}</main>
      <TheFooter />
    </>
  );
}
