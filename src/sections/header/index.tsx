import HeartSVG from '@assets/svg/heart.svg';
import clsx from 'clsx';

import Navigation from '../navigation';

import styles from './styles.module.scss';

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
        'md:bg-granite-grey': true,
      })}
    >
      <div className="flex justify-center items-center">
        <div>
          <img src="/LogoBlack.png" alt="Logo" />
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
          <div className={clsx(styles['heart-svg'], 'cursor-pointer')}>
            <HeartSVG />
          </div>
          <img src="/cart.png" alt="cart" />
          <img src="/user.png" alt="user" />
        </div>
      </div>
    </div>
    <Navigation />
  </div>
);

export default Header;
