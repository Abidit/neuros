import { cva, type VariantProps } from 'class-variance-authority';
import {
  createElement,
  forwardRef,
  type HTMLAttributes,
  type ReactElement,
} from 'react';

import { cn } from '@/lib/cn';

export const textVariants = cva('font-body tracking-normal', {
  variants: {
    size: {
      sm: 'text-body-sm',
      base: 'text-body-base',
      md: 'text-body-md',
      lg: 'text-body-lg',
    },
    variant: {
      default: 'text-foreground-default',
      muted: 'text-foreground-muted',
      inverse: 'text-foreground-inverse',
    },
    weight: {
      regular: 'font-regular',
      medium: 'font-medium',
      semibold: 'font-semibold',
    },
  },
  defaultVariants: { size: 'base', variant: 'default', weight: 'regular' },
});

export interface TextProps
  extends HTMLAttributes<HTMLElement>, VariantProps<typeof textVariants> {
  as?: 'p' | 'span';
}

export const Text = forwardRef<HTMLElement, TextProps>(
  (
    { as = 'p', className, size, variant, weight, ...props },
    ref,
  ): ReactElement => {
    const rootClass = cn(textVariants({ size, variant, weight }), className);
    return createElement(as, { ref, className: rootClass, ...props });
  },
);

Text.displayName = 'Text';
