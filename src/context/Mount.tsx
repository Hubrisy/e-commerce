import {
  createContext,
  type PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';

interface MountDataType {
  isMounted: boolean;
}

const defaultState: MountDataType = {
  isMounted: false,
};

const MountContext = createContext<MountDataType | undefined>(undefined);

export const MountContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [isMounted, setIsMounted] = useState<MountDataType['isMounted']>(
    defaultState.isMounted,
  );

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <MountContext.Provider value={{ isMounted }}>
      {children}
    </MountContext.Provider>
  );
};

export const useMountContext = () => {
  const value = useContext(MountContext);

  if (!value) {
    throw new Error(
      'useMountContext should be called inside MountContextProvider',
    );
  }

  return value;
};
