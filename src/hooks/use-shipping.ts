import { useQuery } from '@tanstack/react-query';

import { api } from '@/apis';

export const useShipping = () => {
  const { data, ...rest } = useQuery({
    queryKey: ['shipping'],
    queryFn: () => api.fetchShipping(),
    staleTime: Infinity,
  });

  return { shipping: data, ...rest };
};
