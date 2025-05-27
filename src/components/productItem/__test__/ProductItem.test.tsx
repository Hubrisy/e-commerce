import { fireEvent, render } from '@testing-library/react';
import { useRouter } from 'next/router';

import { ProductItem } from '..';

import { useFavorites } from '@/hooks/use-favorites';
import type { Product } from '@/types';

const mockedProduct = {
  id: 1,
  name: 'Test Product',
  img: '/test-product.jpg',
  price: 99.99,
  currency: 'USD',
} as Product;

jest.mock('@/hooks/use-favorites', () => ({
  useFavorites: jest.fn(),
}));

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

const mockedUseRouter = useRouter as jest.MockedFunction<typeof useRouter>;
const mockedUseFavorites = useFavorites as jest.MockedFunction<
  typeof useFavorites
>;

describe('ProductItem Component', () => {
  beforeEach(() => {
    mockedUseFavorites.mockReturnValue({
      toggleFavorite: jest.fn(),
      isItemInFavorites: jest.fn(() => false),
    } as unknown as ReturnType<typeof useFavorites>);

    mockedUseRouter.mockReturnValue({
      push: jest.fn(),
    } as unknown as ReturnType<typeof useRouter>);
  });

  test('toggleFavorite is called when heart icon is clicked', () => {
    const toggleFavoriteMock = jest.fn();

    mockedUseFavorites.mockReturnValue({
      toggleFavorite: toggleFavoriteMock,
      isItemInFavorites: jest.fn(() => false),
    } as unknown as ReturnType<typeof useFavorites>);

    const { getByTestId } = render(<ProductItem product={mockedProduct} />);

    const heartIcon = getByTestId('favorite-icon');
    expect(heartIcon).toBeInTheDocument();

    fireEvent.click(heartIcon);
    expect(toggleFavoriteMock).toHaveBeenCalledWith(mockedProduct.id);
    expect(toggleFavoriteMock).toHaveBeenCalledTimes(1);
  });

  test('goToProductPage is called when button is clicked', () => {
    const pushMock = jest.fn();

    mockedUseRouter.mockReturnValue({
      push: pushMock,
    } as unknown as ReturnType<typeof useRouter>);

    const { getByTestId } = render(<ProductItem product={mockedProduct} />);

    const buyNowBtn = getByTestId('buy-now-button');
    expect(buyNowBtn).toBeInTheDocument();

    fireEvent.click(buyNowBtn);
    expect(pushMock).toHaveBeenCalledWith(`/product/${mockedProduct.id}`);
    expect(pushMock).toHaveBeenCalledTimes(1);
  });
});
