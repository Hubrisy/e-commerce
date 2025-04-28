import type { PropsWithChildren } from 'react';
import clsx from 'clsx';

interface MobileContainerProps {
  className?: string;
}

export const MobileContainer: React.FC<
  PropsWithChildren<MobileContainerProps>
> = ({ children, className }) => (
  <div className={clsx('max-w-[90%] m-auto bg-white', className)}>
    {children}
  </div>
);
