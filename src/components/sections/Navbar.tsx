'use client';

import { cva } from 'class-variance-authority';
import Image from 'next/image';
import Link from 'next/link';
import type { HTMLAttributes, ReactElement } from 'react';

import { Button } from '@/components/ui/Button';
import { useNavbarModel } from '@/hooks/useNavbarModel';
import { cn } from '@/lib/cn';

type NavigationItem = {
  readonly href: string;
  readonly label: string;
  readonly icon: ReactElement | null;
};

const navbarVariants = cva(
  'sticky top-0 z-10 w-full border-b-token bg-background-primary font-heading transition-shadow lg:-top-navbar-utility-height lg:h-navbar-desktop-height lg:px-inset-3xl',
  {
    variants: {
      menuState: {
        closed: 'h-navbar-mobile-height md:h-navbar-tablet-height',
        open: 'h-navbar-mobile-open-height md:h-navbar-tablet-open-height lg:h-navbar-desktop-height',
      },
      scrollState: {
        top: 'border-transparent shadow-none',
        scrolled: 'border-border-default shadow-primary-1',
      },
    },
    defaultVariants: { menuState: 'closed', scrollState: 'top' },
  },
);
const menuPanelVariants = cva('mx-inset-3xl h-navbar-menu-height lg:hidden', {
  variants: {
    menuState: { closed: 'hidden', open: 'block' },
  },
  defaultVariants: { menuState: 'closed' },
});
const CONTENT_CLASS =
  'mx-inset-3xl h-navbar-mobile-height md:h-navbar-tablet-height lg:mx-auto lg:h-navbar-desktop-height lg:w-full lg:max-w-navbar-content-width';
const UTILITY_ROW_CLASS =
  'hidden h-navbar-utility-height items-end justify-between lg:flex';
const UTILITY_GROUP_CLASS = 'flex items-center gap-inline-xl';
const UTILITY_LINK_CLASS =
  'inline-flex items-center gap-inline-xs text-button-sm font-medium text-foreground-muted focus-visible:outline-focus focus-visible:outline-offset-token focus-visible:outline-interactive-focus';
const MAIN_ROW_CLASS =
  'flex h-navbar-mobile-height items-center justify-between py-navbar-mobile-inset md:h-navbar-tablet-height md:py-navbar-tablet-inset lg:h-navbar-main-height lg:py-inset-xl';
const MAIN_LEFT_CLASS = 'flex items-center gap-inset-4xl';
const LOGO_CLASS = 'h-navbar-logo-height w-navbar-logo-width object-contain';
const MAIN_LINKS_CLASS = 'hidden items-center gap-inset-3xl lg:flex';
const MAIN_LINK_CLASS =
  'inline-flex items-center gap-inset-sm text-navigation-base font-medium text-neutral-800 focus-visible:outline-focus focus-visible:outline-offset-token focus-visible:outline-interactive-focus';
const ACTIONS_CLASS = 'flex items-center gap-stack-sm';
const DEMO_BUTTON_CLASS =
  'hidden w-navbar-demo-width border-primary-200 bg-background-primary text-interactive-primary md:inline-flex';
const TRIAL_BUTTON_CLASS = 'hidden w-navbar-trial-width md:inline-flex';
const MENU_TOGGLE_CLASS =
  'size-navbar-trailing-slot cursor-pointer rounded-full border-0 bg-transparent focus-visible:outline-focus focus-visible:outline-offset-token focus-visible:outline-interactive-focus lg:hidden';
const MENU_ITEM_CLASS =
  'flex h-navbar-menu-item-height items-center justify-between border-b-token border-neutral-200 text-navigation-md font-medium text-neutral-900 focus-visible:outline-focus focus-visible:outline-offset-token focus-visible:outline-interactive-focus';
const MENU_ICON_WRAPPER_CLASS =
  'flex h-navbar-menu-item-height w-navbar-trailing-slot items-center justify-center';
