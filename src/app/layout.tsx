import type { Metadata } from 'next';
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

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="bg-background-primary font-body text-foreground-default flex min-h-full flex-col">
        {children}
      </body>
    </html>
  );
}
