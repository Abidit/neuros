import { createElement, forwardRef, type HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

const levelClasses = {
  1: 'text-heading-h1',
  2: 'text-heading-h2',
  3: 'text-heading-h3',
  4: 'text-heading-h4',
  5: 'text-heading-h5',
  6: 'text-heading-h6',
} as const;

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  function Heading({ className, level = 2, ...props }, ref) {
    return createElement(`h${level}`, {
      ref,
      className: cn(
        'font-heading font-bold tracking-normal text-foreground-default',
        levelClasses[level],
        className,
      ),
      ...props,
    });
  },
);
