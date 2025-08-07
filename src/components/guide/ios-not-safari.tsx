'use client';

import Logo from '@/components/ui/logo';

export default function NotSafariGuide() {
  return (
    <div className="flex flex-row items-center justify-center">
      <Logo size="base" />
      <p>를 사용하려면 Safari로 접속해주세요</p>
    </div>
  );
}
