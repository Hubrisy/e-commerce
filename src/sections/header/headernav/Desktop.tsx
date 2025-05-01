import Link from 'next/link';

import { navigationItems, userIcons } from '../data';

import { useCartContext } from '@/context/Cart';
import { useMountContext } from '@/context/Mount';
import { Routes } from '@/routes';

const DesktopNav: React.FC = () => {
  const { isMounted } = useMountContext();
  const { cart } = useCartContext();

  return (
    <div className="flex bg-white">
      <div className="flex ml-2xlarge gap-[10px] items-center text-granite-grey text-base md:gap-[26px] lg:gap-[52px]">
        {navigationItems.map(item => (
          <div key={item.name} className="cursor-pointer hover:text-black">
            <Link href={item.link}>{item.name}</Link>
          </div>
        ))}
      </div>
      <div className="flex ml-2xlarge gap-xlarge items-center">
        {userIcons.map(item => (
          <div className="cursor-pointer relative" key={item.id}>
            {isMounted && item.link === Routes.cart && !!cart.length && (
              <div className="absolute top-[-15px] right-[-10px] bg-[red] h-4 w-4 text-white rounded-full flex justify-center items-center text-[12px]">
                {cart.length}
              </div>
            )}
            <Link href={item.link}>{item.img}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesktopNav;
