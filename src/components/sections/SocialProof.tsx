import type { HTMLAttributes, ReactElement } from 'react';

import { Container } from '@/components/ui/Container';
import { Text } from '@/components/ui/Text';
import { cn } from '@/lib/cn';

const ROOT_CLASS =
  'w-full bg-background-primary py-social-proof-mobile-vertical-inset md:py-social-proof-desktop-vertical-inset';
const CONTAINER_CLASS =
  'flex max-w-social-proof-content-width flex-col items-center gap-inset-4xl';
const HEADING_CLASS =
  'max-w-social-proof-heading-width text-center text-neutral-800';
const LOGO_GRID_CLASS =
  'grid w-full grid-cols-layout-2 items-center gap-x-inset-3xl gap-y-inset-4xl md:grid-cols-layout-4 lg:grid-cols-layout-8';
const LOGO_CLASS =
  'flex h-social-proof-logo-height items-center justify-center gap-inline-xs font-heading text-body-base font-bold text-neutral-600';
const LOGO_MARK_CLASS =
  'flex size-icon-md items-center justify-center rounded-md bg-neutral-600 text-body-sm text-neutral-0';
const LOGOS = [
  { mark: 'N', name: 'Logoipsum' },
  { mark: 'L', name: 'LOGO' },
  { mark: '◆', name: 'Logoipsum' },
  { mark: '✣', name: 'logoipsum' },
  { mark: '●', name: 'Logo' },
  { mark: '◉', name: 'logoipsum' },
  { mark: '✦', name: 'LOGOIPSUM' },
  { mark: '◎', name: 'logoipsum' },
] as const;

export interface SocialProofProps extends HTMLAttributes<HTMLElement> {
  readonly children?: never;
}

export const SocialProof = ({
  className,
  ...props
}: SocialProofProps): ReactElement => {
  const rootClass = cn(ROOT_CLASS, className);

  return (
    <section
      className={rootClass}
      aria-labelledby="social-proof-title"
      {...props}
    >
      <Container className={CONTAINER_CLASS}>
        <Text id="social-proof-title" className={HEADING_CLASS} weight="medium">
          160,000+ customers in over 120 countries grow their businesses with
          Neuros
        </Text>
        <div className={LOGO_GRID_CLASS} aria-label="Customers using Neuros">
          {LOGOS.map((logo) => (
            <span key={logo.name + logo.mark} className={LOGO_CLASS}>
              <span className={LOGO_MARK_CLASS} aria-hidden="true">
                {logo.mark}
              </span>
              {logo.name}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
};
