import { useEffect } from 'react';
import Image from 'next/image';

import { MobileContainer } from './MobileContainer';
import { ProductCharacteristics } from './ProductCharacteristic';
import { ProductDetails } from './ProductDetails';

import type { Product } from '@/types';
import { currencySymbols } from '@/types';
import { storeVisitedProductId } from '@/utils/visitedProduct';

export interface ProductPageProps {
  product: Product;
}

const ProductPage: React.FC<ProductPageProps> = ({ product }) => {
  useEffect(() => {
    storeVisitedProductId(product.id);
  }, []);

  return (
    <div className="mt-[128px] m-auto">
      <div className="flex flex-col lg:flex-row">
        <div className="m-auto">
          <Image
            height={330}
            width={260}
            src={product?.img}
            alt="product_img"
            className="lg:min-h-[480px] lg:min-w-[450px]"
          />
        </div>
        <MobileContainer className="lg:max-w-[540px]">
          <div className="mt-[50px]">
            <div className="text-[40px] font-bold leading-3xlarge">
              {product?.name}
            </div>
            <div className="text-3xl font-medium mt-6">
              <span>{currencySymbols.USD}</span>
              <span>{product?.price}</span>
            </div>
          </div>
          <ProductDetails product={product} />
        </MobileContainer>
      </div>
      <div>
        <ProductCharacteristics />
      </div>
    </div>
  );
};

export default ProductPage;
