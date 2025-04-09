import { useEffect, useState } from 'react';

import { SliderDekstop } from './SliderDekstop';
import { SliderMobile } from './SliderMobile';

export const Slider = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return <div>{isMobile ? <SliderMobile /> : <SliderDekstop />}</div>;
};
