import { useRouter } from 'next/router';

import { Characteristics } from './sections/Characteristics';
import { Colors } from './sections/Colors';
import { Delivery } from './sections/Delivery';
import { ProductStorage } from './sections/Storage';
import { productDescriptions } from './data';

import Button from '@/components/button';

export const ProductDetails = () => {
  const { query } = useRouter();

  const descriptions = productDescriptions.find(
    item => item.id === Number(query.id),
  );

  return (
    <>
      <Colors />
      <ProductStorage />
      <Characteristics />
      <div className="text-[14px] font-normal mt-6 text-[#6C6C6C]">
        {descriptions?.description}
      </div>
      <div className="lg:flex justify-between">
        <Button fullWidth className="min-h-[56px] mt-4 lg:min-w-[245px]">
          Add to wishlist
        </Button>
        <Button
          fullWidth
          className="min-h-[56px] mt-4 lg:min-w-[245px]"
          variant="primary"
        >
          Add to card
        </Button>
      </div>
      <Delivery />
    </>
  );
};
