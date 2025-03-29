// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import type { Product } from '@/types';

const products: Array<Product> = [
  {
    name: 'Apple iPhone 14 Pro Max 128GB Deep Purple',
    img: '/img/products/Iphone14pro.png',
    price: 900,
    currency: 'USD',
    category: 'phones',
    feature: 'newarrival',
  },
];

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Array<Product>>,
) {
  res.status(200).json(products);
}
