import type { HTMLAttributes, ReactElement } from 'react';

import { StarIcon } from '@/components/icons/StarIcon';
import {
  TrialBenefitIcon,
  type TrialBenefitIconName,
} from '@/components/icons/TrialBenefitIcon';
import { Button } from '@/components/ui/Button';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { cn } from '@/lib/cn';

type TrialBenefit = {
  readonly icon: TrialBenefitIconName;
  readonly title: string;
  readonly description: string;
};

const ROOT_CLASS =
  'w-full bg-background-primary px-inset-xl py-trial-cta-mobile-vertical-inset md:px-inset-3xl md:py-trial-cta-desktop-vertical-inset';
const CONTAINER_CLASS = 'mx-auto w-full max-w-trial-cta-content-width';
const PANEL_CLASS =
  'relative flex flex-col overflow-hidden rounded-4xl bg-interactive-primary p-trial-cta-panel-mobile-inset md:p-trial-cta-panel-desktop-inset lg:min-h-trial-cta-panel-desktop-min-height lg:flex-row lg:items-center lg:justify-between';
const PATTERN_CLASS =
  'absolute inset-y-0 start-0 w-trial-cta-pattern-width max-w-full text-foreground-inverse opacity-20';
const COPY_CLASS =
  'relative z-10 flex max-w-trial-cta-copy-width flex-col items-start gap-section-sm';
const HEADING_CLASS =
  'text-heading-h4 text-foreground-inverse md:type-hero-heading-desktop';
const BUTTON_CLASS =
  'min-h-trial-cta-button-height w-full border-neutral-alpha-20 bg-neutral-alpha-20 text-foreground-inverse hover:border-neutral-alpha-20 hover:bg-neutral-alpha-20 md:w-trial-cta-button-width';
const BUTTON_ICON_CLASS = 'size-icon-sm text-foreground-inverse';
const BENEFITS_CLASS =
  'relative z-10 mt-section-md flex w-full max-w-trial-cta-benefits-width flex-col gap-stack-xl lg:mt-0 lg:justify-self-end';
const BENEFIT_CLASS =
  'flex h-trial-cta-benefit-height items-center gap-inset-md rounded-xl border-token border-neutral-alpha-20 bg-neutral-alpha-20 p-inset-sm backdrop-blur-button';
const BENEFIT_ICON_CLASS =
  'flex h-trial-cta-icon-height w-trial-cta-icon-width shrink-0 items-center justify-center rounded-lg bg-neutral-alpha-10 text-foreground-inverse backdrop-blur-button';
const BENEFIT_COPY_CLASS = 'flex flex-col gap-inline-xs';
const BENEFIT_TITLE_CLASS = 'text-foreground-inverse';
const BENEFIT_DESCRIPTION_CLASS = 'text-foreground-inverse opacity-70';
const BENEFITS: readonly TrialBenefit[] = [
  {
    icon: 'access',
    title: 'Instant Access',
    description: "Begin exploring Neuros's full suite of features immediately.",
  },
  {
    icon: 'commitment',
    title: 'No Commitments',
    description: 'No credit card required, and you can cancel anytime.',
  },
  {
    icon: 'support',
    title: 'Dedicated Support',
    description: 'Our team is here to assist you every step of the way.',
  },
];

export interface TrialCtaProps extends HTMLAttributes<HTMLElement> {
  readonly children?: never;
}

export const TrialCta = ({
  className,
  id = 'trial',
  ...props
}: TrialCtaProps): ReactElement => {
  const rootClass = cn(ROOT_CLASS, className);

  return (
    <section
      id={id}
      className={rootClass}
      aria-labelledby="trial-cta-title"
      {...props}
    >
      <div className={CONTAINER_CLASS}>
        <div className={PANEL_CLASS}>
          <svg
            aria-hidden="true"
            className={PATTERN_CLASS}
            fill="none"
            viewBox="0 0 879 424"
          >
            <path
              d="M-40 345C45 316 77 362 143 324C208 286 204 209 286 225C370 242 404 314 488 266C570 219 597 112 687 135C751 151 793 223 918 169"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M-10 384C85 348 127 392 202 350C285 303 300 185 390 201C470 215 500 281 572 237C654 187 688 70 786 91C831 101 868 142 930 126"
              opacity="0.55"
              stroke="currentColor"
              strokeWidth="1"
            />
          </svg>
          <div className={COPY_CLASS}>
            <Heading id="trial-cta-title" className={HEADING_CLASS} level={2}>
              Experience the Future of Business Analytics with Neuros
            </Heading>
            <Button
              className={BUTTON_CLASS}
              href="#trial"
              size="lg"
              variant="secondary"
            >
              Start your free trial
              <StarIcon className={BUTTON_ICON_CLASS} />
            </Button>
          </div>
          <div className={BENEFITS_CLASS}>
            {BENEFITS.map((benefit) => (
              <article key={benefit.title} className={BENEFIT_CLASS}>
                <span className={BENEFIT_ICON_CLASS} aria-hidden="true">
                  <TrialBenefitIcon name={benefit.icon} />
                </span>
                <div className={BENEFIT_COPY_CLASS}>
                  <Text
                    className={BENEFIT_TITLE_CLASS}
                    size="sm"
                    variant="inverse"
                    weight="semibold"
                  >
                    {benefit.title}
                  </Text>
                  <Text
                    className={BENEFIT_DESCRIPTION_CLASS}
                    size="sm"
                    variant="inverse"
                  >
                    {benefit.description}
                  </Text>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
