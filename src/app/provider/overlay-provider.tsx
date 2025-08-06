'use client';

import { ReactNode } from 'react';

import { OverlayProvider } from 'overlay-kit';

interface Props {
  children: ReactNode;
}

export default function ClientOverlayProvider({ children }: Props) {
  return <OverlayProvider>{children}</OverlayProvider>;
}
