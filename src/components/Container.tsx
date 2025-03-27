import type { PropsWithChildren } from 'react';
import clsx from 'clsx';

interface Props {
  className?: string;
}

export const Container: React.FC<PropsWithChildren<Props>> = ({
  children,
  className,
}) => (
  <div className={clsx('max-w-[1120px] mx-auto px-large', className)}>
    {children}
  </div>
);
