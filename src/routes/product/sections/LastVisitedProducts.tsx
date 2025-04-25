import { useEffect, useMemo, useState } from 'react';

import { ProductItem } from '@/components/productItem';
import { useProducts } from '@/hooks/use-products';
import type { Product } from '@/types';
import { getStoredVisitedProductIds } from '@/utils/visitedProduct';

export const LastVisitedProducts: React.FC = () => {
  const { products } = useProducts();

  const [lastVisitedProducts, setLastVisitedProducts] = useState<
    Array<Product>
  >([]);

  const ourLastSeenProductsIds = useMemo(
    () => getStoredVisitedProductIds(),
    [getStoredVisitedProductIds],
  );

  useEffect(() => {
    if (!products || !ourLastSeenProductsIds) return;

    const filteredProducts = products.filter(product =>
      ourLastSeenProductsIds.includes(product.id),
    );

    setLastVisitedProducts(filteredProducts);
  }, [products, ourLastSeenProductsIds]);

  return (
    <div className="my-14">
      <div className="text-2xl font-medium">Last seen products</div>
      <div className="mt-2xlarge grid grid-cols-2 gap-4">
        {lastVisitedProducts?.map(product => (
          <div key={product.id}>
            <ProductItem product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};
