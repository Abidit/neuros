import { forwardRef, type HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

export interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  emphasis?: 'default' | 'strong';
}

export const Divider = forwardRef<HTMLHRElement, DividerProps>(function Divider(
  { className, emphasis = 'default', ...props },
  ref,
) {
  return (
    <hr
      ref={ref}
      className={cn(
        'w-full border-0 border-t',
        emphasis === 'strong'
          ? 'border-border-strong'
          : 'border-border-default',
        className,
      )}
      {...props}
    />
  );
});
