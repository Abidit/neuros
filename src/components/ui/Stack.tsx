import { forwardRef, type HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  align?: 'start' | 'center' | 'end' | 'stretch';
}

const gapClasses = {
  xs: 'gap-inline-xs',
  sm: 'gap-stack-sm',
  md: 'gap-stack-lg',
  lg: 'gap-stack-xl',
  xl: 'gap-stack-2xl',
} as const;

const alignClasses = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch',
} as const;

export const Stack = forwardRef<HTMLDivElement, StackProps>(function Stack(
  { align = 'stretch', className, gap = 'md', ...props },
  ref,
) {
  return (
    <div
      ref={ref}
      className={cn(
        'flex flex-col',
        gapClasses[gap],
        alignClasses[align],
        className,
      )}
      {...props}
    />
  );
});
