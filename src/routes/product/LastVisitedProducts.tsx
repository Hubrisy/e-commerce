import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { ProductItem } from '@/components/productItem';
import { useProducts } from '@/hooks/use-products';
import { storeVisitedProductId } from '@/utils/visitedProduct';

interface RelatedProductsProps {
  productCategory: string;
  productId: number;
}

export const RelatedProducts: React.FC<RelatedProductsProps> = ({
  productCategory,
  productId,
}) => {
  const { products } = useProducts();
  const router = useRouter();

  // const [lastVisitedProducts, setLastVisitedProducts] = useState([]);

  const relatedProducts = products?.filter(
    item => item.category === productCategory && item.id !== productId,
  );

  useEffect(() => {
    storeVisitedProductId(Number(router.query.id));
  });

  return (
    <div className="my-14">
      <div className="text-2xl font-medium">Last seen products</div>
      <div className="mt-2xlarge grid grid-cols-2 gap-4">
        {relatedProducts?.map(product => (
          <div key={product.id}>
            <ProductItem product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};