const UTILITY_ICON_CLASS = 'flex size-icon-sm items-center justify-center';
const MAIN_ICON_CLASS = 'flex size-icon-sm items-center justify-center';
const UTILITY_CHEVRON = (
  <span className={UTILITY_ICON_CLASS} aria-hidden="true">
    <Image
      src="/assets/icons/chevron-down-muted.svg"
      alt=""
      width={11}
      height={6}
    />
  </span>
);
const MAIN_CHEVRON = (
  <span className={MAIN_ICON_CLASS} aria-hidden="true">
    <Image
      src="/assets/icons/chevron-down-default.svg"
      alt=""
      width={12}
      height={7}
    />
  </span>
);
const MENU_CHEVRON = (
  <span className={MENU_ICON_WRAPPER_CLASS} aria-hidden="true">
    <Image
      src="/assets/icons/chevron-down-menu.svg"
      alt=""
      width={16}
      height={9}
    />
  </span>
);
const UTILITY_LEFT_ITEMS: readonly NavigationItem[] = [
  { href: '#language', label: 'English', icon: UTILITY_CHEVRON },
  { href: '#support', label: 'Support', icon: null },
];
const UTILITY_RIGHT_ITEMS: readonly NavigationItem[] = [
  { href: '#blog', label: 'Blog', icon: null },
  { href: '#about', label: 'About us', icon: UTILITY_CHEVRON },
];
const MAIN_ITEMS: readonly NavigationItem[] = [
  { href: '#features', label: 'Features', icon: MAIN_CHEVRON },
  { href: '#case-studies', label: 'Case Studies', icon: MAIN_CHEVRON },
  { href: '#pricing', label: 'Pricing', icon: null },
  { href: '#applications', label: 'Applications', icon: null },
];
const RESPONSIVE_MENU_ITEMS: readonly NavigationItem[] = [
  { href: '#home-layout', label: 'Home layout', icon: MENU_CHEVRON },
  { href: '#main-pages', label: 'Other main pages', icon: MENU_CHEVRON },
  {
    href: '#content-pages',
    label: 'Other content page',
    icon: MENU_CHEVRON,
  },
  { href: '#about', label: 'About us', icon: null },
  { href: '#blog', label: 'Blog', icon: null },
  { href: '#contact', label: 'Contact', icon: null },
];

export interface NavbarProps extends HTMLAttributes<HTMLElement> {
  readonly children?: never;
}

export const Navbar = ({ className, ...props }: NavbarProps): ReactElement => {
  const { handleMenuToggle, isMenuOpen, menuState, scrollState } =
    useNavbarModel();
  const rootClass = cn(navbarVariants({ menuState, scrollState }), className);
  const menuPanelClass = menuPanelVariants({ menuState });

  return (
    <header className={rootClass} {...props}>
      <div className={CONTENT_CLASS}>
        <nav className={UTILITY_ROW_CLASS} aria-label="Utility">
          <div className={UTILITY_GROUP_CLASS}>
            {UTILITY_LEFT_ITEMS.map((item) => (
              <Link
                key={item.label}
                className={UTILITY_LINK_CLASS}
                href={item.href}
              >
                {item.label}
                {item.icon}
              </Link>
            ))}
          </div>
          <div className={UTILITY_GROUP_CLASS}>
            {UTILITY_RIGHT_ITEMS.map((item) => (
              <Link
                key={item.label}
                className={UTILITY_LINK_CLASS}
                href={item.href}
              >
                {item.label}
                {item.icon}
              </Link>
            ))}
          </div>
        </nav>

        <nav className={MAIN_ROW_CLASS} aria-label="Primary">
          <div className={MAIN_LEFT_CLASS}>
            <Link href="/" aria-label="Neuros home">
              <Image
                className={LOGO_CLASS}
                src="/assets/logos/neuros-logo-light.svg"
                alt="Neuros"
                width={114}
                height={32}
                priority
              />
            </Link>
            <div className={MAIN_LINKS_CLASS}>
              {MAIN_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  className={MAIN_LINK_CLASS}
                  href={item.href}
                >
                  {item.label}
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>
          <div className={ACTIONS_CLASS}>
            <Button
              className={DEMO_BUTTON_CLASS}
              href="#demo"
              size="md"
              variant="secondary"
            >
              Get a demo
            </Button>
            <Button
              className={TRIAL_BUTTON_CLASS}
              href="#trial"
              size="md"
              variant="primary"
            >
              Start your free trial
            </Button>
            <button
              className={MENU_TOGGLE_CLASS}
              type="button"
              aria-controls="responsive-navigation"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
              onClick={handleMenuToggle}
            />
          </div>
        </nav>
      </div>
      <nav
        id="responsive-navigation"
        className={menuPanelClass}
        aria-label="Responsive"
      >
        {RESPONSIVE_MENU_ITEMS.map((item) => (
          <Link key={item.label} className={MENU_ITEM_CLASS} href={item.href}>
            {item.label}
            {item.icon}
          </Link>
        ))}
      </nav>
    </header>
  );
};
