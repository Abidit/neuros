import { forwardRef, type HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

type GridColumns = 1 | 2 | 3 | 4 | 8 | 12;

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  columns?: GridColumns;
  tabletColumns?: GridColumns;
  desktopColumns?: GridColumns;
  gap?: 'sm' | 'md' | 'lg';
}

const columnClasses: Record<GridColumns, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
  8: 'grid-cols-8',
  12: 'grid-cols-12',
};

const tabletColumnClasses: Record<GridColumns, string> = {
  1: 'md:grid-cols-1',
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-3',
  4: 'md:grid-cols-4',
  8: 'md:grid-cols-8',
  12: 'md:grid-cols-12',
};

const desktopColumnClasses: Record<GridColumns, string> = {
  1: 'xl:grid-cols-1',
  2: 'xl:grid-cols-2',
  3: 'xl:grid-cols-3',
  4: 'xl:grid-cols-4',
  8: 'xl:grid-cols-8',
  12: 'xl:grid-cols-12',
};

const gapClasses = {
  sm: 'gap-stack-sm',
  md: 'gap-stack-lg',
  lg: 'gap-stack-2xl',
} as const;

export const Grid = forwardRef<HTMLDivElement, GridProps>(function Grid(
  {
    className,
    columns = 1,
    desktopColumns,
    gap = 'lg',
    tabletColumns,
    ...props
  },
  ref,
) {
  return (
    <div
      ref={ref}
      className={cn(
        'grid',
        columnClasses[columns],
        tabletColumns && tabletColumnClasses[tabletColumns],
        desktopColumns && desktopColumnClasses[desktopColumns],
        gapClasses[gap],
        className,
      )}
      {...props}
    />
  );
});
