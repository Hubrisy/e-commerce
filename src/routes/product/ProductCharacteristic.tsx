import React from 'react';
import Approved from '@assets/svg/delivery/Approved.svg';
import Car from '@assets/svg/delivery/Car.svg';
import Shop from '@assets/svg/delivery/Shop.svg';
import clsx from 'clsx';

import type { ProductPageProps } from '.';
import {
  characteristics,
  colors,
  productDescriptions,
  productDetails,
  productStorageSizes,
} from './data';
import { RelatedProducts } from './LastVisitedProducts';
import { MobileContainer } from './MobileContainer';

import Button from '@/components/button';

const delivery = [
  { img: <Car />, title: 'Free delivery', desc: '1-2 day' },
  { img: <Shop />, title: 'In Stock', desc: 'Today' },
  { img: <Approved />, title: 'Guaranteed', desc: '1 year' },
];

export const ProductCharacteristics: React.FC<ProductPageProps> = ({
  product,
}) => {
  const thisProductStorageSize = productStorageSizes.find(
    item => item.id === product.id,
  );
  const thisProductChar = characteristics.find(item => item.id === product.id);
  const thisProductDetails = productDetails.find(
    item => item.id === product.id,
  );
  const thisProductDescription = productDescriptions.find(
    item => item.id === product.id,
  );

  return (
    <>
      <MobileContainer>
        <div className="flex items-center mt-5">
          <div className="text-[15px] font-normal">Select colors:</div>
          <div className="flex">
            {colors.map(item => (
              <div
                key={item}
                className={clsx(
                  `${item}`,
                  'w-2xlarge h-2xlarge rounded-[50%] ml-2',
                )}
              />
            ))}
          </div>
        </div>
        <div className="mt-6 flex gap-2">
          {thisProductStorageSize?.storageSizes.map(item => (
            <div
              className="w-[80px] h-4xlarge border-[#D5D5D5] border-[1px] rounded-lg flex justify-center items-center"
              key={item}
            >
              <div>{item}</div>
            </div>
          ))}
        </div>
        <div className="mt-6 grid grid-cols-2 gap-2">
          {thisProductChar?.characteristics.map(item => (
            <div
              key={item.title}
              className="bg-wildsand min-w-[166px] min-h-16 rounded-lg flex items-center text-[14px] font-normal"
            >
              <div className="ml-[18px]">{item.img}</div>
              <div className="ml-2">
                <div className="text-[#C4C4C4]">{item.title}</div>
                <div>{item.char}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-[14px] font-normal mt-6 text-[#6C6C6C]">
          {thisProductDescription?.description}
        </div>
        <div>
          <Button fullWidth className="min-h-[56px] mt-4">
            Add to wishlist
          </Button>
          <Button fullWidth className="min-h-[56px] mt-4" variant="primary">
            Add to card
          </Button>
        </div>
        <div className="mt-2xlarge flex justify-between">
          {delivery.map(item => (
            <div
              key={item.title}
              className="text-center text-[14px] font-medium leading-6"
            >
              <div className="min-h-14 w-14 m-auto bg-wildsand flex items-center justify-center rounded-xl">
                {item.img}
              </div>
              <div className="text-[#717171]">{item.title}</div>
              <div>{item.desc}</div>
            </div>
          ))}
        </div>
      </MobileContainer>
      <div className="bg-[#FAFAFA] mt-3xlarge">
        <div className="py-10">
          <MobileContainer className="rounded-lg">
            <div className="max-w-[295px] m-auto font-medium leading-6 pb-4xlarge">
              <div className="pt-4xlarge text-2xl">Details</div>
              <div className="mt-2xlarge text-gray">
                {thisProductDetails?.desc}
              </div>
              <div>
                <div className="text-xl mt-2xlarge">
                  {thisProductDetails?.productTitle}
                </div>
                <div>
                  {thisProductDetails?.productChar.map(item => (
                    <div
                      key={item.title}
                      className="font-normal flex justify-between pb-2 border-[#CDCDCD] border-b-[1px] mt-6"
                    >
                      <div>{item.title}</div>
                      <div className="max-w-[120px] text-end">{item.info}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center mt-2xlarge">
                <Button className="min-h-4xlarge">View more</Button>
              </div>
            </div>
          </MobileContainer>
        </div>
      </div>
      <MobileContainer>
        <RelatedProducts
          productCategory={product.category}
          productId={product.id}
        />
      </MobileContainer>
    </>
  );
};
