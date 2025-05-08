import { useRouter } from 'next/router';

import { Routes } from '..';

import { useAppStateContext } from '@/context/AppState';

const Payment = () => {
  const { user } = useAppStateContext();
  const router = useRouter();

  const isUserValid = Object.values(user).every(value => value.trim() !== '');

  if (!isUserValid) {
    router.push(Routes.home);
  }

  return (
    <div className="mt-[128px] mb-3xlarge max-w-[340px] m-auto">
      <div>Payment</div>
    </div>
  );
};

export default Payment;
