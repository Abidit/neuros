import Image from 'next/image';
import type { HTMLAttributes, ReactElement } from 'react';

import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { cn } from '@/lib/cn';

const ROOT_CLASS =
  'w-full bg-background-primary px-inset-xl py-hero-mobile-vertical-inset md:px-inset-3xl md:pb-hero-desktop-bottom-inset md:pt-hero-desktop-top-inset';
const CONTAINER_CLASS =
  'mx-auto flex w-full max-w-navbar-content-width flex-col items-center gap-inset-3xl md:gap-hero-desktop-gap';
const CONTENT_CLASS =
  'flex h-hero-content-mobile-height w-full flex-col items-center gap-inset-4xl md:h-hero-content-tablet-height lg:h-hero-content-desktop-height lg:max-w-hero-content-width';
const TEXT_WRAPPER_CLASS =
  'flex h-hero-text-mobile-height w-full shrink-0 flex-col items-center gap-inline-xl text-center md:h-hero-text-tablet-height lg:h-hero-text-desktop-height';
const EYEBROW_CLASS =
  'border-token gap-stack-sm border-neutral-400 bg-background-primary px-inset-md py-inset-sm text-body-base font-medium text-neutral-800 shadow-eyebrow';
const EYEBROW_ICON_CLASS = 'size-icon-md';
const EYEBROW_MOBILE_TEXT_CLASS = 'md:hidden';
const EYEBROW_WIDE_TEXT_CLASS = 'hidden md:inline';
const HEADING_CLASS =
  'type-hero-heading-mobile w-full text-center text-neutral-1000 md:type-hero-heading-desktop lg:max-w-hero-content-width';
const DESCRIPTION_CLASS =
  'w-full px-inset-xl text-center text-neutral-800 opacity-80 md:px-hero-description-inset';
const ACTIONS_CLASS =
  'flex w-full flex-col items-center gap-inset-md md:w-auto md:flex-row';
const TRIAL_BUTTON_CLASS = 'w-full md:w-hero-trial-width';
const WATCH_BUTTON_CLASS =
  'w-full border-neutral-400 bg-background-primary px-inset-xl text-neutral-800 md:w-hero-watch-tablet-width lg:min-h-control-lg lg:w-hero-watch-desktop-width lg:rounded-lg lg:type-button-base';
const WATCH_ICON_CLASS = 'size-icon-sm lg:size-icon-lg';
const SCREEN_CLASS =
  'relative h-hero-screen-mobile-height w-full overflow-hidden rounded-3xl border-token border-neutral-300 md:h-hero-screen-desktop-height';
const SCREEN_IMAGE_MOBILE_CLASS = 'size-full object-cover md:hidden';
const SCREEN_IMAGE_TABLET_CLASS =
  'hidden size-full object-cover md:block lg:hidden';
const SCREEN_IMAGE_DESKTOP_CLASS = 'hidden size-full object-cover lg:block';
const VIDEO_BUTTON_CLASS =
  'absolute start-1/2 top-1/2 size-hero-video-button-mobile -translate-x-1/2 -translate-y-1/2 cursor-pointer border-0 bg-transparent p-0 focus-visible:outline-focus focus-visible:outline-offset-token focus-visible:outline-interactive-focus md:h-hero-video-card-height md:w-hero-video-card-width';
const VIDEO_IMAGE_MOBILE_CLASS = 'size-full md:hidden';
const VIDEO_IMAGE_WIDE_CLASS = 'hidden size-full md:block';

export interface HeroProps extends HTMLAttributes<HTMLElement> {
  readonly children?: never;
}

export const Hero = ({ className, ...props }: HeroProps): ReactElement => {
  const rootClass = cn(ROOT_CLASS, className);

  return (
    <section className={rootClass} aria-labelledby="hero-title" {...props}>
      <div className={CONTAINER_CLASS}>
        <div className={CONTENT_CLASS}>
          <div className={TEXT_WRAPPER_CLASS}>
            <Badge className={EYEBROW_CLASS} variant="neutral">
              <Image
                className={EYEBROW_ICON_CLASS}
                src="/assets/icons/ai-sparkle.svg"
                alt=""
                width={20}
                height={20}
              />
              <span className={EYEBROW_MOBILE_TEXT_CLASS}>
                Generative Intelligence for Analysts
              </span>
              <span className={EYEBROW_WIDE_TEXT_CLASS}>
                Generative Business Intelligence for Analysts
              </span>
            </Badge>
            <Heading id="hero-title" className={HEADING_CLASS} level={1}>
              Revolutionizing Business Decisions with AI-Powered Analytics
            </Heading>
            <Text className={DESCRIPTION_CLASS} variant="muted">
              Harnesses the power of artificial intelligence to transform your
              business data into actionable insights, propelling you to new
              heights of success
            </Text>
          </div>
          <div className={ACTIONS_CLASS}>
            <Button
              className={TRIAL_BUTTON_CLASS}
              href="#trial"
              size="lg"
              variant="primary"
            >
              Start your free trial
            </Button>
            <Button
              className={WATCH_BUTTON_CLASS}
              href="#video"
              size="md"
              variant="secondary"
            >
              <Image
                className={WATCH_ICON_CLASS}
                src="/assets/icons/play-small.svg"
                alt=""
                width={24}
                height={24}
              />
              Watch video
            </Button>
          </div>
        </div>
        <div className={SCREEN_CLASS}>
          <Image
            className={SCREEN_IMAGE_MOBILE_CLASS}
            src="/assets/hero/hero-illustration-mobile.svg"
            alt=""
            width={380}
            height={267}
          />
          <Image
            className={SCREEN_IMAGE_TABLET_CLASS}
            src="/assets/hero/hero-illustration-tablet.svg"
            alt=""
            width={746}
            height={480}
          />
          <Image
            className={SCREEN_IMAGE_DESKTOP_CLASS}
            src="/assets/hero/hero-illustration-desktop.svg"
            alt=""
            width={1204}
            height={480}
            priority
          />
          <button
            className={VIDEO_BUTTON_CLASS}
            type="button"
            aria-label="Watch introduction video"
          >
            <Image
              className={VIDEO_IMAGE_MOBILE_CLASS}
              src="/assets/hero/hero-video-button-mobile.svg"
              alt=""
              width={108}
              height={108}
            />
            <Image
              className={VIDEO_IMAGE_WIDE_CLASS}
              src="/assets/hero/hero-video-card.svg"
              alt=""
              width={350}
              height={108}
            />
          </button>
        </div>
      </div>
    </section>
  );
};
