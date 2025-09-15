import { ReactNode } from 'react';

import type { Metadata } from 'next';

import { Toaster } from 'react-hot-toast';

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
          <Toaster
            position="top-center"
            toastOptions={{
              className: 'font-sans',
              duration: 5000,
            }}
          />
        </ClientOverlayProvider>
      </body>
    </html>
  );
}
