import { forwardRef, type HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  padding?: 'sm' | 'md' | 'lg';
  elevated?: boolean;
}

const paddingClasses = {
  sm: 'p-inset-lg',
  md: 'p-inset-xl',
  lg: 'p-inset-3xl',
} as const;

export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  { className, elevated = true, padding = 'lg', ...props },
  ref,
) {
  return (
    <div
      ref={ref}
      className={cn(
        'border-border-default bg-background-primary rounded-lg border',
        elevated && 'shadow-primary-1',
        paddingClasses[padding],
        className,
      )}
      {...props}
    />
  );
});
