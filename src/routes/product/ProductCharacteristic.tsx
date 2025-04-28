import React from 'react';

import { Details } from './sections/Details';
import { LastVisitedProducts } from './sections/LastVisitedProducts';
import { MobileContainer } from './MobileContainer';

export const ProductCharacteristics: React.FC = () => (
  <>
    <div className="bg-[#FAFAFA] mt-3xlarge">
      <div className="py-10">
        <MobileContainer className="rounded-lg max-w-[80%]">
          <Details />
        </MobileContainer>
      </div>
    </div>
    <MobileContainer>
      <LastVisitedProducts />
    </MobileContainer>
  </>
);
