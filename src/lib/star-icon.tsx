import type { ReactElement } from 'react';

export interface StarIconA11y {
  ariaHidden: true | undefined;
  role: 'img' | undefined;
  titleNode: ReactElement | null;
}

export const getStarIconA11y = (title?: string): StarIconA11y => ({
  ariaHidden: title ? undefined : true,
  role: title ? 'img' : undefined,
  titleNode: title ? <title>{title}</title> : null,
});
