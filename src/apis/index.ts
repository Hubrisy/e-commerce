import axios from 'axios';

import { API_URL } from '@/config';
import type { Product, ShippingProduct } from '@/types';
import type { OrderModel, OrderModelWithId } from '@/types/order';

const buildUrl = (path: string) => API_URL + path;

export const api = {
  fetchProducts: async () => {
    const res = await axios.get<Array<Product>>(buildUrl('/products'));

    return res.data;
  },
  fetchShipping: async () => {
    const res = await axios.get<Array<ShippingProduct>>(buildUrl('/shipping'));

    return res.data;
  },
  createOrder: async (order: OrderModel) => {
    const res = await axios.post<OrderModelWithId>(buildUrl('/orders'), order);

    return res.data;
  },
};
