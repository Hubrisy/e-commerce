import type { GetServerSideProps } from 'next';

import { api } from '@/apis';
import type { ProductPageProps } from '@/routes/product';
import { handleError } from '@/utils/error';

export { default } from '@/routes/product';

export const getServerSideProps: GetServerSideProps<
  ProductPageProps,
  { id: string }
> = async ctx => {
  const { params } = ctx;

  try {
    if (!params?.id) {
      throw new Error('id is not found');
    }

    const response = await api.fetchProducts();

    if (response) {
      const product = response.find(item => item.id === Number(params.id));

      if (!product) {
        throw new Error('product is not found');
      }

      return {
        props: {
          product,
        },
      };
    }
  } catch (e) {
    handleError(e);
  }

  return {
    notFound: true,
  };
};
