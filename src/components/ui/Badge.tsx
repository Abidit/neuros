import { forwardRef, type HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'neutral' | 'inverse';
}

const variantClasses = {
  primary: 'bg-primary-alpha-05 text-interactive-primary',
  neutral: 'bg-background-muted text-foreground-subtle',
  inverse: 'bg-background-inverse text-foreground-inverse',
} as const;

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(function Badge(
  { className, variant = 'primary', ...props },
  ref,
) {
  return (
    <span
      ref={ref}
      className={cn(
        'px-inset-md py-inline-xs font-body text-body-sm inline-flex items-center rounded-2xl font-semibold',
        variantClasses[variant],
        className,
      )}
      {...props}
    />
  );
});
