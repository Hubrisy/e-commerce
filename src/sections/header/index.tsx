import LogoBlack from '@assets/svg/logos/LogoBlack.svg';

import Navigation from '../navigation';

import DesktopNav from './headernav/Desktop';
import MobileNav from './headernav/Mobile';

import Input from '@/components/input';

const Header = () => (
  <div>
    <div
      className="w-full min-h-[88px] flex justify-between font-weight-medium bg-white sm:items-center
          sm:justify-center"
    >
      <div className="flex justify-between mx-large w-full relative sm:justify-center sm:w-fit items-center sm:mx-0">
        <div>
          <LogoBlack />
        </div>
        <Input
          placeholder="Search"
          className="h-[56px] p-large rounded-lg bg-cultured ml-xlarge text-sm hidden lg:w-[350px] md:block w-[200px] xl:w-[433px]"
        />
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

export default Header;
