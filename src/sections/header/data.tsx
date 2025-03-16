import CartSVG from '@assets/svg/icons/cart.svg';
import HeartSVG from '@assets/svg/icons/heart.svg';
import UserSVG from '@assets/svg/icons/user.svg';

import { Routes } from '@/routes';

export const userIcons = [
  <CartSVG key="cart" />,
  <HeartSVG key="heart" />,
  <UserSVG key="user" />,
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
