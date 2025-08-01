import { ReactNode } from 'react';

import type { Metadata } from 'next';

import Header from '@/components/layout/header';

import '@/styles/globals.css';

interface LayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: 'SHELL WE',
};

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
