import { BrowseByCategory } from './sections/browseByCategory';
import { MainScreen } from './sections/MainScreen';
import { ProductSection } from './sections/ProductSection';

import Footer from '@/sections/footer';
import Header from '@/sections/header';

const Home = () => (
  <div>
    <Header />
    <MainScreen />
    <BrowseByCategory />
    <ProductSection />
    <Footer />
  </div>
);

export default Home;
