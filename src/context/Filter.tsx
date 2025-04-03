import {
  createContext,
  type Dispatch,
  type PropsWithChildren,
  type SetStateAction,
  useContext,
  useState,
} from 'react';

import type { ProductCategory } from '@/types';

interface FilterState {
  category?: ProductCategory;
}
interface FilterContextType extends FilterState {
  setCategory: Dispatch<SetStateAction<FilterState['category']>>;
}

const defaultFilterState: FilterState = {
  category: undefined,
};

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [category, setCategory] = useState<FilterState['category']>(
    defaultFilterState.category,
  );

  return (
    <FilterContext.Provider value={{ category, setCategory }}>
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
