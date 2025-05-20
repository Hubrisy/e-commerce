import {
  createContext,
  type Dispatch,
  type PropsWithChildren,
  type SetStateAction,
  useContext,
  useState,
} from 'react';

import { useStorageValue } from '@/hooks/use-storage-value';
import { StorageKeys } from '@/storage/localstorage';
import type { CartItem, ShippingProduct } from '@/types';

interface CartTypes {
  cart: Array<CartItem>;
  selectedShipping?: ShippingProduct;
}

interface CartContextTypes extends CartTypes {
  setCart: Dispatch<SetStateAction<CartTypes['cart']>>;
  addToCart: (product: CartItem) => void;
  deleteFromCart: (id: number) => void;
  setSelectedShipping: Dispatch<SetStateAction<CartTypes['selectedShipping']>>;
}

const defaultCartState: CartTypes = {
  cart: [],
  selectedShipping: undefined,
};

const CartContext = createContext<CartContextTypes | undefined>(undefined);

export const CartContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [cart, setCart] = useStorageValue<CartTypes['cart']>(
    StorageKeys.cart,
    defaultCartState.cart,
  );

  const [selectedShipping, setSelectedShipping] =
    useState<CartTypes['selectedShipping']>(undefined);

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

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        deleteFromCart,
        selectedShipping,
        setSelectedShipping,
      }}
    >
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
