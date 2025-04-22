import { useRouter } from 'next/router';

export const ProductPage = () => {
  const { query } = useRouter();

  return (
    <div>
      <div>Our product id: {query.slug}</div>
    </div>
  );
};
