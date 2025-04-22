import Image from 'next/image';
import { useRouter } from 'next/router';

import { useProducts } from '@/hooks/use-products';

const ProductPage = () => {
  const { query } = useRouter();
  const { products } = useProducts();

  const findProduct = products?.find(item => item.id === Number(query.slug));

  return (
    <div>
      <div>yo: {query.slug}</div>
      <div>{findProduct?.name}</div>
      <Image
        height={100}
        width={100}
        src={findProduct?.img as string}
        alt="product_img"
      />
    </div>
  );
};

export default ProductPage;
