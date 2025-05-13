import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { Routes } from '..';

import { CheckoutLayout } from '@/components/CheckoutLayout';
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
    return <div className="mt-[48px]">Loading...</div>;
  }

  return (
    <CheckoutLayout>
      <div className="mt-12 mb-3xlarge max-w-[340px] m-auto">
        <div>Payment</div>
      </div>
    </CheckoutLayout>
  );
};

export default Payment;
