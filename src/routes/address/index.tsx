import { AddressBlock } from './AddressBlock';

import { CheckoutLayout } from '@/components/xcheckoutLayout';

const Address = () => (
  <CheckoutLayout>
    <div className="mt-12 mb-3xlarge max-w-[340px] m-auto">
      <div className="text-2xl font-semibold">Address form:</div>
      <AddressBlock />
    </div>
  </CheckoutLayout>
);

export default Address;
