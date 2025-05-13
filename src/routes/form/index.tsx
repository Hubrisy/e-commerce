import { FormBlock } from './FormBlock';

import CheckoutLayout from '@/components/CheckoutLayout';
import Layout from '@/components/Layout';

const Form = () => (
  <div className="mt-12 mb-3xlarge max-w-[340px] m-auto">
    <div className="text-2xl font-semibold">Order form:</div>
    <FormBlock />
  </div>
);

Form.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <Layout>
      <CheckoutLayout>{page}</CheckoutLayout>
    </Layout>
  );
};

export default Form;
