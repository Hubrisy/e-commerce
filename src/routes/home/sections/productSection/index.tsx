import type { PropsWithChildren } from 'react';
import { useMemo } from 'react';

import { Container } from '@/components/Container';
import { Loader } from '@/components/Loader';
import { ProductItem } from '@/components/productItem';
import { useFilterContext } from '@/context/Filter';
import { useProducts } from '@/hooks/use-products';
import type { Product } from '@/types';

interface Props extends PropsWithChildren {
  products: Array<Product>;
}

export const ProductSection: React.FC<Props> = ({ products, children }) => {
  const { isLoading } = useProducts();
  const { category, feature } = useFilterContext();

  const filteredProducts = useMemo(() => {
    if (!products) return [];

    return products.filter(item => {
      const matchesCategory = category ? item.category === category : true;
      const matchesFeature = feature ? item.feature === feature : true;

      return matchesCategory && matchesFeature;
    });
  }, [products?.length, category, feature]);

  if (isLoading) {
    return (
      <div className="my-large">
        <Loader />
      </div>
    );
  }

  return (
    <div className="pt-[88px] bg-white pb-[56px]">
      <Container className="font-medium text-[16px]">
        <div className="max-w-[375px]">
          {/* {isFeatures ? (
            <ProductFeatures />
          ) : (
            <div className="text-2xl font-medium">Discounts up to -50%</div>
          )} */}
          {children}
        </div>
        {filteredProducts?.length ? (
          <div className="grid grid-cols-2 gap-large mt-2xlarge md:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map(item => (
              <ProductItem key={item.id} product={item} />
            ))}
          </div>
        ) : (
          <div className="my-large">No item</div>
        )}
      </Container>
    </div>
  );
};
