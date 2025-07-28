import { useEffect, useState } from 'react';
import BurgerBtn from '@assets/svg/icons/Burger.svg';
import CloseBtn from '@assets/svg/icons/close2.svg';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { navigationItems, userIcons } from '../data';

import styles from './styles.module.scss';

import { useCartContext } from '@/context/Cart';
import { useMountContext } from '@/context/Mount';
import { useFavorites } from '@/hooks/use-favorites';
import { Routes } from '@/routes';

const MobileNav: React.FC = () => {
  const [isModal, setIsModal] = useState(false);
  const { cart } = useCartContext();
  const { isMounted } = useMountContext();
  const { favorites } = useFavorites();

  const router = useRouter();

  const handleModal = () => {
    setIsModal(prev => !prev);
  };

  const goToAnotherPage = (link: string) => {
    router.push(link);
  };

  useEffect(() => {
    const handleRouteChange = () => {
      setIsModal(false);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  useEffect(() => {
    if (isModal) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isModal]);

  return (
    <div className="p-[10px]">
      <div onClick={handleModal} className="self-end mr-2.5">
        <BurgerBtn />
      </div>
      {isModal && (
        <div className="fixed inset-0 z-10 bg-[#656565d7] flex justify-end">
          <div
            className={`${styles.show} bg-white flex flex-col items-center w-[70%] h-full`}
          >
            <div className="self-end mr-[10px] mt-[10px]">
              <CloseBtn onClick={handleModal} />
            </div>
            <div className="flex gap-[15px] mt-[20px] flex-col items-center text-granite-grey text-base">
              {navigationItems.map(item => (
                <div
                  key={item.name}
                  className="cursor-pointer text-[18px] hover:text-black"
                  onClick={() => goToAnotherPage(item.link)}
                >
                  {item.name}
                </div>
              ))}
            </div>
            <div className="flex gap-xlarge mt-[25px] items-center">
              {userIcons.map(item => (
                <div className="cursor-pointer relative" key={item.id}>
                  {isMounted && item.link === Routes.cart && !!cart.length && (
                    <div className="absolute top-[-15px] right-[-10px] bg-[red] h-4 w-4 text-white rounded-full flex justify-center items-center text-[12px]">
                      {cart.length}
                    </div>
                  )}
                  {isMounted &&
                    item.link === Routes.favorites &&
                    !!favorites.length && (
                      <div className="absolute top-[-15px] right-[-10px] bg-[grey] h-4 w-4 text-white rounded-full flex justify-center items-center text-[12px]">
                        {favorites.length}
                      </div>
                    )}
                  <Link href={item.link}>{item.img}</Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
