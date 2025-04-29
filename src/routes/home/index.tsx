import { useMemo } from 'react';

import { BrowseByCategory } from './sections/browseByCategory';
import { MainScreen } from './sections/MainScreen';
import { ProductSection } from './sections/productSection';
import { ProductFeatures } from './sections/productSection/ProductFeatures';
import { Slider } from './sections/sliderSection';
import { SummerSale } from './sections/SummerSale';

import { useProducts } from '@/hooks/use-products';
import { SectionIds } from '@/types';

const Home = () => {
  const { products } = useProducts();

  const productsForMainScreen = useMemo(
    () => products?.filter(item => item.isOnMainScreen),
    [products],
  );

  const productsForSale = useMemo(
    () => products?.filter(item => item.isOnsale),
    [products],
  );

  return (
    <div className="relative">
      <MainScreen />
      <BrowseByCategory />
      <ProductSection
        id={SectionIds.products}
        products={productsForMainScreen ?? []}
      >
        <ProductFeatures />
      </ProductSection>
      <Slider />
      <ProductSection products={productsForSale ?? []}>
        <div className="text-2xl font-medium">Discounts up to -50%</div>
      </ProductSection>
      <SummerSale />
    </div>
  );
};

export default Home;
