import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef, type HTMLAttributes, type ReactElement } from 'react';

import { cn } from '@/lib/cn';

export const stackVariants = cva('flex flex-col', {
  variants: {
    gap: {
      xs: 'gap-inline-xs',
      sm: 'gap-stack-sm',
      md: 'gap-stack-lg',
      lg: 'gap-stack-xl',
      xl: 'gap-stack-2xl',
    },
    align: {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      stretch: 'items-stretch',
    },
  },
  defaultVariants: { align: 'stretch', gap: 'md' },
});

export interface StackProps
  extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof stackVariants> {}

export const Stack = forwardRef<HTMLDivElement, StackProps>(
  ({ align, className, gap, ...props }, ref): ReactElement => {
    const rootClass = cn(stackVariants({ align, gap }), className);
    return <div ref={ref} className={rootClass} {...props} />;
  },
);

Stack.displayName = 'Stack';
