import CartSVG from '@assets/svg/cart.svg';
import HeartSVG from '@assets/svg/heart.svg';
import LogoBlack from '@assets/svg/LogoBlack.svg';
import UserSVG from '@assets/svg/user.svg';
import clsx from 'clsx';

import Navigation from '../navigation';

import Input from '@/components/input';
import { Routes } from '@/routes/index';

const navigationItems = [
  {
    name: 'Home',
    link: Routes.home,
  },
  {
    name: 'Contact us',
    link: Routes.contacts,
  },
  {
    name: 'About',
    link: Routes.about,
  },
  {
    name: 'Blog',
    link: Routes.blog,
  },
];

const Header = () => (
  <div>
    <div
      className={clsx({
        'w-full': true,
        'h-[88px]': true,
        flex: true,
        'items-center': true,
        'justify-center': true,
        'font-weight-medium': true,
        'bg-white': true,
      })}
    >
      <div className="flex justify-center items-center">
        <div>
          <LogoBlack />
        </div>
        <Input
          placeholder="Search"
          className="h-[56px] w-[433px] p-large rounded-lg bg-cultured ml-xlarge text-sm"
        />
        <div className="flex ml-[32px] gap-[52px] items-center text-granite-grey text-base">
          {navigationItems.map(item => (
            <div key={item.name} className="cursor-pointer hover:text-black">
              {item.name}
            </div>
          ))}
        </div>
        <div className="flex ml-[32px] gap-[24px] items-center">
          <div className="cursor-pointer">
            <HeartSVG />
          </div>
          <div className="cursor-pointer">
            <CartSVG />
          </div>
          <div className="cursor-pointer">
            <UserSVG />
          </div>
        </div>
      </div>
    </div>
    <Navigation />
  </div>
);

export default Header;
