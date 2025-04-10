import { useEffect, useState } from 'react';

import { handleError } from '@/utils/error';

export const useStorageValue = <T>(key: string, defaultValue: T) => {
  const [value, setValue] = useState<T>(() => {
    try {
      const storedValue = sessionStorage.getItem(key);

      if (storedValue) {
        return JSON.parse(storedValue);
      }
    } catch (error) {
      handleError(error);
    }

    return defaultValue;
  });

  useEffect(() => {
    try {
      sessionStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      handleError(error);
    }
  }, [value]);

  return [value, setValue] as const;
};
