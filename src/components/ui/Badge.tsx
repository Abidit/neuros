import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef, type HTMLAttributes, type ReactElement } from 'react';

import { cn } from '@/lib/cn';

export const badgeVariants = cva(
  'inline-flex items-center rounded-2xl px-inset-md py-inline-xs font-body text-body-sm font-semibold',
  {
    variants: {
      variant: {
        primary: 'bg-primary-alpha-05 text-interactive-primary',
        neutral: 'bg-background-muted text-foreground-subtle',
        inverse: 'bg-background-inverse text-foreground-inverse',
      },
    },
    defaultVariants: { variant: 'primary' },
  },
);

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, ...props }, ref): ReactElement => {
    const rootClass = cn(badgeVariants({ variant }), className);
    return <span ref={ref} className={rootClass} {...props} />;
  },
);

Badge.displayName = 'Badge';
