import { cva, type VariantProps } from 'class-variance-authority';
import {
  createElement,
  forwardRef,
  type HTMLAttributes,
  type ReactElement,
} from 'react';

import { cn } from '@/lib/cn';
import { resolveHeadingElement, type HeadingElement } from '@/lib/heading';

export const headingVariants = cva(
  'font-heading font-bold tracking-normal text-foreground-default',
  {
    variants: {
      level: {
        1: 'text-heading-h1',
        2: 'text-heading-h2',
        3: 'text-heading-h3',
        4: 'text-heading-h4',
        5: 'text-heading-h5',
        6: 'text-heading-h6',
      },
    },
    defaultVariants: { level: 2 },
  },
);

export interface HeadingProps
  extends
    HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: HeadingElement;
}

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ as, className, level, ...props }, ref): ReactElement => {
    const element = resolveHeadingElement(level ?? 2, as);
    const rootClass = cn(headingVariants({ level }), className);
    return createElement(element, { ref, className: rootClass, ...props });
  },
);

Heading.displayName = 'Heading';
