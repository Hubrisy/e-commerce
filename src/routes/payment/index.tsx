import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { Routes } from '..';

import { PaymentForm } from './PaymentForm';

import { Loader } from '@/components/Loader';
import { CheckoutLayout } from '@/components/xcheckoutLayout';
import { useAppStateContext } from '@/context/AppState';
import { useMountContext } from '@/context/Mount';

const Payment = () => {
  const { user } = useAppStateContext();
  const { isMounted } = useMountContext();
  const router = useRouter();

  const isUserValid = Object.values(user).every(value => value.trim() !== '');

  useEffect(() => {
    if (!isUserValid) {
      router.push(Routes.home);
    }
  }, [isUserValid]);

  if (!isMounted || !isUserValid) {
    return (
      <div className="mt-[128px]">
        <Loader />
      </div>
    );
  }

  return (
    <CheckoutLayout>
      <div className="mt-12 mb-3xlarge xl:min-w-[500px]">
        <div className="text-2xl font-semibold">Payment</div>
        <PaymentForm />
      </div>
    </CheckoutLayout>
  );
};

export default Payment;
