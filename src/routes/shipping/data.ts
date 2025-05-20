import { getFormattedDate } from '@/utils/date';

interface ShippingVariantType {
  id: number;
  type: string;
  price: number;
  description: string;
  date: string;
}

export const shippingVariant: Array<ShippingVariantType> = [
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
