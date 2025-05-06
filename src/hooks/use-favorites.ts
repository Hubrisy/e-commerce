import { useAppStateContext } from '@/context/AppState';

export const useFavorites = () => {
  const { favorites, setFavorites } = useAppStateContext();

  const isItemInFavorites = (id: number) => favorites.some(item => item === id);

  const toggleFavorite = (id: number) => {
    const idExist = isItemInFavorites(id);

    if (idExist) {
      setFavorites(prev => prev.filter(item => item !== id));

      return;
    }

    setFavorites(prev => [...prev, id]);
  };

  return { favorites, setFavorites, toggleFavorite, isItemInFavorites };
};
