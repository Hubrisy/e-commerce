import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { Routes } from '..';

import { api } from '@/apis';
import Button from '@/components/button';
import Input from '@/components/input';
import { useCartContext } from '@/context/Cart';
import { handleError } from '@/utils/error';

const paymentVariants = ['Credit Card', 'PayPal', 'PayPal Credit'];

export const PaymentForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { cart } = useCartContext();

  const goToPrevPage = () => {
    router.back();
  };

  const submitOrder = async () => {
    setIsLoading(true);

    try {
      const orderWithId = await api.createOrder({ products: cart });

      if (!orderWithId) {
        throw new Error('Order creation failed');
      }

      router.push(Routes.success);
    } catch (e) {
      handleError(e);
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-6 lg:min-w-[400px]">
      <div className="flex justify-between">
        {paymentVariants.map((item, index) => (
          <div key={index}>
            <div className="border-b border-transparent cursor-pointer hover:border-black">
              {item}
            </div>
          </div>
        ))}
      </div>
      <div>
        <div className="flex justify-center my-10 md:justify-start">
          <Image
            src="/img/view/creditcard.png"
            alt="creditCard"
            width={330}
            height={190}
          />
        </div>
        <div className="text-[14px]">
          <Input
            className="w-full border-[#CECECE] p-4"
            placeholder="Cardholder Name"
          />
          <Input
            className="w-full mt-4 border-[#CECECE] p-4"
            placeholder="Card Number"
          />
          <div className="flex mt-4 w-full gap-4">
            <Input
              className="flex-1 border-[#CECECE] p-4"
              placeholder="Exp.Date"
            />
            <Input className="flex-1 border-[#CECECE] p-4" placeholder="CVV" />
          </div>
        </div>
      </div>
      <div className="mt-16 flex justify-between">
        <Button
          className="min-h-16 max-w-[160px]"
          onClick={goToPrevPage}
          type="button"
          isDisabled={isLoading}
        >
          Back
        </Button>
        <Button
          className="min-h-16 max-w-[160px]"
          variant="primary"
          type="button"
          onClick={submitOrder}
          isLoading={isLoading}
        >
          Next
        </Button>
      </div>
    </div>
  );
};
