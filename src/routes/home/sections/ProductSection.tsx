import Heart from '@assets/svg/icons/heart.svg';
import Image from 'next/image';

import Button from '@/components/button';
import { Container } from '@/components/Container';
import { Loader } from '@/components/Loader';
import { useProducts } from '@/hooks/use-products';
import { currencySymbols } from '@/types';

export const ProductSection = () => {
  const { products } = useProducts();

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
        {products?.length ? (
          <div className="grid grid-cols-2 gap-large mt-2xlarge md:grid-cols-3 xl:grid-cols-4">
            {products.map(item => (
              <div
                key={item.name}
                className="bg-wildsand pt-[24px] pb-[24px] min-w-[160px] flex flex-col items-center justify-center rounded-[9px]"
              >
                <div className="self-end mr-[12px]">
                  <Heart />
                </div>
                <Image
                  src={item.img}
                  width={160}
                  height={160}
                  alt=""
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxWidth: '160px',
                    objectFit: 'contain',
                  }}
                />
                <div className="h-[96px] max-w-[140px] mt-medium text-center">
                  {item.name}
                </div>
                <div className="font-semibold text-2xl">
                  {currencySymbols[item.currency]} {item.price}
                </div>
                <Button className="w-[140px] min-h-[48px] bg-black text-white sm:min-w-[140px]">
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
