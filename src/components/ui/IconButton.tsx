import { cva, type VariantProps } from 'class-variance-authority';
import {
  forwardRef,
  type ButtonHTMLAttributes,
  type ReactNode,
  type ReactElement,
} from 'react';

import { cn } from '@/lib/cn';
import { PRIMARY_ACTION_CLASS } from '@/design-system/classnames';

export const iconButtonVariants = cva(
  'inline-flex cursor-pointer items-center justify-center border-token transition-colors focus-visible:outline-focus focus-visible:outline-offset-token focus-visible:outline-interactive-focus disabled:pointer-events-none disabled:bg-interactive-disabled disabled:text-foreground-muted',
  {
    variants: {
      size: {
        sm: 'size-control-sm rounded-md',
        md: 'size-control-md rounded-md',
        lg: 'size-control-lg rounded-lg',
      },
      variant: {
        primary: PRIMARY_ACTION_CLASS,
        secondary:
          'border-border-default bg-background-primary text-foreground-subtle hover:border-border-strong',
        ghost:
          'border-transparent bg-transparent text-foreground-subtle hover:bg-background-muted',
      },
    },
    defaultVariants: { size: 'md', variant: 'secondary' },
  },
);

export interface IconButtonProps
  extends
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'aria-label' | 'className'>,
    VariantProps<typeof iconButtonVariants> {
  'aria-label': string;
  className?: string;
  icon: ReactNode;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    { className, icon, size, type = 'button', variant, ...props },
    ref,
  ): ReactElement => {
    const rootClass = cn(iconButtonVariants({ size, variant }), className);
    return (
      <button ref={ref} type={type} className={rootClass} {...props}>
        {icon}
      </button>
    );
  },
);

IconButton.displayName = 'IconButton';
