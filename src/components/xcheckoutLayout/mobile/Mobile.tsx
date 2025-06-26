import Line from '@assets/svg/icons/line.svg';
import clsx from 'clsx';
import Link from 'next/link';

import type { CheckLayoutTypes } from '..';

export const MobileCheckoutLayout: React.FC<CheckLayoutTypes> = ({
  pathname,
  steps,
}) => (
  <div className="flex justify-between">
    {steps.map((item, index) => (
      <div key={item.step} className="flex items-center">
        {index === 1 && steps.length > 1 && (
          <div>
            <Line />
          </div>
        )}
        <Link href={item.path}>
          <div
            className={clsx(
              'flex items-center',
              pathname === item.path ? 'opacity-100' : 'opacity-50',
            )}
          >
            <div>{item.img}</div>
            <div className="ml-2">
              <div className="text-[14px] leading-4">{item.step}</div>
              <div>{item.title}</div>
            </div>
          </div>
        </Link>
      </div>
    ))}
  </div>
);
