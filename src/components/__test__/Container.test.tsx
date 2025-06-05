import { render } from '@testing-library/react';

import { Container } from '../Container';

describe('Container', () => {
  test('renders correctly', () => {
    const Component = () => (
      <Container className="test">
        <div>Test children</div>
      </Container>
    );

    const { asFragment } = render(<Component />);
    expect(asFragment()).toMatchSnapshot();
  });
});
