import { cva, type VariantProps } from 'class-variance-authority';
import {
  forwardRef,
  type ButtonHTMLAttributes,
  type ReactElement,
} from 'react';

import { useButtonModel } from '@/hooks/useButtonModel';
import { cn } from '@/lib/cn';
import { PRIMARY_ACTION_CLASS } from '@/design-system/classnames';

export const buttonVariants = cva(
  'inline-flex cursor-pointer items-center justify-center border-token font-heading font-bold tracking-normal transition-colors focus-visible:outline-focus focus-visible:outline-offset-token focus-visible:outline-interactive-focus disabled:pointer-events-none disabled:bg-interactive-disabled disabled:text-foreground-muted aria-disabled:pointer-events-none aria-disabled:bg-interactive-disabled aria-disabled:text-foreground-muted',
  {
    variants: {
      variant: {
        primary: PRIMARY_ACTION_CLASS,
        secondary:
          'border-border-default bg-background-primary text-neutral-800 backdrop-blur-button hover:border-border-strong focus-visible:border-border-focus',
        outline:
          'border-interactive-primary bg-transparent text-interactive-primary hover:bg-background-muted focus-visible:border-interactive-focus',
        ghost:
          'border-transparent bg-transparent text-foreground-default hover:bg-background-muted focus-visible:text-interactive-focus',
      },
      size: {
        sm: 'min-h-control-sm gap-stack-sm rounded-md px-inset-md py-inset-sm text-button-sm',
        md: 'min-h-control-md gap-stack-sm rounded-md px-inset-lg py-inset-md text-button-sm',
        lg: 'min-h-control-lg gap-stack-sm rounded-lg px-inset-xl py-inset-md text-button-base',
      },
    },
    defaultVariants: { size: 'md', variant: 'primary' },
  },
);

export interface ButtonProps
  extends
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'>,
    VariantProps<typeof buttonVariants> {
  className?: string;
  href?: string;
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { asChild, children, className, disabled, href, size, variant, ...props },
    ref,
  ): ReactElement => {
    const rootClass = cn(buttonVariants({ size, variant }), className);
    return useButtonModel({
      asChild,
      buttonProps: props,
      children,
      className: rootClass,
      disabled,
      href,
      ref,
    });
  },
);

Button.displayName = 'Button';
