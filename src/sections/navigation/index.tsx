import Cameras from '@assets/svg/icons/camera.svg';
import Computer from '@assets/svg/icons/computers.svg';
import Gaming from '@assets/svg/icons/gaming.svg';
import Headphones from '@assets/svg/icons/headphones.svg';
import Phone from '@assets/svg/icons/phone.svg';

const navigation = [
  { name: 'Phones', section: <Phone /> },
  { name: 'Computers', section: <Computer /> },
  { name: 'Smart watches', section: <Gaming /> },
  { name: 'Cameras', section: <Cameras /> },
  { name: 'Headphones', section: <Headphones /> },
  { name: 'Gaming', section: <Gaming /> },
];

const Navigation = () => (
  <div className="w-full bg-[#2E2E2E] h-[48px] text-granite-grey font-medium hidden items-center justify-center md:flex">
    <div className="flex justify-center items-center">
      {navigation.map((item, index) => (
        <div
          key={item.name}
          className="flex items-center justify-center cursor-pointer"
        >
          <div>{item.section}</div>
          <div className="ml-[8px]">{item.name}</div>
          {index !== navigation.length - 1 && (
            <div className="h-[24px] w-[1px] bg-granite-grey md:mx-[10px] lg:mx-[36px] xl:mx-4xlarge" />
          )}
        </div>
      ))}
    </div>
  </div>
);

export default Navigation;
