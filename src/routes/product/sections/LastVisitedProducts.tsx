import { useMemo } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { ProductItem } from '@/components/productItem';
import { useProducts } from '@/hooks/use-products';
import { getStoredVisitedProductIds } from '@/utils/visitedProduct';

const settings = {
  dots: true,
  arrows: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    // {
    //   breakpoint: 1440, // при ширине экрана меньше 1024px
    //   settings: {
    //     slidesToShow: 4,
    //     slidesToScroll: 4,
    //   },
    // },
    {
      breakpoint: 1024, // при ширине экрана меньше 1024px
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 768, // при ширине экрана меньше 768px (планшеты)
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 480, // при ширине экрана меньше 480px (телефоны)
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
};

export const LastVisitedProducts: React.FC = () => {
  const { products } = useProducts();

  const lastSeenProducts = useMemo(() => {
    if (!products?.length) {
      return [];
    }

    const storedProductIds = getStoredVisitedProductIds();

    const filteredProducts = products.filter(product =>
      storedProductIds.includes(product.id),
    );

    return filteredProducts;
  }, [products?.length]);

  return (
    <div className="mt-14 mb-22">
      <div className="text-2xl font-medium">Last seen products</div>
      <div className="mt-2xlarge">
        <Slider {...settings} className="last-seen_products">
          {lastSeenProducts?.map(product => (
            <div key={product.id}>
              <ProductItem product={product} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
