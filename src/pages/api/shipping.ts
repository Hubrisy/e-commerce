import type { NextApiRequest, NextApiResponse } from 'next';

import { shippingVariant } from '@/constans/shipping';
import type { ShippingProduct } from '@/types';

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Array<ShippingProduct>>,
) {
  res.status(200).json(shippingVariant);
}
