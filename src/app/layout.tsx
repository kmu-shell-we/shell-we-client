import { ReactNode } from 'react';

import type { Metadata } from 'next';

import { Toaster } from 'sonner';

import ClientOverlayProvider from '@/app/provider/overlay-provider';

import Header from '@/components/layout/header';

import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'SHELL WE',
};

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <ClientOverlayProvider>
          {/*<PwaRedirect />*/}
          <main className="pt-8">{children}</main>
        </ClientOverlayProvider>

        <Toaster
          className="font-sans"
          position="top-right"
          duration={5000}
          closeButton={true}
          richColors={true}
          theme="system"
        />
      </body>
    </html>
  );
}
