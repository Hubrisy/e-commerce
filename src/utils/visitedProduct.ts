import { handleError } from './error';

import { getStorage, setStorage, StorageKeys } from '@/storage/localstorage';

export const getStoredVisitedProductIds = (): Array<number> => {
  try {
    const storedValue = getStorage(StorageKeys.visitedProductIds);

    if (storedValue) {
      const parsedStoreValue = JSON.parse(storedValue);

      if (
        Array.isArray(parsedStoreValue) &&
        parsedStoreValue.every(item => typeof item === 'number')
      ) {
        return parsedStoreValue;
      }
    }
  } catch (e) {
    handleError(e);
  }

  return [];
};

export const storeVisitedProductId = (id: number) => {
  const storedVisitedProductIds = getStoredVisitedProductIds();

  const filteredVisitedProductIds = storedVisitedProductIds.filter(
    item => item !== id,
  );

  filteredVisitedProductIds.push(id);

  setStorage(
    StorageKeys.visitedProductIds,
    JSON.stringify(filteredVisitedProductIds),
  );
};
