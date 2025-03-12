import Cameras from '@assets/svg/camera.svg';
import Computer from '@assets/svg/computers.svg';
import Gaming from '@assets/svg/gaming.svg';
import Headphones from '@assets/svg/headphones.svg';
import Phone from '@assets/svg/phone.svg';

const navigation = [
  { name: 'Phones', section: <Phone /> },
  { name: 'Computers', section: <Computer /> },
  { name: 'Smart watches', section: <Gaming /> },
  { name: 'Cameras', section: <Cameras /> },
  { name: 'Headphones', section: <Headphones /> },
  { name: 'Gaming', section: <Gaming /> },
];

const Navigation = () => (
  <div className="w-full bg-[#2E2E2E] h-[48px] text-[#656565] font-[500] flex items-center justify-center">
    <div className="flex justify-center items-center">
      {navigation.map((item, index) => (
        <div
          key={item.name}
          className="flex items-center justify-center cursor-pointer"
        >
          <div>{item.section}</div>
          <div className="ml-[8px]">{item.name}</div>
          {index !== navigation.length - 1 && (
            <div className="h-[24px] w-[1px] bg-granite-grey ml-[48px] mr-[48px]" />
          )}
        </div>
      ))}
    </div>
  </div>
);

export default Navigation;
