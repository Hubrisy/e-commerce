import clsx from 'clsx';
import Image from 'next/image';

import { sliderProduct } from './data';

import Button from '@/components/button';

export const SliderDekstop = () => (
  <div className="w-full overflow-hidden grid grid-cols-2 xl:grid-cols-4">
    {sliderProduct.map(item => (
      <div
        key={item.id}
        className={clsx('min-h-[640px] relative w-full', item.bg)}
      >
        <div className="flex justify-end h-[315px]">
          <Image
            style={{ width: item.width }}
            className={clsx('max-h-[315px]')}
            width={370}
            height={390}
            src={item.img}
            alt={item.title}
          />
        </div>
        <div className="mt-[20px] max-w-[296px] m-auto">
          <div
            className={clsx(
              'font-light text-[33px]',
              item.isBgBlack ? 'text-white' : 'text-black',
            )}
          >
            {item.title}
          </div>
          <div className="mt-large text-gray text-[14px]">
            {item.description}
          </div>
          <Button
            className={clsx(
              'm-[0px] mt-[32px] w-[185px] h-[56px]',
              item.isBgBlack
                ? 'text-white border-white'
                : 'text-black border-black',
            )}
          >
            Shop Now
          </Button>
        </div>
      </div>
    ))}
  </div>
);
