import {
  createContext,
  type Dispatch,
  type PropsWithChildren,
  type SetStateAction,
  useContext,
  useState,
} from 'react';

import { useStorageValue } from '@/hooks/use-storage-value';
import type { CartItem, ShippingProduct } from '@/types';
import { StorageKeys } from '@/utils/localstorage';

interface CartTypes {
  cart: Array<CartItem>;
  purchasedItems: Array<CartItem>;
  selectedShipping?: ShippingProduct;
}

interface CartContextTypes extends CartTypes {
  setCart: Dispatch<SetStateAction<CartTypes['cart']>>;
  setPurchasedItems: Dispatch<SetStateAction<CartTypes['cart']>>;
  addToCart: (product: CartItem) => void;
  deleteFromCart: (id: number) => void;
  setSelectedShipping: Dispatch<SetStateAction<CartTypes['selectedShipping']>>;
}

const defaultCartState: CartTypes = {
  cart: [],
  purchasedItems: [],
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

  const [purchasedItems, setPurchasedItems] = useStorageValue<
    CartTypes['purchasedItems']
  >(StorageKeys.purchasedItems, defaultCartState.purchasedItems);

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
        purchasedItems,
        setPurchasedItems,
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
