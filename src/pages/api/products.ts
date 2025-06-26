// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import { products } from '@/constants/products';
import type { Product } from '@/types';

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Array<Product>>,
) {
  res.status(200).json(products);
}
