import { CartProducts } from './CartProducts';

import { useCartContext } from '@/context/Cart';

const Cart = () => {
  const { cart } = useCartContext();

  return (
    <div className="mt-[128px] mb-3xlarge max-w-[340px] m-auto">
      {cart.length > 0 ? (
        <div>
          <div className="text-2xl font-semibold">Shopping cart:</div>
          <CartProducts />
        </div>
      ) : (
        <div className="text-center text-2xl">Cart is empty</div>
      )}
    </div>
  );
};

export default Cart;
