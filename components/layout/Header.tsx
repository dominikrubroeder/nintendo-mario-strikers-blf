import Link from 'next/link';
import { FC } from 'react';
import Logo from '../svg/Logo';
import { useRouter } from 'next/router';
import { ArrowLongLeftIcon } from '@heroicons/react/24/solid';

interface HeaderProps {
  withBackButton?: boolean;
}

const Header: FC<HeaderProps> = ({ withBackButton = false }) => {
  const router = useRouter();

  return (
    <header className="relative z-40 flex h-20 w-full flex-wrap items-center justify-between p-4">
      {withBackButton && (
        <button onClick={() => router.back()}>
          <ArrowLongLeftIcon className="h-4 w-4 text-accent themed:text-white" />
        </button>
      )}

      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center transition active:scale-95">
        <div className="relative flex flex-1 items-center justify-center self-center rounded-full p-2 themed:bg-accent-dark themed:text-white">
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
