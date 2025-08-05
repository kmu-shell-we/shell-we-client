'use client';

import { OverlayProvider } from 'overlay-kit';

export default function ClientOverlayProvider({ children }: { children: React.ReactNode }) {
  return <OverlayProvider>{children}</OverlayProvider>;
}
