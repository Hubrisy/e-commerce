import { useQuery } from '@tanstack/react-query';

import { api } from '@/apis';

export const useProducts = () => {
  const { data, ...rest } = useQuery({
    queryKey: ['products'],
    queryFn: () => api.fetchProducts(),
    staleTime: Infinity,
  });

  return { products: data, ...rest };
};
