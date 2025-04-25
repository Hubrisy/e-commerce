import { useRouter } from 'next/router';

import { productStorageSizes } from '../data';

export const ProductStorage = () => {
  const { query } = useRouter();

  const storageSize = productStorageSizes.find(
    item => item.id === Number(query.id),
  );

  return (
    <div className="mt-6 flex gap-2">
      {storageSize?.storageSizes.map(item => (
        <div
          className="w-[80px] h-4xlarge border-[#D5D5D5] border-[1px] rounded-lg flex justify-center items-center"
          key={item}
        >
          <div>{item}</div>
        </div>
      ))}
    </div>
  );
};
