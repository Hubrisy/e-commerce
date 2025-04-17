import clsx from 'clsx';

import { useFilterContext } from '@/context/Filter';
import { useScrollContext } from '@/context/Scroll';
import type { ProductFeature } from '@/types';

const productFeatures: Array<{ name: string; key: ProductFeature }> = [
  {
    name: 'New Arrival',
    key: 'newarrival',
  },
  {
    name: 'Featured Products',
    key: 'featured',
  },
  {
    name: 'Bestseller',
    key: 'bestseller',
  },
];

export const ProductFeatures = () => {
  const { feature, setFeature } = useFilterContext();
  const { shopRef } = useScrollContext();

  const onFeatureClick = (newFeature: ProductFeature) => {
    setFeature(prev => (prev === newFeature ? undefined : newFeature));
  };

  return (
    <div ref={shopRef} className="flex justify-between text-granite-grey">
      {productFeatures.map(item => (
        <div key={item.key} onClick={() => onFeatureClick(item.key)}>
          <div
            className={clsx(
              'cursor-pointer border-b-[2px] transition',
              feature === item.key ? 'border-black text-black' : 'border-none',
            )}
          >
            {item.name}
          </div>
        </div>
      ))}
    </div>
  );
};
