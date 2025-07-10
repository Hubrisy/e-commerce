import { CartOrderSummary } from './CartOrderSummary';
import { CartProducts } from './CartProducts';

import { useCartContext } from '@/context/Cart';
import { useMountContext } from '@/context/Mount';

const Cart = () => {
  const { cart } = useCartContext();
  const { isMounted } = useMountContext();

  return (
    <div className="mt-[128px] mb-3xlarge max-w-[340px] m-auto md:mt-[72px] lg:max-w-[80%] xl:max-w-[1100px]">
      {isMounted && cart.length > 0 ? (
        <div className="lg:flex justify-between">
          <div className="lg:min-w-[400px] xl:min-w-[500px]">
            <div className="text-2xl font-semibold">Shopping cart:</div>
            <CartProducts />
          </div>
          <CartOrderSummary />
        </div>
      ) : (
        <div className="text-center text-2xl">Cart is empty</div>
      )}
    </div>
  );
};

export default Cart;
