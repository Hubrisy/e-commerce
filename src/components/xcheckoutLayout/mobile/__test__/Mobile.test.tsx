import React from 'react';
import { render } from '@testing-library/react';

import type { CheckLayoutTypes } from '../..';
import { MobileCheckoutLayout } from '../Mobile';

import { Routes } from '@/routes';

jest.mock('next/link', () => {
  const Link = ({
    children,
    href,
  }: {
    children: React.ReactNode;
    href: string;
  }) => <a href={href}>{children}</a>;
  Link.displayName = 'MockLink';

  return Link;
});

const MockLocation = () => <svg data-testid="location-icon" />;
const MockShipping = () => <svg data-testid="shipping-icon" />;
const MockPayment = () => <svg data-testid="payment-icon" />;

describe('MobileCheckoutLayout', () => {
  const mockSteps: CheckLayoutTypes['steps'] = [
    {
      title: 'Address form',
      step: 'Step 1',
      img: <MockLocation />,
      path: Routes.address,
    },
    {
      title: 'Shipping',
      step: 'Step 2',
      img: <MockShipping />,
      path: Routes.shipping,
    },
    {
      title: 'Payment',
      step: 'Step 3',
      img: <MockPayment />,
      path: Routes.payment,
    },
  ];

  it('should render correctly with first step active', () => {
    const { container } = render(
      <MobileCheckoutLayout pathname={Routes.address} steps={mockSteps} />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with second step active', () => {
    const { container } = render(
      <MobileCheckoutLayout pathname={Routes.shipping} steps={mockSteps} />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with third step active', () => {
    const { container } = render(
      <MobileCheckoutLayout pathname={Routes.payment} steps={mockSteps} />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
