import { db } from './db';

import type { OrderModel, OrderModelWithId } from '@/types/order';

export const orders = Object.freeze({
  dbKey: 'orders',
  async getAll(): Promise<Array<OrderModel>> {
    const orders = await db.get<Array<OrderModel>>(this.dbKey);

    return orders || [];
  },
  async add(order: OrderModel): Promise<OrderModelWithId> {
    const orders = await this.getAll();
    const id = orders.length + 1;
    const newOrder: OrderModelWithId = { id, ...order };
    orders.push(newOrder);
    await db.set(this.dbKey, orders);

    return newOrder;
  },
});
