'use client';

import { useEffect, useState } from 'react';

import { getPlatform } from '@/utils/getPlatform';
import { isClient } from '@toss/utils';

import AndroidGuide from '@/components/guide/android';
import NotSafariGuide from '@/components/guide/ios-not-safari';
import IOSGuide from '@/components/guide/ios-safari';
import OtherGuide from '@/components/guide/other';

type PlatformType = 'android' | 'ios-not-safari' | 'ios-safari' | 'other';

export default function Page() {
  const [platform, setPlatform] = useState<PlatformType>('other');

  useEffect(() => {
    if (!isClient()) return;

    const platform = getPlatform(navigator.userAgent);
    setPlatform(platform);
  }, []);

  return (
    <div className="flex h-[100dvh] w-screen items-center justify-center">
      {platform === 'android' && <AndroidGuide />}
      {platform === 'ios-not-safari' && <NotSafariGuide />}
      {platform === 'ios-safari' && <IOSGuide />}
      {platform === 'other' && <OtherGuide />}
    </div>
  );
}
