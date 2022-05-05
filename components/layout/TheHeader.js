import Image from 'next/image';

export default function TheHeader() {
  return (
    <header className="fixed top-0 flex items-center justify-center p-4 w-full">
      <div className="relative w-32 h-8">
        <Image
          src="/images/logos/nintendo-logo-red.svg"
          layout="fill"
          alt="Nintendo logo"
        />
      </div>
    </header>
  );
}
