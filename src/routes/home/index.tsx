import { BrowseByCategory } from './sections/browseByCategory';
import { MainScreen } from './sections/MainScreen';
import { ProductSection } from './sections/productSection';
import { Slider } from './sections/sliderSection';

import { FilterContextProvider } from '@/context/Filter';
import Footer from '@/sections/footer';
import Header from '@/sections/header';

const Home = () => (
  <FilterContextProvider>
    <div>
      <Header />
      <MainScreen />
      <BrowseByCategory />
      <ProductSection />
      <Slider />
      <Footer />
    </div>
  </FilterContextProvider>
);

export default Home;
