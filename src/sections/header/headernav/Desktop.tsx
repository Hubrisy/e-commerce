import { navigationItems, userIcons } from '../data';

const DesktopNav: React.FC = () => (
  <div className="flex bg-white">
    <div className="flex ml-[32px] gap-[10px] items-center text-granite-grey text-base md:gap-[26px] lg:gap-[52px]">
      {navigationItems.map(item => (
        <div key={item.name} className="cursor-pointer hover:text-black">
          {item.name}
        </div>
      ))}
    </div>
    <div className="flex ml-[32px] gap-[24px] items-center">
      {userIcons.map((item, index) => (
        <div className="cursor-pointer" key={index}>
          {item}
        </div>
      ))}
    </div>
  </div>
);

export default DesktopNav;
