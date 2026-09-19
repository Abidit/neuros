import { cva, type VariantProps } from 'class-variance-authority';
import {
  createElement,
  forwardRef,
  type HTMLAttributes,
  type ReactElement,
} from 'react';

import { cn } from '@/lib/cn';

export const sectionVariants = cva('', {
  variants: {
    spacing: {
      sm: 'py-section-sm',
      md: 'py-section-md',
      lg: 'py-section-lg',
    },
  },
  defaultVariants: { spacing: 'md' },
});

export interface SectionProps
  extends HTMLAttributes<HTMLElement>, VariantProps<typeof sectionVariants> {
  as?: 'section' | 'div';
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ as = 'section', className, spacing, ...props }, ref): ReactElement => {
    const rootClass = cn(sectionVariants({ spacing }), className);
    return createElement(as, { ref, className: rootClass, ...props });
  },
);

Section.displayName = 'Section';
