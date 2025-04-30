import Button from '@/components/button';
import Input from '@/components/input';
import { useCartContext } from '@/context/Cart';
import { currencySymbols } from '@/types';

export const CartOrderSummary = () => {
  const { cart } = useCartContext();

  const orderSummary = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <div className="rounded-xl border-[#EBEBEB] border-[1px]">
      <div className="max-w-[310px] m-auto my-14">
        <div className="text-2xl font-semibold">Order summary:</div>
        <div className="mt-3xlarge">
          <div>
            <div className="text-[14px] font-medium text-[#545454]">
              Discount code / Promo code
            </div>
            <Input
              className="w-full h-14 p-4 border-[#9F9F9F] mt-2 text-[14px] text-[#979797] font-normal"
              placeholder="Code"
            />
          </div>
          <div className="mt-6">
            <div className="text-[14px] font-medium text-[#545454]">
              Your bonus card number
            </div>
            <div className="flex items-center justify-between w-full h-16 p-4 border-[#9F9F9F] mt-2 border-[1px] rounded-lg">
              <div className="text-[14px] text-[#979797] font-normal">
                Enter Card Number
              </div>
              <Button className="w-[76px] h-2xlarge text-[12px] font-medium">
                Apply
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-[28px] flex justify-between font-medium text-[16px]">
          <div>Total:</div>
          <div>
            <span>{currencySymbols.USD}</span>
            {orderSummary}
          </div>
        </div>
        <div className="mt-4xlarge">
          <Button variant="primary" className="w-full h-14">
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};
