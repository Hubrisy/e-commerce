import { useMemo, useState } from 'react';
import Heart from '@assets/svg/icons/heart.svg';
import Image from 'next/image';

import styles from './styles.module.scss';

import Button from '@/components/button';
import { Container } from '@/components/Container';
import { Loader } from '@/components/Loader';
import { useFilterContext } from '@/context/Filter';
import { useProducts } from '@/hooks/use-products';
import { currencySymbols } from '@/types';

export const ProductSection = () => {
  const { products } = useProducts();
  const { category } = useFilterContext();
  const [favorite, setFavorite] = useState<string>('');

  const toggleFavorites = (item: string) => {
    setFavorite(prev => (prev === item ? '' : item));
  };

  const filteredProducts = useMemo(() => {
    if (!category) {
      return products;
    }

    const result = products?.filter(item => item.category === category);

    return result;
  }, [products, category]);

  return (
    <div className="pt-[88px] bg-white pb-[56px]">
      <Container className="font-medium text-[16px]">
        <div className="max-w-[375px]">
          <div className="flex justify-between text-granite-grey">
            <div className="cursor-pointer hover:border-b-[2px] border-black hover:text-black">
              New Arrival
            </div>
            <div className="cursor-pointer hover:border-b-[2px] border-black hover:text-black">
              Bestseller
            </div>
            <div className="cursor-pointer hover:border-b-[2px] border-black hover:text-black">
              Featured Products
            </div>
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
                  className="self-end mr-[12px] mb-medium"
                  onClick={() => toggleFavorites(item.name)}
                >
                  <Heart
                    className={favorite ? styles.redsvg : styles.blacksvg}
                  />
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
