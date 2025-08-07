'use client';

import { useEffect, useState } from 'react';

import AndroidGuide from '@/components/guide/android';
import NotSafariGuide from '@/components/guide/ios-not-safari';
import IOSGuide from '@/components/guide/ios-safari';
import OtherGuide from '@/components/guide/other';

type PlatformType = 'android' | 'ios-not-safari' | 'ios-safari' | 'other';

export default function Page() {
  const [platform, setPlatform] = useState<PlatformType>('other');

  useEffect(() => {
    const ua = window.navigator.userAgent.toLowerCase();

    const isAndroid = /android/.test(ua);
    const isSafari = /safari/.test(ua) && !/chrome|crios|fxios|edgios/.test(ua);
    const isNotSafari = !isSafari;

    if (isAndroid) {
      setPlatform('android');
    } else if (isSafari) {
      setPlatform('ios-safari');
    } else if (isNotSafari) {
      setPlatform('ios-not-safari');
    } else {
      setPlatform('other');
    }
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
