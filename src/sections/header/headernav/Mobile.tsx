import { useState } from 'react';
import BurgerBtn from '@assets/svg/icons/Burger.svg';
import CloseBtn from '@assets/svg/icons/close2.svg';

import { navigationItems, userIcons } from '../data';

import styles from './mobilestyles.module.scss';

const MobileNav: React.FC = () => {
  const [isModal, setIsModal] = useState(false);

  const handleModal = () => {
    setIsModal(prev => !prev);
  };

  return (
    <div className="p-[10px]">
      <div onClick={handleModal} className="self-end">
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
                >
                  {item.name}
                </div>
              ))}
            </div>
            <div className="flex gap-xlarge mt-[25px] items-center">
              {userIcons.map((item, index) => (
                <div className="cursor-pointer" key={index}>
                  {item}
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
