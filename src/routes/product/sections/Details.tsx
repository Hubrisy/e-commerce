import { useRouter } from 'next/router';

import { productDetails } from '../data';

import Button from '@/components/button';

export const Details = () => {
  const { query } = useRouter();

  const details = productDetails.find(item => item.id === Number(query.id));

  return (
    <div className="w-[295px] m-auto font-medium leading-6 pb-4xlarge lg:w-[95%]">
      <div className="pt-4xlarge text-2xl">Details</div>
      <div className="mt-2xlarge text-gray">{details?.desc}</div>
      <div>
        <div className="text-xl mt-2xlarge">{details?.productTitle}</div>
        <div>
          {details?.productChar.map(item => (
            <div
              key={item.title}
              className="font-normal flex justify-between pb-2 border-[#CDCDCD] border-b-[1px] mt-6"
            >
              <div>{item.title}</div>
              <div className="max-w-[120px] text-end">{item.info}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-2xlarge">
        <Button className="min-h-4xlarge">View more</Button>
      </div>
    </div>
  );
};
