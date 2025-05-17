import { useAppStateContext } from '@/context/AppState';
import { useCartContext } from '@/context/Cart';

const ThanksPage = () => {
  const { cart } = useCartContext();
  const { orderDetails } = useAppStateContext();

  const orderSummary = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="mt-[128px]">
      <div>Thanks page</div>
      <div>Summary: {orderSummary}</div>
      <div>Shipping: {orderDetails.price}</div>
    </div>
  );
};

export default ThanksPage;
