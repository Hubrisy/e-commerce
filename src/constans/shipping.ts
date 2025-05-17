import type { ShippingProduct } from '@/types';
import { getFormattedDate } from '@/utils/getDate';

export const shippingVariant: Array<ShippingProduct> = [
  {
    id: 1,
    type: 'free',
    price: 0,
    description: 'Regulary shipment',
    date: getFormattedDate(14),
  },
  {
    id: 2,
    type: 'paid',
    price: 8.5,
    description: 'Get your delivery as soon as possible',
    date: getFormattedDate(1),
  },
];
