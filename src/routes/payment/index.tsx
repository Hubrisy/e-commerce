import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { Routes } from '..';

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
    return <div className="mt-[128px]">Loading...</div>;
  }

  return (
    <div className="mt-[128px] mb-3xlarge max-w-[340px] m-auto">
      <div>Payment</div>
    </div>
  );
};

export default Payment;
