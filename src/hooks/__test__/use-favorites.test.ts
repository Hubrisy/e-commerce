import { renderHook } from '@testing-library/react';

import { useFavorites } from '../use-favorites';

import { useAppStateContext } from '@/context/AppState';

jest.mock('@/context/AppState');

const useAppStateContextMock = useAppStateContext as jest.MockedFunction<
  typeof useAppStateContext
>;

describe('useFavorites', () => {
  beforeEach(() => {
    useAppStateContextMock.mockReturnValue({
      favorites: [],
      setFavorites: jest.fn(),
    } as unknown as ReturnType<typeof useAppStateContext>);
  });

  test('favorites and setFavorites are defined', () => {
    const { result } = renderHook(useFavorites);
    const { favorites, setFavorites } = result.current;
    expect(favorites).toEqual([]);
    expect(setFavorites).toBeDefined();
  });

  test('isItemInFavorites works correctly', () => {
    useAppStateContextMock.mockReturnValue({
      favorites: [1, 2, 3],
      setFavorites: jest.fn(),
    } as unknown as ReturnType<typeof useAppStateContext>);

    const { result } = renderHook(useFavorites);
    const { isItemInFavorites } = result.current;
    expect(isItemInFavorites(1)).toBe(true);
    expect(isItemInFavorites(4)).toBe(false);
  });

  test('toggleFavorite works correctly', () => {
    const favorites = [1, 2, 3];
    const setFavorites = jest.fn();

    useAppStateContextMock.mockReturnValue({
      favorites,
      setFavorites,
    } as unknown as ReturnType<typeof useAppStateContext>);

    const { result } = renderHook(useFavorites);
    const { toggleFavorite } = result.current;

    // Add item to favorites
    toggleFavorite(4);
    expect(setFavorites).toHaveBeenCalledWith([...favorites, 4]);

    // Remove item from favorites
    toggleFavorite(2);
    expect(setFavorites).toHaveBeenCalledWith([1, 3]);
  });
});
