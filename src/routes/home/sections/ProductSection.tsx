import AirMax from '@assets/img/products/AirPodsMax.png';
import AppleWatch from '@assets/img/products/AppleWatch.png';
import BlackMagicCamera from '@assets/img/products/BlackMagicCamera.png';
import Ipad from '@assets/img/products/Ipad.png';
import Iphone14 from '@assets/img/products/Iphone14pro.png';
import SamsungPhone from '@assets/img/products/SamsungGalaxyPhone.png';
import SamsungHeadphones from '@assets/img/products/SamsungHeadphones.png';
import SamsungGalaxyWatches from '@assets/img/products/SamsungWatch.png';
import Heart from '@assets/svg/icons/heart.svg';
import Image from 'next/image';

import Button from '@/components/button';
import { Container } from '@/components/Container';

const products = [
  {
    name: 'Apple iPhone 14 Pro Max 128GB Deep Purple',
    img: Iphone14,
    price: '$900',
  },
  {
    name: 'Blackmagic Pocket Cinema Camera 6k',
    img: BlackMagicCamera,
    price: '$2535',
  },
  {
    name: 'Apple Watch Series 9 GPS 41mm Starlight Aluminium Case',
    img: AppleWatch,
    price: '$399',
  },
  {
    name: 'AirPods Max Silver',
    img: AirMax,
    price: '$549',
  },
  {
    name: 'Samsung Galaxy Watch6 Classic 47mm Black',
    img: SamsungGalaxyWatches,
    price: '$369',
  },
  {
    name: 'Galaxy Z Fold5 Unlocked | 256GB | Phantom Black',
    img: SamsungPhone,
    price: '$1799',
  },
  {
    name: 'Galaxy Buds FEGraphite',
    img: SamsungHeadphones,
    price: '$99',
  },
  {
    name: 'Apple iPad 9 10.2" 64GB Wi-Fi Silver (MK2L3) 2021',
    img: Ipad,
    price: '$398',
  },
];

export const ProductSection = () => (
  <div className="pt-[88px] bg-white pb-[56px]">
    <Container className="font-medium text-[16px]">
      <div className="flex justify-between">
        <div>New Arrival</div>
        <div>Bestseller</div>
        <div>Featured Products</div>
      </div>
      <div className="flex flex-wrap justify-center mt-2xlarge">
        {products.map(item => (
          <div
            key={item.name}
            className="bg-wildsand min-w-[160px] m-[5px] flex flex-col items-center justify-center rounded-[9px] md:min-w-[200px] lg:min-w-[270px]"
          >
            <div className="mt-[25px] self-end mr-[12px]">
              <Heart />
            </div>
            <Image src={item.img} alt="" className="lg:min-w-[160px]" />
            <div className="h-[96px] max-w-[140px] mt-medium text-center">
              {item.name}
            </div>
            <div>{item.price}</div>
            <Button className="w-[140px] bg-black text-white">Buy Now</Button>
          </div>
        ))}
      </div>
    </Container>
  </div>
);
