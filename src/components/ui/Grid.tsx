import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef, type HTMLAttributes, type ReactElement } from 'react';

import { cn } from '@/lib/cn';

export const gridVariants = cva('grid', {
  variants: {
    columns: {
      1: 'grid-cols-1',
      2: 'grid-cols-2',
      3: 'grid-cols-3',
      4: 'grid-cols-4',
      8: 'grid-cols-8',
      12: 'grid-cols-12',
    },
    tabletColumns: {
      1: 'md:grid-cols-1',
      2: 'md:grid-cols-2',
      3: 'md:grid-cols-3',
      4: 'md:grid-cols-4',
      8: 'md:grid-cols-8',
      12: 'md:grid-cols-12',
    },
    desktopColumns: {
      1: 'xl:grid-cols-1',
      2: 'xl:grid-cols-2',
      3: 'xl:grid-cols-3',
      4: 'xl:grid-cols-4',
      8: 'xl:grid-cols-8',
      12: 'xl:grid-cols-12',
    },
    gap: {
      sm: 'gap-stack-sm',
      md: 'gap-stack-lg',
      lg: 'gap-stack-2xl',
    },
  },
  defaultVariants: { columns: 1, gap: 'lg' },
});

export interface GridProps
  extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof gridVariants> {}

export const Grid = forwardRef<HTMLDivElement, GridProps>(
  (
    { className, columns, desktopColumns, gap, tabletColumns, ...props },
    ref,
  ): ReactElement => {
    const rootClass = cn(
      gridVariants({ columns, desktopColumns, gap, tabletColumns }),
      className,
    );
    return <div ref={ref} className={rootClass} {...props} />;
  },
);

Grid.displayName = 'Grid';
