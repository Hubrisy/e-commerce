import { useEffect, useState } from 'react';

import type { StorageKeys } from '@/utils/localstorage';
import { handleError } from '@/utils/error';

export const useStorageValue = <T>(key: StorageKeys, defaultValue: T) => {
  const [value, setValue] = useState<T>(() => {
    try {
      if (typeof window !== 'undefined') {
        const storedValue = localStorage.getItem(key);

        if (storedValue) {
          return JSON.parse(storedValue);
        }
      }
    } catch (error) {
      handleError(error);
    }

    return defaultValue;
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      handleError(error);
    }
  }, [value]);

  return [value, setValue] as const;
};
