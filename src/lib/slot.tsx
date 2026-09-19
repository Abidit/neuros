import { isValidElement, type ReactElement, type ReactNode } from 'react';

export const getSlotChild = (children: ReactNode): ReactElement =>
  isValidElement(children) ? children : <span>{children}</span>;
