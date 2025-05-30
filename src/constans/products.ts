import type { Product } from '@/types';

export const products: Array<Product> = [
  {
    id: 1,
    name: 'Apple iPhone 14 Pro Max 128GB Deep Purple',
    img: '/img/products/Iphone14pro.png',
    price: 900,
    currency: 'USD',
    category: 'phones',
    feature: 'newarrival',
    isOnMainScreen: true,
  },
  {
    id: 2,
    name: 'Blackmagic Pocket Cinema Camera 6k',
    img: '/img/products/BlackMagicCamera.png',
    price: 2535,
    currency: 'USD',
    category: 'cameras',
    feature: 'newarrival',
    isOnMainScreen: true,
  },
  {
    id: 3,
    name: 'Apple Watch Series 9 GPS 41mm Starlight Aluminium Case',
    img: '/img/products/AppleWatch.png',
    price: 399,
    currency: 'USD',
    category: 'smartwatches',
    feature: 'featured',
    isOnMainScreen: true,
    isOnsale: true,
  },
  {
    id: 4,
    name: 'AirPods Max Silver',
    img: '/img/products/AirPodsMax.png',
    price: 549,
    currency: 'USD',
    category: 'headphones',
    feature: 'featured',
    isOnMainScreen: true,
    isOnsale: true,
  },
  {
    id: 5,
    name: 'Samsung Galaxy Watch6 Classic 47mm Black',
    img: '/img/products/SamsungWatch.png',
    price: 369,
    currency: 'USD',
    category: 'smartwatches',
    feature: 'bestseller',
    isOnMainScreen: true,
  },
  {
    id: 6,
    name: 'Galaxy Z Fold5 Unlocked | 256GB | Phantom Black',
    img: '/img/products/SamsungGalaxyPhone.png',
    price: 1799,
    currency: 'USD',
    category: 'phones',
    feature: 'featured',
    isOnMainScreen: true,
  },
  {
    id: 7,
    name: 'Galaxy Buds FEGraphite',
    img: '/img/products/SamsungHeadphones.png',
    price: 99,
    currency: 'USD',
    category: 'headphones',
    feature: 'bestseller',
    isOnMainScreen: true,
  },
  {
    id: 8,
    name: 'Apple iPad 9 10.2" 64GB Wi-Fi Silver (MK2L3) 2021',
    img: '/img/products/Ipad.png',
    price: 399,
    currency: 'USD',
    category: 'tablet',
    feature: 'bestseller',
    isOnMainScreen: true,
  },
  {
    id: 9,
    name: 'Apple iPhone 14 Pro 512GB Gold (MQ233)',
    img: '/img/products/Iphone14proGold.png',
    price: 1437,
    currency: 'USD',
    category: 'phones',
    feature: 'bestseller',
    isOnsale: true,
  },
  {
    id: 10,
    name: 'Apple iPhone 14 Pro 1TB Gold (MQ2V3)',
    img: '/img/products/Iphone14proSilver.png',
    price: 1499,
    currency: 'USD',
    category: 'phones',
    feature: 'bestseller',
    isOnsale: true,
  },
];
