import { useRouter } from 'next/router';

import { characteristics } from '../data';

export const Characteristics = () => {
  const { query } = useRouter();

  const productCharacteristics = characteristics.find(
    item => item.id === Number(query.id),
  );

  return (
    <div className="mt-6 grid grid-cols-2 gap-2">
      {productCharacteristics?.characteristics.map(item => (
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
  );
};
