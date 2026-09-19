import type { SVGProps } from 'react';

import { cn } from '@/lib/utils';

export interface StarIconProps extends SVGProps<SVGSVGElement> {
  title?: string;
}

export function StarIcon({ className, title, ...props }: StarIconProps) {
  return (
    <svg
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden={title ? undefined : true}
      role={title ? 'img' : undefined}
      className={cn('size-icon-sm shrink-0', className)}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.284 13.8511C9.10439 13.7657 8.89561 13.7657 8.716 13.8511L4.85726 15.6846C4.36851 15.9168 3.82247 15.4958 3.92686 14.9673L4.71382 10.9823C4.75548 10.7714 4.69044 10.5535 4.53979 10.3994L1.68717 7.48081C1.30821 7.09308 1.53804 6.44151 2.07751 6.37417L6.06902 5.87596C6.28764 5.84867 6.47807 5.71449 6.57644 5.51842L8.41054 1.86264C8.65313 1.37912 9.34687 1.37912 9.58946 1.86264L11.4236 5.51842C11.5219 5.71449 11.7124 5.84867 11.931 5.87596L15.9225 6.37417C16.462 6.44151 16.6918 7.09308 16.3128 7.48081L13.4602 10.3994C13.3096 10.5535 13.2445 10.7714 13.2862 10.9823L14.0731 14.9672C14.1775 15.4958 13.6315 15.9168 13.1427 15.6846L9.284 13.8511Z"
      />
    </svg>
  );
}
