import {
  createContext,
  type Dispatch,
  type PropsWithChildren,
  type SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';

import { getStorage, StorageKeys } from '@/storage/localstorage';
import type { Product } from '@/types';

interface CartTypes {
  cart: Array<Product>;
  setCart: Dispatch<SetStateAction<Array<Product>>>;
}

const defaultCartState: CartTypes = {
  cart: [],
  setCart: () => {},
};

const CartContext = createContext(defaultCartState);

export const CartContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [cart, setCart] = useState<Array<Product>>([]);

  useEffect(() => {
    const storedCartProducts = getStorage(StorageKeys.cart);

    if (storedCartProducts) {
      setCart(JSON.parse(storedCartProducts));
    }
  }, []);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
