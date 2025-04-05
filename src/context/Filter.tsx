import {
  createContext,
  type Dispatch,
  type PropsWithChildren,
  type SetStateAction,
  useContext,
  useState,
} from 'react';

import type { ProductCategory, ProductFeature } from '@/types';

interface FilterState {
  category?: ProductCategory;
  feature?: ProductFeature;
}
interface FilterContextType extends FilterState {
  setCategory: Dispatch<SetStateAction<FilterState['category']>>;
  setFeature: Dispatch<SetStateAction<FilterState['feature']>>;
}

const defaultFilterState: FilterState = {
  category: undefined,
  feature: undefined,
};

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [category, setCategory] = useState<FilterState['category']>(
    defaultFilterState.category,
  );
  const [feature, setFeature] = useState<FilterState['feature']>(
    defaultFilterState.feature,
  );

  return (
    <FilterContext.Provider
      value={{ category, setCategory, feature, setFeature }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  const value = useContext(FilterContext);

  if (!value) {
    throw Error(
      'useFilterContext should be called inside FilterContextProvider',
    );
  }

  return value;
};
