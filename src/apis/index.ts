import axios from 'axios';

import { API_URL } from '@/config';
import type { Product } from '@/types';

const buildUrl = (path: string) => API_URL + path;

export const api = {
  fetchProducts: async () => {
    const res = await axios.get<Array<Product>>(buildUrl('/products'));

    return res.data;
  },
};
