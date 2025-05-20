import type { CartItem } from '@/types';

export const calculateOrderSummary = (cart: Array<CartItem>): number =>
  cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
