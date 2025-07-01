import React from 'react';
import { render } from '@testing-library/react';

import Navigation from '..';

jest.mock('@assets/svg/icons/phone.svg', () => {
  const PhoneIcon = () => <svg />;
  PhoneIcon.displayName = 'PhoneIcon';

  return PhoneIcon;
});
jest.mock('@assets/svg/icons/camera.svg', () => {
  const CameraIcon = () => <svg />;
  CameraIcon.displayName = 'CameraIcon';

  return CameraIcon;
});
jest.mock('@assets/svg/icons/headphones.svg', () => {
  const HeadphonesIcon = () => <svg />;
  HeadphonesIcon.displayName = 'HeadphonesIcon';

  return HeadphonesIcon;
});
jest.mock('@assets/svg/icons/computers.svg', () => {
  const ComputersIcon = () => <svg />;
  ComputersIcon.displayName = 'ComputersIcon';

  return ComputersIcon;
});
jest.mock('@assets/svg/icons/gaming.svg', () => {
  const GamingIcon = () => <svg />;
  GamingIcon.displayName = 'GamingIcon';

  return GamingIcon;
});

describe('Navigation component', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Navigation />);
    expect(asFragment()).toMatchSnapshot();
  });
});
