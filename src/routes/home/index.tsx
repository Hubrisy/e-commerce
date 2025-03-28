import { BrowseByCategory } from './sections/browseByCategory';
import { MainScreen } from './sections/MainScreen';

import Footer from '@/sections/footer';
import Header from '@/sections/header';

const Home = () => (
  <div>
    <Header />
    <MainScreen />
    <BrowseByCategory />
    <Footer />
  </div>
);

export default Home;
