import TheHeader from './TheHeader';

export default function Layout({ children }) {
  return (
    <>
      <TheHeader />
      <main>{children}</main>
    </>
  );
}
