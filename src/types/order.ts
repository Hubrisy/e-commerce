import type { CartItem } from '.';

export interface OrderModel {
  products: Array<CartItem>;
}

export interface OrderModelWithId extends OrderModel {
  id: number;
}
