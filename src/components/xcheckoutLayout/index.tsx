import {
  type JSX,
  type PropsWithChildren,
  useEffect,
  useMemo,
  useState,
} from 'react';
import Location from '@assets/svg/icons/location.svg';
import Payment from '@assets/svg/icons/payment.svg';
import Shipping from '@assets/svg/icons/shipping.svg';
import { useRouter } from 'next/router';

import { Summary } from '../summary';

import { DekstopCheckoutLayout } from './dekstop/Dekstop';
import { MobileCheckoutLayout } from './mobile/Mobile';

import { Routes } from '@/routes';

export interface StepsTypes {
  title: string;
  step: string;
  img: JSX.Element;
  path: Routes;
}

export interface CheckLayoutTypes {
  steps: Array<StepsTypes>;
  pathname: string;
}

const steps: Array<StepsTypes> = [
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

  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const pathIndex = steps.findIndex(item => item.path === pathname);

  const slicedSteps = useMemo(() => {
    if (pathIndex === steps.length - 1) {
      return steps.slice(pathIndex - 1, pathIndex + 1);
    }

    return steps.slice(pathIndex, pathIndex + 2);
  }, [pathIndex]);

  return (
    <div className="mt-[128px] m-auto md:max-w-[90%] lg:max-w-[80%] xl:max-w-[1100px]">
      <div className="block md:hidden">
        <MobileCheckoutLayout pathname={pathname} steps={slicedSteps} />
      </div>
      <div className="hidden md:block">
        <DekstopCheckoutLayout pathname={pathname} steps={steps} />
      </div>
      <div className="flex">
        <div>{isDesktop && <Summary />}</div>
        <div className="md:ml-4xlarge xl:mr-20">{children}</div>
      </div>
    </div>
  );
};
