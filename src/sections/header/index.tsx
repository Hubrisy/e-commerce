import CartSVG from '@assets/svg/icons/cart.svg';
import HeartSVG from '@assets/svg/icons/heart.svg';
import UserSVG from '@assets/svg/icons/user.svg';
import LogoBlack from '@assets/svg/logos/LogoBlack.svg';
import clsx from 'clsx';

import Navigation from '../navigation';

import Input from '@/components/input';
import { Routes } from '@/routes/index';

const userIcons = [<CartSVG />, <HeartSVG />, <UserSVG />];

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
          {userIcons.map((item, index) => (
            <div className="cursor-pointer" key={index}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
    <Navigation />
  </div>
);

export default Header;
