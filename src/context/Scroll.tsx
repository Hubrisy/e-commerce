import {
  createContext,
  type PropsWithChildren,
  useCallback,
  useContext,
  useRef,
} from 'react';

interface ScrollTypes {
  shopRef?: React.RefObject<HTMLDivElement | null>;
  scrollToShop: () => void;
}

const ScrollContext = createContext<ScrollTypes | null>(null);

export const ScrollContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const shopRef = useRef<HTMLDivElement | null>(null);

  const scrollToShop = useCallback(() => {
    shopRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <ScrollContext.Provider value={{ shopRef, scrollToShop }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScrollContext = () => {
  const context = useContext(ScrollContext);

  if (!context) {
    throw new Error(
      'useScrollContext must be used within a ScrollContextProvider',
    );
  }

  return context;
};
