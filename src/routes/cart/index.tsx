import { CartOrderSummary } from './CartOrderSummary';
import { CartProducts } from './CartProducts';

import { useCartContext } from '@/context/Cart';
import { useMountContext } from '@/context/Mount';

const Cart = () => {
  const { cart } = useCartContext();
  const { isMounted } = useMountContext();

  return (
    <div className="mt-[128px] mb-3xlarge max-w-[340px] m-auto">
      {isMounted && cart.length > 0 ? (
        <div>
          <div className="text-2xl font-semibold">Shopping cart:</div>
          <CartProducts />
          <CartOrderSummary />
        </div>
      ) : (
        <div className="text-center text-2xl">Cart is empty</div>
      )}
    </div>
  );
};

export default Cart;
