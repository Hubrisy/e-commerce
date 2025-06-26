import { render } from '@testing-library/react';

import { Layout } from '../Layout';

jest.mock('@/components/header', () => ({
  __esModule: true,
  default: () => <div>Header Mock</div>,
}));

jest.mock('@/components/footer', () => ({
  __esModule: true,
  default: () => <div>Footer Mock</div>,
}));

describe('Layout', () => {
  test('renders correctly', () => {
    const children = <div>Test Children</div>;
    const { asFragment } = render(<Layout>{children}</Layout>);
    expect(asFragment()).toMatchSnapshot();
  });
});
