import { useMemo } from 'react';
import { useRouter } from 'next/router';

import { Characteristics } from './sections/Characteristics';
import { Colors } from './sections/Colors';
import { Delivery } from './sections/Delivery';
import { ProductStorage } from './sections/Storage';
import type { ProductPageProps } from '.';
import { productDescriptions } from './data';

import Button from '@/components/button';
import { useCartContext } from '@/context/Cart';
import { useFavorites } from '@/hooks/use-favorites';
import { setStorage, StorageKeys } from '@/storage/localstorage';

export const ProductDetails: React.FC<ProductPageProps> = ({ product }) => {
  const { query } = useRouter();
  const { cart, setCart } = useCartContext();
  const { isItemInFavorites, toggleFavorite, favorites } = useFavorites();

  const isProductInFavorites = useMemo(
    () => isItemInFavorites(product.id),
    [favorites],
  );

  const descriptions = productDescriptions.find(
    item => item.id === Number(query.id),
  );

  const addToCart = () => {
    const productAlreadyInCart = cart.find(item => item.id === product.id);

    if (productAlreadyInCart) {
      return;
    }

    const updateCart = [...cart, product];

    if (updateCart.length) {
      setCart(updateCart);
      setStorage(StorageKeys.cart, JSON.stringify(updateCart));
    }
  };

  return (
    <>
      <Colors />
      <ProductStorage />
      <Characteristics />
      <div className="text-[14px] font-normal mt-6 text-[#6C6C6C]">
        {descriptions?.description}
      </div>
      <div className="lg:flex justify-between">
        <Button
          fullWidth
          className="min-h-[56px] mt-4 lg:min-w-[245px]"
          onClick={() => toggleFavorite(product.id)}
        >
          {isProductInFavorites ? 'Remove from favorites' : 'Add to favorites'}
        </Button>
        <Button
          fullWidth
          className="min-h-[56px] mt-4 lg:min-w-[245px]"
          variant="primary"
          onClick={addToCart}
        >
          Add to cart
        </Button>
      </div>
      <Delivery />
    </>
  );
};
