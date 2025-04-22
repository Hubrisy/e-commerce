import Image from 'next/image';
import { useRouter } from 'next/router';

import { MobileContainer } from './MobileContainer';
import { ProductCharacteristics } from './ProductCharacteristic';

import { useProducts } from '@/hooks/use-products';
import { currencySymbols } from '@/types';

const ProductPage = () => {
  const { query } = useRouter();
  const { products } = useProducts();

  const findProduct = products?.find(item => item.id === Number(query.slug));

  return (
    <div className="mt-[128px] m-auto">
      <MobileContainer>
        <div className="flex justify-center">
          <Image
            height={330}
            width={260}
            src={findProduct?.img as string}
            alt="product_img"
          />
        </div>
        <div className="mt-[50px]">
          <div className="text-[40px] font-bold leading-3xlarge">
            {findProduct?.name}
          </div>
          <div className="text-3xl font-medium mt-6">
            <span>{currencySymbols.USD}</span>
            <span>{findProduct?.price}</span>
          </div>
        </div>
      </MobileContainer>
      <div>
        <ProductCharacteristics />
      </div>
    </div>
  );
};

export default ProductPage;
