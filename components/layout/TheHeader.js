import Link from 'next/link';
import BaseToggle from '../base/BaseToggle';

export default function TheHeader() {
  return (
    <header className="fixed top-0 flex items-center justify-between p-2 border-b border-b-white w-full bg-white/50 backdrop-blur z-10">
      <div className="w-40"></div>
      <div className="relative w-32 h-8">
        <Link href="/">
          <img
            src="/images/logos/nintendo-logo-red.svg"
            className="hover:cursor-pointer"
            alt="Nintendo logo"
          />
        </Link>
      </div>
      <BaseToggle label="Interaktives Audio" />
    </header>
  );
}
