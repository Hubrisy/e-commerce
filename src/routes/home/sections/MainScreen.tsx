import Iphone from '@assets/img/Iphone.png';
import Image from 'next/image';

import Button from '@/components/button';
import { Container } from '@/components/Container';
import { SectionIds } from '@/types';
import { scrollIntoView } from '@/utils/scroll';

export const MainScreen: React.FC = () => (
  <div className="min-h-[906px] bg-baltic-sea lg:min-h-[632px]">
    <Container className="relative flex justify-center lg:justify-between gap-3xlarge">
      <div className="text-white pt-[166px] flex flex-col items-center lg:items-start lg:justify-center">
        <div className="text-[25px] font-semibold text-granite-grey">
          Pro.Beyond.
        </div>
        <div className="mt-large font-extralight text-[72px] text-center leading-[72px] lg:text-[96px] lg:text-start">
          IPhone 14 <span className="font-semibold">Pro</span>
        </div>
        <div className="text-center mt-large font-medium text-[18px] text-granite-grey">
          Created to change everything for the better. For everyone
        </div>
        <Button
          onClick={() => scrollIntoView(SectionIds.products)}
          className="min-h-[55px] mt-2xlarge lg:m-0 lg:mt-xlarge"
        >
          Shop now
        </Button>
      </div>
      <div className="absolute top-[616px] max-w-[320px] lg:relative lg:top-[73px] lg:min-w-[410px]">
        <Image
          src={Iphone}
          style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
          alt=""
        />
      </div>
    </Container>
  </div>
);
