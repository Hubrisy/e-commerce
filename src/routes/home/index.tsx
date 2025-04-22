import { useMemo } from 'react';

import { BrowseByCategory } from './sections/browseByCategory';
import { MainScreen } from './sections/MainScreen';
import { ProductSection } from './sections/productSection';
import { ProductFeatures } from './sections/productSection/ProductFeatures';
import { Slider } from './sections/sliderSection';
import { SummerSale } from './sections/SummerSale';

import { FilterContextProvider } from '@/context/Filter';
import { useProducts } from '@/hooks/use-products';
import Footer from '@/sections/footer';
import Header from '@/sections/header';
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
    <FilterContextProvider>
      <div className="relative">
        <Header />
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
        <Footer />
      </div>
    </FilterContextProvider>
  );
};

export default Home;
