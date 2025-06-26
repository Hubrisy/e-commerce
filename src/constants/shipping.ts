import type { ShippingProduct } from '@/types';
import { getFormattedDate } from '@/utils/date';

export const shippingVariant: Array<ShippingProduct> = [
  {
    id: 1,
    type: 'Free',
    price: 0,
    description: 'Regulary shipment',
    date: getFormattedDate(14),
  },
  {
    id: 2,
    type: 'Paid',
    price: 8.5,
    description: 'Get your delivery as soon as possible',
    date: getFormattedDate(1),
  },
];
