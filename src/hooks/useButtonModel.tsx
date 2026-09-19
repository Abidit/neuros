import Link from 'next/link';
import type { ReactNode, ReactElement, Ref } from 'react';

import { Slot } from '@/components/ui/Slot';
import { cn } from '@/lib/cn';
import { getSlotChild } from '@/lib/slot';

export interface ButtonModelProps {
  children: ReactNode;
  className: string;
  disabled?: boolean;
  href?: string;
  asChild?: boolean;
  ref: Ref<HTMLButtonElement>;
  buttonProps: Omit<
    React.ComponentPropsWithoutRef<'button'>,
    'children' | 'className'
  >;
}

export const useButtonModel = ({
  asChild,
  buttonProps,
  children,
  className,
  disabled,
  href,
  ref,
}: ButtonModelProps): ReactElement => {
  if (asChild) {
    return (
      <Slot
        ref={ref}
        className={className}
        aria-disabled={disabled || undefined}
        {...buttonProps}
      >
        {getSlotChild(children)}
      </Slot>
    );
  }

  if (href) {
    return (
      <Link
        href={href}
        className={cn(className, disabled && 'pointer-events-none')}
        aria-disabled={disabled || undefined}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      ref={ref}
      className={className}
      disabled={disabled}
      {...buttonProps}
    >
      {children}
    </button>
  );
};
