import Link from 'next/link';

export default function TheHeader() {
  return (
    <header className="fixed top-0 flex items-center justify-center p-2 border-b border-b-white w-full bg-white/50 backdrop-blur z-10">
      <div className="relative w-32 h-8">
        <Link href="/">
          <img src="/images/logos/nintendo-logo-red.svg" alt="Nintendo logo" />
        </Link>
      </div>
    </header>
  );
}
