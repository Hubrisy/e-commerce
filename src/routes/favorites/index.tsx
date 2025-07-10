import { ProductItem } from '@/components/productItem';
import { useFavorites } from '@/hooks/use-favorites';
import { useProducts } from '@/hooks/use-products';

const Favorites = () => {
  const { favorites } = useFavorites();
  const { products } = useProducts();

  const arrayOfFavorites = products?.filter(item =>
    favorites.includes(item.id),
  );

  return (
    <div className="max-w-[1100px] mb-3xlarge m-auto">
      <div className="mt-[128px] max-w-[340px] m-auto sm:m-0 sm:ml-10 md:mt-[72px] xl:ml-0">
        <div className="text-2xl font-semibold">Your favorites:</div>
        <div className="grid grid-cols-2 gap-2 mt-4">
          {arrayOfFavorites?.map(item => (
            <div key={item.id}>
              <ProductItem product={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
