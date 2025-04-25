import clsx from 'clsx';

import { colors } from '../data';

export const Colors = () => (
  <div className="flex items-center mt-5">
    <div className="text-[15px] font-normal">Select colors:</div>
    <div className="flex">
      {colors.map(item => (
        <div
          key={item}
          className={clsx(`${item}`, 'w-2xlarge h-2xlarge rounded-[50%] ml-2')}
        />
      ))}
    </div>
  </div>
);
