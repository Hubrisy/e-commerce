import { render } from '@testing-library/react';

import { Summary } from '..';

import { defaultUser, useAppStateContext } from '@/context/AppState';
import { useCartContext } from '@/context/Cart';
import { useMountContext } from '@/context/Mount';
import { type CartItem, currencySymbols, type ShippingProduct } from '@/types';

jest.mock('@/context/Mount');
jest.mock('@/context/Cart');

jest.mock('@/context/AppState', () => ({
  ...jest.requireActual('@/context/AppState'),
  useAppStateContext: jest.fn(),
}));

jest.mock('@/components/Loader', () => ({
  Loader: () => <div data-testid="loader">Loading...</div>,
}));

const mockedUseMountContext = useMountContext as jest.MockedFunction<
  typeof useMountContext
>;

const mockedUseCartContext = useCartContext as jest.MockedFunction<
  typeof useCartContext
>;

const mockedUseAppStateContext = useAppStateContext as jest.MockedFunction<
  typeof useAppStateContext
>;

describe('Summary Component', () => {
  const mockedUser: Partial<typeof defaultUser> = {
    address: '123 Test St, Test City, TC 12345',
  };

  const mockedProduct: Partial<CartItem> = {
    id: 1,
    name: 'Test Product',
    img: '/test-product.jpg',
    price: 99.99,
    quantity: 2,
  };

  const mockedCart: Array<Partial<CartItem>> = [mockedProduct];

  const mockedSelectedShipping: Partial<ShippingProduct> = {
    id: 1,
    type: 'Standard Shipping',
    price: 5.99,
    description: 'Delivery in 5-7 business days',
    date: '2023-10-01',
  };

  beforeEach(() => {
    mockedUseMountContext.mockReturnValue({
      isMounted: true,
    } as unknown as ReturnType<typeof useMountContext>);

    mockedUseCartContext.mockReturnValue({
      cart: mockedCart,
      selectedShipping: mockedSelectedShipping,
    } as unknown as ReturnType<typeof useCartContext>);

    mockedUseAppStateContext.mockReturnValue({
      user: {
        ...defaultUser,
        ...mockedUser,
      },
    } as unknown as ReturnType<typeof useAppStateContext>);
  });

  test('renders Loader when not mounted', () => {
    mockedUseMountContext.mockReturnValue({
      isMounted: false,
    } as unknown as ReturnType<typeof useMountContext>);

    const { getByTestId } = render(<Summary />);
    expect(getByTestId('loader')).toBeInTheDocument();
  });

  test('Loader matches snapshot when not mounted', () => {
    mockedUseMountContext.mockReturnValue({
      isMounted: false,
    } as unknown as ReturnType<typeof useMountContext>);

    const { asFragment } = render(<Summary />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders Summary correctly', () => {
    const { getByText, getByAltText } = render(<Summary />);

    const productImg = getByAltText(mockedProduct.name as string);
    expect(productImg).toBeInTheDocument();
    expect(productImg).toHaveAttribute('src', mockedProduct.img as string);
    expect(getByText(mockedProduct.name as string)).toBeInTheDocument();

    const productPriceText = `${currencySymbols.USD}${mockedProduct.price}`;
    expect(getByText(productPriceText)).toBeInTheDocument();

    const address = getByText(mockedUser.address as string);
    expect(address).toBeInTheDocument();

    const shippingMethod = getByText(mockedSelectedShipping.type as string);
    expect(shippingMethod).toBeInTheDocument();

    const subtotal = mockedCart.reduce(
      (acc, { price = 0, quantity = 1 }) => acc + price * quantity,
      0,
    );
    const subtotalText = `${currencySymbols.USD}${subtotal}`;
    expect(getByText(subtotalText)).toBeInTheDocument();

    const shippingPrice = mockedSelectedShipping.price || 0;
    const shippingPriceText = `${currencySymbols.USD}${shippingPrice}`;
    expect(getByText(shippingPriceText)).toBeInTheDocument();

    const total = subtotal + shippingPrice;
    const totalText = `${currencySymbols.USD}${total}`;
    expect(getByText(totalText)).toBeInTheDocument();
  });

  test('Summary matches snapshot', () => {
    const { asFragment } = render(<Summary />);
    expect(asFragment()).toMatchSnapshot();
  });
});
