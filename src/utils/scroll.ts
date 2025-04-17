import type { SectionIds } from '@/types';

export const scrollIntoView = (id: SectionIds) => {
  if (typeof window !== 'undefined') {
    const elem = document.getElementById(id);

    if (elem) {
      elem.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }
};
