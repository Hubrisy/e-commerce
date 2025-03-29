import ArrowLeft from '@assets/svg/icons/arrowleft.svg';
import ArrowRight from '@assets/svg/icons/arrowright.svg';
import Camera from '@assets/svg/icons/browsecamera.svg';
import Computer from '@assets/svg/icons/browsecomputer.svg';
import Gaming from '@assets/svg/icons/browsegaming.svg';
import Headphones from '@assets/svg/icons/browseheadphones.svg';
import Phone from '@assets/svg/icons/browsephone.svg';
import Watches from '@assets/svg/icons/browsewatches.svg';

import styles from './styles.module.scss';

import { Container } from '@/components/Container';

const categories = [
  {
    name: 'Phones',
    img: <Phone key="phone" className="stroke-black" />,
  },
  {
    name: 'Smart Watches',
    img: <Watches key="watches" />,
  },
  {
    name: 'Cameras',
    img: <Camera key="camera" />,
  },
  {
    name: 'Headphones',
    img: <Headphones key="headphones" />,
  },
  {
    name: 'Computers',
    img: <Computer key="computer" />,
  },
  {
    name: 'Gaming',
    img: <Gaming key="gaming" />,
  },
];

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
