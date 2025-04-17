import Button from '@/components/button';
import { useScrollContext } from '@/context/Scroll';

export const SummerSale = () => {
  const { scrollToShop } = useScrollContext();

  return (
    <div className="min-h-[440px] bg-mine-shaft flex justify-center items-center flex-col">
      <div className="text-5xl text-white font-extralight md:text-6xl xl:text-7xl">
        Big Summer <span className="font-normal">Sale</span>
      </div>
      <div className="text-boulder text-center mt-2xlarge">
        Commodo fames vitae vitae leo mauris in. Eu consequat.
      </div>
      <Button
        variant="tertiary"
        className="min-h-[56px] mt-3xlarge"
        onClick={scrollToShop}
      >
        Shop Now
      </Button>
    </div>
  );
};
