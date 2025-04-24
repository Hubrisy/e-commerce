import Image from 'next/image';

import { MobileContainer } from './MobileContainer';
import { ProductCharacteristics } from './ProductCharacteristic';

import type { Product } from '@/types';
import { currencySymbols } from '@/types';

export interface ProductPageProps {
  product: Product;
}

const ProductPage: React.FC<ProductPageProps> = ({ product }) => (
  <div className="mt-[128px] m-auto">
    <MobileContainer>
      <div className="flex justify-center">
        <Image height={330} width={260} src={product?.img} alt="product_img" />
      </div>
      <div className="mt-[50px]">
        <div className="text-[40px] font-bold leading-3xlarge">
          {product?.name}
        </div>
        <div className="text-3xl font-medium mt-6">
          <span>{currencySymbols.USD}</span>
          <span>{product?.price}</span>
        </div>
      </div>
    </MobileContainer>
    <div>
      <ProductCharacteristics product={product} />
    </div>
  </div>
);

export default ProductPage;
