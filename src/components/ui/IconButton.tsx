import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';

import { cn } from '@/lib/utils';
import { PRIMARY_ACTION_CLASS } from '@/design-system/classnames';

export interface IconButtonProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'aria-label'
> {
  'aria-label': string;
  icon: ReactNode;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'ghost';
}

const sizeClasses = {
  sm: 'size-control-sm rounded-md',
  md: 'size-control-md rounded-md',
  lg: 'size-control-lg rounded-lg',
} as const;

const variantClasses = {
  primary: PRIMARY_ACTION_CLASS,
  secondary:
    'border-border-default bg-background-primary text-foreground-subtle hover:border-border-strong',
  ghost:
    'border-transparent bg-transparent text-foreground-subtle hover:bg-background-muted',
} as const;

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  function IconButton(
    {
      className,
      icon,
      size = 'md',
      type = 'button',
      variant = 'secondary',
      ...props
    },
    ref,
  ) {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          'focus-visible:outline-offset-token focus-visible:outline-interactive-focus disabled:bg-interactive-disabled disabled:text-foreground-muted inline-flex cursor-pointer items-center justify-center border transition-colors focus-visible:outline-2 disabled:pointer-events-none',
          sizeClasses[size],
          variantClasses[variant],
          className,
        )}
        {...props}
      >
        {icon}
      </button>
    );
  },
);
