import { useEffect, useRef, useState } from 'react';
import LogoBlack from '@assets/svg/logos/LogoBlack.svg';
import clsx from 'clsx';
import { useRouter } from 'next/router';

import Navigation from '../navigation';

import DesktopNav from './headernav/Desktop';
import MobileNav from './headernav/Mobile';
import { ProductList } from './ProductList';

import Input from '@/components/input';
import { Routes } from '@/routes';

const Header = () => {
  const [value, setValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const router = useRouter();

  const backToHomePage = () => {
    router.push(Routes.home);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div>
      <div
        className="w-full fixed z-500 min-h-[88px] top-[0px] flex justify-between font-weight-medium bg-white sm:items-center
          sm:justify-center shadow-custom"
      >
        <div className="flex justify-between mx-large w-full relative sm:justify-center sm:w-fit items-center sm:mx-0">
          <div onClick={backToHomePage} className="cursor-pointer">
            <LogoBlack />
          </div>
          <div
            className="relative ml-xlarge w-[200px] lg:w-[350px] xl:w-[433px]"
            ref={wrapperRef}
          >
            <Input
              placeholder="Search"
              className="h-[56px] p-large rounded-lg bg-cultured text-sm hidden w-full md:block"
              value={value}
              onChange={e => setValue(e.target.value)}
              onFocus={() => setIsOpen(true)}
            />
            <ProductList
              className={clsx(isOpen ? 'block' : 'hidden')}
              value={value}
            />
          </div>
          <div className="flex justify-between sm:hidden">
            <MobileNav />
          </div>
          <div className="hidden sm:block">
            <DesktopNav />
          </div>
        </div>
      </div>
      <Navigation />
    </div>
  );
};

export default Header;
