import { useState } from 'react';
import { useRouter } from 'next/router';

import { Routes } from '..';

import Button from '@/components/button';
import { CheckoutLayout } from '@/components/CheckoutLayout';
import { useAppStateContext } from '@/context/AppState';
import type { ShippingTypes } from '@/types';

const getFormattedDate = (days: number) => {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const date = new Date();
  date.setDate(date.getDate() + days);

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month}, ${year}`;
};

const shippingVariant = [
  {
    type: 'free',
    price: 'free',
    title: 'Free',
    description: 'Regulary shipment',
    date: getFormattedDate(14),
  },
  {
    type: 'paid',
    price: '$8.50',
    title: '$8.50',
    description: 'Get your delivery as soon as possible',
    date: getFormattedDate(1),
  },
];

const Shipping = () => {
  const { orderDetails, setOrderDetails } = useAppStateContext();

  const [shipping, setShipping] = useState<ShippingTypes>('free');

  const router = useRouter();

  const goToPrevPage = () => {
    router.back();
  };

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    itemPrice: string,
  ) => {
    const newShipping = e.target.value as ShippingTypes;
    setShipping(newShipping);
    setOrderDetails({
      ...orderDetails,
      shippmentType: newShipping,
      price: itemPrice,
    });
  };

  const goToNextPage = () => {
    router.push(Routes.payment);
  };

  return (
    <CheckoutLayout>
      <div className="mt-12 mb-3xlarge max-w-[340px] m-auto">
        <div className="text-2xl font-semibold">Shipment method</div>
        <div className="mt-8">
          {shippingVariant.map(item => (
            <div
              key={item.type}
              className="p-6 border-[1px] border-[#D1D1D8] rounded-xl mb-4 flex justify-between items-center leading-6"
            >
              <div className="max-w-[148px]">
                <input
                  type="radio"
                  name=""
                  value={item.type}
                  checked={item.type === shipping}
                  onChange={e => handleInput(e, item.price)}
                  id=""
                  className="accent-black h-6 w-6"
                />
                <div className="font-medium">{item.title}</div>
                <div>{item.description}</div>
              </div>
              <div>{item.date}</div>
            </div>
          ))}
        </div>
        <div className="mt-16 flex justify-between">
          <Button
            className="min-h-16 max-w-[160px]"
            onClick={goToPrevPage}
            type="button"
          >
            Back
          </Button>
          <Button
            className="min-h-16 max-w-[160px]"
            variant="primary"
            type="button"
            onClick={goToNextPage}
          >
            Next
          </Button>
        </div>
      </div>
    </CheckoutLayout>
  );
};

export default Shipping;
