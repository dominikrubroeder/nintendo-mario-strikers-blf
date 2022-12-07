import Link from 'next/link';
import { FC } from 'react';
import Logo from '../svg/Logo';
import CurrentSound from '../audio/CurrentSound';

const Header: FC = () => {
  return (
    <>
      <CurrentSound />

      <header className="relative z-40 flex h-20 w-full flex-wrap items-center justify-between p-4">
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
    </>
  );
};

export default Header;
