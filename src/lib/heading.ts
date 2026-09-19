export type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

const HEADING_ELEMENTS: Record<1 | 2 | 3 | 4 | 5 | 6, HeadingElement> = {
  1: 'h1',
  2: 'h2',
  3: 'h3',
  4: 'h4',
  5: 'h5',
  6: 'h6',
};

export const resolveHeadingElement = (
  level: 1 | 2 | 3 | 4 | 5 | 6,
  as?: HeadingElement,
): HeadingElement => as ?? HEADING_ELEMENTS[level];
