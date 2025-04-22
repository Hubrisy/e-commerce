import type { PropsWithChildren } from 'react';

export const MobileContainer: React.FC<PropsWithChildren> = ({ children }) => (
  <div className="max-w-[340px] m-auto bg-white">{children}</div>
);
