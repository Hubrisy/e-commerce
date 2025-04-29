import {
  createContext,
  type Dispatch,
  type PropsWithChildren,
  type SetStateAction,
  useContext,
  useState,
} from 'react';

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

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
