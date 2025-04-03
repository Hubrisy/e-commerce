import ArrowLeft from '@assets/svg/icons/arrowleft.svg';
import ArrowRight from '@assets/svg/icons/arrowright.svg';
import clsx from 'clsx';

import { categories } from './data';

import { Container } from '@/components/Container';
import { useFilterContext } from '@/context/Filter';
import type { ProductCategory } from '@/types';

export const BrowseByCategory = () => {
  const { category, setCategory } = useFilterContext();

  const onCategoryClick = (category: ProductCategory) => {
    setCategory(prev => (prev === category ? undefined : category));
  };

  return (
    <div className="relative bg-alabaster font-medium py-[64px]">
      <Container>
        <div className="mb-4xlarge flex items-center justify-between">
          <div className="text-[24px]">Browse By Category</div>
          <div className="flex min-w-[80px] justify-between">
            <div>
              <ArrowLeft />
            </div>
            <div>
              <ArrowRight />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-large md:grid-cols-3 xl:grid-cols-6">
          {categories.map(item => (
            <div
              key={item.name}
              onClick={() => onCategoryClick(item.category)}
              className={clsx(
                'border-[2px] rounded-2xl bg-gallery p-large text-[16px] flex flex-col items-center transition-all',
                category === item.category
                  ? 'border-black shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff]'
                  : 'border-transparent',
              )}
            >
              <div>{item.img}</div>
              <div className="mt-[10px]">{item.name}</div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};
