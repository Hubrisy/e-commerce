import clsx from 'clsx';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { useProducts } from '@/hooks/use-products';

interface ProductListProps {
  className: string;
  value: string;
}

export const ProductList: React.FC<ProductListProps> = ({
  className,
  value,
}) => {
  const { products } = useProducts();
  const router = useRouter();

  const filteredProducts = products?.filter(item =>
    item.name.toLowerCase().startsWith(value.toLowerCase()),
  );

  const goToProductPage = (id: number) => {
    router.push(`/product/${id}`);
  };

  return (
    <div
      className={clsx(
        'absolute bg-white w-full top-[58px] min-h-[75px] border-[2px] border-black rounded-lg overflow-auto p-4',
        className,
      )}
    >
      {!filteredProducts?.length ? (
        <div className="flex justify-center items-center">No products</div>
      ) : (
        filteredProducts?.map(item => (
          <div
            key={item.id}
            className="flex items-center mt-2.5 cursor-pointer"
            onClick={() => goToProductPage(item.id)}
          >
            <Image src={item.img} alt={item.name} width={40} height={40} />
            <div>{item.name}</div>
          </div>
        ))
      )}
    </div>
  );
};
