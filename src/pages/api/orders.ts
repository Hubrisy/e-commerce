import type { NextApiRequest, NextApiResponse } from 'next';

import type { OrderModel } from '../../types/order';

import { orders } from '@/controllers/orders';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    const order = req.body as OrderModel;

    if (!order || !Array.isArray(order.products)) {
      res.status(400).json({ message: 'Invalid order data' });

      return;
    }

    const orderWithId = await orders.add(order);

    res.status(200).json(orderWithId);

    return;
  }

  res.status(404).json({ message: 'Method not allowed' });
}
