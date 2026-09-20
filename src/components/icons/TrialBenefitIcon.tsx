import type { ReactElement, SVGProps } from 'react';

import { cn } from '@/lib/cn';

export type TrialBenefitIconName = 'access' | 'commitment' | 'support';

const ROOT_CLASS = 'size-icon-lg shrink-0';
const ICON_PATHS: Record<TrialBenefitIconName, string> = {
  access:
    'M4 5.5h16a2 2 0 0 1 2 2v7.25M4 9h18M8 20H6a2 2 0 0 1-2-2V7.5a2 2 0 0 1 2-2h12M13 13l8 2.65-3.35 2.01L15.65 21 13 13Z',
  commitment:
    'M7 4.5h10a2 2 0 0 1 2 2V20a2 2 0 0 1-2 2h-3M10 9l2 1.75L16 7M5 13.5h5a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2Zm.5 4 1.25 1.25L9.5 16',
  support:
    'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Zm0-20c2.5 2.75 3.75 6.08 3.75 10S14.5 19.25 12 22M12 2C9.5 4.75 8.25 8.08 8.25 12S9.5 19.25 12 22M2 12h20M4.25 7h15.5M4.25 17h15.5',
};

export interface TrialBenefitIconProps extends SVGProps<SVGSVGElement> {
  readonly name: TrialBenefitIconName;
}

export const TrialBenefitIcon = ({
  className,
  name,
  ...props
}: TrialBenefitIconProps): ReactElement => {
  const rootClass = cn(ROOT_CLASS, className);

  return (
    <svg
      aria-hidden="true"
      className={rootClass}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        d={ICON_PATHS[name]}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};
