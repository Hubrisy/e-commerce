import Heart from '@assets/svg/icons/heart.svg';
import clsx from 'clsx';
import Image from 'next/image';
import { useRouter } from 'next/router';

import Button from '../button';

import styles from './styles.module.scss';

import { useFavorites } from '@/hooks/use-favorites';
import { currencySymbols, type Product } from '@/types';

interface Props {
  product: Product;
}

export const ProductItem: React.FC<Props> = ({ product }) => {
  const router = useRouter();
  const { toggleFavorite, isItemInFavorites } = useFavorites();

  const goToProductPage = (slug: number) => {
    router.push(`/product/${slug}`);
  };

  return (
    <div
      key={product.name}
      className="bg-wildsand py-xlarge min-w-[160px] flex flex-col items-center justify-center rounded-[9px]"
    >
      <div
        onClick={() => toggleFavorite(product.id)}
        className={clsx(
          isItemInFavorites(product.id) ? styles.redsvg : styles.blacksvg,
          'self-end mr-[12px] mb-medium transition-all cursor-pointer',
        )}
      >
        <Heart />
      </div>
      <Image
        src={product.img}
        width={160}
        height={160}
        alt=""
        className="w-[104px] h-[104px] md:w-[160px] md:h-[160px] object-contain"
      />
      <div className="h-[48px] max-w-[140px] mt-medium text-center overflow-hidden text-ellipsis line-clamp-2">
        {product.name}
      </div>
      <div className="font-semibold text-2xl mt-large">
        {currencySymbols[product.currency]} {product.price}
      </div>
      <Button
        variant="primary"
        className="w-[140px] min-h-[48px] mt-large sm:min-w-[140px]"
        onClick={() => goToProductPage(product.id)}
      >
        Buy Now
      </Button>
    </div>
  );
};
