import Image from 'next/image';

import { Loader } from '@/components/Loader';
import { useAppStateContext } from '@/context/AppState';
import { useCartContext } from '@/context/Cart';
import { useMountContext } from '@/context/Mount';
import { currencySymbols } from '@/types';
import { calculateOrderSummary } from '@/utils/calculations';

export const Summary = () => {
  const { cart, selectedShipping } = useCartContext();
  const { isMounted } = useMountContext();
  const { user } = useAppStateContext();

  const orderSummary = calculateOrderSummary(cart);
  const shippingPrice =
    typeof selectedShipping?.price === 'number' ? selectedShipping.price : 0;

  if (!isMounted) {
    return (
      <div className="mt-[128px]">
        <Loader />
      </div>
    );
  }

  return (
    <div className="mt-5 border-[#EBEBEB] rounded-xl border-[1px] lg:max-w-full xl:min-w-[550px]">
      <div className="max-w-[90%] m-auto my-8">
        <div className="text-[20px] font-medium">Summary</div>
        <div className="my-6 text-[16px] font-medium">
          {cart.map(item => (
            <div
              key={item.id}
              className="rounded-xl bg-[#F6F6F6] mb-4 flex p-2 justify-between items-center text-center"
            >
              <Image src={item.img} alt={item.name} height={40} width={40} />
              <div>{item.name}</div>
              <div>{currencySymbols.USD + item.price}</div>
              <div>Qnt: {item.quantity}</div>
            </div>
          ))}
        </div>
        <div>
          <div>
            <div className="font-medium text-[14px]">Address</div>
            <div className="font-normal text-[16px] mt-2">{user.address}</div>
          </div>
          <div className="mt-4">
            <div className="font-medium text-[14px]">Shippment method</div>
            <div className="font-normal text-[16px] mt-2">
              {selectedShipping?.type}
            </div>
          </div>
        </div>
        <div className="mt-6 text-[16px]">
          <div className="flex justify-between font-medium">
            <div>Subtotal</div>
            <div>{currencySymbols.USD + orderSummary}</div>
          </div>
          <div className="flex justify-between font-normal my-4">
            <div>Estimated shipping & Handling</div>
            <div>{currencySymbols.USD + shippingPrice}</div>
          </div>
          <div className="flex justify-between font-medium">
            <div>Total</div>
            <div>{currencySymbols.USD + (orderSummary + shippingPrice)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
