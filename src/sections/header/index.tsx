import Input from '../../components/input';
import Navigation from '../navigation';

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
    <div className="w-full h-[88px] flex items-center justify-center font-[500]">
      <div className="flex justify-center items-center">
        <div>
          <img src="/LogoBlack.png" alt="Logo" />
        </div>
        <Input
          placeholder="Search"
          className="h-[56px] w-[433px] p-[16px] rounded-[8px] bg-[#F5F5F5] ml-[32px] text-[14px]"
        />
        <div className="flex ml-[32px] gap-[52px] items-center text-[#656565] text-[16px]">
          {navigationItems.map(item => (
            <div
              key={item.name}
              className="cursor-pointer hover:text-[#000000]"
            >
              {item.name}
            </div>
          ))}
        </div>
        <div className="flex ml-[32px] gap-[24px] items-center">
          <img src="/favorites.png" alt="favorites" />
          <img src="/cart.png" alt="cart" />
          <img src="/user.png" alt="user" />
        </div>
      </div>
    </div>
    <Navigation />
  </div>
);

export default Header;
