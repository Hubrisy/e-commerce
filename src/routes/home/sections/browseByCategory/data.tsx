import type { JSX } from 'react';
import Camera from '@assets/svg/icons/browsecamera.svg';
import Computer from '@assets/svg/icons/browsecomputer.svg';
import Gaming from '@assets/svg/icons/browsegaming.svg';
import Headphones from '@assets/svg/icons/browseheadphones.svg';
import Phone from '@assets/svg/icons/browsephone.svg';
import Watches from '@assets/svg/icons/browsewatches.svg';

import type { ProductCategory } from '@/types';

type CategoryItem = {
  name: string;
  img: JSX.Element;
  category: ProductCategory;
};

export const categories: Array<CategoryItem> = [
  {
    name: 'Phones',
    img: <Phone />,
    category: 'phones',
  },
  {
    name: 'Smart Watches',
    img: <Watches />,
    category: 'smartwatches',
  },
  {
    name: 'Cameras',
    img: <Camera key="camera" />,
    category: 'cameras',
  },
  {
    name: 'Headphones',
    img: <Headphones />,
    category: 'headphones',
  },
  {
    name: 'Computers',
    img: <Computer />,
    category: 'computers',
  },
  {
    name: 'Gaming',
    img: <Gaming />,
    category: 'gaming',
  },
];
