import { useEffect, useMemo, useState } from 'react';
import Heart from '@assets/svg/icons/heart.svg';
import clsx from 'clsx';
import Image from 'next/image';

import styles from './styles.module.scss';

import Button from '@/components/button';
import { Container } from '@/components/Container';
import { Loader } from '@/components/Loader';
import { useFilterContext } from '@/context/Filter';
import { useProducts } from '@/hooks/use-products';
import { getStorage, setStorage } from '@/storage/localstorage';
import type { ProductFeature } from '@/types';
import { currencySymbols } from '@/types';

const productSections: { name: string; id: ProductFeature }[] = [
  {
    name: 'New Arrival',
    id: 'newarrival',
  },
  {
    name: 'Featured Products',
    id: 'featured',
  },
  {
    name: 'Bestseller',
    id: 'bestseller',
  },
];

export const ProductSection = () => {
  const { products } = useProducts();
  const { category } = useFilterContext();
  const [favorite, setFavorite] = useState<Array<string>>([]);
  const [section, setSection] = useState<ProductFeature>(undefined);

  const addFavorites = (item: string) => {
    setFavorite(prev => [...prev, item]);
  };

  const removeFavorites = (item: string) => {
    const result = favorite.filter(product => product !== item);

    setFavorite(result);
  };

  // const filteredProducts = useMemo(() => {
  //   if (!category) {
  //     return products;
  //   }

  //   if (category) {
  //     return products?.filter(item => item.category === category);
  //   }

  //   if (section) {
  //     return products?.filter(item => item.feature === section);
  //   }
  // }, [products, category, section]);

  const findItem = (sectionName: string) =>
    favorite.find(item => item === sectionName);

  const filteredProducts = useMemo(() => {
    if (!products) return [];

    return products.filter(item => {
      const matchesCategory = category ? item.category === category : true;
      const matchesSection = section ? item.feature === section : true;

      return matchesCategory && matchesSection;
    });
  }, [products, category, section]);

  useEffect(() => {
    const storedFavorites = getStorage('favorites');

    if (storedFavorites) {
      setFavorite(JSON.parse(storedFavorites));
    }
  }, []);

  useEffect(() => {
    setStorage('favorites', JSON.stringify(favorite));
  }, [favorite]);

  return (
    <div className="pt-[88px] bg-white pb-[56px]">
      <Container className="font-medium text-[16px]">
        <div className="max-w-[375px]">
          <div className="flex justify-between text-granite-grey">
            {productSections.map(item => (
              <div
                key={item.id}
                onClick={() =>
                  setSection(prev => (prev === item.id ? undefined : item.id))
                }
              >
                <div
                  className={clsx(
                    'cursor-pointer border-b-[2px] transition',
                    section === item.id
                      ? 'border-black text-black'
                      : 'border-none',
                  )}
                >
                  {item.name}
                </div>
              </div>
            ))}
          </div>
        </div>
        {filteredProducts?.length ? (
          <div className="grid grid-cols-2 gap-large mt-2xlarge md:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map(item => (
              <div
                key={item.name}
                className="bg-wildsand py-xlarge min-w-[160px] flex flex-col items-center justify-center rounded-[9px]"
              >
                <div
                  onClick={() =>
                    findItem(item.name)
                      ? removeFavorites(item.name)
                      : addFavorites(item.name)
                  }
                  className={clsx(
                    findItem(item.name) ? styles.redsvg : styles.blacksvg,
                    'self-end mr-[12px] mb-medium',
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
          <div className="my-large">
            <Loader />
          </div>
        )}
      </Container>
    </div>
  );
};
