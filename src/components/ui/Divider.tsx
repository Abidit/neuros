import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef, type HTMLAttributes, type ReactElement } from 'react';

import { cn } from '@/lib/cn';

export const dividerVariants = cva('w-full border-0 border-t-token', {
  variants: {
    emphasis: {
      default: 'border-border-default',
      strong: 'border-border-strong',
    },
  },
  defaultVariants: { emphasis: 'default' },
});

export interface DividerProps
  extends HTMLAttributes<HTMLHRElement>, VariantProps<typeof dividerVariants> {}

export const Divider = forwardRef<HTMLHRElement, DividerProps>(
  ({ className, emphasis, ...props }, ref): ReactElement => {
    const rootClass = cn(dividerVariants({ emphasis }), className);
    return <hr ref={ref} className={rootClass} {...props} />;
  },
);

Divider.displayName = 'Divider';
