import Link from 'next/link';
import {
  forwardRef,
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type Ref,
} from 'react';

import { cn } from '@/lib/utils';
import { PRIMARY_ACTION_CLASS } from '@/design-system/classnames';

export interface ButtonProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'className'
> {
  className?: string;
  href?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
}

const variantClasses = {
  primary: PRIMARY_ACTION_CLASS,
  secondary:
    'border-border-default bg-background-primary text-neutral-800 backdrop-blur-button hover:border-border-strong focus-visible:border-border-focus',
  outline:
    'border-interactive-primary bg-transparent text-interactive-primary hover:bg-background-muted focus-visible:border-interactive-focus',
  ghost:
    'border-transparent bg-transparent text-foreground-default hover:bg-background-muted focus-visible:text-interactive-focus',
} as const;

const sizeClasses = {
  sm: 'min-h-control-sm gap-stack-sm rounded-md px-inset-md py-inset-sm text-button-sm',
  md: 'min-h-control-md gap-stack-sm rounded-md px-inset-lg py-inset-md text-button-sm',
  lg: 'min-h-control-lg gap-stack-sm rounded-lg px-inset-xl py-inset-md text-button-base',
} as const;

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(function Button(
  {
    children,
    className,
    disabled,
    href,
    size = 'md',
    variant = 'primary',
    ...props
  },
  ref,
) {
  const classes = cn(
    'inline-flex cursor-pointer items-center justify-center border font-heading font-bold tracking-normal transition-colors focus-visible:outline-2 focus-visible:outline-offset-token focus-visible:outline-interactive-focus disabled:pointer-events-none disabled:bg-interactive-disabled disabled:text-foreground-muted',
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  if (href) {
    return (
      <Link
        ref={ref as Ref<HTMLAnchorElement>}
        href={href}
        aria-disabled={disabled || undefined}
        className={cn(classes, disabled && 'pointer-events-none')}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      ref={ref as Ref<HTMLButtonElement>}
      className={classes}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
});
