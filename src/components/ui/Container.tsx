import { forwardRef, type HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'full';
}

const sizeClasses = {
  sm: 'max-w-content-sm',
  md: 'max-w-content-md',
  lg: 'max-w-content',
  full: 'max-w-none',
} as const;

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  function Container({ className, size = 'lg', ...props }, ref) {
    return (
      <div
        ref={ref}
        className={cn(
          'px-inset-xl md:px-inset-3xl mx-auto w-full',
          sizeClasses[size],
          className,
        )}
        {...props}
      />
    );
  },
);
