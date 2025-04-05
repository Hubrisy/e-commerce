import { useEffect, useMemo, useState } from 'react';
import Heart from '@assets/svg/icons/heart.svg';
import clsx from 'clsx';
import Image from 'next/image';

import { ProductFeatures } from './ProductFeatures';

import styles from './styles.module.scss';

import Button from '@/components/button';
import { Container } from '@/components/Container';
import { Loader } from '@/components/Loader';
import { useFilterContext } from '@/context/Filter';
import { useProducts } from '@/hooks/use-products';
import { getStorage, setStorage } from '@/storage/localstorage';
import { currencySymbols } from '@/types';

export const ProductSection: React.FC = () => {
  const { products, isLoading } = useProducts();
  const { category, feature } = useFilterContext();
  const [favorites, setFavorites] = useState<Array<number>>([]);

  const isItemInFavorites = (id: number) => favorites.some(item => item === id);

  const toggleFavorite = (id: number) => {
    const idExist = isItemInFavorites(id);

    if (idExist) {
      setFavorites(prev => prev.filter(item => item !== id));

      return;
    }

    setFavorites(prev => [...prev, id]);
  };

  const filteredProducts = useMemo(() => {
    if (!products) return [];

    return products.filter(item => {
      const matchesCategory = category ? item.category === category : true;
      const matchesFeature = feature ? item.feature === feature : true;

      return matchesCategory && matchesFeature;
    });
  }, [products?.length, category, feature]);

  useEffect(() => {
    const storedFavorites = getStorage('favorites');

    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  useEffect(() => {
    setStorage('favorites', JSON.stringify(favorites));
  }, [favorites]);

  if (isLoading) {
    return (
      <div className="my-large">
        <Loader />
      </div>
    );
  }

  return (
    <div className="pt-[88px] bg-white pb-[56px]">
      <Container className="font-medium text-[16px]">
        <div className="max-w-[375px]">
          <ProductFeatures />
        </div>
        {filteredProducts?.length ? (
          <div className="grid grid-cols-2 gap-large mt-2xlarge md:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map(item => (
              <div
                key={item.name}
                className="bg-wildsand py-xlarge min-w-[160px] flex flex-col items-center justify-center rounded-[9px]"
              >
                <div
                  onClick={() => toggleFavorite(item.id)}
                  className={clsx(
                    isItemInFavorites(item.id)
                      ? styles.redsvg
                      : styles.blacksvg,
                    'self-end mr-[12px] mb-medium transition-all',
                  )}
                >
                  <Heart />
                </div>
                <Image
                  src={item.img}
                  width={160}
                  height={160}
                  alt=""
                  className="w-[104px] h-[104px] md:w-[160px] md:h-[160px] object-contain"
                />
                <div className="h-[48px] max-w-[140px] mt-medium text-center overflow-hidden text-ellipsis line-clamp-2">
                  {item.name}
                </div>
                <div className="font-semibold text-2xl mt-large">
                  {currencySymbols[item.currency]} {item.price}
                </div>
                <Button className="w-[140px] min-h-[48px] mt-large bg-black text-white sm:min-w-[140px]">
                  Buy Now
                </Button>
              </div>
            ))}
          </div>
        ) : (
          <div className="my-large">No item</div>
        )}
      </Container>
    </div>
  );
};
