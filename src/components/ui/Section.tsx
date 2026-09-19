import { forwardRef, type HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  spacing?: 'sm' | 'md' | 'lg';
}

const spacingClasses = {
  sm: 'py-section-sm',
  md: 'py-section-md',
  lg: 'py-section-lg',
} as const;

export const Section = forwardRef<HTMLElement, SectionProps>(function Section(
  { className, spacing = 'md', ...props },
  ref,
) {
  return (
    <section
      ref={ref}
      className={cn(spacingClasses[spacing], className)}
      {...props}
    />
  );
});
