import Image from 'next/image';
import Link from 'next/link';
import type { HTMLAttributes, ReactElement } from 'react';

import { Container } from '@/components/ui/Container';
import { Divider } from '@/components/ui/Divider';
import { Text } from '@/components/ui/Text';
import { cn } from '@/lib/cn';

type FooterLink = {
  readonly href: string;
  readonly label: string;
};

type FooterGroup = {
  readonly label: string;
  readonly links: readonly FooterLink[];
};

const ROOT_CLASS =
  'w-full bg-background-primary py-footer-mobile-vertical-inset md:py-footer-desktop-vertical-inset';
const CONTAINER_CLASS =
  'flex max-w-footer-content-width flex-col gap-inset-4xl md:gap-section-md';
const TOP_CLASS =
  'grid grid-cols-layout-1 gap-inset-4xl lg:grid-cols-layout-4 lg:gap-inset-3xl';
const BRAND_CLASS =
  'flex max-w-footer-brand-width flex-col items-start gap-stack-lg lg:col-span-1';
const LOGO_CLASS = 'h-footer-logo-height w-footer-logo-width object-contain';
const BRAND_COPY_CLASS = 'text-neutral-700';
const GROUPS_CLASS =
  'grid grid-cols-layout-2 gap-x-inset-3xl gap-y-inset-4xl md:grid-cols-layout-4 lg:col-span-3';
const GROUP_CLASS = 'flex flex-col gap-stack-lg';
const GROUP_LABEL_CLASS = 'text-neutral-1000';
const LINK_LIST_CLASS = 'flex list-none flex-col gap-stack-sm p-0';
const LINK_CLASS =
  'font-body text-body-sm text-neutral-700 hover:text-interactive-primary focus-visible:outline-focus focus-visible:outline-offset-token focus-visible:outline-interactive-focus';
const BOTTOM_CLASS =
  'flex flex-col gap-inset-3xl md:flex-row md:items-center md:justify-between';
const FOOTER_META_CLASS = 'flex flex-col gap-stack-lg';
const COPYRIGHT_CLASS = 'text-neutral-600';
const LEGAL_CLASS = 'flex flex-wrap items-center gap-x-inset-xl gap-y-stack-sm';
const LEGAL_LINK_CLASS =
  'font-body text-body-sm text-neutral-600 hover:text-interactive-primary focus-visible:outline-focus focus-visible:outline-offset-token focus-visible:outline-interactive-focus';
const ATTRIBUTION_CLASS =
  'text-pretty text-center text-foreground-subtle md:text-start';
const ATTRIBUTION_LINK_CLASS =
  'whitespace-nowrap text-foreground-subtle hover:text-interactive-hover focus-visible:outline-focus focus-visible:outline-offset-token focus-visible:outline-interactive-focus';
const GROUPS: readonly FooterGroup[] = [
  {
    label: 'About Neuros',
    links: [
      { href: '#overview', label: 'Company Overview' },
      { href: '#careers', label: 'Careers' },
      { href: '#press', label: 'Press & Media' },
      { href: '#testimonials', label: 'Testimonials' },
    ],
  },
  {
    label: 'Resources',
    links: [
      { href: '#blog', label: 'Blog' },
      { href: '#help', label: 'Help Center' },
      { href: '#events', label: 'Webinars & Events' },
      { href: '#case-studies', label: 'Case Studies' },
    ],
  },
  {
    label: 'Support & Contact',
    links: [
      { href: '#contact', label: 'Contact Us' },
      { href: '#support', label: 'Technical Support' },
      { href: '#feedback', label: 'Feedback' },
      { href: '#community', label: 'Community Forum' },
    ],
  },
  {
    label: 'Connect',
    links: [
      { href: '#instagram', label: 'Instagram' },
      { href: '#facebook', label: 'Facebook' },
      { href: '#x', label: 'Twitter / X' },
      { href: '#linkedin', label: 'LinkedIn' },
    ],
  },
];
const LEGAL_LINKS: readonly FooterLink[] = [
  { href: '#terms', label: 'Terms of use' },
  { href: '#privacy', label: 'Privacy policy' },
  { href: '#security', label: 'Security' },
  { href: '#credits', label: 'Credits' },
];

export interface FooterProps extends HTMLAttributes<HTMLElement> {
  readonly children?: never;
}

export const Footer = ({ className, ...props }: FooterProps): ReactElement => {
  const rootClass = cn(ROOT_CLASS, className);

  return (
    <footer id="site-footer" className={rootClass} {...props}>
      <Container className={CONTAINER_CLASS}>
        <div className={TOP_CLASS}>
          <div className={BRAND_CLASS}>
            <Link href="/" aria-label="Neuros home">
              <Image
                className={LOGO_CLASS}
                src="/assets/logos/neuros-logo-light.svg"
                alt="Neuros"
                width={114}
                height={32}
              />
            </Link>
            <Text className={BRAND_COPY_CLASS} size="sm" variant="muted">
              AI-powered business analytics that turns complex data into clear,
              confident decisions.
            </Text>
          </div>
          <div className={GROUPS_CLASS}>
            {GROUPS.map((group) => (
              <nav
                key={group.label}
                className={GROUP_CLASS}
                aria-label={group.label}
              >
                <Text className={GROUP_LABEL_CLASS} size="sm" weight="semibold">
                  {group.label}
                </Text>
                <ul className={LINK_LIST_CLASS}>
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link className={LINK_CLASS} href={link.href}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>
        <Divider />
        <div className={FOOTER_META_CLASS}>
          <div className={BOTTOM_CLASS}>
            <Text className={COPYRIGHT_CLASS} size="sm" variant="muted">
              © 2024 Neuros · All rights reserved.
            </Text>
            <nav className={LEGAL_CLASS} aria-label="Legal">
              {LEGAL_LINKS.map((link) => (
                <Link
                  key={link.label}
                  className={LEGAL_LINK_CLASS}
                  href={link.href}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <Text className={ATTRIBUTION_CLASS} size="sm" variant="muted">
            Design adapted from{' '}
            <Link
              className={ATTRIBUTION_LINK_CLASS}
              href="https://www.figma.com/community/file/1297441219263679519/saas-landing-page-template-neuros-lite-ai-powerd-product"
              target="_blank"
              rel="noopener noreferrer"
            >
              Neuros Lite by Khoa (JAK)
            </Link>
            , licensed under{' '}
            <Link
              className={ATTRIBUTION_LINK_CLASS}
              href="https://creativecommons.org/licenses/by/4.0/"
              target="_blank"
              rel="noopener noreferrer"
            >
              CC BY 4.0
            </Link>
            . Implementation and responsive modifications by Abidit Shrestha.
          </Text>
        </div>
      </Container>
    </footer>
  );
};
