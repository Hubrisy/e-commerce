import { useMemo } from 'react';

import { BrowseByCategory } from './sections/browseByCategory';
import { MainScreen } from './sections/MainScreen';
import { ProductSection } from './sections/productSection';
import { ProductFeatures } from './sections/productSection/ProductFeatures';
import { Slider } from './sections/sliderSection';
import { SummerSale } from './sections/SummerSale';

import { FilterContextProvider } from '@/context/Filter';
import { ScrollContextProvider } from '@/context/Scroll';
import { useProducts } from '@/hooks/use-products';
import Footer from '@/sections/footer';
import Header from '@/sections/header';

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
      <ScrollContextProvider>
        <div>
          <Header />
          <MainScreen />
          <BrowseByCategory />
          <ProductSection products={productsForMainScreen ?? []}>
            <ProductFeatures />
          </ProductSection>
          <Slider />
          <ProductSection products={productsForSale ?? []}>
            <div className="text-2xl font-medium">Discounts up to -50%</div>
          </ProductSection>
          <SummerSale />
          <Footer />
        </div>
      </ScrollContextProvider>
    </FilterContextProvider>
  );
};

export default Home;
