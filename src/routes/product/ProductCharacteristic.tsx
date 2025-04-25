import React from 'react';
import { useRouter } from 'next/router';

import { Characteristics } from './sections/Characteristics';
import { Colors } from './sections/Colors';
import { Delivery } from './sections/Delivery';
import { Details } from './sections/Details';
import { LastVisitedProducts } from './sections/LastVisitedProducts';
import { ProductStorage } from './sections/Storage';
import { productDescriptions } from './data';
import { MobileContainer } from './MobileContainer';

import Button from '@/components/button';

export const ProductCharacteristics: React.FC = () => {
  const { query } = useRouter();

  const descriptions = productDescriptions.find(
    item => item.id === Number(query.id),
  );

  return (
    <>
      <MobileContainer>
        <Colors />
        <ProductStorage />
        <Characteristics />
        <div className="text-[14px] font-normal mt-6 text-[#6C6C6C]">
          {descriptions?.description}
        </div>
        <div>
          <Button fullWidth className="min-h-[56px] mt-4">
            Add to wishlist
          </Button>
          <Button fullWidth className="min-h-[56px] mt-4" variant="primary">
            Add to card
          </Button>
        </div>
        <Delivery />
      </MobileContainer>
      <div className="bg-[#FAFAFA] mt-3xlarge">
        <div className="py-10">
          <MobileContainer className="rounded-lg">
            <Details />
          </MobileContainer>
        </div>
      </div>
      <MobileContainer>
        <LastVisitedProducts />
      </MobileContainer>
    </>
  );
};
