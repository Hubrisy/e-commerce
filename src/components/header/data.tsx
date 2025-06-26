import CartSVG from '@assets/svg/icons/cart.svg';
import HeartSVG from '@assets/svg/icons/heart.svg';
import UserSVG from '@assets/svg/icons/user.svg';

import { Routes } from '@/routes';

export const userIcons = [
  {
    id: 1,
    img: <CartSVG />,
    link: Routes.cart,
  },
  {
    id: 2,
    img: <HeartSVG />,
    link: Routes.favorites,
  },
  {
    id: 3,
    img: <UserSVG />,
    link: Routes.cabinet,
  },
];

export const navigationItems = [
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
