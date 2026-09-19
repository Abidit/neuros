import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef, type HTMLAttributes, type ReactElement } from 'react';

import { cn } from '@/lib/cn';

export const containerVariants = cva(
  'mx-auto w-full px-inset-xl md:px-inset-3xl',
  {
    variants: {
      size: {
        sm: 'max-w-content-sm',
        md: 'max-w-content-md',
        lg: 'max-w-content',
        full: 'max-w-none',
      },
    },
    defaultVariants: { size: 'lg' },
  },
);

export interface ContainerProps
  extends
    HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size, ...props }, ref): ReactElement => {
    const rootClass = cn(containerVariants({ size }), className);
    return <div ref={ref} className={rootClass} {...props} />;
  },
);

Container.displayName = 'Container';
