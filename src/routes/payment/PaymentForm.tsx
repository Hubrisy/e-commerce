import Image from 'next/image';
import { useRouter } from 'next/router';

import { Routes } from '..';

import Button from '@/components/button';
import Input from '@/components/input';

const paymentVariants = ['Credit Card', 'PayPal', 'PayPal Credit'];

export const PaymentForm = () => {
  const router = useRouter();

  const goToPrevPage = () => {
    router.back();
  };

  const goToNextPage = () => {
    router.push(Routes.successpage);
  };

  return (
    <div className="mt-6">
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
        <div className="flex justify-center my-10">
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
          <div className="flex justify-between mt-4">
            <Input
              className="max-w-40 border-[#CECECE] p-4"
              placeholder="Exp.Date"
            />
            <Input
              className="max-w-40 border-[#CECECE] p-4"
              placeholder="CVV"
            />
          </div>
        </div>
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
  );
};
