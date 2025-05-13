import { type PropsWithChildren, useMemo } from 'react';
import Line from '@assets/svg/icons/line.svg';
import Location from '@assets/svg/icons/location.svg';
import Payment from '@assets/svg/icons/payment.svg';
import Shipping from '@assets/svg/icons/shipping.svg';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Routes } from '@/routes';

const steps = [
  {
    title: 'Address form',
    step: 'Step 1',
    img: <Location />,
    path: Routes.address,
  },
  {
    title: 'Shipping',
    step: 'Step 2',
    img: <Shipping />,
    path: Routes.shipping,
  },
  {
    title: 'Payment',
    step: 'Step 3',
    img: <Payment />,
    path: Routes.payment,
  },
];

export const CheckoutLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const { pathname } = useRouter();

  const pathIndex = steps.findIndex(item => item.path === pathname);

  const slicedSteps = useMemo(() => {
    if (pathIndex === steps.length - 1) {
      return steps.slice(pathIndex - 1, pathIndex + 1);
    }

    return steps.slice(pathIndex, pathIndex + 2);
  }, [pathIndex]);

  return (
    <div className="mt-[128px] max-w-[340px] m-auto">
      <div className="flex justify-between">
        {slicedSteps.map((item, index) => (
          <div key={item.step} className="flex items-center">
            {index === 1 && slicedSteps.length > 1 && (
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
      <div>{children}</div>
    </div>
  );
};
