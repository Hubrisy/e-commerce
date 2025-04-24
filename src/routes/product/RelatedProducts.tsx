import { ProductItem } from '@/components/productItem';
import { useProducts } from '@/hooks/use-products';

interface RelatedProductsProps {
  productCategory: string;
  productId: number;
}

export const RelatedProducts: React.FC<RelatedProductsProps> = ({
  productCategory,
  productId,
}) => {
  const { products } = useProducts();

  const relatedProducts = products?.filter(
    item => item.category === productCategory && item.id !== productId,
  );

  return (
    <div className="my-14">
      <div className="text-2xl font-medium">Related Products</div>
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
