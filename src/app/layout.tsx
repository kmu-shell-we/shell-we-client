import { ReactNode } from 'react';

import type { Metadata } from 'next';

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
      <body>{children}</body>
    </html>
  );
}
