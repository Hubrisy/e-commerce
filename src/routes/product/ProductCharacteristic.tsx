import Battery from '@assets/svg/char/Battery.svg';
import Camera from '@assets/svg/char/Camera.svg';
import Cores from '@assets/svg/char/Cores.svg';
import Cpu from '@assets/svg/char/Cpu.svg';
import Screen from '@assets/svg/char/Screensize.svg';
import Approved from '@assets/svg/delivery/Approved.svg';
import Car from '@assets/svg/delivery/Car.svg';
import Shop from '@assets/svg/delivery/Shop.svg';
import clsx from 'clsx';

import { MobileContainer } from './MobileContainer';

import Button from '@/components/button';

export const ProductCharacteristics = () => {
  const colors = [
    'bg-black',
    'bg-[#781DBC]',
    'bg-[#E1B000]',
    'bg-[#E10000]',
    'bg-[#E8E8E8]',
  ];

  const storageSize = ['128GB', '256GB', '512GB', '1TB'];

  const characteristics = [
    { title: 'Screen size', char: '6.7', img: <Screen /> },
    { title: 'Cpu', char: 'Apple A16 Bionic', img: <Cpu /> },
    { title: 'Number of cores', char: '6', img: <Cores /> },
    { title: 'Main camera', char: '48-12 -12 MP', img: <Camera /> },
    { title: 'Front camera', char: '12 MP', img: <Camera /> },
    { title: 'Battery capacity', char: '4323 mAh', img: <Battery /> },
  ];

  const delivery = [
    { img: <Car />, title: 'Free delivery', desc: '1-2 day' },
    { img: <Shop />, title: 'In Stock', desc: 'Today' },
    { img: <Approved />, title: 'Guaranteed', desc: '1 year' },
  ];

  const productDetails = {
    desc: "Just as a book is judged by its cover, the first thing you notice when you pick up a modern smartphone is the display. Nothing surprising, because advanced technologies allow you to practically level the display frames and cutouts for the front camera and speaker, leaving no room for bold design solutions. And how good that in such realities Apple everything is fine with displays. Both critics and mass consumers always praise the quality of the picture provided by the products of the Californian brand. And last year's 6.7-inch Retina panels, which had ProMotion, caused real admiration for many.",
    firstInfoTitle: 'Screen',
    firstInfoDetails: [
      { title: 'Screen diagonal', info: '6.7' },
      { title: 'The screen resolution', info: '2796x1290' },
      { title: 'The screen refresh rate', info: '120 Hz' },
      { title: 'The pixel density', info: '460 ppi' },
      { title: 'Screen type', info: 'OLED' },
      {
        title: 'Additionally',
        info: 'Dynamic Island Always-On displayHDR displayTrue ToneWide color (P3)',
      },
    ],
    secondInfoTitle: 'CPU',
    secondInfoDetails: [
      { title: 'CPU', info: 'A16 Bionic' },
      { title: 'Number of cores', info: '6' },
    ],
  };

  return (
    <>
      <MobileContainer>
        <div className="flex items-center mt-5">
          <div className="text-[15px] font-normal">Select colors:</div>
          <div className="flex">
            {colors.map(item => (
              <div
                key={item}
                className={clsx(
                  `${item}`,
                  'w-2xlarge h-2xlarge rounded-[50%] ml-2',
                )}
              />
            ))}
          </div>
        </div>
        <div className="mt-6 flex gap-2">
          {storageSize.map(item => (
            <div
              className="w-[80px] h-4xlarge border-[#D5D5D5] border-[1px] rounded-lg flex justify-center items-center"
              key={item}
            >
              <div>{item}</div>
            </div>
          ))}
        </div>
        <div className="mt-6 grid grid-cols-2 gap-2">
          {characteristics.map(item => (
            <div
              key={item.title}
              className="bg-wildsand min-w-[166px] min-h-16 rounded-lg flex items-center text-[14px] font-normal"
            >
              <div className="ml-[18px]">{item.img}</div>
              <div className="ml-2">
                <div className="text-[#C4C4C4]">{item.title}</div>
                <div>{item.char}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-[14px] font-normal mt-6 text-[#6C6C6C]">
          Enhanced capabilities thanks toan enlarged display of 6.7 inchesand
          work without rechargingthroughout the day. Incredible photosas in
          weak, yesand in bright lightusing the new systemwith two cameras
          <span className="text-black border-b-black border-b-[1px] leading-6">
            {' '}
            more...
          </span>
        </div>
        <div>
          <Button fullWidth className="min-h-[56px] mt-4">
            Add to wishlist
          </Button>
          <Button fullWidth className="min-h-[56px] mt-4" variant="primary">
            Add to card
          </Button>
        </div>
        <div className="mt-2xlarge flex justify-between">
          {delivery.map(item => (
            <div
              key={item.title}
              className="text-center text-[14px] font-medium leading-6"
            >
              <div className="min-h-14 w-14 m-auto bg-wildsand flex items-center justify-center rounded-xl">
                {item.img}
              </div>
              <div className="text-[#717171]">{item.title}</div>
              <div>{item.desc}</div>
            </div>
          ))}
        </div>
      </MobileContainer>
      <div className="bg-[#FAFAFA] mt-3xlarge">
        <MobileContainer>
          <div className="max-w-[295px] m-auto font-medium leading-6">
            <div className="pt-4xlarge text-2xl">Details</div>
            <div className="mt-2xlarge text-gray">{productDetails.desc}</div>
            <div>
              <div className="text-xl mt-2xlarge">
                {productDetails.firstInfoTitle}
              </div>
              <div>
                {productDetails.firstInfoDetails.map(item => (
                  <div
                    key={item.title}
                    className="font-normal flex justify-between pb-2 border-[#CDCDCD] border-b-[1px] mt-6"
                  >
                    <div>{item.title}</div>
                    <div className="max-w-[120px]">{item.info}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="text-xl mt-2xlarge">
                {productDetails.secondInfoTitle}
              </div>
              <div>
                {productDetails.secondInfoDetails.map(item => (
                  <div
                    key={item.title}
                    className="font-normal flex justify-between pb-2 border-[#CDCDCD] border-b-[1px] mt-6"
                  >
                    <div>{item.title}</div>
                    <div className="max-w-[120px]">{item.info}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center mt-2xlarge mb-4xlarge">
              <Button className="min-h-4xlarge">View more</Button>
            </div>
          </div>
        </MobileContainer>
      </div>
    </>
  );
};
