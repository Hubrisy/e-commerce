import type { Dispatch, PropsWithChildren, SetStateAction } from 'react';
import { createContext, useContext } from 'react';

import { useStorageValue } from '@/hooks/use-storage-value';
import { StorageKeys } from '@/storage/localstorage';
import type { UserData } from '@/types';

interface AppStateTypes {
  favorites: Array<number>;
  user: UserData;
}

interface AppStateContextTypes extends AppStateTypes {
  setUser: Dispatch<SetStateAction<AppStateTypes['user']>>;
  setFavorites: Dispatch<SetStateAction<AppStateTypes['favorites']>>;
}

const defaultUser: UserData = {
  name: '',
  secondName: '',
  phone: '',
  email: '',
  city: '',
  address: '',
};

const AppStateContext = createContext<AppStateContextTypes | undefined>(
  undefined,
);

export const AppStateContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [user, setUser] = useStorageValue<AppStateTypes['user']>(
    StorageKeys.user,
    defaultUser,
  );

  const [favorites, setFavorites] = useStorageValue<AppStateTypes['favorites']>(
    StorageKeys.favorites,
    [],
  );

  return (
    <AppStateContext.Provider
      value={{
        user,
        setUser,
        favorites,
        setFavorites,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppStateContext = () => {
  const value = useContext(AppStateContext);

  if (!value) {
    throw new Error(
      'useAppStateContext should be called inside AppStateContextProvider',
    );
  }

  return value;
};
