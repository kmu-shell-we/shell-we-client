'use client';

import { useEffect } from 'react';

import { useRouter } from 'next/navigation';

import { isPWAInstalled } from '@/utils/isPWAInstalled';

export default function PwaRedirect() {
  const router = useRouter();

  useEffect(() => {
    if (isPWAInstalled()) {
      router.replace('/onboard');
    } else {
      router.replace('/pwa-guide');
    }
  }, []);

  return null;
}
