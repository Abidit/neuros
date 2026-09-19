import { createElement, forwardRef, type HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

export interface TextProps extends HTMLAttributes<HTMLElement> {
  as?: 'p' | 'span';
  size?: 'sm' | 'base' | 'md' | 'lg';
  variant?: 'default' | 'muted' | 'inverse';
  weight?: 'regular' | 'medium' | 'semibold';
}

const sizeClasses = {
  sm: 'text-body-sm',
  base: 'text-body-base',
  md: 'text-body-md',
  lg: 'text-body-lg',
} as const;

const variantClasses = {
  default: 'text-foreground-default',
  muted: 'text-foreground-muted',
  inverse: 'text-foreground-inverse',
} as const;

const weightClasses = {
  regular: 'font-regular',
  medium: 'font-medium',
  semibold: 'font-semibold',
} as const;

export const Text = forwardRef<HTMLElement, TextProps>(function Text(
  {
    as = 'p',
    className,
    size = 'base',
    variant = 'default',
    weight = 'regular',
    ...props
  },
  ref,
) {
  return createElement(as, {
    ref,
    className: cn(
      'font-body tracking-normal',
      sizeClasses[size],
      variantClasses[variant],
      weightClasses[weight],
      className,
    ),
    ...props,
  });
});
