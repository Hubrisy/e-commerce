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
    <div className="max-w-[1100px] mb-3xlarge m-auto mt-[128px] md:mt-[72px]">
      <div className="m-auto sm:m-0 xl:ml-0">
        <div className="text-2xl font-semibold">Your favorites:</div>
        <div className="grid grid-cols-2 gap-4 mt-4 md:grid-cols-3 lg:grid-cols-4">
          {arrayOfFavorites?.map(item => (
            <div key={item.id} className="max-w-[250px]">
              <ProductItem product={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
