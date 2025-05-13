import { FormBlock } from './FormBlock';

import { CheckoutLayout } from '@/components/CheckoutLayout';

const Address = () => (
  <CheckoutLayout>
    <div className="mt-12 mb-3xlarge max-w-[340px] m-auto">
      <div className="text-2xl font-semibold">Address form:</div>
      <FormBlock />
    </div>
  </CheckoutLayout>
);

export default Address;
