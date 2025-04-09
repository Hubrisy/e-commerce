import Slider from 'react-slick';
import clsx from 'clsx';
import Image from 'next/image';

import { sliderProduct } from './data';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Button from '@/components/button';

export const SliderMobile = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full overflow-hidden">
      <Slider {...settings}>
        {sliderProduct.map(item => (
          <div
            key={item.id}
            className={clsx('min-h-[712px] relative w-full flex', item.bg)}
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
            <div className="mt-[38px] max-w-[296px] m-auto flex items-center flex-col">
              <div
                className={clsx(
                  'font-light text-[33px]',
                  item.isBgBlack ? 'text-white' : 'text-black',
                )}
              >
                {item.title}
              </div>
              <div className="mt-large text-gray text-[14px] text-center">
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
      </Slider>
    </div>
  );
};
