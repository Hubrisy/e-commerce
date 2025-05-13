import Line from '@assets/svg/icons/line.svg';
import Location from '@assets/svg/icons/location.svg';
import Payment from '@assets/svg/icons/payment.svg';
import Shipping from '@assets/svg/icons/shipping.svg';
import clsx from 'clsx';
import { useRouter } from 'next/router';

import { Routes } from '@/routes';

const steps = [
  {
    title: 'Order form',
    step: 'Step 1',
    img: <Location />,
    path: Routes.form,
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

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const currentPath = router.pathname;

  const pathIndex = steps.findIndex(item => item.path === currentPath);

  let slicedSteps = steps.slice(pathIndex, pathIndex + 2);

  if (slicedSteps.length === 1) {
    slicedSteps = steps.slice(pathIndex - 1, pathIndex + 1);
  }

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
            <div
              className={clsx(
                'flex items-center',
                router.pathname === item.path ? 'opacity-100' : 'opacity-50',
              )}
            >
              <div>{item.img}</div>
              <div className="ml-2">
                <div className="text-[14px] leading-4">{item.step}</div>
                <div>{item.title}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>{children}</div>
    </div>
  );
}
