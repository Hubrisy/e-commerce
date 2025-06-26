import { useEffect } from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/router';

import { Routes } from '..';

import Button from '@/components/button';
import { Loader } from '@/components/Loader';
import { CheckoutLayout } from '@/components/xcheckoutLayout';
import { useCartContext } from '@/context/Cart';
import { useShipping } from '@/hooks/use-shipping';
import { currencySymbols } from '@/types';

const Shipping = () => {
  const { shipping } = useShipping();
  const { selectedShipping, setSelectedShipping } = useCartContext();

  const router = useRouter();

  const goToPrevPage = () => {
    router.back();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id = e.target.value;

    const shippingProduct = shipping?.find(item => item.id === Number(id));

    if (shippingProduct) {
      setSelectedShipping(shippingProduct);
    }
  };

  const goToNextPage = () => {
    router.push(Routes.payment);
  };

  useEffect(() => {
    if (!selectedShipping && shipping?.length) {
      setSelectedShipping(shipping[0]);
    }
  }, [selectedShipping, shipping?.length]);

  if (!shipping?.length) {
    return (
      <div className="mt-[128px]">
        <Loader />
      </div>
    );
  }

  return (
    <CheckoutLayout>
      <div className="mt-12 mb-3xlarge max-w-[340px] m-auto md:mx-0 xl:min-w-[500px]">
        <div className="text-2xl font-semibold">Shipment method</div>
        <div className="mt-8">
          {shipping?.map(item => (
            <label
              key={item.id}
              className={clsx(
                item.id === selectedShipping?.id
                  ? 'text-black'
                  : 'text-[#A2A3B1]',
                'p-6 border-[1px] border-[#D1D1D8] rounded-xl mb-4 flex justify-between items-center leading-6',
              )}
            >
              <div className="max-w-[148px] md:w-full">
                <input
                  type="radio"
                  name=""
                  value={item.id}
                  checked={item.id === selectedShipping?.id}
                  onChange={handleChange}
                  id=""
                  className="accent-black h-6 w-6"
                />
                <div className="font-medium">
                  {item.price
                    ? currencySymbols.USD + item.price.toFixed(2)
                    : 'Free'}
                </div>
                <div>{item.description}</div>
              </div>
              <div>{item.date}</div>
            </label>
          ))}
        </div>
        <div className="mt-16 flex gap-6 xl:justify-end">
          <Button
            className="min-h-16 flex-1 max-w-[150px]"
            onClick={goToPrevPage}
            type="button"
          >
            Back
          </Button>
          <Button
            className="min-h-16 flex-1 max-w-[150px]"
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
