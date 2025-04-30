import CloseBtn from '@assets/svg/icons/close3.svg';
import Image from 'next/image';

import { useCartContext } from '@/context/Cart';
import { currencySymbols } from '@/types';

export const CartProducts = () => {
  const { cart, setCart, deleteFromCart } = useCartContext();

  const increaseQuantity = (id: number) => {
    const updatedCart = cart.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
    );
    setCart(updatedCart);
  };

  const decreaseQuantity = (id: number) => {
    const updatedCart = cart.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity <= 1 ? 1 : item.quantity - 1 }
        : item,
    );
    setCart(updatedCart);
  };

  return (
    <div className="my-3xlarge">
      {cart.map(item => (
        <div key={item.id}>
          <div className="flex justify-between">
            <div>
              <Image width={90} height={90} src={item.img} alt="" />
            </div>
            <div className="max-w-[240px] text-start">
              <div>
                <div className="text-[16px] font-medium">{item.name}</div>
                <div className="mt-2">#000{item.id}</div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex min-w-[88px] justify-between items-center mt-2">
                  <div onClick={() => decreaseQuantity(item.id)}>-</div>
                  <div className="h-8 w-4xlarge border-[1px] rounded-sm border-[#D9D9D9] flex justify-center items-center">
                    {item.quantity}
                  </div>
                  <div onClick={() => increaseQuantity(item.id)}>+</div>
                </div>
                <div>
                  <span>{currencySymbols.USD}</span>
                  {item.price}
                </div>
                <div onClick={() => deleteFromCart(item.id)}>
                  <CloseBtn />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[1px] bg-[#A3A3A3] my-3xlarge" />
        </div>
      ))}
    </div>
  );
};
