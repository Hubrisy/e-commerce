import {
  createContext,
  type Dispatch,
  type PropsWithChildren,
  type SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';

import { useStorageValue } from '@/hooks/use-storage-value';
import { StorageKeys } from '@/storage/localstorage';
import type { CartItem } from '@/types';

interface CartTypes {
  cart: Array<CartItem>;
}

interface CartContextTypes extends CartTypes {
  setCart: Dispatch<SetStateAction<Array<CartItem>>>;
  addToCart: (product: CartItem) => void;
  deleteFromCart: (id: number) => void;
}

const defaultCartState: CartTypes = {
  cart: [],
};

const CartContext = createContext<CartContextTypes | undefined>(undefined);

export const CartContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [cart, setCart] = useStorageValue<CartTypes['cart']>(
    StorageKeys.cart,
    defaultCartState.cart,
  );

  const [hasMounted, setHasMounted] = useState(false);

  const addToCart = (product: CartItem) => {
    const productAlreadyInCart = cart.find(item => item.id === product.id);

    if (productAlreadyInCart) {
      return;
    }

    const updateCart = [...cart, product];

    if (updateCart.length) {
      setCart(updateCart);
    }
  };

  const deleteFromCart = (id: number) => {
    const updateCart = cart.filter(item => item.id !== id);
    setCart(updateCart);
  };

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, deleteFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const value = useContext(CartContext);

  if (!value) {
    throw Error('useCartContext should be called inside CartContextProvider');
  }

  return value;
};
