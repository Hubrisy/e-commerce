import Approved from '@assets/svg/delivery/Approved.svg';
import Car from '@assets/svg/delivery/Car.svg';
import Shop from '@assets/svg/delivery/Shop.svg';

const delivery = [
  { img: <Car />, title: 'Free delivery', desc: '1-2 day' },
  { img: <Shop />, title: 'In Stock', desc: 'Today' },
  { img: <Approved />, title: 'Guaranteed', desc: '1 year' },
];

export const Delivery = () => (
  <div className="mt-2xlarge flex justify-between">
    {delivery.map(item => (
      <div
        key={item.title}
        className="text-center text-[14px] font-medium leading-6 lg:flex items-center"
      >
        <div className="min-h-14 w-14 m-auto bg-wildsand flex items-center justify-center rounded-xl">
          {item.img}
        </div>
        <div className="lg:flex flex-col lg:text-start lg:ml-4">
          <div className="text-[#717171]">{item.title}</div>
          <div>{item.desc}</div>
        </div>
      </div>
    ))}
  </div>
);
