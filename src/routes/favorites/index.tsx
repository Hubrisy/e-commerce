import { useFavorites } from '@/hooks/use-favorites';

const Favorites = () => {
  const { favorites } = useFavorites();

  console.log(favorites);

  return (
    <div className="mt-[128px] mb-3xlarge max-w-[340px] m-auto">
      <div className="text-2xl font-semibold">Your favorites:</div>
    </div>
  );
};

export default Favorites;
