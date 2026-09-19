import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef, type HTMLAttributes, type ReactElement } from 'react';

import { cn } from '@/lib/cn';

export const cardVariants = cva(
  'rounded-lg border-token border-border-default bg-background-primary',
  {
    variants: {
      padding: {
        sm: 'p-inset-lg',
        md: 'p-inset-xl',
        lg: 'p-inset-3xl',
      },
      isElevated: { true: 'shadow-primary-1', false: '' },
    },
    defaultVariants: { isElevated: true, padding: 'lg' },
  },
);

export interface CardProps
  extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {}

const CardRoot = forwardRef<HTMLDivElement, CardProps>(
  ({ className, isElevated, padding, ...props }, ref): ReactElement => {
    const rootClass = cn(cardVariants({ isElevated, padding }), className);
    return <div ref={ref} className={rootClass} {...props} />;
  },
);

CardRoot.displayName = 'Card.Root';

const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref): ReactElement => {
    const rootClass = cn('flex flex-col gap-stack-sm', className);
    return <div ref={ref} className={rootClass} {...props} />;
  },
);

CardHeader.displayName = 'Card.Header';

const CardBody = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref): ReactElement => {
    const rootClass = cn('flex flex-col gap-stack-md', className);
    return <div ref={ref} className={rootClass} {...props} />;
  },
);

CardBody.displayName = 'Card.Body';

const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref): ReactElement => {
    const rootClass = cn('flex items-center gap-stack-sm', className);
    return <div ref={ref} className={rootClass} {...props} />;
  },
);

CardFooter.displayName = 'Card.Footer';

export const Card = Object.assign(CardRoot, {
  Root: CardRoot,
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
});
