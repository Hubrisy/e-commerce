import { render } from '@testing-library/react';

import { Loader } from '../Loader';

describe('Loader', () => {
  test('renders correctly', () => {
    const { asFragment } = render(<Loader />);
    expect(asFragment()).toMatchSnapshot();
  });
});
