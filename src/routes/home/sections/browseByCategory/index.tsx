import ArrowLeft from '@assets/svg/icons/arrowleft.svg';
import ArrowRight from '@assets/svg/icons/arrowright.svg';

import { categories } from './data';

import styles from './styles.module.scss';

import { Container } from '@/components/Container';

export const BrowseByCategory = () => (
  <div className="relative bg-alabaster font-medium py-[64px]">
    <Container>
      <div className="mb-4xlarge flex items-center justify-between">
        <div className="text-[24px]">Browse By Category</div>
        <div className="flex min-w-[80px] justify-between">
          <div>
            <ArrowLeft />
          </div>
          <div>
            <ArrowRight />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-large md:grid-cols-3 xl:grid-cols-6">
        {categories.map(item => (
          <div
            key={item.name}
            className="rounded-2xl bg-gallery p-large text-[16px] flex flex-col items-center"
          >
            <div className={styles.svg}>{item.img}</div>
            <div className="mt-[10px]">{item.name}</div>
          </div>
        ))}
      </div>
    </Container>
  </div>
);
