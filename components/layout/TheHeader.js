import Link from 'next/link';
import BaseToggle from '../base/BaseToggle';

export default function TheHeader() {
  return (
    <header className="fixed top-0 flex items-center justify-between p-4 border-b border-b-white w-full z-40 themed:border-b-transparent">
      <div className="w-40"></div>
      <div className="flex items-center justify-center relative bg-white/50 backdrop-blur p-2 rounded-full">
        <Link href="/">
          <img
            src="/images/logos/nintendo-logo-red.svg"
            className="h-6 hover:cursor-pointer"
            alt="Nintendo logo"
          />
        </Link>
      </div>
      <div className="flex items-center justify-center relative bg-white/50 backdrop-blur p-2 rounded-full">
        <BaseToggle label="Interaktives Audio" />
      </div>
    </header>
  );
}
