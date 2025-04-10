import { SliderDekstop } from './SliderDekstop';
import { SliderMobile } from './SliderMobile';

export const Slider = () => (
  <div>
    <div className="block sm:hidden">
      <SliderMobile />
    </div>
    <div className="hidden sm:block">
      <SliderDekstop />
    </div>
  </div>
);
