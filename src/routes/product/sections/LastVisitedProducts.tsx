import { useMemo } from 'react';

import { ProductItem } from '@/components/productItem';
import { useProducts } from '@/hooks/use-products';
import { getStoredVisitedProductIds } from '@/utils/visitedProduct';

export const LastVisitedProducts: React.FC = () => {
  const { products } = useProducts();

  const lastSeenProducts = useMemo(() => {
    if (!products?.length) {
      return [];
    }

    const storedProductIds = getStoredVisitedProductIds();

    const filteredProducts = products.filter(product =>
      storedProductIds.includes(product.id),
    );

    return filteredProducts;
  }, [products?.length]);

  return (
    <div className="my-14">
      <div className="text-2xl font-medium">Last seen products</div>
      <div className="mt-2xlarge grid grid-cols-2 gap-4">
        {lastSeenProducts?.map(product => (
          <div key={product.id}>
            <ProductItem product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};
