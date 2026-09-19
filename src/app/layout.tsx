import type { Metadata } from 'next';
import type { ReactElement } from 'react';
import localFont from 'next/font/local';
import '@/styles/globals.css';

const dmSans = localFont({
  src: '../assets/fonts/dm-sans-latin-variable.woff2',
  variable: '--font-heading-source',
  display: 'swap',
  style: 'normal',
  weight: '100 1000',
});

const inter = localFont({
  src: '../assets/fonts/inter-latin-variable.woff2',
  variable: '--font-body-source',
  display: 'swap',
  style: 'normal',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Neuros',
  description: 'Neuros design system foundation',
};

const BODY_CLASS =
  'flex min-h-full flex-col bg-background-primary font-body text-foreground-default';

const RootLayout = ({ children }: LayoutProps<'/'>): ReactElement => {
  const rootClass = [
    dmSans.variable,
    inter.variable,
    'h-full antialiased',
  ].join(' ');
  return (
    <html lang="en" className={rootClass}>
      <body className={BODY_CLASS}>{children}</body>
    </html>
  );
};

export default RootLayout;
