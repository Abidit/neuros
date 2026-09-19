import {
  Children,
  cloneElement,
  forwardRef,
  type HTMLAttributes,
  type ReactElement,
} from 'react';

export interface SlotProps extends HTMLAttributes<HTMLElement> {
  children: ReactElement;
}

export const Slot = forwardRef<HTMLElement, SlotProps>(
  ({ children, ...props }, ref): ReactElement => {
    void ref;
    return cloneElement(Children.only(children), props);
  },
);

Slot.displayName = 'Slot';
